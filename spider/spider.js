const rp = require('request-promise');
const linkHead = require('./headHandle/rootHead');
const analyzePath = require('./analyzePath')

// 解析html
const { getNovelIdList, getContent, analyzeSearch } = require('./analyzeHtml');

// 获取数据方法
const getHtml = url => {
  return new Promise((resolve, reject) => {
    rp(url)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}


// 小说列表，获取内容
const getNovelList = async path => {
  // 转换url格式
  let url = 'https://www.qidian.com' + analyzePath(path) + '&style=2';
  // 获取html
  let _html = await getHtml(url);
  // 返回需要的数据
  return getNovelIdList(_html);
}


// 小说章节列表，获取内容
const getNovelChapter = async (id) => {
  let url = 'https://book.qidian.com/ajax/book/category?_csrfToken=t8bt79GaW5c3BJbsQ5mqEG3BjpgusdcJw93fYdfh&bookId=' + id;
  return await getHtml(url);
}


// 小说章节内容，获取
const getChapterContent = async (id, volume, chapters) => {
  let data = await getNovelChapter(id);
  data = JSON.parse(data);
  // 获取小说内容字符串标志
  let str = data.data.vs[ volume - 1 ].cs[ chapters - 1 ].cU;
  let url = 'https://read.qidian.com/chapter/' + str;
  let _html = await getHtml(url);
  return getContent(_html);
}


// 搜索,  search?kw=黄&chanId=1&page=1&style=2
const serchList = async tag => {
  // 编码汉字 %E4%BD%A0%E5%A5%BD -》 你好
  let analyzeTag = encodeURIComponent(tag);
  let url = 'https://www.qidian.com/search?kw=' + analyzeTag;
  let _html = await getHtml(url);
  return analyzeSearch(_html);
}

// id:小说id， tp:图片大小 180，150，90
const getImg = async (id, tp) => {
  let url = 'https://qidian.qpic.cn/qdbimg/349573/' + id + '/' + tp;
  // return await getHtml(url);
  let data = await getHtml(url);
  console.log(data);
}


module.exports = {
  getNovelList,
  getNovelChapter,
  getChapterContent,
  serchList,
  getImg,
}