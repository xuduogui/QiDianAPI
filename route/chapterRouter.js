const router = require('koa-router')();
// 获取爬虫
const { getNovelChapter } = require('../spider/spider')

router.prefix('/id');

// /id/1004179514
router.get('/:id', async ctx => ctx.body = await getNovelChapter(ctx.params.id))

module.exports = router