#!/usr/bin/env sh

npm install -g @sap/cds-dk
npm install -g mbt@1.2.24
npm install
chmod +x .husky/pre-commit 
npm start