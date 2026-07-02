import { Injectable } from '@nestjs/common';
import { PythonService } from 'python/python.service';

@Injectable()
export class AudioService {
    constructor(private readonly pythonService:PythonService,){}
    async precessUpload(file:Express.Multer.File){
        const results = await this.pythonService.execute(file.path);
        return{
            id:Date.now().toString(),
            originalName: file.originalname,
            fileName: file.fieldname,
            outputPython: results,
            status: 'uploaded'
        }

    }

}
