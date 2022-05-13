function welcome() {
    let welcome_text = '欢迎光顾hugeの小屋~'
    if (document.referrer !== '') {
        let referrer = document.referrer.split("/")[2];
        welcome_text = "欢迎你，来自" + referrer.toUpperCase() + "的用户！";
        if (referrer.toUpperCase() == document.domain.toUpperCase()) return;
    }
    swal({
        title: " 欢迎！",
        text: welcome_text + '\nPlease enjoy yourself',
        imageUrl: "img/pikachu.png",
        timer: 2000,
        showConfirmButton: false
    });
}
$(document).ready(() => {
    welcome()
})