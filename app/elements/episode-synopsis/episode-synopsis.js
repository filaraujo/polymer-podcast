(function() {
  Polymer({
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

    onMoreInfo: function() {
      this.fire('episode-synopsis--more-info', {episode: this.episode});
      window.ga('send', 'event', 'episode', 'view', this.episode.number);
    }
  });
}());
