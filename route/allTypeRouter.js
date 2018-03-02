const router = require('koa-router')();
// 获取爬虫
const { getNovelList } = require('../spider/spider')

router.prefix('/all');

// 获取所有小说，默认第一页，50部
router.get('/', async ctx => ctx.body = await getNovelList(ctx.path));

//    /all/chanId=6&subCateId=65&tag=孤儿&size=2&action=0&orderId=&page=1&vip=1
router.get('/:id', async ctx => ctx.body = await getNovelList(ctx.params.id));

module.exports = router