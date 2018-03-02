# QiDianAPI
提供起点中文网API，数据从起点中文网抓取

api使用方式：

    获取所有小说
        /all
    
    获取对应小说
    /all/chanId=6&subCateId=65&tag=孤儿&size=2&action=0&orderId=&page=1&vip=1&sign=1&update=2&style=2&pageSize=50&siteid=1&pubflag=0&hiddenField=0
    
    tag: 标签; 
    size：字数； 
    action：连载/完本； 
    orderId：排序； 
    page： 页码； 
    vip： vip状态； 
    pagesize：小说数量； 
    update： 更新状态;
    

    搜索： 天下
    /search/天下

    获取id为 1010708953 的小说章节列表： 
    /id/1010708953
    
    获取章节
    小说id为1010708953的第二卷第二章
    /content/1010708953/2/2

    小说封面图片
    https://qidian.qpic.cn/qdbimg/349573/  + 小说id +/180
    
    180为图片的大小，可选180/150/90
