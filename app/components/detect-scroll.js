// import Component from '@ember/component';
import Ember from "ember";
import throttle from "lodash/throttle";

/* eslint-disable */
export default Ember.Component.extend({
  didInsertElement() {
    let _this = this;
    let downPreviouslyInvoked = false;
    // @TODO: Figure out how to make a scroll up event binding.
    Ember.$(".scroll-container").bind(
      "mousewheel DOMMouseScroll touchmove",
      throttle(function(event) {
        if (
          Ember.$(window).scrollTop() + Ember.$(window).height() ==
          Ember.$(document).height()
        ) {
          event.preventDefault();
          if (
            event.originalEvent.wheelDelta > 0 ||
            event.originalEvent.detail < 0
          ) {
          } else {
            // scroll down
            if (downPreviouslyInvoked) {
              _this.onOverScrollDown();
              downPreviouslyInvoked = false;
              return;
            }
            downPreviouslyInvoked = true;
          }
          // _this.sendAction(); // Triggering passed controller’s action
        }
        setTimeout(() => (downPreviouslyInvoked = false), 600);
      }, 600)
    );
  }
});
