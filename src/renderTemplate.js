//把tokens和data结合拼接成html字符串
import lookup from "./lookup";
import parseArray from "./parseArray";

export default function (tokens,data) {
    let domStr = '';  

    for(let i = 0 ; i < tokens.length ; i++){
        const token = tokens[i];
        switch(token[0]){
            case '#':
                domStr += parseArray(token[2],lookup(data,token[1]))
                break
            case 'name':
                domStr += lookup(data,token[1])
                break
            default:
                domStr += token[1]
        }
    }
    
    return domStr
}