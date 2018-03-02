
const allBook = '/all?';

// num = 0 / 1, 连载/完结
const bookEndOr = num => `action=${num}`;

// 0免费/1完本
const bookVip = bol => `vip=${bol}`;

// 1-5： 30， 30-50， 50-100， 100-200， 200 万字
const bookSize = num => `size=${num}`;

// 1签约，2精品（未签约）
const bookSign = e => `sign=${e}`;

// 1 三日内， 2 七日内， 3 半月内， 4 一月内
const bookUpdate = e => `update=${e}`;

// 中文，标签
const bookTag = e => `tag=${e}`;

// 大分类, e: num
const bookBigType = e => `chanId=${e}`;

// 小分类
const bookSmallType = e => `orderId=${e}`;

// 获取的页码
const booksPage = e => `page=${e}`;

module.exports = {
    allBook,
    bookEndOr,
    bookVip,
    bookSize,
    bookSign,
    bookUpdate,
    bookTag,
    bookBigType,
    bookSmallType,
    booksPage
}