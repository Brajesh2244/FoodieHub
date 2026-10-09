@echo off
title Food Delivery Application Launcher
echo ========================================================
echo Starting Food Delivery Web Application...
echo ========================================================

echo.
echo [1/2] Starting Spring Boot Backend (Port 8081)...
start "Food Delivery - Backend" cmd /k "d: && cd D:\FoodDeliveryProject\food-delivery-backend && set SPRING_DATASOURCE_URL=jdbc:mysql://127.0.0.1:3306/food_delivery_db && java -jar app.jar"

echo.
echo [2/2] Starting React Frontend (Port 5175 / 5173)...
start "Food Delivery - Frontend" cmd /k "d: && cd D:\FoodDeliveryProject\food-delivery-frontend && npm run dev"

echo.
echo ========================================================
echo Both services launched in separate windows!
echo Access the frontend at: http://localhost:5175 or http://localhost:5173
echo Access the backend at:  http://localhost:8081
echo ========================================================
pause
