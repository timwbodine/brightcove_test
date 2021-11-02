videojs.registerPlugin('errorText', function() {
  var myPlayer = this;

  myPlayer.errors({
    "errors": {
      "4": {
        "headline": "The Live Stream will begin soon",
        "type": "CUSTOM_TYPE",
        "message": "Please come back, once the live event has begun!"
      }
    }
  });
});
