// Easter egg for geeks :)
console.log('Hello fellow geek, We are always looking for good curious lads like you!');
console.log('Want to join our team? Please, feel free to reach us out at career@axetay.co.uk');
console.log('------------------');
console.log('Running jQuery %s', $().jquery);



$(document).ready(function() {
  
  // Animisition - Page to page transition
  $(".animsition").animsition(
      {
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 400,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
      }
  );

});

// WOW.js - Scroll-triggered Animation Library
var wow = new WOW(
  {
    boxClass:     'axetay',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);


$('body').on('animsition.inStart', function(){
    wow.init();
});







// Contact Page Maps Plugins
function initMap() {

    // Your text bubble
    var YourAddress = '<div id="content">' +
        '<h3>Arisn Head Office</h3>' +
        '<p>101 London Bridge, SE88 0EB, London, United Kingdom</p>' +
        '<p>Phone: (0)800 283 1232' +
        '</div>';

    // Your Position
    var myLatlng = new google.maps.LatLng(51.499816,-0.008658);

    // Map Styling
    var styledMapType = new google.maps.StyledMapType([
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#1c3541"
                }, {
                    "weight": "0.01"
                }]
            }, {
                "featureType": "administrative.neighborhood",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#5bc0be"
                }, {
                    "weight": "0.10"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "hue": "#ffffff"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 100
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "hue": "#00ff00"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 100
                }, {
                    "visibility": "off"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "hue": "#008eff"
                }, {
                    "saturation": -93
                }, {
                    "lightness": 31
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "hue": "#008eff"
                }, {
                    "saturation": -93
                }, {
                    "lightness": 31
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [{
                    "hue": "#008eff"
                }, {
                    "saturation": -93
                }, {
                    "lightness": -2
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "hue": "#007fff"
                }, {
                    "saturation": -90
                }, {
                    "lightness": -8
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "hue": "#007fff"
                }, {
                    "saturation": 10
                }, {
                    "lightness": 69
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "hue": "#007fff"
                }, {
                    "saturation": -78
                }, {
                    "lightness": 67
                }, {
                    "visibility": "simplified"
                }]
            }], { name: 'Arisn' });

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var map = new google.maps.Map(document.getElementById('axetayMap'), {
        center: myLatlng,
        zoom: 13,
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: ['styled_map', 'roadmap']
        }
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    var infowindow = new google.maps.InfoWindow({
        content: YourAddress
    });
    marker.setMap(map);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('axetayMap', styledMapType);
    map.setMapTypeId('axetayMap');
};