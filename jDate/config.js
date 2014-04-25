$(document).ready(function(){
	// Ejemplos para formatDate
	jDate_options1 = {
		type: 'formatDate', //countDown, socialNetwork, difference, formatDate
		sourceInput: 'isoFormat', //isoFormat, unixFormat
		utc: 'false',
		content:[{name: 'date',
                   separator: '/',}, 
                  {name: 'time',
                   separator: ':',}, 
                  {name: 'seconds',
                   separator: ':',},
        ], 
	};

	$("p.date1").drawDate(jDate_options1);

	jDate_options2 = {
		type: 'formatDate', //countDown, socialNetwork, difference, formatDate
		sourceInput: 'unixFormat', //isoFormat, unixFormat
		utc: 'true',
	};

	$("p.date2").drawDate(jDate_options2);

	//Ejemplos para socialNetwork

	jDate_options3 = {
		type: 'socialNetwork', //countDown, socialNetwork, difference, formatDate
		sourceInput: 'isoFormat', //isoFormat, unixFormat
	};

	$("p.date3").drawDate(jDate_options3);

	jDate_options4 = {
		type: 'socialNetwork', //countDown, socialNetwork, difference, formatDate
		sourceInput: 'unixFormat', //isoFormat, unixFormat
	};
	
	$("p.date4").drawDate(jDate_options4);
	
	jDate_options5 = {
		type: 'socialNetwork', //countDown, socialNetwork, difference, formatDate
		sourceInput: 'isoFormat', //isoFormat, unixFormat
	};
	
	$("p.date5").drawDate(jDate_options5);

	// Ejemplos para difference

	jDate_options6 = {
		type: 'difference', //countDown, socialNetwork, difference, formatDate
		sourceInput: 'isoFormat', //isoFormat, unixFormat
	};

	$("p.date6").drawDate(jDate_options6);

	jDate_options7 = {
		type: 'difference', //countDown, socialNetwork, difference, formatDate
		sourceInput: 'unixFormat', //isoFormat, unixFormat
	};
	
	$("p.date7").drawDate(jDate_options7);

	// Ejemplos para countDown

	jDate_options8 = {
		type: 'countDown', //countDown, socialNetwork, difference, formatDate
		sourceInput: 'isoFormat', //isoFormat, unixFormat
		selector: 'clock', //onlyDays, solo para countDown
		description: 'el examen de SLCS', //solo para countDown
	};

	$("p.date8").drawDate(jDate_options8);
	
	jDate_options9 = {
		type: 'countDown', //countDown, socialNetwork, difference, formatDate
		sourceInput: 'unixFormat', //isoFormat, unixFormat
		selector: 'onlyDays', //clock, onlyDays, solo para countDown
		description: 'el fin de las clases', //solo para countDown
	};

	$("p.date9").drawDate(jDate_options9);
});
