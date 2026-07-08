import { Module } from '@nestjs/common';
import { AudioController } from './audio.controller';
import { AudioService } from './audio.service';
import { PythonModule } from 'python/python.module';
import { ProcessingService } from 'src/processing/processing.service';

@Module({
  imports:[PythonModule],
  controllers: [AudioController],
  providers: [AudioService, ProcessingService],
})
export class AudioModule {}
