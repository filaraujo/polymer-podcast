(function() {
  Polymer({
    is: 'podcast-app',

    setEpisode: function(e) {
      this.episode = e.detail.episode;
      this.visible = true;
      window.ga('send', 'pageview', 'entity');
    },

    unsetEpisode: function() {
      this.visible = false;
      window.ga('send', 'pageview', 'home');
    }
  });
}());
