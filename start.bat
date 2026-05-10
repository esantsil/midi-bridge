@echo off
setlocal
title Instalador MIDI Bridge

echo =========================================================
echo       INSTALADOR AUTOMATICO - MIDI BRIDGE
echo =========================================================
echo.

:: 1. Verificar se o Bun está instalado
where bun >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Bun nao encontrado. Iniciando instalacao...
    powershell -c "irm bun.sh/install.ps1 | iex"
    
    :: Adiciona o Bun ao PATH da sessão atual para evitar reiniciar o PC
    set "PATH=%PATH%;%USERPROFILE%\.bun\bin"
    echo [OK] Bun instalado com sucesso!
) else (
    echo [OK] Bun ja esta instalado.
)

echo.
echo [2/3] Verificando dependencias do projeto...
:: 2. Executa o install para garantir que jzz e tonal estão lá
call bun install

echo.
echo [3/3] Iniciando a MIDI-Bridge...
echo ---------------------------------------------------------
echo IMPORTANTE: Certifica-te que o teu teclado(MIDI) esta ligado!
echo ---------------------------------------------------------
echo.

:: 3. Roda o programa como administrador (necessário para o Roblox)
:: Tentamos rodar diretamente, mas avisamos o utilizador
bun run src/main.ts

if %errorlevel% neq 0 (
    echo.
    echo [!] Ocorreu um erro. Tentaste executar este ficheiro como Administrador?
    echo Clica com o botao direito e escolhe "Executar como Administrador".
)

pause