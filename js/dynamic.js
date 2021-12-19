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
 
// nextld //

		// Check if the URL parameter matches
		if (dynamicContent == 'air') {
			$('#air').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'a-l') {
			$('#a-l').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'a1') {
			$('#a1').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'bawdy') {
			$('#bawdy').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'big') {
			$('#big').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'blowoff') {
			$('#blowoff').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'besties') {
			$('#besties').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'blacktie') {
			$('#blacktie').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'bigshot') {
			$('#bigshot').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'blood') {
			$('#blood').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'booger') {
			$('#booger').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'beyond') {
			$('#beyond').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'club') {
			$('#club').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'comfort') {
			$('#comfort').show();
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
		else if (dynamicContent == 'chimney') {
			$('#chimney').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'curios') {
			$('#curios').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cable') {
			$('#cable').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cryptos') {
			$('#cryptos').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'coastal') {
			$('#coastal').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'defi') {
			$('#defi').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'described') {
			$('#described').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'donut') {
			$('#donut').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'data') {
			$('#data').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'dazzle') {
			$('#dazzle').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'escape') {
			$('#escape').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'fables') {
			$('#fables').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'fast') {
			$('#fast').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'facial') {
			$('#facial').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'flopping') {
			$('#flopping').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'folding') {
			$('#folding').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'fun') {
			$('#fun').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'fabulous') {
			$('#fabulous').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'funnybone') {
			$('#funnybone').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'gal') {
			$('#gal').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'galloping') {
			$('#galloping').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'heavy') {
			$('#heavy').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'halter') {
			$('#halter').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hemp') {
			$('#hemp').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hipster') {
			$('#hipster').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'informed') {
			$('#informed').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'indica') {
			$('#indica').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'jettison') {
			$('#jettison').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'jade') {
			$('#jade').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'john') {
			$('#john').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'jester') {
			$('#jester').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'letter') {
			$('#letter').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'logic') {
			$('#logic').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'legendary') {
			$('#legendary').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'magic') {
			$('#magic').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'mega') {
			$('#mega').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'mrs') {
			$('#mrs').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'mexi') {
			$('#mexi').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'nons') {
			$('#nons').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'pits') {
			$('#pits').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'practice') {
			$('#practice').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'plateau') {
			$('#plateau').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'punchline') {
			$('#punchline').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'pink') {
			$('#pink').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'polka') {
			$('#polka').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'post') {
			$('#post').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'totten') {
			$('#rotten').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'robot') {
			$('#robot').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sic') {
			$('#sic').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'strictly') {
			$('#strictly').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sirloin') {
			$('#sirloin').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sativa') {
			$('#sativa').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'super') {
			$('#super').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'superlative') {
			$('#superlative').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sea') {
			$('#sea').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'spinning') {
			$('#spinning').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'towerofpower') {
			$('#towerofpower').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'the') {
			$('#the').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tow') {
			$('#tow').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tickle') {
			$('#tickle').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tickles') {
			$('#tickles').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tippe') {
			$('#tippe').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tiedye') {
			$('#tiedye').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'techno') {
			$('#techno').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tippy') {
			$('#tippy').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'takeout') {
			$('#takeout').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tab') {
			$('#tab').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'threewise') {
			$('#threewise').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'uber') {
			$('#uber').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'up') {
			$('#up').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'v8') {
			$('#v8').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'winningest') {
			$('#winningest').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'warrior') {
			$('#warrior').show();
		} 

// nextld dot-one //

		// Check if the URL parameter matches
		else if (dynamicContent == 'aware') {
			$('#aware').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'artisan') {
			$('#artisan').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'anchor') {
			$('#anchor').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'bud') {
			$('#bud').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cheetah') {
			$('#cheetah').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'champ') {
			$('#champ').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'corp') {
			$('#corp').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'crisis') {
			$('#crisis').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'celebrate') {
			$('#celebrate').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'chase') {
			$('#chase').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'courier') {
			$('#courier').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'chronicle') {
			$('#chronicle').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'civilization') {
			$('#civilization').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'curious') {
			$('#curious').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'digit') {
			$('#digit').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'dude') {
			$('#dude').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'eek') {
			$('#eek').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'expo') {
			$('#expo').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'f1rst') {
			$('#f1rst').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'flame') {
			$('#flame').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'fame') {
			$('#fame').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'fear') {
			$('#fear').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'fighter') {
			$('#fighter').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'fellowship') {
			$('#fellowship').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'gig') {
			$('#gig').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'glyph') {
			$('#glyph').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'googol') {
			$('#googol').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'googolplex') {
			$('#googolplex').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'haptic') {
			$('#haptic').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'headquarters') {
			$('#headquarter').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'haunt') {
			$('#haunt').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hum') {
			$('#hum').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'habitat') {
			$('#habitat').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'homestead') {
			$('#homestead').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hunt') {
			$('#hunt').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hydra') {
			$('#hydra').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'iota') {
			$('#iota').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'indy') {
			$('#indy').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'jug') {
			$('#jug').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'jot') {
			$('#jot').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'loneliest') {
			$('#loneliest').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'landmark') {
			$('#landmark').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'mighty') {
			$('#mighty').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'mojo') {
			$('#mojo').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'november') {
			$('#november').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'netizen') {
			$('#netizen').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'paradigm') {
			$('#paradigm').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'paradox') {
			$('#paradox').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'profit') {
			$('#profit').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'primum-one') {
			$('#primum-one').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'quark') {
			$('#quark').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'queue') {
			$('#queue').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'robotics') {
			$('#robotics').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'racecar') {
			$('#racecar').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'superstar') {
			$('#superstar').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sysop') {
			$('#sysop').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'solve') {
			$('#solve').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sow') {
			$('#sow').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sniper') {
			$('#sniper').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sonic') {
			$('#sonic').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'savage') {
			$('#savage').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'silly') {
			$('#silly').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'specimen') {
			$('#specimen').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'starship') {
			$('#starship').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'superph') {
			$('#superph').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 't-b') {
			$('#t-b').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'technician') {
			$('#technician').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'unicorn') {
			$('#unicorn').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'vaccine') {
			$('#vaccine').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'vow') {
			$('#vow').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'vie') {
			$('#vie').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'yak') {
			$('#yak').show();
		} 

// classic //

		// Check if the URL parameter matches
		else if (dynamicContent == 'breadman') {
			$('#breadman').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'chu') {
			$('#chu').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cmkrnl') {
			$('#cmkrnl').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cancion') {
			$('#cancion').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'e-folio') {
			$('#e-folio').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'e-u') {
			$('#e-u').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'energyspeak') {
			$('#energyspeak').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'faep') {
			$('#faep').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'federalbuilding') {
			$('#federalbuilding').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'flamborough') {
			$('#flamborough').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'gravforce') {
			$('#gravforce').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hacienda') {
			$('#hacienda').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'infosci') {
			$('#infosci').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'inundating') {
			$('#inundating').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'kamikaze') {
			$('#kamikaze').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'licenza') {
			$('#licenza').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'phred') {
			$('#phred').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'pixeloodle') {
			$('#pixeloodle').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'parkette') {
			$('#parkette').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'pinebush') {
			$('#pinebush').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'r0c') {
			$('#r0c').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'scqs') {
			$('#scqs').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'smoky') {
			$('#smoky').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'schoolteacher') {
			$('#schoolteacher').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'synacom') {
			$('#synacom').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tekwolf') {
			$('#tekwolf').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'virusparticles') {
			$('#virusparticles').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'vlp') {
			$('#vlp').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'wack') {
			$('#wack').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'yank') {
			$('#yank').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'ringofthefisherman') {
			$('#ringofthefisherman').show();
		} 

// Web3 //

		// Check if the URL parameter matches
		else if (dynamicContent == 'acumen') {
			$('#acumen').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'anoint') {
			$('#anoint').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'akka') {
			$('#akka').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'badass') {
			$('#badass').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'bigrig') {
			$('#bigrig').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'bigiron') {
			$('#bigiron').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cucaracha') {
			$('#cucaracha').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'chose') {
			$('#chose').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cleric') {
			$('#cleric').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'cinder') {
			$('#cinder').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'energized') {
			$('#energized').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'epk') {
			$('#epk').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'etransfers') {
			$('#etransfers').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'giddyup') {
			$('#giddyup').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'goldenticket') {
			$('#goldenticket').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'graywolf') {
			$('#graywolf').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'g-o') {
			$('#g-o').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hits') {
			$('#hits').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hiatus') {
			$('#hiatus').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'huron') {
			$('#huron').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'hoho') {
			$('#hoho').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'homeward') {
			$('#homeward').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'irks') {
			$('#irks').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'instantly') {
			$('#instantly').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'kinship') {
			$('#kinship').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'madrabbit') {
			$('#madrabbit').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'monies') {
			$('#monies').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'ods') {
			$('#ods').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'oze') {
			$('#oze').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'pes') {
			$('#pes').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'pwrx') {
			$('#pwrx').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'primum') {
			$('#primum').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'radical') {
			$('#radical').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'ruckus') {
			$('#ruckus').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'redivider') {
			$('#redivider').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sentries') {
			$('#sentries').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'speedster') {
			$('#speedster').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'somme') {
			$('#somme').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'sexe') {
			$('#sexe').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'snuff') {
			$('#snuff').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'quiero') {
			$('#quiero').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'touches') {
			$('#touches').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'tinsel') {
			$('#tinsel').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'treads') {
			$('#treads').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'virtua') {
			$('#virtua').show();
		} 
		// Check if the URL parameter matches
		else if (dynamicContent == 'wayfarer') {
			$('#wayfarer').show();
		} 

// emoji //

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
		else if (dynamicContent == 'bitcoin') {
			$('#bitcoin').show();
		} 
		// Check if the URL parmeter is empty or not defined, display default content
		else {
			$('#default-content').show();
		}
	});
