(function() {
  window.Polymer({
    is: 'episode-subscribe',

    properties: {},

    onClose: function() {
      window.ga('send', 'event', 'subscribe', 'close');
    },

    onSubscribe: function(e) {
      window.ga('send', 'event', 'subscribe', 'view-subscriber', e.target.title);
    }
  });
}());
