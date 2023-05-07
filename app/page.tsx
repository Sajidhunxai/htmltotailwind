
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  return (
  

      <div id="page-wrapper">
    
        {/* <!-- Header --> */}
        {/* <!-- Header --> */}
					<header id="header" className="alt">
						<h1><a href="index.php">SquareNet Media</a></h1>
						<nav id="nav">
							<ul>
								<li className="special">
									<a href="#menu" className="menuToggle"><span>Menu</span></a>
									<div id="menu">
										<ul>
											<li><a href="/">Home</a></li>
											<li><a href="#">Sign Up</a></li>
											<li><a href="#">Log In</a></li>
										</ul>
									</div>
								</li>
							</ul>
						</nav>
					</header>

    
        {/* <!-- Banner --> */}
      	<section id="banner">
						<div className="inner">
							<h2>SquareNet Media</h2>
							<p>Manchester Based<br />
							Web Design &amp; Development Agency<br /></p>
							{/* <!-- <ul className="actions special">
								<li><a href="#" className="button primary">Activate</a></li>
							</ul> --> */}
						</div>
						<a href="#one" className="more scrolly">Learn More</a>
					</section>
    
          {/* <!-- One --> */}
					<section id="one" className="wrapper style1 special">
						<div className="inner">
							<header className="major">
								<h2>Under Development</h2>
								<p>We are undergoing some changes and will be back shortly.</p>
							</header>
							<ul className="icons major">
								<li><span className="icon fa-gem major style1"><span className="label">Lorem</span></span></li>
								<li><span className="icon fa-heart major style2"><span className="label">Ipsum</span></span></li>
								<li><span className="icon solid fa-code major style3"><span className="label">Dolor</span></span></li>
							</ul>
						</div>
					</section>

				{/* <!-- Footer --> */}
					<footer id="footer">
						<ul className="icons">
							<li><a href="http://www.twitter.com/squarenetmedia" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="http://www.facebook.com/squarenetmedia" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
							<li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
						</ul>
						<ul className="copyright">
							<li>&copy; <a href="http://www.squarenetmedia.com">SquareNet Media</a></li>
						</ul>
					</footer>

        <Script>
        {`
/*
Spectral by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

var	$window = $(window),
  $body = $('body'),
  $wrapper = $('#page-wrapper'),
  $banner = $('#banner'),
  $header = $('#header');

// Breakpoints.
  breakpoints({
    xlarge:   [ '1281px',  '1680px' ],
    large:    [ '981px',   '1280px' ],
    medium:   [ '737px',   '980px'  ],
    small:    [ '481px',   '736px'  ],
    xsmall:   [ null,      '480px'  ]
  });

// Play initial animations on page load.
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

// Mobile?
  if (browser.mobile)
    $body.addClass('is-mobile');
  else {

    breakpoints.on('>medium', function() {
      $body.removeClass('is-mobile');
    });

    breakpoints.on('<=medium', function() {
      $body.addClass('is-mobile');
    });

  }

// Scrolly.
  $('.scrolly')
    .scrolly({
      speed: 1500,
      offset: $header.outerHeight()
    });

// Menu.
  $('#menu')
    .append('<a href="#menu" class="close"></a>')
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'right',
      target: $body,
      visibleClass: 'is-menu-visible'
    });

// Header.
  if ($banner.length > 0
  &&	$header.hasClass('alt')) {

    $window.on('resize', function() { $window.trigger('scroll'); });

    $banner.scrollex({
      bottom:		$header.outerHeight() + 1,
      terminate:	function() { $header.removeClass('alt'); },
      enter:		function() { $header.addClass('alt'); },
      leave:		function() { $header.removeClass('alt'); }
    });

  }

})(jQuery);

`}
      </Script>
      </div>
    
  )
}
