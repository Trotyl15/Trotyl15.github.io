// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href');
        document.title = '╭(°A°`)╮';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href');
        document.title = '(ฅ>ω<*ฅ)' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
