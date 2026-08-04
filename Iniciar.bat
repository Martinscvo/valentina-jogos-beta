@echo off
REM Estante SNES - inicia o servidor local e abre a pagina no navegador.
REM So funciona se este arquivo estiver na MESMA pasta do estante-snes.html.

cd /d "%~dp0"

echo Iniciando a Estante SNES...
echo (deixe esta janela aberta enquanto estiver jogando)
echo.

start "" cmd /c "timeout /t 1 >nul & start http://localhost:8000/estante-snes.html"

python -m http.server 8000

pause
