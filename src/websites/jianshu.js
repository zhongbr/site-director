export const JianShuDirector = {
    regexp: /^https?:\/\/www.jianshu.com/,
    director(document){
        document.querySelector("#__next > div._21bLU4._3kbg6I > div > div > section:nth-child(1) > article").querySelectorAll("a").forEach(e=>{
            let regexp = /https:\/\/links.jianshu.com\/go\?to=(.*)/;
            if(regexp.test(e.href)){
                e.href = e.href.replace(regexp, (_, target)=>decodeURIComponent(target));
            }
        })
    }
}
