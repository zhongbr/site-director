export const JianShuDirector = {
    regexp: /^https?:\/\/www.jianshu.com/,
    director(document){
        document.querySelector("article").querySelectorAll("a").forEach(e=>{
            let regexps = [
                /https:\/\/links.jianshu.com\/go\?to=(.*)/,
                /https?:\/\/links?.jianshu.com\/?\?t=(.*)/
            ];
            regexps.forEach(regexp => {
                if(regexp.test(e.href)){
                    e.href = e.href.replace(regexp, (_, target)=>decodeURIComponent(target));
                }
            })
        })
    }
}
