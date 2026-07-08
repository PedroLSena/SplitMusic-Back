import { Injectable } from '@nestjs/common';
import { PythonService } from 'python/python.service';
import { ProcessingService } from 'src/processing/processing.service';

@Injectable()
export class AudioService {
    constructor(private readonly processingService:ProcessingService,){}
    async processUpload(file:Express.Multer.File){
        const results = await this.processingService.separate(file.path);
        return{
            file:file.filename,
            processing: results
        }

    }

}
