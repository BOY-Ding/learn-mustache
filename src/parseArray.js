// 在把tokens转换成html字符串时，使用此函数处理token数组循环的问题
import renderTemplate from "./renderTemplate";
export default function (tokens,data) {
    let domStr = '';
    for(let i = 0 ; i < data.length ; i ++){
        domStr += renderTemplate(tokens,{
            ...data[i],'.':data[i]
        })
    };
    return domStr
}