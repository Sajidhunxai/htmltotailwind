import './globals.css'
import { Inter } from 'next/font/google'
import ClientOnly from "./components/ClientOnly";
import Navbar from './components/Navbar';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Design &amp; Development Agency | SquareNetMedia',
  description: 'At SquareNet Media, we provide the full team: SEO, Web Design, Graphic Design, Web Development, and many other marketing services for you to explore.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  

   
             
   <body className={`landing is-preload ${inter.className}`}>{children}

      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/jquery.scrollex.min.js"></script>
      <script src="assets/js/jquery.scrolly.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>
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
    </body>
    </html>
  )
}
