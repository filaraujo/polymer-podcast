(function() {
  var page = window.page;

  window.Polymer({
    is: 'podcast-app',

    properties: {
      episode: {
        type: Object
      },

      route: {
        reflectToAttribute: true,
        type: String,
        value: ''
      }
    },

    routeEpisode: function(ctx) {
      this.episode = this.episodes.filter(function(episode) {
        return episode.number === ctx.params.episode;
      })[0];

      this.route = 'episode';
      window.ga('send', 'pageview', 'entity');
    },

    routeHome: function(ctx) {
      this.route = '';
      window.ga('send', 'pageview', 'home');
    },

    routeSubscribe: function() {
      this.route = 'subscribe';
      window.ga('send', 'pageview', 'subscribe');
    },

    ready: function() {
      // https://github.com/visionmedia/page.js/issues/222
      page('/', this.routeHome.bind(this));
      page('/episode/:episode', this.routeEpisode.bind(this));
      page('/subscribe', this.routeSubscribe.bind(this));
      page({click: true, hashbang: true});
    }
  });
}());
