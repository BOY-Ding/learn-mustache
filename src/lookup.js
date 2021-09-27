// 用于解析字符串obj.a.b.c的值
export default function (objData,keyName) {
    let result = objData;
    if(keyName.indexOf('0')!== -1){
        const keys = keyName.split('.');
        for(let i = 0 ; i < keys.length ; i ++){
            const key = keys[i];
            result = result[key]
        }
        return result
    }
    return result[keyName]
}