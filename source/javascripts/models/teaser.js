$(document).ready(function() {
  $('.teaser-config').on('change', function() {
    var teaser_config = $('input[name="config"]:checked', '.teaser-config').val();
    switch(teaser_config) {
      case "single":
        MEME_SETTINGS.width = 640;
        break;
      case "two-l":
        MEME_SETTINGS.width = 425;
        break;
      case "two-s":
        MEME_SETTINGS.width = 210;
        break;
      case "three-l":
        MEME_SETTINGS.width = 310;
        break;
      case "three-s":
        MEME_SETTINGS.width = 160;
        break;
      case "four":
        MEME_SETTINGS.width = 156;
        break;
    }
    MEME.init();
  });
});