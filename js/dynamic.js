	// Parse the URL parameter
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	// Give the parameter a variable name
	var dynamicContent = getParameterByName('dn');
 
	 $(document).ready(function() {
 
		// Check if the URL parameter matches
		if (dynamicContent == 'pixeloodle') {
			$('#pixeloodle').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'vnx') {
			$('#vnx').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'schoolteacher') {
			$('#schoolteacher').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'thingsinamerica') {
			$('#thingsinamerica').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'nomed') {
			$('#nomed').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'wack') {
			$('#wack').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'breadman') {
			$('#breadman').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hacienda') {
			$('#hacienda').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'parkette') {
			$('#parkette').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'infosci') {
			$('#infosci').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cancion') {
			$('#cancion').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'severities') {
			$('#severities').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'flamborough') {
			$('#flamborough').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'federalbuilding') {
			$('#federalbuilding').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tekwolf') {
			$('#tekwolf').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'energyspeak') {
			$('#energyspeak').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'archangel') {
			$('#archangel').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'kamikaze') {
			$('#kamikaze').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'smoky') {
			$('#smoky').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'e-u') {
			$('#e-u').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'virusparticles') {
			$('#virusparticles').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'canbuy') {
			$('#canbuy').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cansell') {
			$('#cansell').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'blood') {
			$('#blood').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'defi') {
			$('#defi').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'john') {
			$('#john').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'gravforce') {
			$('#gravforce').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'inundating') {
			$('#inundating').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'surfer') {
			$('#surfer').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'punch') {
			$('#punch').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'maple') {
			$('#maple').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'dragon') {
			$('#dragon').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'bitcoin') {
			$('#bitcoin').show();
		} 
		// Check if the URL parmeter is empty or not defined, display default content
		else {
			$('#default-content').show();
		}
	});
