# ng build --prod --aot=true --buildOptimizer=true --optimization=true
ng build --prod
rsync -avzhr --progress dist/frontend/* root@e-radovi.com:/var/www/e-radovi/public
ssh root@e-radovi.com chown -R www-e-radovi:www-data /var/www/e-radovi
ssh root@e-radovi.com chmod -R 775 /var/www/e-radovi