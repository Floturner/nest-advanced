import { DynamicModule, Inject, Module } from '@nestjs/common';
import {
  ConfigurableModuleClass,
  HTTP_ASYNC_OPTIONS_TYPE,
  HTTP_MODULE_OPTIONS,
  HTTP_OPTIONS_TYPE,
} from './http-client.module-definition';

@Module({})
export class HttpClientModule extends ConfigurableModuleClass {
  constructor(
    @Inject(HTTP_MODULE_OPTIONS)
    private options
  ) {
    console.log(options);
    super();
  }

  static register(options: typeof HTTP_OPTIONS_TYPE): DynamicModule {
    return {
      ...super.register(options),
    };
  }

  static registerAsync(options: typeof HTTP_ASYNC_OPTIONS_TYPE): DynamicModule {
    return {
      ...super.registerAsync(options),
    };
  }
}
