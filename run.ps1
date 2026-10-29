$env:PATH = "C:\Users\ALFINO NICOLAS P\.gemini\antigravity\scratch\nodejs;" + $env:PATH
Set-Location $PSScriptRoot
Write-Host "Menjalankan website Defan Property di http://localhost:3000 ..." -ForegroundColor Cyan
npm run dev
