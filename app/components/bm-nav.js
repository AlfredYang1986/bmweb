import Component from '@ember/component';
import Scroller from 'ember-cli-scroller';

export default Component.extend(Scroller, {
  didInsertElement: function() {
    this.bindScrolling();
  },

  willRemoveElement: function() {
    this.unbindScrolling();
  },

  scrolled: function () {
    let cur = window.scrollY;
    let aTop = 300;

    if (cur < aTop) {
      var ft = cur * 1.0 / aTop;
      $('nav').css("background-color", 'rgba(52, 56, 74, ' + ft + ')');
    } else {
      $('nav').css("background-color", 'rgba(52, 56, 74, 1.0)');
    }
  },

  actions: {
    showQrCode(bs) {
      if (bs) {
        var o = document.getElementById('pop_up');
        o.style.display = "";
      } else {
        var o = document.getElementById('pop_up');
        o.style.display = "none";
      }
    }
 }
});
