(function() {
  Polymer({
    is: 'podcast-app',

    publish: {
      blah: Object
    },

    setEpisode: function(e) {
      this.episode = e.detail.episode;
      this.$.entity.visible = true;
      // this.visible = true;
      window.ga('send', 'pageview', 'entity');
    },

    unsetEpisode: function() {
      window.ga('send', 'pageview', 'home');
    },

    showSubscribe: function() {
      this.$.subscribe.visible = true;
    }
  });
}());
