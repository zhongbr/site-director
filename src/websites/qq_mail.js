/*
* QQ邮箱
* */
export const QQMail = {
    regexp: /^https?:\/\/mail.qq.com/,
    director(document){
        document.querySelectorAll("a[data-targettype=webpage]").forEach(e => {
            let a = document.createElement("a");
            a.innerHTML = `<span onclick="window.open('${e.href}')">${e.innerText}</>`;
            e.replaceWith(a);
        })
    }
}
