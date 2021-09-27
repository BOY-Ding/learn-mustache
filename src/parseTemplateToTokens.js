import Scanner  from "./scanner";
import nestedTokens from "./nestedToken"

export default function (templateStr) {
    var tokens = [];
    var scanner = new Scanner(templateStr);
    let word = '';
    while(!scanner.eos()){
        word = scanner.scanUtil('{{');
        //收集tokens
        if(word){
            tokens.push(['text',word])
        }
        scanner.scan('{{');
        word = scanner.scanUtil('}}');
         //收集tokens
        if(word){
            //此时word是{{}}里面的内容
            let _arr = []
            switch(word[0]){
                case '#':
                    _arr = ['#',word.substr(1)];
                    break
                case '/':
                    _arr = ['/',word.substr(1)];
                    break
                default:
                    _arr = ['name',word];
                    break
            }
            tokens.push(_arr)
        }
        scanner.scan('}}');
    };
    return nestedTokens(tokens)
}