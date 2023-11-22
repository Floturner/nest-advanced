import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  RequestTimeoutException,
  UseInterceptors,
} from '@nestjs/common';
import { CircuitBreakerInterceptor } from 'src/common/interceptors/circuit-breaker/circuit-breaker.interceptor';
import {
  COFFEES_DATA_SOURCE,
  CoffeesDataSource,
  CoffeesService,
} from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@UseInterceptors(CircuitBreakerInterceptor)
@Controller('coffees')
export class CoffeesController {
  constructor(
    @Inject(CoffeesService)
    private readonly coffeesService: CoffeesService,
    @Inject(COFFEES_DATA_SOURCE)
    private readonly coffeesDataSource: CoffeesDataSource
  ) {}

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Get()
  findAll() {
    console.log('[findAll] executed');
    throw new RequestTimeoutException('💥 Error!');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(+id);
  }

  @Patch(':id')
  update(
    // @Param('id', EntityExistsPipe(Coffee)) id: string,
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto
  ) {
    return this.coffeesService.update(+id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(+id);
  }
}
