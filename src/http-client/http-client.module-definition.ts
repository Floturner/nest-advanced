import { ConfigurableModuleBuilder } from '@nestjs/common';

export type HttpModuleOptions = { baseUrl?: string };

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN: HTTP_MODULE_OPTIONS,
  OPTIONS_TYPE: HTTP_OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE: HTTP_ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<HttpModuleOptions>({ alwaysTransient: true })
  // .setClassMethodName('forRoot')
  // .setFactoryMethodName('resolve')
  .setExtras<{ isGlobal?: boolean }>(
    {
      isGlobal: true,
    },
    (definition, extras) => ({
      ...definition,
      global: extras.isGlobal,
    })
  )
  .build();
