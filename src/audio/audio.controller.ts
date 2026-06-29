import { Controller, Get } from '@nestjs/common';

@Controller('audio')
export class AudioController {
  @Get()
  get() {
    return {
      message: 'API funcionando !!',
    };
  }
}