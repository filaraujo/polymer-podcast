(function() {
  Polymer({
    is: 'episode-upcoming',

    properties: {
      episode: Object
    },

    ready: function() {
      console.log(this.episode);
    }
  });
}());
