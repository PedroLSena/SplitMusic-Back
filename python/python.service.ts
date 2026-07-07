import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import os from "os";
import { join } from 'path';

@Injectable()
export class PythonService {
    execute(filePath:string):Promise<string>{
        return new Promise((resolve, reject)=>{

            const pythonExecutable = join(process.cwd(), "python", ".venv", "bin" , "python" );
            const scriptPath = join(process.cwd(), "python", "separete.py");
            //console.log("pythonExecutable",pythonExecutable);

            const pythonProcess = spawn(pythonExecutable, [scriptPath, filePath]);

            let error = '';
            let output = '';

            pythonProcess.stdout.on('data', (data)=> output+= data.toString());

            pythonProcess.stderr.on('data', (data)=> error += data.toString());

            pythonProcess.on('close',(code)=>{
                if(code === 0){
                    resolve(output.trim());
                }else{
                    reject(error);
                }
            }
            )
        });
    }
}
