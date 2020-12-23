/*
* CSDN网站
* */
import {log} from '../utils/log';

export const CSDNDirector = {
    regexp: /^https?:\/\/blog.csdn.net/g,
    director(document){
        log('csdn site matched .');
        document.querySelector('#mainBox > main > div.blog-content-box > article').querySelectorAll('a:not([name])').forEach(e=>{
            let a = document.createElement("a");
            a.innerHTML = `<span onclick="window.open('${e.href}')">${e.innerText}</>`;
            e.replaceWith(a);
        })
    }
}
