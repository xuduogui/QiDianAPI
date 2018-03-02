const cheerio = require('cheerio');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

// 解析小说列表html，获取数据
let getNovelIdList = ht => {
    let $ = cheerio.load(ht);
    let arr = $('.rank-table-list .name');
    let list = [];
    arr.each((i, e) => {
        let obj = {};
        obj.id = $(e).attr('data-bid');
        obj.name = entities.decode($(e).html());
        list.push(obj)
    })
    return list;
}

// 解析小说内容html
let getContent = ht => {
    let $ = cheerio.load(ht);
    let a = $('.read-content p');
    let chapterName = $('.j_chapterName').html();
    let chapterContent = '';
    a.each(function () {
        chapterContent += `\n${$(this).html()}`;
    })
    // 解析字符串
    return entities.decode(chapterName + chapterContent);
}

// 解析搜索内容
let analyzeSearch = ht => {
    let $ = cheerio.load(ht);
    let arr = $('#result-list .book-mid-info');
    let list = [];
    arr.each((i, e) => {
        let $ = cheerio.load(e);
        let obj = {};
        obj.id = $('a').attr('data-bid');
        obj.name = entities.decode($('a').html());
        list.push(obj)
    })
    return list;
}

// 这个模块用来根据需求解析html
module.exports = {
    getNovelIdList,
    getContent,
    analyzeSearch,
}
