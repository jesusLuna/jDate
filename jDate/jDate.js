function countdown(timerElement, d, description, error){
	var nowDate = new Date();
	var difference = d.getTime() - nowDate.getTime();
	var auxError = 0;

	dday=Math.floor(difference/(60*60*1000*24)*1);
	dhour=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
	dmin=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
	dsec=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
	
	if(dday==0 && dhour==0 && dmin==0 && dsec==0){
		timerElement.text("¡Empieza "+description+"!");
	}else if(dday<0 || dhour<0 || dmin<0 || dsec<0){
		auxError = 1;
	}else{
		 timerElement.text("Faltan: "+dday+ " días, "+dhour+" horas, "+dmin+" minutos, y "+dsec+" segundos para "+description);
	}

	if(auxError == 1){
		if(error == 'true')
			timerElement.text("¡Error!");
	}
}

function lastCalculateTime(diffDate){
	var nowDate = new Date();
	var difference = (nowDate.getTime() - diffDate.getTime()) / 60000;
    var minTotal = Math.floor(difference);

    if(minTotal < 0 && minTotal > -1){
    	return "Dentro de menos de 1 minuto";
    }else if(minTotal == -1){
    	return "Dentro de 1 minuto";
    }else if(minTotal < 0 && minTotal > -60){
    	return "Dentro de " + (minTotal * -1) + " minutos";
    }else if(minTotal <= -60){
    	var hours = Math.floor(minTotal / 60);
    	
    	if(hours == -1){
    		return "Dentro de 1 hora";
    	}
    	else if(hours > -24){
    		return "Dentro de " + (hours * -1) + " horas";
    	}
    	else if(hours <= -24){
    		var months = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    		var diffYear = nowDate.getFullYear() - diffDate.getFullYear();
    		
    		if(diffYear <= -1){
    			return diffDate.getDate() + " de " + months[diffDate.getMonth()] + " del " + diffDate.getFullYear() + ", a las " + diffDate.getHours() + ":" + (diffDate.getMinutes()<=9 ? '0' + diffDate.getMinutes() : diffDate.getMinutes());
    		}
    		else{
        		var diffMonth = nowDate.getMonth() - diffDate.getMonth();
        		
    			if(diffMonth <= -1){
    				return diffDate.getDate() + " de " + months[diffDate.getMonth()] + ", a las " + diffDate.getHours() + ":" + (diffDate.getMinutes()<=9 ? '0' + diffDate.getMinutes() : diffDate.getMinutes());
    			}
    			else{
    				var diffDay = nowDate.getDate() - diffDate.getDate();
    				
    				if(diffDay <= -1){
    					return diffDate.getDate() + " de " + months[diffDate.getMonth()] + ", a las " + diffDate.getHours() + ":" + (diffDate.getMinutes()<=9 ? '0' + diffDate.getMinutes() : diffDate.getMinutes());
    				}
    				else{
    					return "Mañana a las " + diffDate.getHours() + ":" + (diffDate.getMinutes()<=9 ? '0' + diffDate.getMinutes() : diffDate.getMinutes());
    				}
    			}
    		}
    	}
    }else{
		return 0;
	}
}

function calculateTime(diffDate){
	var nowDate = new Date();
	var difference = (nowDate.getTime() - diffDate.getTime()) / 60000;
    var minTotal = Math.floor(difference);

    if(minTotal >= 0 && minTotal < 1){
    	return "Hace menos de 1 minuto";
    }else if(minTotal == 1){
    	return "Hace 1 minuto";
    }else if(minTotal > 0 && minTotal < 60){
    	return "Hace " + minTotal + " minutos";
    }else if(minTotal >= 60){
    	var hours = Math.floor(minTotal / 60);
    	
    	if(hours == 1){
    		return "Hace 1 hora";
    	}
    	else if(hours < 24){
    		return "Hace " + hours + " horas";
    	}
    	else if(hours >= 24){
    		var months = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    		var diffYear = nowDate.getFullYear() - diffDate.getFullYear();
    		
    		if(diffYear >= 1){
    			return diffDate.getDate() + " de " + months[diffDate.getMonth()] + " del " + diffDate.getFullYear() + ", a las " + diffDate.getHours() + ":" + (diffDate.getMinutes()<=9 ? '0' + diffDate.getMinutes() : diffDate.getMinutes());
    		}
    		else{
        		var diffMonth = nowDate.getMonth() - diffDate.getMonth();
        		
    			if(diffMonth >= 1){
    				return diffDate.getDate() + " de " + months[diffDate.getMonth()] + ", a las " + diffDate.getHours() + ":" + (diffDate.getMinutes()<=9 ? '0' + diffDate.getMinutes() : diffDate.getMinutes());
    			}
    			else{
    				var diffDay = nowDate.getDate() - diffDate.getDate();
    				
    				if(diffDay >= 1){
    					return diffDate.getDate() + " de " + months[diffDate.getMonth()] + ", a las " + diffDate.getHours() + ":" + (diffDate.getMinutes()<=9 ? '0' + diffDate.getMinutes() : diffDate.getMinutes());
    				}
    				else{
    					return "Ayer a las " + diffDate.getHours() + ":" + (diffDate.getMinutes()<=9 ? '0' + diffDate.getMinutes() : diffDate.getMinutes());
    				}
    			}
    		}
    	}
    }else{
		return 0;
	}
}

