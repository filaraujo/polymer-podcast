(function() {
  window.Polymer({
    is: 'episode-entity',

    properties: {
      episode: Object
    },

    onClose: function() {
      window.ga('send', 'event', 'episode', 'close', this.episode.number);
    },

    onClick: function(e) {
      window.ga('send', 'event', 'episode', 'view-pick', e.target.title);
    }
  });
}());
