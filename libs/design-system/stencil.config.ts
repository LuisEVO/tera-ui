import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

import { reactOutputTarget } from '@stencil/react-output-target';

import tailwind from 'stencil-tailwind-plugin';


const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'design-system',
  taskQueue: 'async',
  plugins: [
    sass(),
    tailwind()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/design-system/dist',
    },
    {
      type: 'www',
      dir: '../../dist/libs/design-system/www',
      serviceWorker: null, // disable service workers
    },

    reactOutputTarget({
      componentCorePackage: '@lvilcarromeroo/tera-ui-core',
      proxiesFile:
        '../../../libs/design-system-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),

    angularOutputTarget({
      componentCorePackage: '@lvilcarromeroo/tera-ui-core',
      directivesProxyFile:
        '../../../libs/design-system-angular/src/generated/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  devServer: {
    reloadStrategy: 'pageReload',
  },
};
