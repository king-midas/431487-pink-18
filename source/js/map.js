ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [59.938631, 30.323055],
                zoom: 18
            });
            var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
              iconLayout: 'default#image',
              iconImageHref: '../img/map-marker.svg',
              iconImageSize: [36, 36],
              iconImageOffset: [-3, -42]
          });
          myMap.geoObjects.add(myPlacemark);
        }
