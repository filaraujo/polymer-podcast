(function() {
  Polymer({
    is: 'podcast-episode',

    properties: {
      details: Boolean,

      episode: {
        type: Object
      }
    },

    ready: function() {
      console.log(this.episode);
    }


  });
}());
