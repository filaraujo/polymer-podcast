(function() {
  Polymer({
    is: 'episode-entity',

    properties: {
      episode: Object,

      visible: {
        reflectToAttribute: true,
        type: Boolean,
        value: false
      }
    },

    onClose: function() {
      this.visible = false;
      this.fire('episode-entity--close');
      window.ga('send', 'event', 'episode', 'close', this.episode.number);
    },

    onClick: function(e) {
      window.ga('send', 'event', 'episode', 'view-pick', e.target.title);
    }
  });
}());
