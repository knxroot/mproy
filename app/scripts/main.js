require.config({
  shim: {
  },

  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: 'vendor/jquery.min'
  }
});
 
require(['app'], function(app) {
  // use app here console.log(app);
  $('.thumbnails>li>a>img').click(function(e) {
  	e.preventDefault();
	var imgScreen = $(this).attr('alt');
	console.log(imgScreen);
	$("#myThumbnailModal img").attr('src', imgScreen);
  	$("#myThumbnailModal").modal('show');
  });
});