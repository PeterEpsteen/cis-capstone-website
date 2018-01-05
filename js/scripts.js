

    function initMap() {

        var location = new google.maps.LatLng(34.0576, -117.8207);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 14,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

    }

    google.maps.event.addDomListener(window, 'load', initMap);
