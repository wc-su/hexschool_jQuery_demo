$(document).ready(function () {
  // 回到頂部
  $(".back-to-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  // 下拉式選單 產品介紹
  $(".menu-course-dropdown").click(function (e) {
    e.preventDefault();
    if ($(window).width() > 767) {
      // 特效
      $(".menu-course-droplist").slideToggle();
      // 增加 class
      $(this).parent().toggleClass("menu-course-mobile-open");
      $(this).toggleClass("menu-item-active");
    } else {
      // 螢幕小於 767px ，改用按鈕(img)收回選單，這裡僅處理打開選單
      $(this).parent().addClass("menu-course-mobile-open");
      $(this).addClass("menu-item-active");
    }
  });
  // 螢幕小於 767px ，改用按鈕(img)收回選單
  $(".menu-course-droplist").find("img").click(function (e) {
      var droplist = $(this).parent();
      $(droplist).parent().removeClass("menu-course-mobile-open");
      $(".menu-course-dropdown").removeClass("menu-item-active");
    });
  $(window).resize(function () {
    if ($(window).width() > 767) {
      // 畫面大於 767px，若 droplist 的狀態不為 open，調整 display 為 none
      if (!$(".menu-course-droplist").parent().hasClass("menu-course-mobile-open")) {
        $(".menu-course-droplist").css("display", "none");
      }
    } else { 
      // 畫面小於等於 767px，droplist 的 display 固定為 block
      if ($(".menu-course-droplist").css("display") == "none") {
        $(".menu-course-droplist").css("display", "block");
      }
    }
  });

  // 標題 輪播效果
  // 圖片位置
  var images = [
    "images/banner-1.png",
    "images/banner-2.png",
    "images/banner-3.png",
  ];
  // 加入 swiper-slide
  for (var i = 0; i < images.length; i++) {
    swiper.appendSlide(['<div class="swiper-slide"></div>']);
  }
  // 修改 swiper-slide 背景圖片
  var swiperSlide = $(".swiper-slide");
  for (var i = 0; i < swiperSlide.length; i++) {
    $(swiperSlide[i]).css("background-image", "url(" + images[i] + ")");
  }
});
