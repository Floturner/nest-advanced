import { Inject, Injectable, PipeTransform, Type } from '@nestjs/common';

export function EntityExistsPipe(entityCls: Type): Type<PipeTransform> {
  @Injectable()
  class EntityExistsPipeCls implements PipeTransform {
    constructor(
      @Inject(entityCls)
      private entityRepository: { exists(condition: unknown): Promise<void> }
    ) {}

    async transform(value: any) {
      await this.entityRepository.exists({ where: { id: value } });
      return value;
    }
  }
  return EntityExistsPipeCls;
}
