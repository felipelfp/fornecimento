# Script to run the Fornecimento Digital Clone server
$nodeDir = "C:\Users\Usuário\AppData\Roaming\fnm\node-versions\v22.22.1\installation"
if (Test-Path $nodeDir) {
    $env:PATH = "$nodeDir;" + $env:PATH
    $npmPath = Join-Path $nodeDir "npm.cmd"
    Write-Host "Found Node at: $nodeDir" -ForegroundColor Green
    Write-Host "Starting development server..." -ForegroundColor Cyan
    & $npmPath run dev
} else {
    Write-Error "Node.js installation not found in $nodeDir"
}
