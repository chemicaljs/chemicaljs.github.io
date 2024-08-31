git clone https://github.com/chemicaljs/chemicaljs.github.io temp
cd temp
npm i
npm run build
cd ../
mv temp/dist/* .
rm -rf temp