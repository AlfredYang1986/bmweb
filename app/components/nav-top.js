import Component from '@ember/component';
import Scroller from 'ember-cli-scroller';
import $ from 'jquery';

export default Component.extend(Scroller, {
    didInsertElement: function() {
        this.bindScrolling();
    },
    
    willRemoveElement: function() {
        this.unbindScrolling();
    },
    
      scrolled: function () {
        let cur = window.scrollY;
        let aTop = 80;
    
        if (cur < aTop) {
            let ft = cur * 1.0 / aTop;
            $('#nav').css("background-color", 'rgba(255, 255, 255, ' + ft + ')');
            $('.logo').attr("src","/images/img_logo_white.svg");
            $('.title').removeClass('scrolled-title');
        } else {
            $('#nav').css("background-color", 'rgba(255, 255, 255, 1.0)');
            $('.logo').attr("src","/images/img_logo_theme.svg");
            $('.title').addClass('scrolled-title');
        }

        let wst = $(window).scrollTop() //滚动条距离顶端值
        for (let i = 1; i < 6; i++) { //加循环
            if ($("#a" + i).offset().top - 64 <= wst) { //判断滚动条位置 64是锚点偏移数
                $('#nav a').removeClass("active"); //清除类
                $("#a" + i + i).addClass("active"); //给当前导航加类
            }
        }
    },
    actions: {
        linkToIndex() {
            this.toHomepage();
        },
        navClick(param) {
            $('.title').removeClass('active');
            if (param === 1) {
                $('#a11').addClass('active');
            } else if (param === 2) {
                $('#a22').addClass('active');
            } else if (param === 3) {
                $('#a33').addClass('active');
            } else if (param === 4) {
                $('#a44').addClass('active');
            } else if (param === 5) {
                $('#a55').addClass('active');
            }
        }
    }
});
