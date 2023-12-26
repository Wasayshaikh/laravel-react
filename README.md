
# Laravel React Project

A laravel project using react UI   

##  Configration
-   Laravel v8
-   React v17.0.2
-   Tailwindcss v3

## Cloning this project
```bash
  git clone https://github.com/Wasayshaikh/laravel-react.git
```
```bash
  cd laravel-react
```
```bash
  composer install
```
```bash
  npm install
```
```bash
  copy .env.example .env
```
```bash
  php artisan key:generate
```
create Database and set the database credentials in .env file
```bash
  php artisan migrate
```
```bash
  php artisan serve
```


## Creating New laravel project with react UI
### Install Laravel
laravel already installed globally 
```bash
  laravel new example-app
```
OR
```bash
  composer create-project laravel/laravel example-app
```

```bash
  cd example-app
```
  Install Laravel UI
```bash
  composer require laravel/ui
```
Run artisan for install react
```bash
  php artisan ui react
```
Install node module
```bash
  npm install
```
Compile the react code
```bash
  run dev
```
Add line in view php file in head
```html
  <link rel="stylesheet" href="{{url('css/app.css')}}">
  <script src="{{url('js/app.js')}}"></script>
```
Add line in view php file in body
```html
  <div id="example"></div>
```
import all your new components in app.js file 
example.js component will already be imported
```php
  require('./components/example');
```
run laravel 

```bash
  php artisan serve
```