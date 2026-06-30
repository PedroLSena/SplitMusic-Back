import { Injectable } from '@nestjs/common';

@Injectable()
export class AudioService {
    precessUpload(file:Express.Multer.File){
        return{
            id:Date.now.toString(),
            originalName: file.originalname,
            fileName: file.fieldname,
            status: 'uploaded'
        }

    }

}
