
	// var map = L.map('map').setView([40.716857, -73.871331], 12);
	// create a tile layer sourced from google
	// var roads = L.gridLayer.googleMutant({
	//     type: 'roadmap' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
	// }).addTo(map);
	// var map;
	//     function initMap() {
	//       map = new google.maps.Map(document.getElementById('map'), {
	//         center: {lat:40.716857, lng: -73.871331},
	//         zoom: 12
	//       });
	//     }
	function initMap()
		{
      "use strict";
			var map = new google.maps.Map(document.getElementById('map'),
			{
				center:
				{
					lat: 40.716857,
					lng: -73.871331
				},
				zoom: 12
			});
			var layer = new google.maps.FusionTablesLayer(
			{
				query:
				{
					select: "Address",
					from: '1pi0xVZAI7pnhEMZ0wfYsKeAiFlkmiLRVwzhwVe-t',
					styles: fusion_styles
				}
			});
			layer.setMap(map);
			var fusion_styles = [
			{
				markerOptions:
				{
					iconName: "arrow"
				}
			},
			{
				where: "Catergory_Number < 5",
				markerOptions:
				{
					iconName: "coffee"
				}
			},
			{
				where: "Catergory_Number > 5",
				markerOptions:
				{
					iconName: "rec_bus"
				}
			}];
			fusion_styles.setMap(map);
		}


		// var styled = L.gridLayer.googleMutant({
		//     type: 'roadmap',
		//     styles: [
		//         {elementType: 'labels', stylers: [{visibility: 'off'}]},
		//         {featureType: 'water', stylers: [{color: '#444444'}]}
		//     ]
		// }).addTo(map);
