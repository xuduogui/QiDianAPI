const koa = require('koa');
const app = new koa();

const views = require('koa-views');

const allTypeRouter = require('./route/allTypeRouter');
const indexRouter = require('./route/indexRouter');
const chapterRouter = require('./route/chapterRouter');
const contentRouter = require('./route/contentRouter');
const searchRouter = require('./route/searchRouter');
const getImgRouter = require('./route/getImgRouter');

// 模板引擎
app.use(views(__dirname + '/doc', { extension: 'html' }));

// 路由
app.use(indexRouter.routes(), indexRouter.allowedMethods());
app.use(allTypeRouter.routes(), allTypeRouter.allowedMethods());
app.use(chapterRouter.routes(), chapterRouter.allowedMethods());
app.use(contentRouter.routes(), contentRouter.allowedMethods());
app.use(searchRouter.routes(), searchRouter.allowedMethods());
app.use(getImgRouter.routes(), getImgRouter.allowedMethods());

module.exports = app;