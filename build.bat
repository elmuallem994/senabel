@echo off
set NODE_ENV=production
rmdir /s /q out
del /q out.zip
yarn build
mkdir out
xcopy /s /e /i .\.next\standalone\* out\
xcopy /s /e /i .\.next\standalone\.next out\
xcopy /s /e /i .\public out\
xcopy /s /e /i .\.next\static out\.next\static
move out\server.js out\app.js
powershell Compress-Archive -Path .\out -DestinationPath out.zip
