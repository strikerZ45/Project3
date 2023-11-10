function init(){
	//alert('it works');
	var el = document.getElementById('frame');
	var myLocation = new google.maps.LatLng(18.402990410469542, -88.39656847253687);
	var mapOptions = {
		center: myLocation,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.DROP,
		icon: 'images/Toucan_Belize.jpg'
	});

	var contentString = '<h1>Belize Corozal</h1><p>Corozal Town is a town in Belize, capital of Corozal District. Corozal Town is located about 84 miles north of Belize City, and 9 miles from the border with Mexico. The population of Corozal Town, according to the main results of the 2010 census, is 9,871</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);