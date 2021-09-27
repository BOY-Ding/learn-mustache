import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from './renderTemplate.js';

window.mustache = {
    render:function (templateStr,data) {  
        var tokens = parseTemplateToTokens(templateStr);
        return renderTemplate(tokens,data);
    }
}