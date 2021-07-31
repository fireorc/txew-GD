'use strict';

jQuery(function($) {

	var $window = $(window),
		$body = $('body'),
		screenWidth = $window.width(),
		screenHeight = $window.height(),
		scrollBarWidth = 0;

	$window.on('resize orientationchange', function() {
		screenWidth = $window.width();
		screenHeight = $window.height();
	});

	$window.on('load', function() {
		$window.resize();
	});

	window.hency = {
		init : function() {
			this.resizedEvent(400); // Trigger Event after Window is Resized
			this.ieWarning(); // IE<9 Warning
			this.disableEmptyLinks(); // Disable Empty Links
			this.toolTips(); // ToolTips Init
			this.placeHolders(); // PlaceHolders Init
			this.checkBoxes(); // Styled CheckBoxes, RadioButtons
			this.scrollToAnchors(); // Smooth Scroll to Anchors
			this.scrollBarWidthDetection(); // ScrollBar Width Detection
			this.videoPlayerRatio(); // Video Player Ratio

			this.lastItemLabel('.post-meta'); // Post Meta First Item
			this.mainSliderInit(true); // Main Slider and Page Loader (if parameter is set to true)
			this.parallaxInit(); // Parallax
			this.dropDownMenu(); // Dropdown Menu in Header
			this.fullPageMenu(); // Full Page Menu
			this.stickyMenu(); // Sticky Menu
			this.headerSearchForm(); // Search Form in Header
			this.portfolioInit(); // Portfolio Filtering
			this.postListMasonry(); // PostList Masonry Layout
			this.lightBox(); // LightBox (swipeBox)
			this.owlSlidersInit(); // Owl Carousels
			this.skillsCounter(); // Skills Animation
			this.headerVideo(); // Video in Header
			this.thumbnailSlider(); // Thumbnail Slider in Portfolio Details
			this.linkActionDelay(); // Delays Link Actions for Mobile Devices

			this.additionalInit(); // Additional JS

			//this.screenResInfo(); // Screen Resolution Info for Developers
		},

		resizedEvent : function(delay) {
			var resizeTimerId;

			$window.on('resize orientationchange', function() {
				clearTimeout(resizeTimerId);

				resizeTimerId = setTimeout( function() {
					$window.trigger('resized');
				}, delay);
			});
		},

		ieWarning : function() {
			if ($('html').hasClass('oldie')) {
				$body.empty().html('Please, Update your Browser to at least IE9');
			}
		},

		disableEmptyLinks : function() {
			$('[href="#"], .btn.disabled').on('click', function(event) {
				event.preventDefault();
			});
		},

		toolTips : function() {
			$('[data-toggle="tooltip"]').tooltip();
		},

		placeHolders : function() {
			if ($('[placeholder]').length) {
				$.Placeholder.init();
			}
		},

		checkBoxes : function() {
			$.fn.customInput = function() {
				$(this).each(function () {
					var container = $(this),
						input = container.find('input'),
						label = container.find('label');

					input.on('update', function() {
						input.is(':checked') ? label.addClass('checked') : label.removeClass('checked');
					})
						.trigger('update')
						.on('click', function() {
							$('input[name=' + input.attr('name') + ']').trigger('update');
						});
				});
			};

			$('.checkbox, .radio').customInput();
		},

		scrollToAnchors : function() {
			$('.anchor[href^="#"]').on('click', function(e) {
				e.preventDefault();
				var speed = 1,
					boost = 1,
					offset = 5,
					target = $(this).attr('href'),
					currPos = parseInt($window.scrollTop(), 10),
					targetPos = target!="#" && $(target).length==1 ? parseInt($(target).offset().top, 10) - offset : currPos,
					distance = targetPos - currPos;

				boost = Math.abs(distance * boost / 1000);

				$("html, body").animate({scrollTop: targetPos}, parseInt(Math.abs(distance / (speed + boost)), 10));
			});
		},

		scrollBarWidthDetection : function() {
			$body.append('<div class="scrollbar-detect"><span></span></div>');

			var scrollBarDetect = $('.scrollbar-detect');

			scrollBarWidth = scrollBarDetect.width() - scrollBarDetect.find('span').width();

			scrollBarDetect.remove();
		},

		videoPlayerRatio : function() {
			function setRatio() {
				$('.video-player').each(function() {
					var self = $(this),
						ratio = self.attr('width') && self.attr('height') ? self.attr('width') / self.attr('height') : 16/9,
						videoWidth = self.width();

					self.css({height: videoWidth / ratio});

					self.trigger('videoPlayerRatioSet');
				});
			}

			setRatio();

			$window.on('resized', function() {
				setRatio();
			});
		},

		lastItemLabel : function(selector) {
			$(selector).each(function() {
				$(this).children().eq(-1).addClass('last');
			});
		},

		mainSliderInit : function(isLoaderActive) {
			$.fn.mainSliderApi = function() {
				var slider = $(this),
					isBig = slider.hasClass('main-slider-big') ? true : false,
					items = slider.find('.item'),
					animateClass,
					testimage = items.eq(0).data('image') ? items.eq(0).data('image') : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAA1BMVEX///+nxBvIAAAAIElEQVR42u3BgQAAAADDoPtTT+EA1QAAAAAAAAAAAIBLJ3QAAWRnHXoAAAAASUVORK5CYII=';

				function setSliderHeight(extraHeight) {
					if(screenWidth > 767) {
						items.css({
							height: screenHeight + extraHeight,
							lineHeight: screenHeight + 'px'
						});
					} else {
						items.css({
							height: screenHeight,
							lineHeight: screenHeight + 'px'
						});
					}

					$window.trigger('sliderHeightSet');
				}

				if(isBig) {
					setSliderHeight(44);

					$window.on('resized', function() {
						setSliderHeight(44);
					});
				}

				items.each(function () {
					var self = $(this),
						imageUrl = self.data('image');

					self.css({
						backgroundImage: 'url(' + imageUrl + ')'
					});
				});

				if(isLoaderActive) {
					slider.append('<img src="' + testimage + '" alt="" class="testimage hidden">');
				}
				
				slider.find('[data-animate-in], [data-animate-out]').addClass('animated');

				if(items.length < 2) {
					slider.find('.carousel-indicators').addClass('hidden');
					slider.find('.carousel-control').addClass('hidden');
				}

				function animation(dir) {
					slider.find('.active [data-animate-' + dir + ']').each(function () {
						var self = $(this);
						animateClass = self.data('animate-' + dir);

						self.addClass(animateClass);
					});
				}

				function animationReset(dir) {
					slider.find('[data-animate-' + dir + ']').each(function () {
						var self = $(this);
						animateClass = self.data('animate-' + dir);

						self.removeClass(animateClass);
					});
				}

				if (Modernizr.cssanimations) {
					animation('in');

					slider.on('slid.bs.carousel', function () {
						animationReset('out');
						setTimeout(function () {
							animation('in');
						}, 0);
					});
					slider.on('slide.bs.carousel', function () {
						animationReset('in');
						setTimeout(function () {
							animation('out');
						}, 0);
					});
				}

				if (Modernizr.touchevents) {
					slider.find('.carousel-inner').swipe({
						swipeLeft: function() {
							$(this).parent().carousel('prev');
						},
						swipeRight: function() {
							$(this).parent().carousel('next');
						},
						threshold: 30
					});
				}
			};

			var mainSlider = $('#main-slider'),
				loader = $('.loader');

			mainSlider.carousel({interval: mainSlider.data('interval'), pause: 'none'}).mainSliderApi();

			if(isLoaderActive) {
				loader.addClass('active');

				loader.find('.inner').css({
					left: screenWidth / 2
				});

				$body.css({
					paddingRight: scrollBarWidth
				}).addClass('overflow-hidden');

				mainSlider.find('.testimage').on('load', function() {
					$(this).remove();

					$body.css({
						paddingRight: 0
					}).removeClass('overflow-hidden');

					loader.fadeOut(800, function() {
						loader.remove();
					});
				});
			} else {
				$body.removeClass('overflow-hidden');
				loader.remove();
			}
		},

		parallaxInit : function() {
			$.fn.parallax = function() {
				var parallax = $(this),
					xPos = parallax.data('parallax-position') ? parallax.data('parallax-position') : 'center',
					speed = parallax.data('parallax-speed') || parallax.data('parallax-speed') == 0 ? parallax.data('parallax-speed') : .1;

				function runParallax() {
					var scrollTop = $window.scrollTop(),
						offsetTop = parallax.offset().top,
						parallaxHeight = parallax.outerHeight();

					if (scrollTop + screenHeight > offsetTop && offsetTop + parallaxHeight > scrollTop) {
						var yPos = parseInt((offsetTop - scrollTop) * speed, 10);

						parallax.css({
							backgroundPosition: xPos + ' ' + yPos + 'px'
						});
					}
				}

				if (screenWidth > 1000 && !parallax.hasClass('parallax-disabled')) {
					parallax.css({
						backgroundAttachment: 'fixed'
					});
					runParallax();
				}
				$window.on('scroll', function () {
					if (screenWidth > 1000 && !parallax.hasClass('parallax-disabled')) {
						parallax.css({
							backgroundAttachment: 'fixed'
						});
						runParallax();
					}
				});
				$window.on('resized', function () {
					if (screenWidth > 1000 && !parallax.hasClass('parallax-disabled')) {
						parallax.css({
							backgroundAttachment: 'fixed'
						});
						runParallax();
					} else {
						parallax.css({
							backgroundPosition: '50% 0',
							backgroundAttachment: 'scroll'
						});
					}
				});
			};

			$('.parallax').each(function () {
				$(this).parallax();
			});
		},

		dropDownMenu : function() {
			var navContainer = $('.nav-menu'),
				navItems = navContainer.find('li');

			navContainer.find('ul').addClass('hidden');
			navItems.has('ul').addClass('parent');
			navItems.children('a').addClass('menu-link');

			navItems.hover(function() {
				if (screenWidth > 767) {
					var self = $(this),
						dropdown = self.children('ul');

					if(dropdown.length) {
						dropdown.removeClass('hidden');

						if (Modernizr.cssanimations) {
							dropdown.addClass('fadeInUpSmall animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
								dropdown.removeClass('fadeInUpSmall animated hidden');
								dropdown.off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
							});
						}
					}

					// Move Dropdown (Level 2+) to the left side of its Parent if it doesn't fit to screen
					else
					{
						if((self).hasClass('parent')) {
							var dropdownWidth = dropdown.outerWidth(),
								dropdownOffset = parseInt(dropdown.offset().left, 10);

							if (dropdownWidth + dropdownOffset > screenWidth - 5) {
								dropdown.addClass('left');
							}
						}
					}
				}
			}, function() {
				if (screenWidth > 767) {
					var self = $(this),
						dropdown = self.children('ul');

					if (Modernizr.cssanimations) {
						dropdown.removeClass('fadeInUpSmall animated hidden').addClass('fadeOutDownSmall animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							dropdown.removeClass('fadeOutDownSmall animated').addClass('hidden');
							dropdown.off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
						});
					} else {
						dropdown.addClass('hidden');
					}
				}
			});

			// Dropdown Menu for Mobiles
			var menuButton = $('.navigation-link').find('a'),
				isAnimating = false;

			menuButton.on('click', function() {
				if (isAnimating) return;

				isAnimating = true;

				if (navContainer.hasClass('active')) {
					menuButton.removeClass('active');
					navContainer.removeClass('active');
					$body.removeClass('overflow-hidden');

					if (Modernizr.csstransitions && screenWidth < 768) {
						navContainer.one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend', function(){
							isAnimating = false;
							navContainer.off('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend');

							navContainer.css({
								height: 'auto'
							});
						});
					} else {
						isAnimating = false;

						navContainer.css({
							height: 'auto'
						});
					}

				} else {
					menuButton.addClass('active');
					navContainer.addClass('active');
					$body.addClass('overflow-hidden');

					navContainer.css({
						height: screenHeight - navContainer.parent().outerHeight()
					});

					$window.on('resized', function() {
						navContainer.css({
							height: screenHeight - navContainer.parent().outerHeight()
						});
					});

					if (Modernizr.csstransitions && screenWidth < 768) {
						navContainer.one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend', function(){
							isAnimating = false;
							navContainer.off('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend');
						});
					} else {
						isAnimating = false;
					}
				}
			});

			navContainer.find('a.menu-link').on('click', function() {
				if (screenWidth < 768) {
					var self = $(this),
						menuItem = self.parent('li'),
						dropdown = self.siblings('ul');

					if (menuItem.hasClass('active')) {
						dropdown.addClass('hidden');
						menuItem.removeClass('active');
					} else {
						dropdown.removeClass('hidden');
						menuItem.addClass('active');
					}
				}
			});

			$window.on('resized', function() {
				if (screenWidth > 767) {
					navItems.removeClass('active');
					navItems.find('ul').addClass('hidden');
				}
			});
		},

		fullPageMenu : function() {
			var menu = $('.navigation-full'),
				navItems = menu.find('li'),
				menuButton = $('.navigation-full-link').find('a'),
				menuButtonClose = $('.navigation-full-close');

			navItems.has('ul').addClass('parent');

			var openMenu = function() {
					menu.removeClass('hidden');

					setTimeout(function() {
						menu.addClass('active');
					}, 0);
				},
				closeMenu = function() {
					menu.removeClass('active');

					setTimeout(function() {
						menu.addClass('hidden');
					}, 200);
				},
				setMobileHeight = function() {
					if(screenWidth > 767) return false;

					menu.find('.nav-menu-full').css({
						height: screenHeight - menu.find('.logo').outerHeight(true) - menu.find('.navigation-full-footer').outerHeight() - 40
					});
				};

			menuButton.on('click', function() {
				openMenu();
				setMobileHeight();
			});

			menuButtonClose.on('click', function() {
				closeMenu();
			});

			$window.on('keydown', function(event) {
				if(event.keyCode === 27) {
					closeMenu();
				}
			});

			$window.on('resized', function() {
				setMobileHeight();
			});

			navItems.find('a').on('click', function(event) {
				if (screenWidth < 768 && $(this).parent('li').hasClass('parent')) {
					event.preventDefault();
				}
			});
		},

		stickyMenu : function() {
			$.fn.stickyMenu = function() {
				var stickyMenu = $(this),
					stickyHeight = stickyMenu.outerHeight(),
					stickyOffset = stickyMenu.data('become-sticky'),
					scrollTop = $window.scrollTop();

				function runStickyMenu() {
					//if(screenWidth < 768) return false;

					scrollTop = $window.scrollTop();

					if (scrollTop > stickyHeight) {
						stickyMenu.addClass('sticky');
					} else {
						stickyMenu.removeClass('sticky');
					}

					if (scrollTop > stickyHeight + stickyOffset) {
						stickyMenu.addClass('sticky-moved');
					} else {
						stickyMenu.removeClass('sticky-moved');
					}
				}

				$window.on('load scroll resized', function () {
					runStickyMenu();
				});
			};

			$('[data-become-sticky]').stickyMenu();
		},

		headerSearchForm : function() {
			var form = $('.form-search-header'),
				formButton = $('.form-search-open');

			formButton.on('click', function() {
				form.toggleClass('active');
			});

			$body.on('click', function(event) {
				var element = $(event.target);

				if(!element.hasClass('form-search-header') && !element.hasClass('form-search-open') && !element.closest('.form-search-header').length) {
					form.removeClass('active');
				}
			});

			$window.on('keydown', function(event) {
				if(event.keyCode === 27) {
					form.removeClass('active');
				}
			});
		},

		portfolioInit : function() {
			var portfolio = $('.portfolio-items'),
				portfolioItems = portfolio.children('.portfolio-item'),
				filters = $('.portfolio-filter li'),
				gridSize = 10000,
				gridSizeIndex = 0,
				gridSizeItem;

			if(!portfolio.length) return false;

			portfolioItems.each(function(index) {
				if($(this).outerWidth() < gridSize) {
					gridSize = $(this).outerWidth();
					gridSizeIndex = index;
				}
			});

			gridSizeItem = portfolioItems.eq(gridSizeIndex);
			gridSizeItem.addClass('grid-sizer');

			$window.on('resize', function() {
				gridSize = gridSizeItem.outerWidth();

				portfolioItems.each(function() {
					var self = $(this);

					self.css({height: gridSize});

					if(self.hasClass('height2')) {
						self.css({height: gridSize * 2});
					}

					if(self.hasClass('height3')) {
						self.css({height: gridSize * 3});
					}

					if(self.hasClass('height4')) {
						self.css({height: gridSize * 4});
					}

					if(self.hasClass('height5')) {
						self.css({height: gridSize * 5});
					}
				});

				portfolio.isotope('layout');
			});

			portfolio.isotope({
				layoutMode: 'packery',
				transitionDuration: '1s',
				getSortData: {
					category: '[data-category]'
				},
				packery: {
					columnWidth: '.grid-sizer'
				},
				percentPosition: true
			});

			portfolio.imagesLoaded().progress(function() {
				portfolio.isotope('layout');
			});

			filters.on('click', function(e) {
				e.preventDefault();

				var self = $(this),
					option = self.data('category');

				filters.removeClass('active');
				self.addClass('active');

				var search = option ? function() {
					var $item = $(this),
						name = $item.data('category') ? $item.data('category') : '';
					return name.match(new RegExp(option));
				} : '*';

				portfolio.isotope({filter : search});
			});
		},

		postListMasonry : function() {
			var postlist = $('.postlist-masonry');

			if(!postlist.length) return false;

			postlist.find('.article').eq(0).addClass('grid-sizer');

			postlist.isotope({
				itemSelector: '.article',
				masonry: {
					columnWidth: '.grid-sizer'
				}
			});

			postlist.imagesLoaded().progress(function() {
				postlist.isotope('layout');
			});

			$('.video-player').on('videoPlayerRatioSet', function() {
				postlist.isotope('layout');
			});

			$window.on('resized', function() {
				postlist.isotope('layout');
			});
		},

		lightBox : function() {
			$('.swipebox, .swipebox-video').swipebox({
				removeBarsOnMobile: false,
				autoplayVideos: true
			});
		},

		owlSlidersInit : function() {
			// Slider on Gallery Post
			$(".post-slider").owlCarousel({
				singleItem: true,
				navigation : false,
				pagination : true
			});

			// Team Slider
			$(".team-slider").owlCarousel({
				items : 4,
				itemsDesktop : [1359, 4],
				itemsDesktopSmall : [1229, 3],
				itemsTablet : [767, 2],
				itemsMobile : [479, 1],
				navigation: true,
				navigationText : false,
				pagination: false
			});
		},

		skillsCounter : function() {
			$('.skill').each(function() {
				var self = $(this),
					percent = self.data('percentage'),
					percentage = self.find('.skill-percentage'),
					progress = self.find('.progress-bar'),
					progressAnimated = false;

				percentage.text('0%');
				progress.css({width: 0 + '%'});

				$window.on('scroll', function() {
					if (progressAnimated) return;

					if(self.offset().top < $window.scrollTop() + screenHeight) {
						progressAnimated = true;

						for(var i = 1; i < 21; i++) {
							var timeOuted = function(i) {
								return setTimeout(function() {
									percentage.text(parseInt(percent*i/20) + '%');
									progress.css({width: percent*i/20 + '%'});
								}, i*200);
							};

							timeOuted(i);
						}
					}
				});
			});
		},

		headerVideo : function() {
			function resizeVideo() {
				$('.video-container').each(function () {
					var container = $(this),
						video = container.find('.video'),
						ratio = video.attr('width') / video.attr('height'),
						containerWidth = container.width(),
						containerHeight = container.height();

					if (containerWidth / containerHeight < ratio) {
						video.css({
							width: containerHeight * ratio,
							height: containerHeight
						});

						var videoWidth = video.width();

						video.css({
							marginLeft: (containerWidth - videoWidth) / 2
						});
					} else {
						video.css({
							width: containerWidth,
							height: containerWidth / ratio,
							marginLeft: 0
						});
					}
				});
			}

			$window.on('sliderHeightSet', function() {
				resizeVideo();
			});

			$('#main-slider').on('slid.bs.carousel', function() {
				resizeVideo();
			});
		},

		thumbnailSlider : function() {
			$.fn.imageSliderApi = function () {
				var slider = $(this),
					imagesWrap = slider.find('.slider-images-wrap'),
					images = slider.find('.slider-images'),
					thumbsWrap = slider.find('.slider-thumbs-wrap'),
					thumbs = slider.find('.slider-thumbs'),
					prev = slider.find('.prev'),
					next = slider.find('.next'),
					description = images.find('.description'),
					descriptionOpen = slider.find('.description-open'),
					sliderHeight = slider.data('height') ? slider.data('height') : 400;

				if(screenWidth < 1024) {
					sliderHeight = sliderHeight / 1.4;
				}

				if(screenWidth < 480) {
					sliderHeight = sliderHeight / 1.6;
				}

				images.trigger('destroy');
				thumbs.trigger('destroy');

				images.find('li').removeClass().css({
					width: imagesWrap.width(),
					height: sliderHeight
				});

				thumbsWrap.css({
					height: sliderHeight + 2
				});

				thumbs.find('li').removeClass().css({
					width: thumbsWrap.width(),
					height: (sliderHeight + 2) / 3 - 2
				});

				images.carouFredSel({
					prev : prev,
					next : next,
					circular: false,
					infinite: false,
					items: 1,
					auto: false,
					scroll: {
						fx: 'quadratic',
						onBefore: function() {
							var pos = $(this).triggerHandler('currentPosition');

							thumbs.find('li').removeClass('active');
							thumbs.find('li.item' + pos).addClass('active');

							if(pos < 1) {
								thumbs.trigger('slideTo', [pos, true]);
							} else {
								thumbs.trigger('slideTo', [pos - 1, true]);
							}
						}
					},
					onCreate: function() {
						images.find('li').each(function(i) {
							$(this).addClass('item' + i);
						});
					}
				}).trigger('slideTo', [0, true]);

				thumbs.carouFredSel({
					direction: 'up',
					auto: false,
					infinite: false,
					circular: false,
					scroll: {
						items : 1
					},
					onCreate: function() {
						thumbs.find('li').each(function(i) {
							$(this).addClass( 'item' + i ).on('click', function() {
								images.trigger('slideTo', [i, true]);
							});
						});
						thumbs.find('.item0').addClass('active');
					}
				});

				images.swipe({
					swipeLeft: function() {
						images.trigger('next');
					},
					swipeRight: function() {
						images.trigger('prev');
					},
					threshold: 30
				});

				description.find('.description-close').on('click', function() {
					description.removeClass('active');
					descriptionOpen.addClass('active');
				});

				descriptionOpen.on('click', function() {
					description.addClass('active');
					descriptionOpen.removeClass('active');
				});
			};

			var imageSlider = $('.thumbnail-slider');

			if(imageSlider.length) {
				$window.on('load resized', function() {
					imageSlider.each(function() {
						$(this).imageSliderApi();
					});
				});
			}
		},

		linkActionDelay : function() {
			if(Modernizr.touchevents) {
				var delayedLinks = $('.js-action-delay');

				if(!delayedLinks.length) return false;

				var delayTimerId;

				$body.on('click', function(event) {
					var element = $(event.target);

					if(!element.hasClass('js-action-delay') && !element.closest('.js-action-delay').length) {
						clearTimeout(delayTimerId);
						delayedLinks.removeClass('active');
					}
				});

				delayedLinks.on('click', function(event) {
					event.preventDefault();
					clearTimeout(delayTimerId);

					var self = $(this),
						path = self.attr('href');

					delayedLinks.removeClass('active');

					self.addClass('active');

					delayTimerId = setTimeout(function() {
						window.location.href = path;

					}, 4000);
				});
			}
		},

		screenResInfo : function() {
			var container = $('<div class="screen-resolution" style="position: fixed; top: 0; right: 0; z-index: 9999; padding: 4px; background-color: #eee;"></div>'),
				breakPoint = '@xxs';

			container.appendTo($body);

			$window.on('resize orientationchange', function() {
				breakPoint = '@xxs';

				if(screenWidth + scrollBarWidth > 479) breakPoint = '@xs';
				if(screenWidth + scrollBarWidth > 767) breakPoint = '@sm';
				if(screenWidth + scrollBarWidth > 991) breakPoint = '@md';
				if(screenWidth + scrollBarWidth > 1229) breakPoint = '@xmd';
				if(screenWidth + scrollBarWidth > 1359) breakPoint = '@lg';
				if(screenWidth + scrollBarWidth > 1599) breakPoint = '@xlg';
				if(screenWidth + scrollBarWidth > 1799) breakPoint = 'full';

				container.text((screenWidth + scrollBarWidth) + ' x ' + screenHeight + ' ' + breakPoint);
			});
		},

		additionalInit : function() {
			// Write here some JS




		}
	};

	hency.init();
});

