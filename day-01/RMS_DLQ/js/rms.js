$(() => {
    //设置高度
    let iHeight = $(window).outerHeight() - 50;
    $('#content').height(iHeight);
    // 手风琴效果
    $(".nav>li").click(function () {
        var $sub = $(this).children(".sub");
        $sub.slideToggle(300);
        var $otherSub = $(this).siblings().children(".sub");
        $otherSub.slideUp(300);

    });
    $(".sub>li").click(function () {
        return false;
    });
    $(".one").on("click", function () {
        console.log(1);

    })


});