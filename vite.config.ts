import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTagger } from "svelte-tagger";
import { createLogger, defineConfig, type PluginOption } from 'vite';
import { projectExporter } from "vite-zipper";
import {assetUploader} from 'vite-asset-uploader';

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
  allowedOrigins: ['http://localhost:5173']
}) as PluginOption;

__registerPluginCleanup(exporterPlugin);

const uploadPluggin = assetUploader({
      allowedOrigin: "http://localhost:5173", 
      destinationDir: "./static/assets", 
      uploadPath: "/api/upload-asset", 
}) as PluginOption;

__registerPluginCleanup(uploadPluggin);

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

// const logger = createLogger()
// const loggerError = logger.error;

// logger.error = (msg, options) => {
//   console.warn("msg")
//   console.warn(msg)
//   console.warn("msg")
//   loggerError(msg, options)

// }

export default defineConfig({
  // customLogger:logger,
  clearScreen:false,
  plugins: [
    taggerPlugin,
    exporterPlugin,
    uploadPluggin,
    tailwindcss(), sveltekit(), devtoolsJson(),
    cleanupManager,
  ],
  server: {
    allowedHosts: ['http://localhost:5173'],
    watch: {
      ignored: ["**/node_modules/**", "**/.git/**", "**/.svelte-kit/**"],
    },
    hmr:{
      overlay:false,
      timeout:100,
    }
  },
  ssr: {
    noExternal: ["svelte-hero-icons"],
  },
});
