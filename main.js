$('.toggle').on('click', function(e) {
  e.preventDefault();
  $('.badges').toggleClass('open');
});

// $(function () {
//   $('.slide-list').wrap('<div class="slideshow"></div>');
//   $('.slideshow').append('<img alt="" src="" /><div class="img-cap"></div>');
//   $('.slide-list > li:first-child').addClass('active');
//   $('.slideshow > img').each(function() {
//     var $firstImg = $(this).siblings('.slide-list').find('li:first-child').children('img'),
//         $firstImgSrc = $firstImg.attr('src'),
//         $firstImgAlt = $firstImg.attr('alt');
//     $(this).attr('src',$firstImgSrc);
//     $(this).siblings('.img-cap').text($firstImgAlt);
//   });
//   $('.slide-list > li').click(function () {
//     var $this = $(this),
//         $lgImg = $this.parents('.slideshow').children('img'),
//         $lgCap = $this.parents('.slideshow').children('.img-cap'),
//         $whichImg = $this.children('img').attr('src'),
//         $whichAlt = $this.children('img').attr('alt');
//     $lgImg.attr('src', $whichImg);
//     $lgImg.attr('alt', $whichAlt);
//     $lgCap.text($whichAlt);
//     $this.siblings('li').removeAttr('class');
//     $this.addClass('active');
//   });
// });

// initGallery();

// function initGallery()
// {
//   createThumbs('ul#galleryNews');
//   showBiggerImage();
// }

// function createThumbs(list)
// {
//   var num = $(list + ' li').size();
//   if(num > 1)
//   {
//     for(var i=2;i<=num;i++)
//     {
//       var tagID = $('ul#galleryNews li:nth-child(' + i + ')').attr('id');
//       var id = tagID.slice(7);
//       var img = resizeImage('ul#galleryNews li#article' + id + ' > a > img','small');
//       $('ul#galleryThumbs').append('<li id="thumb' + id + '"><a href="#' + id + '"><img src="' + img + '"/></a></li>');
//     }
//   }
// }

// function resizeImage(image,type)
// {
//   switch(type)
//   {
//   case 'small':
//   var url = $(image).attr('src').replace(450,70).replace(200,40);
//       break;
  
//   case 'big':
//   var url = $(image).attr('src').replace(70,450).replace(40,200);
//       break;
//   }
  
//   return(url);
// }

// function showBiggerImage()
// {
//   $('ul#galleryThumbs li').each(function(){
//     var tagID = $(this).attr('id');
//     var id = tagID.slice(5);
//     $('ul#galleryThumbs li#thumb' + id).hover(function(){
//       $('ul#galleryNews li#article' + id).fadeIn('slow');
//     }, function(){
//       $('ul#galleryNews li#article' + id).fadeOut('slow');
//     });
//   });
// }