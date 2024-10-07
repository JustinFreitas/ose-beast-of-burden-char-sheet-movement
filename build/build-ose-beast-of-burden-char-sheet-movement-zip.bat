:: Assumes running from ose-beast-of-burden-char-sheet-movement\build
mkdir out\ose-beast-of-burden-char-sheet-movement\scripts
copy ..\module.json out\ose-beast-of-burden-char-sheet-movement\
copy ..\README.md out\ose-beast-of-burden-char-sheet-movement\
copy ..\LICENSE.txt out\ose-beast-of-burden-char-sheet-movement\
copy ..\scripts\ose-beast-of-burden-char-sheet-movement.js out\ose-beast-of-burden-char-sheet-movement\scripts\
cd out
CALL ..\zip-folder ose-beast-of-burden-char-sheet-movement
rmdir /S /Q ose-beast-of-burden-char-sheet-movement\
cd ..
explorer out
