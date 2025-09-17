var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($, _) {
	var isNotEmptyString = function(str) {
		if (_.isString(str)) {
			return str.trim().length;
		}
		return 0;
	};

	var init = function($mapWrapper){
		var maxZoom    = 16,
			$mapCanvas   = $mapWrapper.find('.fw-map-canvas'),
			mapCanvasOY  = isNaN(parseInt($mapWrapper.data('map-height'))) ? parseInt($mapCanvas.width() * 0.66) : parseInt($mapWrapper.data('map-height')),
			locations    = $mapWrapper.data('locations'),
			mapType      = $mapWrapper.data('map-type'),
			disableScroll = ($mapWrapper.data('disable-scrolling') ? true : false),
			mapOptions   = {
				center: ( 'undefined' !== locations && locations.length) ? calculateCenter(locations) :  new google.maps.LatLng(-34, 150),
				mapTypeId: google.maps.MapTypeId[mapType],
				scrollwheel: disableScroll
			},
			markerBounds = new google.maps.LatLngBounds(),
			map          = new google.maps.Map($mapCanvas.get(0), mapOptions);

			if ('undefined' !== locations && locations.length) {
				locations.forEach(function(location){
					gMapsCoords = new google.maps.LatLng(location.coordinates.lat, location.coordinates.lng);

					var marker = new google.maps.Marker({
						position: gMapsCoords,
						map: map
					});
					markerBounds.extend(gMapsCoords);

					//set content InfoWindow template
					if ( isNotEmptyString(location.description) || isNotEmptyString(location.title) || isNotEmptyString(location.url) || isNotEmptyString(location.thumb) ) {

						var template = _.template(
							"<% function isNotEmptyString(str) { if (_.isString(str)) {	return str.trim().length;} return 0; }  %>" +

								"<div class='infowindow'>" +

									"<% if (isNotEmptyString(location.thumb)) { %>" +
										"<div class='infowindow-thump'>" +
											"<img src='<%= location.thumb %>' >" +
										"</div> " +
									"<% } %>" +

									"<div class='infowindow-content'>" +
										"<% if ( isNotEmptyString(location.url) || isNotEmptyString(location.title) ) { %>" +
											"<div class='infowindow-title'>" +
												"<% if ( isNotEmptyString(location.url) ) { %><a href='<%- location.url %>'><% } %><%- isNotEmptyString(location.title) ?  location.title : location.url  %><% if ( isNotEmptyString(location.url) ) { %></a><% } %>" +
											"</div>" +
										"<% } %>" +
										"<% if ( isNotEmptyString(location.description) ) { %>"+
											"<div class='infowindow-description'>" +
												"<%= location.description %>" +
											"</div>" +
										"<% } %>" +
									"</div>" +

								"</div>");

						var infowindow = new google.maps.InfoWindow({
							content: template({location: location})
						});

						google.maps.event.addListener(marker, 'click', function() {
							infowindow.open(map,marker);
						});
					}
				});
			}

			//change "zoom"
			map.fitBounds(markerBounds);

			//change zoom to max zoom
			var listener = google.maps.event.addListenerOnce(map, 'zoom_changed', function() {
				if (map.getZoom() > maxZoom) map.setZoom(maxZoom);
				google.maps.event.removeListener(listener);
			});

			$mapCanvas.height(mapCanvasOY);
			$mapCanvas.data('map', map);
	};

	var calculateCenter = function(locations) {
		var Lng,Hyp,Lat,
			total = locations.length,
			X = 0,
			Y = 0,
			Z = 0;

		locations.forEach(function(location){
			var lat = location.coordinates.lat * Math.PI / 180,
				lng = location.coordinates.lng * Math.PI / 180,
				x = Math.cos(lat) * Math.cos(lng),
				y = Math.cos(lat) * Math.sin(lng),
				z = Math.sin(lat);

			X += x;
			Y += y;
			Z += z;
		});

		X /= total;
		Y /= total;
		Z /= total;

		Lng = Math.atan2(Y, X);
		Hyp = Math.sqrt(X * X + Y * Y);
		Lat = Math.atan2(Z, Hyp);

		return { lng: (Lng * 180 / Math.PI), lat: (Lat * 180 / Math.PI) };
	};

	$(document).ready(function(){
		$('.fw-map').each(function(){
			init($(this));
		});
	});

}(jQuery, _));



}
/*
     FILE ARCHIVED ON 14:10:50 Jan 19, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:26:29 Sep 16, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.588
  exclusion.robots: 0.063
  exclusion.robots.policy: 0.035
  esindex: 0.03
  cdx.remote: 231.286
  LoadShardBlock: 255.07 (3)
  PetaboxLoader3.datanode: 217.477 (4)
  PetaboxLoader3.resolve: 214.558 (3)
  load_resource: 269.324
*/