import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTagger } from 'svelte-tagger';
import { projectExporter } from 'vite-zipper';
import { assetUploader } from 'vite-asset-uploader';
import { defineConfig, type PluginOption } from 'vite';
import { routeScanner } from 'vite-route-scanner'; 
import Icons from 'unplugin-icons/vite';

type CleanupHook = () => void | Promise<void>;
const __PLUGIN_CLEANUP_HOOKS: CleanupHook[] = [];

function __registerPluginCleanup(p: any) {
  const cb = (p && p.cleanup) || (p && p.onInvalidate);
  if (typeof cb === 'function') __PLUGIN_CLEANUP_HOOKS.push(cb);
}

const taggerPlugin = svelteTagger({
  suffix: '',
  enhancedDebug: true,
  exclude: ['.svelte-kit']
}) as PluginOption;
__registerPluginCleanup(taggerPlugin);

const exporterPlugin = projectExporter({
  allowedOrigins: ['http://localhost:5173']
}) as PluginOption;
__registerPluginCleanup(exporterPlugin);

const uploadPlugin = assetUploader({
  allowedOrigins: ['http://localhost:5173'],
  destinationDir: './static/assets',
  uploadPath: '/api/upload-asset'
}) as PluginOption;
__registerPluginCleanup(uploadPlugin);

const routesPlugin = routeScanner({ routesDir: 'src/routes' }) as PluginOption;
__registerPluginCleanup(routesPlugin);


const cleanupManager = {
  name: 'vite-cleanup-manager',
  configureServer(server: any) {
    const runAll = async () => {
      for (const hook of __PLUGIN_CLEANUP_HOOKS) {
        try {
          await hook();
        } catch (e) {
          console.error('Plugin cleanup failed', e);
        }
      }
    };
    server.httpServer?.on('close', runAll);
    process.on('SIGINT', runAll);
    process.on('SIGTERM', runAll);
  }
} as PluginOption;

export default defineConfig({
  clearScreen: false,
  server: {
    host:"0.0.0.0",
    port:"5173",
    allowedHosts: ['http://localhost:5173'],
    hmr: {
      overlay: false,
      timeout: 100
    }
  },
  plugins: [
    taggerPlugin,
    exporterPlugin,
    uploadPlugin,
    routesPlugin,
    tailwindcss(),
    sveltekit(),
    devtoolsJson(),
    Icons({
      compiler: 'svelte',
      autoInstall: true,
    }),
    cleanupManager,

  ],
  ssr: {
  }
});
