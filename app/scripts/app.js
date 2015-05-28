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
})();
