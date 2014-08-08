// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('add', function() {
      console.log('the view picked up on the add');
      this.render();
    }, this);
    this.collection.on('remove', function() {
      console.log('the view picked up on the remove');
      this.render();
    }, this);
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th colspan="2">Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }


});
