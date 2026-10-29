@echo off
title Defan Property - Next.js Dev Server
set "PATH=C:\Users\ALFINO NICOLAS P\.gemini\antigravity\scratch\nodejs;%PATH%"
cd /d "%~dp0"
echo Menjalankan Defan Property di http://localhost:3000 ...
call npm run dev
pause
