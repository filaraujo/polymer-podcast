(function() {
  window.Polymer({
    is: 'episode-subscribe',

    properties: {
      visible: {
        reflectToAttribute: true,
        type: Boolean,
        value: false
      }
    },

    onClose: function() {
      this.visible = false;
      this.fire('episode-subscribe--close');
      window.ga('send', 'event', 'subscribe', 'close');
    },

    onSubscribe: function(e) {
      window.ga('send', 'event', 'subscribe', 'view-subscriber', e.target.title);
    }
  });
}());
