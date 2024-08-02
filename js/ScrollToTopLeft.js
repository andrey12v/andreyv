var scrolltotop = {
  setting: { startline: 100, scrollto: 0, scrollduration: 1000, fadeduration: [500, 100] },
  controlHTML: '<img src="images/arrow26.png" />',  // Updated to reference the local file
  controlattrs: { offsetx: 10, offsety: 10 },
  anchorkeyword: "#top",
  state: { isvisible: false, shouldvisible: false },
  scrollup: function () {
      this.cssfixedsupport || this.$control.css({ opacity: 0 });
      var target = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
      target = typeof target === "string" && jQuery("#" + target).length === 1 ? jQuery("#" + target).offset().top : 0;
      this.$body.animate({ scrollTop: target }, this.setting.scrollduration);
  },
  keepfixed: function () {
      var windowElement = jQuery(window),
          leftPosition = windowElement.scrollLeft() + this.controlattrs.offsetx,
          topPosition = windowElement.scrollTop() + windowElement.height() - this.$control.height() - this.controlattrs.offsety;
      this.$control.css({ left: leftPosition + "px", top: topPosition + "px" });
  },
  togglecontrol: function () {
      var scrollTop = jQuery(window).scrollTop();
      this.cssfixedsupport || this.keepfixed();
      this.state.shouldvisible = scrollTop >= this.setting.startline;
      if (this.state.shouldvisible && !this.state.isvisible) {
          this.$control.stop().animate({ opacity: 1 }, this.setting.fadeduration[0]);
          this.state.isvisible = true;
      } else if (!this.state.shouldvisible && this.state.isvisible) {
          this.$control.stop().animate({ opacity: 0 }, this.setting.fadeduration[1]);
          this.state.isvisible = false;
      }
  },
  init: function () {
      jQuery(document).ready(function ($) {
          var instance = scrolltotop,
              isCSS1Compat = document.compatMode === "CSS1Compat";
          instance.cssfixedsupport = !document.all || (document.all && isCSS1Compat && window.XMLHttpRequest);
          instance.$body = $(window.opera ? (isCSS1Compat ? "html" : "body") : "html,body");
          instance.$control = $('<div id="topcontrol">' + instance.controlHTML + "</div>")
              .css({
                  position: instance.cssfixedsupport ? "fixed" : "absolute",
                  bottom: instance.controlattrs.offsety,
                  left: instance.controlattrs.offsetx,  // Updated to position the arrow on the left
                  opacity: 0,
                  cursor: "pointer"
              })
              .attr({ title: "Scroll to Top" })
              .click(function () {
                  instance.scrollup();
                  return false;
              })
              .appendTo("body");
          if (document.all && !window.XMLHttpRequest && instance.$control.text() !== "") {
              instance.$control.css({ width: instance.$control.width() });
          }
          instance.togglecontrol();
          $('a[href="' + instance.anchorkeyword + '"]').click(function () {
              instance.scrollup();
              return false;
          });
          $(window).bind("scroll resize", function () {
              instance.togglecontrol();
          });
      });
  },
};
scrolltotop.init();
