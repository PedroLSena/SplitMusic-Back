import { Module } from '@nestjs/common';
import { AudioController } from './audio.controller';
import { AudioService } from './audio.service';
import { PythonModule } from 'python/python.module';

@Module({
  imports:[PythonModule],
  controllers: [AudioController],
  providers: [AudioService],
})
export class AudioModule {}
