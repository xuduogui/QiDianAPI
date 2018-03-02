// 分析path,  all?chanId=6&subCateId=65&action=0
const analyzePah = path => {
    let str = '';
    path.includes('=') ? str = path : str;
    return '/all?' + str;
}

module.exports = analyzePah