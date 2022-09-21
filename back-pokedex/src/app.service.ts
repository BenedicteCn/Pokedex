import { Injectable, ForbiddenException, Param } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getPokemonsWithAxiosLib() {
    const response = await axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/',
    }).catch(() => {
      throw new ForbiddenException('API not available');
    });

    return {
      data: {
        pokemon: response.data,
      },
    };
  }

  async getOnePokemonWithAxiosLib(id: string) {
    const response = await axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
    }).catch(() => {
      throw new ForbiddenException('API not available');
    });

    return {
      data: {
        pokemon: response.data,
      },
    };
  }
}