function pad(n){
	return n<10 ? '0'+n : n
}

(function($){
	var default_date_options = {
		type: 'formatDate',
		sourceInput: 'unixFormat',
		content: [
			{name: 'date',
			 separator: '/',
			},
			{name: 'time',
			 separator: ':',
			},
		],
		utc: 'false',
		error: 'false',
		selector: 'onlyDays',
    }

	$.fn.drawDate = function(options){
		$this = $(this);

		$this.each(function(){
			if(!('type' in options))
				options['type'] = default_date_options.type;

			if(!('sourceInput' in options))
				options['sourceInput'] = default_date_options.sourceInput;

			var error = 0;
			if(options.sourceInput == 'unixFormat'){
				var d = new Date($(this).text() * 1000);
			}else if(options.sourceInput == 'isoFormat'){
				var d = new Date($(this).text());
			}else{
				error = 1;
				if(options.error == 'true')
					$(this).text('¡Error!');
			}

			if(error != 1){
				if(options.type == 'formatDate'){
					if(!('content' in options) || (options['content'].length == 1 && options['content'][0]['name'] == 'seconds'))
						options['content'] = default_date_options.content;

					if(!('utc' in options))
						options['utc'] = default_date_options.utc;

					var hasTime = 0;
					var auxString = "";

					for(var i=0; i<options['content'].length; i++){
						if(options['content'][i]['name'] == 'date' && error != 1){
							if(options['utc'] == 'true'){
								day = pad(d.getUTCDate());
								month = pad(d.getUTCMonth()+1);
								year = pad(d.getUTCFullYear());
							}else{
								day = pad(d.getDate());
								month = pad(d.getMonth()+1);
								year = pad(d.getFullYear());
							}

							if(isNaN(day) || isNaN(month) || isNaN(year))
								error = 1;
							else
								auxString = auxString+day+options['content'][i]['separator']+month+options['content'][i]['separator']+year+" ";
						}else if(options['content'][i]['name'] == 'time' && error != 1){
							if(options['utc'] == 'true'){
								hour = pad(d.getUTCHours());
								minute = pad(d.getUTCMinutes());
							}else{
								hour = pad(d.getHours());
								minute = pad(d.getMinutes());
							}

							if(isNaN(hour) || isNaN(minute))
								error = 1;
							else{
								auxString = auxString+hour+options['content'][i]['separator']+minute;
								hasTime = 1;
							}
						}
						if(options['content'][i]['name'] == 'seconds' && hasTime == 1 && error != 1){
							if(options['utc'] == 'true')
								seconds = pad(d.getUTCSeconds());
							else
								seconds = pad(d.getSeconds());

							if(isNaN(seconds))
								error = 1;
							else
								auxString = auxString+options['content'][i]['separator']+seconds;
						}
					}

					if(error != 1)
						$(this).text(auxString);
					else{
						if(options.error == 'true')
							$(this).text('¡Error!');
					}
				}else if(options.type == 'socialNetwork'){
					var auxString = calculateTime(d);

					if(auxString == 0){
						if(options.error == 'true')
							$(this).text('¡Error!');
					}else
						$(this).text(auxString);
				}else if(options.type == 'countDown'){
					if(!('selector' in options))
						options['selector'] = default_date_options.selector;

					if('description' in options){
						if(options.selector == 'onlyDays'){
							var nowDate = new Date();
							var difference = d.getTime() - nowDate.getTime();
							var days = Math.floor(difference/(1000*60*60*24));

							if(days > 1){
								$(this).text(days+1 + " dias para " + options.description);
							}else if(days == 1){
								$(this).text("Solo dos dias para " + options.description);
							}else if(days == 0){
								$(this).text("Mañana es " + options.description);
							}else if(days == -1){
								$(this).text("¡Hoy es " + options.description + "!");
							}else{
								$(this).text("");
							}
						}else{
							timerElement = $(this);
							timerElement.text("");
							setInterval(function(){countdown(timerElement, d, options['description'], options['error'])}, 1000);
						}
					}else{
						if(options.error == 'true')
							$(this).text('¡Error! Falta la descripción');
					}
				}else if(options.type == 'difference'){
					var nowDate = new Date();
					var difference = d.getTime() - nowDate.getTime();

					if(difference <= 0){
						var auxString = calculateTime(d);
					}else{
						var auxString = lastCalculateTime(d);
					}

					if(auxString == 0){
						if(options.error == 'true')
							$(this).text('¡Error!');
					}else
						$(this).text(auxString);
				}
			}
		});
	}
}(jQuery));
