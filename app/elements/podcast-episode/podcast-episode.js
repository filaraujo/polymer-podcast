(function() {
  Polymer({
    is: 'podcast-episode',

    properties: {
      details: {
        type: Boolean,
        value: false
      },

      episode: {
        type: Object
      }
    },

    ready: function() {
      console.log(this.episode);
    }


  });
}());
