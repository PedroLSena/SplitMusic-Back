import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import os from "os";
import { join } from 'path';

export interface PythonResult {
    success: boolean;
    message?: string;
    input?: string;
    output?: string;
    error?: string;
}

@Injectable()
export class PythonService {
    separateAudio(filePath:string):Promise<PythonResult>{
        return new Promise((resolve, reject)=>{

            const pythonExecutable = join(process.cwd(), "python", ".venv", "bin" , "python" );
            const scriptPath = join(process.cwd(), "python", "separate.py");
            // console.log("pythonExecutable",pythonExecutable);
            // console.log("scriptPath",scriptPath);

            const pythonProcess = spawn(pythonExecutable, [scriptPath, filePath]);
            //console.log("pythonProcess", pythonProcess);
            let error = '';
            let output = '';

            pythonProcess.stdout.on('data', (data)=> output+= data.toString());

            pythonProcess.stderr.on('data', (data)=> error += data.toString());

            pythonProcess.on('close',(code)=>{
                if(code === 0){
                    resolve(JSON.parse(output.trim()));
                }else{
                    reject(error);
                }
            }
            )
        });
    }
}
