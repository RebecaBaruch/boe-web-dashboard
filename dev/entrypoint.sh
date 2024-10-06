#! /bin/bash

# Reset
Color_Off='\033[0m'       # Text Reset

# Regular Colors
Black='\033[0;30m'        # Black
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Yellow='\033[0;33m'       # Yellow
Blue='\033[0;34m'         # Blue
Purple='\033[0;35m'       # Purple
Cyan='\033[0;36m'         # Cyan
White='\033[0;37m'        # White


set -e

if [ -d "./node_modules" ];
then
    echo -e "${Green} Start Application..."
    npm run dev
    echo -e "${Color_Off}"
else
    echo -e "${Yellow} Install Dependencies..."
    npm ci
    echo -e "${Green} Start Application..."
    npm run dev
    echo -e "${Color_Off}"
fi