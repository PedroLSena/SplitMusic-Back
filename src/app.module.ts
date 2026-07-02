import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AudioModule } from './audio/audio.module';
import { PythonModule } from '../python/python.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [AudioModule, PythonModule, StorageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
