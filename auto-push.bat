@echo off
cd /d C:\Users\Danie\Desktop\replace
git add .
git commit -m "Auto update %date% %time%"
git push
echo Website updated! Changes will be live in 1-2 minutes.
pause
