# Push vers GitHub avec GitHub CLI (gh) — connexion via le portail, SANS token manuel.
# Usage: .\push-to-github.ps1
$ErrorActionPreference = "Stop"

# Rafraichir PATH (Cursor ouvert avant l'install de gh ne voit pas gh)
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" +
  [System.Environment]::GetEnvironmentVariable("Path", "User")

$ghCandidates = @(
  "C:\Program Files\GitHub CLI\gh.exe",
  "C:\Program Files (x86)\GitHub CLI\gh.exe",
  "$env:LOCALAPPDATA\Programs\GitHub CLI\gh.exe"
)

$ghExe = $null
foreach ($candidate in $ghCandidates) {
  if (Test-Path $candidate) {
    $ghExe = $candidate
    $ghDir = Split-Path $candidate -Parent
    if ($env:Path -notlike "*$ghDir*") {
      $env:Path = "$ghDir;$env:Path"
    }
    break
  }
}

if (-not $ghExe) {
  $cmd = Get-Command gh -ErrorAction SilentlyContinue
  if ($cmd) { $ghExe = $cmd.Source }
}

function Invoke-Gh {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]]$Args)
  if (-not $ghExe) {
    throw @"
GitHub CLI (gh) introuvable.
Installez-le puis REDEMARREZ le terminal Cursor:
  winget install GitHub.cli
"@
  }
  & $ghExe @Args
}

Set-Location $PSScriptRoot

$Owner = "Ya7ya-digital"
$Repo = "dcr-car-rental"

function Test-GhInstalled {
  Invoke-Gh --version | Out-Null
  if ($LASTEXITCODE -ne 0) {
    throw "gh ne fonctionne pas. Redemarrez le terminal Cursor apres installation."
  }
  Write-Host "gh: $ghExe"
}

function Ensure-GhLogin {
  Invoke-Gh auth status 2>$null
  if ($LASTEXITCODE -eq 0) {
    $login = Invoke-Gh api user -q .login 2>$null
    Write-Host "Deja connecte a GitHub en tant que: $login"
    return
  }

  Write-Host ""
  Write-Host "=== Connexion GitHub (portail, pas de token a copier) ==="
  Write-Host ""
  Write-Host "  Un CODE a 8 caracteres va s'afficher."
  Write-Host "  Ouvrez: https://github.com/login/device"
  Write-Host "  Collez le code (connexion Google sur GitHub = OK)."
  Write-Host ""

  Invoke-Gh auth login -h github.com -p https --skip-ssh-key

  if ($LASTEXITCODE -ne 0) {
    throw "Connexion echouee."
  }

  $login = Invoke-Gh api user -q .login
  Write-Host "Connecte: $login"
}

function Ensure-RepoAndPush {
  $repoUrl = "https://github.com/$Owner/$Repo"

  Invoke-Gh repo view "$Owner/$Repo" 2>$null
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Creation du depot $Owner/$Repo ..."
    Invoke-Gh repo create $Repo `
      --public `
      --description "DCR Discount Car Rental Ajman - Next.js website for Vercel" `
      --source . `
      --remote origin
  } else {
    if (git remote get-url origin 2>$null) {
      git remote set-url origin "$repoUrl.git"
    } else {
      git remote add origin "$repoUrl.git"
    }
  }

  Write-Host "Envoi du code (git push) ..."
  git push -u origin main

  if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Si le depot a deja un README sur GitHub:"
    Write-Host "  gh repo delete $Owner/$Repo --yes"
    Write-Host "  puis relancez .\push-to-github.ps1"
    exit $LASTEXITCODE
  }

  Write-Host ""
  Write-Host "Termine: $repoUrl"
}

Test-GhInstalled
Ensure-GhLogin
Ensure-RepoAndPush
