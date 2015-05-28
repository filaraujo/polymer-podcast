(function() {
  Polymer({
    is: 'episode-list',

    properties: {
      episodes: {
        type: Object,
        observer: 'episodesChanged'
      }
    },

    episodesChanged: function() {
      var oldEpisodes = this.episodes.slice(0);
      oldEpisodes.shift();
      this.oldEpisodes = oldEpisodes;
    }

    // @TODO (fil) https://github.com/Polymer/polymer/pull/1636
    // excludeFirst: function(item, index) {
    //   return index !== 0;
    // }
  });
}());
