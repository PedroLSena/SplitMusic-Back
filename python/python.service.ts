import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import os from "os";

@Injectable()
export class PythonService {
    execute(filePath:string):Promise<string>{
        return new Promise((resolve, reject)=>{

            const pytohCommand = os.platform() === "win32" ? "python" : "python3"

            const process = spawn(pytohCommand, ['python/separete.py', filePath]);

            let error = '';
            let output = '';

            process.stdout.on('data', (data)=> output+= data.toString());

            process.stderr.on('data', (data)=> error += data.toString());

            process.on('close',(code)=>{
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
