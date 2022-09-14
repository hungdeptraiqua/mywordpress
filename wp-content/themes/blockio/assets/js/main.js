/**
 * Header Scroll Navigation
 */
/* Header Scroll */
jQuery(window).scroll(function (){
    if(jQuery(this).scrollTop() > 120) {
        jQuery('ul.wp-block-navigation__container,ul.wp-block-navigation__container > li, .header-nav').css({'height': '80px','transition':'0.65s'});
    } else {
        jQuery('ul.wp-block-navigation__container,ul.wp-block-navigation__container > li, .header-nav').css({'height': '120px','transition':'0.65s'});
    }
});