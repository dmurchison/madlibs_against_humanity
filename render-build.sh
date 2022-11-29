#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm install --prefix frontend
npm run build --prefix frontend
