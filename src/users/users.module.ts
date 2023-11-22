import { Module } from '@nestjs/common';
import { DataSourceModule } from 'src/data-source/data-source.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [DataSourceModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
