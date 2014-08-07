// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  initialize: function(){
    // just keeping this for now for reference
    // this.on("change", function()  { // Agreed.
    //     this.at(0).play();
    // }, this);
    this.on('remove', function() {
      console.log('SOMETHING MOVED!!!!! KILL IT');
      if (this.length > 0) {
        this.at(0).play();
      }
    });
  },

  playFirst: function() {
    this.at(0).play();
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
