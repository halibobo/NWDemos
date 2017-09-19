nw.Screen.Init();


var screenCB = {
    onDisplayBoundsChanged: function(screen) {
      console.log('displayBoundsChanged', screen);
    },
  
    onDisplayAdded: function(screen) {
      console.log('displayAdded', screen);
    },
  
    onDisplayRemoved: function(screen) {
      console.log('displayRemoved', screen)
    }
  };
  
  // listen to screen events
  nw.Screen.on('displayBoundsChanged', screenCB.onDisplayBoundsChanged);
  nw.Screen.on('displayAdded', screenCB.onDisplayAdded);
  nw.Screen.on('displayRemoved', screenCB.onDisplayRemoved);