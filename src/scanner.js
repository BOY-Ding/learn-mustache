export default class Scanner {  
    //扫描器
    // "我买了一个{{thing}},好{{mood}}啊"
    constructor(templateStr){
        this.templateStr = templateStr;
        this.tail = templateStr; //尾部剩余
        this.pos = 0;
    }

    scan(str){
        //跳过特定的内容，比如{{ 和 }};
        if(str){
            this.pos += str.length
        }
    }


    scanUtil(str){
        const startPos = this.pos;
        while(!this.eos() && this.tail.indexOf(str) !== 0){
            this.pos ++;
            this.tail = this.templateStr.substring(this.pos);
        };
        
        return this.templateStr.substring(startPos,this.pos)
    }

    eos(){ //指针是否已经到头
        return this.pos >= this.templateStr.length;
    }
}