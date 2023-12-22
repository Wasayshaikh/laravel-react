
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
  cd my-project
```
```bash
  composer install
```
```bash
  npm install
```
```bash
  Run cp .env.example .env.
```
```bash
  Run php artisan key:generate.
```
create Database and set the database credentials in .env file
```bash
  Run php artisan migrate.
```
```bash
  Run php artisan serve.
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
```
  <link rel="stylesheet" href="{{url('css/app.css')}}">
  <script src="{{url('js/app.js')}}"></script>
```
Add line in view php file in body
```
 <div id="example"></div>
```
run laravel 
```bash
  php artisan serve
```