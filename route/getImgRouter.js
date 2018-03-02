const router = require('koa-router')();
// 获取爬虫
const { getImg } = require('../spider/spider')

router.prefix('/img');

// 获取图片
router.get('/', async ctx => ctx.body = '请输入图片id和图片大小180/150/90/');

//    /all/chanId=6&subCateId=65&tag=孤儿&size=2&action=0&orderId=&page=1&vip=1
// router.get('/:id/:type', async ctx => ctx.body = await getImg(ctx.params.id, ctx.params.type));
router.get('/:id/:type', async ctx => await ctx.render('img'));


module.exports = router