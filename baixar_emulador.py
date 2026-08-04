#!/usr/bin/env python3
"""
Baixa os arquivos do EmulatorJS (core SNES) para deixar a Estante SNES
funcionando sem depender de internet depois de rodar este script uma vez.

COMO USAR
1. Coloque este arquivo na MESMA pasta do estante-snes.html
2. Rode:  python baixar_emulador.py
   (ou "python3 baixar_emulador.py" dependendo do seu sistema)
3. Ele cria a pasta emulatorjs-data/ com os arquivos necessários e já
   ajusta o estante-snes.html para usar essa pasta local em vez do CDN.
4. Depois, sirva a pasta com um servidor local — por exemplo:
     python -m http.server 8000
   e abra http://localhost:8000/estante-snes.html no navegador.
   (Não dá pra abrir com duplo clique depois dessa mudança: o navegador
   bloqueia por CORS o carregamento de arquivos locais via file://)

Baixa direto do CDN oficial do projeto EmulatorJS (software livre,
não contém nenhuma ROM/jogo — só o "motor" que roda o SNES).
"""

import os
import urllib.request

BASE_URL = "https://cdn.emulatorjs.org/stable/data/"
FILES = [
    "loader.js",
    "emulator.min.js",
    "emulator.min.css",
    "cores/cores.json",
    "cores/snes9x-wasm.data",
    "cores/snes9x-legacy-wasm.data",
    "cores/snes9x-thread-wasm.data",
    "cores/snes9x-thread-legacy-wasm.data",
    "compression/extract7z.js",
    "compression/extractzip.js",
    "compression/libunrar.js",
    "compression/libunrar.wasm",
    "localization/pt-BR.json",
]

DEST_DIR = "emulatorjs-data"
HTML_FILE = "estante-snes.html"

OLD_LINE = "const EMULATOR_DATA_PATH = 'https://cdn.emulatorjs.org/stable/data/';"
NEW_LINE = "const EMULATOR_DATA_PATH = 'emulatorjs-data/';"

# Alguns CDNs bloqueiam pedidos que não parecem vir de um navegador
# (o urllib padrão do Python se identifica como "Python-urllib" e leva 403).
# Fingir ser um navegador comum resolve.
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    )
}


def download_file(url, dest):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req) as response, open(dest, "wb") as out_file:
        out_file.write(response.read())


def download():
    for rel_path in FILES:
        url = BASE_URL + rel_path
        dest = os.path.join(DEST_DIR, rel_path)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        print(f"Baixando {url}")
        try:
            download_file(url, dest)
        except Exception as e:
            print(f"  ERRO ao baixar {url}: {e}")
            return False
    return True


def patch_html():
    if not os.path.exists(HTML_FILE):
        print(f"\nAviso: não encontrei '{HTML_FILE}' nesta pasta.")
        print("Ajuste manualmente a linha EMULATOR_DATA_PATH no HTML para:")
        print(f"  {NEW_LINE}")
        return

    with open(HTML_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    if OLD_LINE in content:
        content = content.replace(OLD_LINE, NEW_LINE)
        with open(HTML_FILE, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"\n'{HTML_FILE}' atualizado para usar os arquivos locais.")
    elif NEW_LINE in content:
        print(f"\n'{HTML_FILE}' já estava configurado para usar os arquivos locais.")
    else:
        print(f"\nNão encontrei a linha esperada em '{HTML_FILE}'.")
        print("Ajuste manualmente a linha EMULATOR_DATA_PATH para:")
        print(f"  {NEW_LINE}")


if __name__ == "__main__":
    print("Baixando os arquivos do EmulatorJS (core SNES)...\n")
    if download():
        print("\nDownload concluído.")
        patch_html()
        print("\nPronto! Agora sirva a pasta com um servidor local, por exemplo:")
        print("  python -m http.server 8000")
        print("e abra http://localhost:8000/estante-snes.html")
    else:
        print("\nAlgo falhou no download. Verifique sua internet e tente de novo.")
