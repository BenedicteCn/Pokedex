import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getPokemonsWithAxiosLib() {
    return this.appService.getPokemonsWithAxiosLib();
  }

  @Get(':id')
  getOnePokemonWithAxiosLib(@Param('id') id: string) {
    return this.appService.getOnePokemonWithAxiosLib(id);
  }
}
