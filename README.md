## Instalación del 

Para crear un proyecto en Laravel 11 desde cero, iniciar con el comando, ante cersiorarse de que se tiene una version de php 8.2 o superior 

~~~prompt
composer create-project laravel/laravel example-app
~~~

Iniciar el proyecto Laravel en un servidor de desarrollo local usando:

~~~
php artisan serve
~~~

Para corregir los pasos el error del driver sqlite revisar el siguiente video:

https://www.youtube.com/watch?app=desktop&v=tpgoQu8NAZw

## Activar el modo Debug

La opción de debug se encuentra en el archivo de configuración *config/app.php* luego cambiar el valor de APP_DEBUG a true:

~~~php
'debug' => (bool) env('APP_DEBUG', true),
~~~

## Creacion de un proyecto Laravel con React

Revisar los siguiente videos:

- https://www.youtube.com/watch?v=VrQRa-afCAk&t=885s
- https://www.youtube.com/watch?v=4Jm57uSecg0

## Ejecutar el proyecto

Para levantar el proyecto se deben ejecutar los siguientes comandos en la terminal:

~~~
php artisan serve
~~~

~~~
php artisan tinker
~~~

~~~
npm run dev
~~~




