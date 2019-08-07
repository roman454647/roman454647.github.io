var express =require('express');

var app =express();
//Routing
app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.all('/test', function(req, res){
   res.send("HTTP method doesn't have any effect on this route!");
});

//Приведенный ниже путь маршрута сопоставляет acd и abcd.
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

///Этот путь маршрута сопоставляет abcd, abbcd, abbbcd и т.д.
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});

//Этот путь маршрута сопоставляет abcd, abxcd, abRABDOMcd, ab123cd и т.д.

var things = require('./things.js');
app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});

//both index.js and things.js should be in same directory
app.use('/things', things);

//Midleware
//Эта функция выполняется для всех типов запросов HTTP в пути /user/:id.


app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

//Эта функция обрабатывает запросы GET, адресованные ресурсам в пути /user/:id.
app.get('/user/:id', function (req, res, next) {
  res.send('USER');
});

//В данном примере представлен вспомогательный стек промежуточных обработчиков
// для обработки запросов GET, адресованных ресурсам в пути /user/:id.
app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next();
}, function (req, res, next) {
  res.send('User Info');
});
//друга функція не буде виконана оскільки перша  завершує цикл запит

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id);
});

//midlewere для router
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}
app.get('/example/c', [cb0, cb1, cb2]);

//Маршрут может обрабатываться сочетанием независимых функций и массивов функций. Например:
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});

//app.route
app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

var birds = require('./birds');

app.use('/birds', birds);

//midlewere for static адрес http://localhost:3000/hello.html

app.use(express.static('public'));

//також ми можемо вказувати віртуальний префікс
//app.use('/static', express.static('public'));


//working with view
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/view', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});




app.listen(3000);

//curl -X POST "http://localhost:3000/hello"
