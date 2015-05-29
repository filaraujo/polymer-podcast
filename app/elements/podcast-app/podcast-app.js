(function() {
  Polymer({
    is: 'podcast-app',

    setEpisode: function(e) {
      this.episode = e.detail.episode;
      this.visible = true;
    },

    unsetEpisode: function() {
      this.visible = false;
    }
  });
}());
