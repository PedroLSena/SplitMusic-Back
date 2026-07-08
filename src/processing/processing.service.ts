import { Injectable } from '@nestjs/common';
import { PythonService } from 'python/python.service';

@Injectable()
export class ProcessingService {
    constructor (private readonly pythonService: PythonService){};

  async separate(filePath:string) {
    return this.pythonService.separateAudio(filePath);
  }
}
