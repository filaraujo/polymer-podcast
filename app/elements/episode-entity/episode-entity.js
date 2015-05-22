(function() {
  Polymer({
    is: 'episode-entity',

    properties: {
      episode: Object
    },

    onClose: function() {
      this.fire('episode-entity--close');
    }
  });
}());
