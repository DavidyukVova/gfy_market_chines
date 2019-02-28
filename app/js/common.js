$(document).ready(function(){
    //main menu
    var container = $(".mobile_menu-close");

    $(document).mouseup(function (e) {

        if(!container.is(e.target) && container.has(e.target).length === 0 ) {
            container.removeClass('mobile_menu-open');
            document.getElementById('burger_btn').onclick = function(){

                container.toggleClass('mobile_menu-open');
            };
            $('.close_menu').click(function () {

                container.removeClass('mobile_menu-open');
            });
            $('.mobile_menu-close .mobile_content a').click(function () {

                container.removeClass('mobile_menu-open');
            });
        }

    });

    var form = $(".modal_body");

    $(document).mouseup(function (e) {

        if(!form.is(e.target) && form.has(e.target).length === 0 ) {
            form.removeClass('active_modal');
            document.getElementById('modal_btn').onclick = function() {
                form.toggleClass('active_modal');
            };
            $('.close').click(function () {

                form.removeClass('active_modal');
            });
        }
    });

    // hover for section7
    // first block
    $('.section_7_chi .item1').hover(function () {
        $('.section_7_chi .item1').css("background-color", "#4e67a6");
        $('.section_7_chi .item1 .sub-title').css("color", "#ffffff");
        $('.section_7_chi .item1 .sub-title span').css("color", "#e9c11b");
        $('.section_7_chi .item1 .sub-description').css("color", "#ffffff");
    }, function () {
        $('.section_7_chi .item1').css("background-color", "#ffffff");
        $('.section_7_chi .item1 .sub-title').css("color", "#000000");
        $('.section_7_chi .item1 .sub-title span').css("color", "#4263ac");
        $('.section_7_chi .item1 .sub-description').css("color", "#929292");
    });
    // second block
    $('.section_7_chi .item2').hover(function () {
        $('.section_7_chi .item2').css("background-color", "#4e67a6");
        $('.section_7_chi .item2 .sub-title').css("color", "#ffffff");
        $('.section_7_chi .item2 .sub-title span').css("color", "#e9c11b");
        $('.section_7_chi .item2 .sub-description').css("color", "#ffffff");
    }, function () {
        $('.section_7_chi .item2').css("background-color", "#ffffff");
        $('.section_7_chi .item2 .sub-title').css("color", "#000000");
        $('.section_7_chi .item2 .sub-title span').css("color", "#4263ac");
        $('.section_7_chi .item2 .sub-description').css("color", "#929292");
    });
    // third block
    $('.section_7_chi .item3').hover(function () {
        $('.section_7_chi .item3').css("background-color", "#4e67a6");
        $('.section_7_chi .item3 .sub-title').css("color", "#ffffff");
        $('.section_7_chi .item3 .sub-title span').css("color", "#e9c11b");
        $('.section_7_chi .item3 .sub-description').css("color", "#ffffff");
    }, function () {
        $('.section_7_chi .item3').css("background-color", "#ffffff");
        $('.section_7_chi .item3 .sub-title').css("color", "#000000");
        $('.section_7_chi .item3 .sub-title span').css("color", "#4263ac");
        $('.section_7_chi .item3 .sub-description').css("color", "#929292");
    });

    $('.slider').bxSlider();
    $('.slider_2').bxSlider();
});