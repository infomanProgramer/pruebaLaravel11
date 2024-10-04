## Instalación del

Para crear un proyecto en Laravel 11 desde cero, iniciar con el comando, ante cersiorarse de que se tiene una version de php 8.2 o superior

```prompt
composer create-project laravel/laravel example-app
```

Iniciar el proyecto Laravel en un servidor de desarrollo local usando:

```
php artisan serve
```

Para corregir los pasos el error del driver sqlite revisar el siguiente video:

https://www.youtube.com/watch?app=desktop&v=tpgoQu8NAZw

## Activar el modo Debug

La opción de debug se encuentra en el archivo de configuración _config/app.php_ luego cambiar el valor de APP_DEBUG a true:

```php
'debug' => (bool) env('APP_DEBUG', true),
```

## Creacion de un proyecto Laravel con React

Revisar los siguiente videos:

-   https://www.youtube.com/watch?v=VrQRa-afCAk&t=885s
-   https://www.youtube.com/watch?v=4Jm57uSecg0

## Ejecutar el proyecto

Para levantar el proyecto se deben ejecutar los siguientes comandos en la terminal:

```
php artisan serve
```

```
php artisan tinker
```

```
npm run dev
```

### Configuración de Visual Studio Code para que funcione con Tailwind

Revisar video:

https://www.youtube.com/watch?v=_CntOc4hBcg

### Iconos para Tailwind

Para la visualización de logos de iconos ver: https://heroicons.com/outline

Link para encontrar el nombre de componente del icono https://unpkg.com/browse/@heroicons/react@2.1.5/16/solid/
