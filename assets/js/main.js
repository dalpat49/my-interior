$(function(){"use strict";$(window).on('load',function(event){$('.preloader').delay(500).fadeOut(500);});$(".navbar-toggler").on('click',function(){$(this).toggleClass('active');});$(".navbar-nav a").on('click',function(){$(".navbar-toggler").removeClass('active');});$(".navbar-nav a").on('click',function(){$(".navbar-collapse").removeClass("show");});$(window).on('scroll',function(event){var scroll=$(window).scrollTop();if(scroll<10){$(".navigation-bar").removeClass("sticky");}else{$(".navigation-bar").addClass("sticky");}});var scrollLink=$('.page-scroll');$(window).scroll(function(){var scrollbarLocation=$(this).scrollTop();scrollLink.each(function(){var sectionOffset=$(this.hash).offset().top-90;if(sectionOffset<=scrollbarLocation){$(this).parent().addClass('active');$(this).parent().siblings().removeClass('active');}});});new WOW().init();AOS.init({duration:800,});$('.project-active').slick({dots:true,infinite:true,speed:800,slidesToShow:5,slidesToScroll:3,arrows:false,responsive:[{breakpoint:1200,settings:{slidesToShow:4,}},{breakpoint:992,settings:{slidesToShow:3,}},{breakpoint:768,settings:{slidesToShow:2,}},{breakpoint:576,settings:{slidesToShow:1,}}]});$('.testimonial-active').slick({dots:true,infinite:true,speed:800,slidesToShow:1,slidesToScroll:1,arrows:false,});$(window).on('scroll',function(event){if($(this).scrollTop()>600){$('.back-to-top').fadeIn(200)}else{$('.back-to-top').fadeOut(200)}});$('.back-to-top').on('click',function(event){event.preventDefault();$('html, body').animate({scrollTop:0,},1500);});});