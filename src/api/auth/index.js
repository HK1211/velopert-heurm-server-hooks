const Router = require('koa-router');
const auth = new Router();
const authCtrl = require('./auth.controller');

auth.post('/register/local', authCtrl.localRegister);
auth.post('/login/local', authCtrl.localLogin);
auth.get('/exists/:key(username|email)/:value', authCtrl.exists);
auth.post('/logout',authCtrl.logout);
auth.get('/check', authCtrl.check);

module.exports = auth;