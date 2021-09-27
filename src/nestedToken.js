export default function (tokens) {
    let nestedTokens = [];
    let sections = []; //栈结构
    let collector = nestedTokens;

    for(let i = 0; i<tokens.length; i++){

        switch(tokens[i][0]){
            case '#':
                collector.push(tokens[i])
                sections.push(tokens[i]);
                collector = tokens[i][2] = [];
                break;
            case '/':
                sections.pop();
                collector = sections.length > 0?sections[sections.length - 1][2]:nestedTokens;
                break;
            default:
                collector.push(tokens[i])
        }
    }
    
    return nestedTokens
}