(function() {
  'use strict';
  var tmpl = document.querySelector('template[is="dom-bind"]');

  tmpl.setEpisode = function(e) {
    this.episode = e.detail.episode;
    this.visible = true;
  };

  tmpl.unsetEpisode = function() {
    this.visible = false;
  };


  // analytics
  /* jshint ignore:start */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  window.ga('create', 'UA-63535008-1', 'auto');
  window.ga('send', 'pageview');
  /* jshint ignore:end */
})();
