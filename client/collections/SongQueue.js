// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  initialize: function(){
    // just keeping this for now for reference
    this.on("add", function()  { // Agreed.
        this.at(0).play();
      }, this);
  },

  enqueue: function(song) {
    this.add(song);
  },
  dequeue: function(song) {
    return this.shift();
  }

});



// 1
// 2
// 3
// 4
// 5
