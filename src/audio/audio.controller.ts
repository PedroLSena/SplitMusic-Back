import { Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AudioService } from './audio.service';


@Controller('audio')
export class AudioController {
  constructor(private readonly AudioService: AudioService){}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage:diskStorage({
       destination: "./uploads",
       filename:(req, file, callback)=>{
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);

        const ext = extname(file.originalname);
        const filename  = `${uniqueName}${ext}`

        callback(null, filename)
       }
    })
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File){ return this.AudioService.precessUpload(file)}
}