jQuery(document).ready(function(){
    'use strict';
    // send contact data with ajax
    jQuery('.fly-form-contact').on("submit", function(){
        var name    = jQuery(this).find('#name').val();
        var email   = jQuery(this).find('#email').val();
        var subject = jQuery(this).find('#subject').val();
        var phone   = jQuery(this).find('#phone').val();
        var message = jQuery(this).find('#message').val();
        var data    = 'name='+ name+'&email='+email+'&phone='+phone+'&subject='+subject+'&message='+ message;

        var form_parent = jQuery(this);
        $.ajax({
            type: "POST",
            cache: false,
            url: "ajax_send_contact.php",
            data: data,    // multiple data sent using ajax
            success: function (html) {
                console.log('success');
                form_parent.after('<h3 class="form-title-ajax success">Your message has been sent!</h3><div class="confirm"><p class="textconfirm">Thank you for contacting us.<br/>We will get back to you as soon as possible.</p></div>');
                form_parent.hide();
            },
            fail: function () {
                console.log('fail');
                form_parent.after('<h3 class="form-title-ajax fail">Oops!</h3><div class="confirm"><p class="texterror">Due to an unknown error, your form was not submitted, please resubmit it or try later.</p></div>');
                form_parent.hide();
            }
        });
        return false;
    });
});