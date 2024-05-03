import type { ConfigEnv, UserConfig } from 'vite';
import path from 'node:path';
import { defineConfig } from 'vite';
import { pluginExposeRenderer } from './vite.base.config';

// https://vitejs.dev/config
export default defineConfig((env) => {
  const forgeEnv = env as ConfigEnv<'renderer'>;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? '';

    return {
        root,
        mode,
        build: {
            rollupOptions: {
                input: {
                    home: path.join(__dirname, 'src/modules/home/index.html'),
                }
            },
          outDir: `.vite/renderer/${name}`,
        },
        plugins: [pluginExposeRenderer(name)],
        resolve: {
          preserveSymlinks: true,
        },
    clearScreen: false,
    } as UserConfig
});
