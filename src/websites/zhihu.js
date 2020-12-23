/*
* CSDN网站
* */
import {log} from "../utils/log";

export const zhihuDirector = {
    regexp: /zhihu/,
    director(document){
        log("zhihu site matched .");
        document.querySelectorAll("a").forEach((v) => {
            const regexp = /https:\/\/link.zhihu.com\/\?target=(.*)/;
            if(v.href.match(regexp)) {
                v.href = v.href.replace(regexp, ($0, $1) => decodeURIComponent($1));
            }
        });
    }
}
