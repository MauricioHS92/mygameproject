const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//const userIsAuthenticated = require('./src/middlewares/userIsAuthenticated');

//const privateRoutes = require('./src/routes/private.routes');
const publicRoutes = require('./src/routes/public.routes');
const indexRouter = require('./src/routes/index');
const usuariosRouter = require('./src/routes/usuarios');
const loginRouter = require('./src/routes/login');
const comprasRouter = require('./src/routes/compras');
const methodOverride = require('method-override');
const { use } = require('./src/routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// Define o uso de sessões
app.use(session({
  secret: 'asd7394asdjs83_asd&&ad#f@50gmdualg89674ahfpa',
  resave: false,
  saveUninitialized: false,
  cookie: {
      secure: false
  }
}));

// Rotas públicas
app.use('/', publicRoutes);
// Utiliza o middleware userIsAuthenticated para verificar se o usuário está logado
// O middleware será executado para todas as rotas abaixo
//app.use(userIsAuthenticated);
// Rotas privadas
//app.use('/', privateRoutes);

app.use('/', indexRouter);
app.use('/home', indexRouter);
app.use('/login', loginRouter);
app.use('/inscricao', usuariosRouter);
app.use('/compras', comprasRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

