// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="artist"><%= artist %></td><td class="title"><%= title %></td>'),

  initialize: function() {
    this.model.on('enqueue', function() {
      this.render();
    }, this);

  },

  events: {
    'click': function() {
      console.log('queue entry clicked');
      this.model.delete();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
