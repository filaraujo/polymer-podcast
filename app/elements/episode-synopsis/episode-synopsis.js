(function() {
  window.Polymer({
    is: 'episode-synopsis',

    properties: {
      details: {
        type: Boolean,
        value: false
      },

      episode: {
        type: Object
      }
    },

    episodeUrl: function(episode) {
      return '/episode/' + episode.number;
    },

    onMoreInfo: function() {
      window.ga('send', 'event', 'episode', 'view', this.episode.number);
    }
  });
}());
