import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTagger } from "svelte-tagger";
import { defineConfig, type PluginOption } from 'vite';
import { projectExporter } from "vite-zipper";

type CleanupHook = () => void | Promise<void>;
const __PLUGIN_CLEANUP_HOOKS: CleanupHook[] = [];

function __registerPluginCleanup(p: any) {
  const cb = (p && p.cleanup) || (p && p.onInvalidate);
  if (typeof cb === 'function') {
    __PLUGIN_CLEANUP_HOOKS.push(cb);
  }
}

const taggerPlugin = svelteTagger({
  suffix: '',
  enhancedDebug: true,
  exclude:['.svelte-kit']
}) as PluginOption;

__registerPluginCleanup(taggerPlugin);

const exporterPlugin = projectExporter({
  allowedOrigin: '${PROJECT_EXPORTER_ALLOWED_ORIGIN}'
}) as PluginOption;

__registerPluginCleanup(exporterPlugin);

const cleanupManager = {
  name: 'vite-cleanup-manager',
  configureServer(server: any) {
    const runAll = async () => {
      for (const hook of __PLUGIN_CLEANUP_HOOKS) {
        try {
          await hook();
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('Plugin cleanup failed', e);
        }
      }
    };
    // when server closes
    server.httpServer?.on('close', runAll);
    // graceful shutdown
    process.on('SIGINT', runAll);
    process.on('SIGTERM', runAll);
  }
} as any;

export default defineConfig({
  plugins: [
    taggerPlugin,
    exporterPlugin,
    tailwindcss(), sveltekit(), devtoolsJson(),
    cleanupManager
  ],
  server: {
    allowedHosts: ['${PREVIEW_ALLOWED_HOST}'],
    watch: {
      ignored: ["**/node_modules/**", "**/.git/**", "**/.svelte-kit/**"]
    }
  },
  ssr: {
    noExternal: ["svelte-hero-icons"],
  },
});
