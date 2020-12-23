import {CSDNDirector} from './websites/csdn';

const websiteLocation = unsafeWindow.location.href;
const siteDocument = unsafeWindow.document;

const directors = [CSDNDirector];

// 匹配网站开始替换
for(let i=0;i<directors.length;i++){
    if(directors[i].regexp.test(websiteLocation)){
        directors[i].director(siteDocument, unsafeWindow);
        break;
    }
}