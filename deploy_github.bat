@echo off
title Deploy to GitHub - Printora
echo ========================================================
echo          DEPLOY PROYEK KE GITHUB REPOSITORY
echo          Repository: solusilokal/Printora
echo ========================================================
echo.

echo [1/3] Melakukan build aset produksi (npm run build)...
call npm.cmd run build
if %errorlevel% neq 0 (
    echo [ERROR] Build gagal. Silakan periksa log di atas.
    pause
    exit /b 1
)
echo [OK] Build berhasil.
echo.

echo [2/3] Menyiapkan commit git...
git add .
git commit -m "feat: complete Printora mini website for deployment" 2>nul
echo [OK] Git commit siap.
echo.

echo [3/3] Mengupload (Push) ke GitHub: https://github.com/solusilokal/Printora ...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo [SUKSES] Proyek berhasil di-deploy ke GitHub!
    echo Repository: https://github.com/solusilokal/Printora
    echo ========================================================
) else (
    echo.
    echo [INFO] Gagal melakukan push. Pastikan koneksi dan hak akses tersedia.
)
echo.
pause
