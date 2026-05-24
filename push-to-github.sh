#!/usr/bin/env bash
# Pour Git Bash (MINGW64) — gh n'est pas dans le PATH par defaut
set -euo pipefail
cd "$(dirname "$0")"

GH="/c/Program Files/GitHub CLI/gh.exe"
GIT="/c/Program Files/Git/bin/git.exe"

if [[ ! -f "$GH" ]]; then
  echo "gh introuvable. Installez: winget install GitHub.cli"
  exit 1
fi

OWNER="Ya7ya-digital"
REPO="dcr-car-rental"

echo "gh: $GH"
"$GH" --version

if ! "$GH" auth status &>/dev/null; then
  echo ""
  echo "=== Connexion GitHub ==="
  echo "1. Un code va s'afficher"
  echo "2. Ouvrez: https://github.com/login/device"
  echo "3. Collez le code (Google sur GitHub = OK)"
  echo ""
  "$GH" auth login -h github.com -p https --skip-ssh-key
fi

echo "Connecte: $($GH api user -q .login)"

if ! "$GH" repo view "$OWNER/$REPO" &>/dev/null; then
  echo "Creation du depot $OWNER/$REPO ..."
  "$GH" repo create "$REPO" \
    --public \
    --description "DCR Discount Car Rental Ajman - Next.js website for Vercel" \
    --source . \
    --remote origin
else
  if "$GIT" remote get-url origin &>/dev/null; then
    "$GIT" remote set-url origin "https://github.com/$OWNER/$REPO.git"
  else
    "$GIT" remote add origin "https://github.com/$OWNER/$REPO.git"
  fi
fi

echo "Push..."
"$GIT" push -u origin main

echo ""
echo "Termine: https://github.com/$OWNER/$REPO"
