import sys;
import subprocess
import json;

if len(sys.argv) < 2:
    print(json.dumps({
        "sucsses": False,
        "message": "Adio nao informado."
    }))
    sys.exit(1);
    

audio_path = sys.argv[1];
output_dir = "outputs";

try:
    subprocess.run(
        [
            sys.executable,
            "-m",
            "demucs",
            "--out",
            output_dir,
            audio_path
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )
    

    
    print(json.dumps({
        "success": True,
        "message": "Separação concluída",
        "output": output_dir,
        "input": audio_path
    }))

except subprocess.CalledProcessError as e:
    print(json.dumps({
        "success": False,
        "error": str(e)
    }))
    sys.exit(1);