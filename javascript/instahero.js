
/*

	Usage (requires jquery):
	
	<script src="jquery.js"></script>
	<script src="instahero.js"></script>
	
	_instahero.api_key = 'your api key';
	
	data = { propertyA: 'value',
			 propertyB: 'value2' };
			
	_instahero.track('Event Name', data);

*/
(function( _instahero, $, undefined ) {

	//Private properties
	var api_url = "http://track.instahero.com/api/track/";

    //Public Properties
    _instahero.api_key = "";
     
    //Public Methods
    _instahero.track = function(event_name, data) {
		data._t = Math.round((new Date()).getTime() / 1000);
		data._k = _instahero.api_key;
		data._n = event_name

		$.ajax({
			url: api_url,
			data: data,
			success: function (ret) {}
		});
		
		
    };
}( window._instahero = window._instahero || {}, jQuery ));
