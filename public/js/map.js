let phone = 320,
    tablet = 640,
    tabletXL = 768,
    laptop = 1024,
    desktop = 1280,
    desktopXL = 1536;
let map_1cord = document.getElementById("first_cord");
let map_2cord = document.getElementById("second_cord");
let openRulesBlock = true;
let openInfoBlock = true;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(map_1cord.textContent, map_2cord.textContent),
        zoom: 17,
        disableDefaultUI: true,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#181818"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1b1b1b"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#2c2c2c"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8a8a8a"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#373737"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3c3c3c"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#4e4e4e"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3d3d3d"
                }
              ]
            }
          ],
    });
    let image = 'https://cdn.icon-icons.com/icons2/2104/PNG/32/map_location_icon_129048.png';
    const contentString =
    "<p>" + document.getElementById('info').innerHTML + "</p>";

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(map_1cord.textContent, map_2cord.textContent),
        map,
        animation: google.maps.Animation.DROP,
        icon: image,
    });
    infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
        });
    marker.addListener("click", () => {
    infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
        });
    });
}

window.initMap = initMap;

function upLabel(labelName) {
  let label = document.getElementById(labelName);
  label.style.top = '-18px';
  label.style.fontSize = '12px';
}

function downLabel(labelName) {
  let label = document.getElementById(labelName);
  label.style.top = '0px';
  label.style.fontSize = '16px';
}

document.getElementById('input_name').addEventListener('focus', function() {
    upLabel('name_label');
});
document.getElementById('input_surname').addEventListener('focus', function() {
    upLabel('surname_label');
});
document.getElementById('input_callsign').addEventListener('focus', function() {
    upLabel('callsign_label');
});
document.getElementById('input_email').addEventListener('focus', function() {
    upLabel('email_label');
});
document.getElementById('input_phone').addEventListener('focus', function() {
    upLabel('phone_label');
});
document.getElementById('input_team').addEventListener('focus', function() {
    upLabel('team_label');
});

document.getElementById('input_name').addEventListener('blur', function() {
  downLabel('name_label');
  if (document.getElementById('input_name').value != '') {
      upLabel('name_label');
  } else {
      downLabel('name_label');
  }
});
document.getElementById('input_surname').addEventListener('blur', function() {
  downLabel('surname_label');
  if (document.getElementById('input_surname').value != '') {
      upLabel('surname_label');
  } else {
      downLabel('surname_label');
  }
});
document.getElementById('input_callsign').addEventListener('blur', function() {
  downLabel('callsign_label');
  if (document.getElementById('input_callsign').value != '') {
      upLabel('callsign_label');
  } else {
      downLabel('callsign_label');
  }
});
document.getElementById('input_email').addEventListener('blur', function() {
  downLabel('email_label');
  if (document.getElementById('input_email').value != '') {
      upLabel('email_label');
  } else {
      downLabel('email_label');
  }
});
document.getElementById('input_phone').addEventListener('blur', function() {
  downLabel('phone_label');
  if (document.getElementById('input_phone').value != '') {
      upLabel('phone_label');
  } else {
      downLabel('phone_label');
  }
});
document.getElementById('input_team').addEventListener('blur', function() {
  downLabel('team_label');
  if (document.getElementById('input_team').value != '') {
      upLabel('team_label');
  } else {
      downLabel('team_label');
  }
});

var countDownDate = new Date(document.getElementById('countdown').textContent).getTime();
console.log(countDownDate);
var x = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById('days').setAttribute('style', ('--value:' + days));
document.getElementById('hours').setAttribute('style', ('--value:' + hours));
document.getElementById('min').setAttribute('style', ('--value:' + minutes));
document.getElementById('sec').setAttribute('style', ('--value:' + seconds));

if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);
