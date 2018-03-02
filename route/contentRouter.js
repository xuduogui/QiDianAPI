const router = require('koa-router')();
// 获取爬虫
const { getChapterContent } = require('../spider/spider')

router.prefix('/content');
router.get('/', async ctx => ctx.body = '进入小说内容模块')

// /content/1004179514/5/5,该小说的第五卷第五章
router.get('/:novel/:volume/:chapter', async ctx => {
    let msg = ctx.params;
    ctx.body = await getChapterContent(msg.novel, msg.volume, msg.chapter)
})

module.exports = router