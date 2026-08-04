# Estante Valentina 🎮

Uma "estante" web para jogar seus próprios jogos de SNES direto no
navegador, usando o [EmulatorJS](https://emulatorjs.org/) como motor de
emulação (core `snes9x`).

## O que tem aqui

- `estante-snes.html` — a página principal (interface + lógica).
- `baixar_emulador.py` — baixa os arquivos do EmulatorJS e configura o
  HTML pra rodar 100% offline depois do primeiro download.
- `iniciar-estante.bat` — atalho pra Windows: sobe o servidor local e
  já abre a página no navegador.

## O que NÃO tem aqui (e por quê)

Este repositório **não inclui nenhuma ROM de jogo**. Os arquivos `.smc`
são cópias de jogos comerciais protegidos por direitos autorais — cada
pessoa precisa fornecer os seus próprios, de jogos que já possui.

A pasta `emulatorjs-data/` (motor do emulador) também não vem no
repositório — é baixada automaticamente pelo `baixar_emulador.py`.

## Como usar

1. Clone ou baixe este repositório.
2. Coloque seus próprios arquivos `.smc` em qualquer lugar do seu
   computador (não precisam estar nesta pasta).
3. Tenha o [Python](https://www.python.org/downloads/) instalado.
4. Rode:
   ```
   python baixar_emulador.py
   ```
   Isso baixa o motor do emulador (~10 MB) e deixa tudo pronto pra
   funcionar offline depois.
5. Rode o servidor local:
   ```
   python -m http.server 8000
   ```
   (ou, no Windows, só dê duplo clique em `iniciar-estante.bat`)
6. Abra `http://localhost:8000/estante-snes.html` no navegador.
7. Clique num cartucho e selecione o `.smc` correspondente do seu
   computador.

Não é possível abrir `estante-snes.html` direto com duplo clique — o
navegador bloqueia por segurança (CORS). Sempre precisa passar pelo
servidor local (passo 5).

## Controles

Teclado: setas + `X`/`Z` (A/B) + `S`/`A` (X/Y) + `Enter` (Start) +
`Shift` (Select). Suporta controles USB/Bluetooth também — o
EmulatorJS detecta automaticamente; configure Jogador 1/2 pelo ícone
⚙ dentro da tela do jogo.
