import sys;

if len(sys.argv) < 2:
    print("Sem resultados!!");
    sys.exit(1);

audio_path = sys.argv[1];

print("Item Recebido: " + audio_path);

