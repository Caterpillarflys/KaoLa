const Mock = require("mockjs");


const data = Mock.mock({
    "code":200,
    "errMsg":"",
    "data|50":[{
        "id|+1":1,
        "author":"@name()",
        "title":"@ctitle(10,20)",
        "likeCount|1-100":1,
        "comment|1-100":1,
        "time|1-10":1,
        "topic|1":["专栏"],
        "category|1":["Git","Visual Studio Code","Jenkins","Linux","NPM","Python","GitHub","Spark","开源"]
    }]
});

Mock.mock(/\/home\/articles/,'get',(options)=>{
   
    return data;
})