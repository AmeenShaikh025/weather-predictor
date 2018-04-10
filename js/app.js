/*(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if( map.length ){
			
			map.gmap3({
				map:{
					options:{
						center: [latitude,longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker:{
					latLng: [latitude,longitude],
				}
			});
			
		}
	});

	$(window).load(function(){

	});

})(jQuery, document, window);*/




/*==================================================*/




/*$(document).ready(function () { 


	apiWeather();

	
	document.getElementById('find').click(function() {
		displayWeather();
	});
	
	
});

	

	function apiWeather(){
		$.getJSON('http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=b6907d289e10d714a6e88b30761fae22', function(data){
			console.log(data);
			weather = data;
			console.log(weather);
		});
	}


	function displayWeather(){
		var temp = weather.list.main.temp;

		var wind_speed = weather.list.wind.speed;

		var humidity = weather.list.main.humidity;

		var city = document.getElementById('find').value();
		console.log(temp);
		console.log(wind_speed);
		console.log(humidity);


		console.log(city);
	}*/



/*======================Brad================*/

$(document).ready(function() { 
	
	var cityName;
	
/*passing string as a argument in a function */
	var str = "abcde";

	$('#find').on('click', function(e){
		cityName = $('#location_entered').val();
		//console.log(cityName);
		getData(cityName);
		

		$('.forecast-table').html(`
				<div class="container">
					<div class="forecast-container">
						<div class="today forecast">
							<div class="forecast-header">
								<div class="day" id="currentDay"></div>
								<div class="date"><span id="dates" class="dates"></span><span id="months"></span></div>
							</div> 
							<div class="forecast-content">
								<div class="location"><span id="inputCity"></span></div>
								<div class="degree">
									<div class="num"><span id="temp_deg"></span><sup>o</sup>C</div>
									<div class="forecast-icon" id="forecast-icon">
										
									</div>	
								</div>
								<span><span id="conditions"class="fa-2x"></span></span>
								<span><img src="images/icon-wind.png" alt=""><span class="wind" id="wind"></span>km/h</span>
								<span><i class="fa fa-tint fa-1x humid-logo" aria-hidden="true"></i><span id="humid" class="humid"></span>%</span>
							</div>
						</div>
					</div>
				</div>`);

		/*when deleting a location and entering another one (using backspace)*/
		$('#location_entered').on('keyup', function(e){ 
			$('.forecast-table').hide();
		});
	});


		


});

	function getData(cityName){
		$.ajax({
			url:'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid=bcd0ad0825444df9ce3db60bc04e933e'

		}).done(function(data){
			$('.forecast-table').show();
			console.log(data);
			var sample = data;

			var d = new Date();

			/*DAY OF THE WEEK*/

			var dayNumber = d.getDay();
			
					switch(dayNumber){
						case 0:
					        day = "Sunday";
					        break;
					    case 1:
					        day = "Monday";
					        break;
					    case 2:
					        day = "Tuesday";
					        break;
					    case 3:
					        day = "Wednesday";
					        break;
					    case 4:
					        day = "Thursday";
					        break;
					    case 5:
					        day = "Friday";
					        break;
					    case 6:
					        day = "Saturday";
					}
				$('#currentDay').text(day);	
			
			/*MONTH OF THE YEAR*/	

			var monthNumber = d.getMonth();
					
					switch(monthNumber){
						case 0:
					        month = "January";
					        break;
					    case 1:
					        month = "February";
					        break;
					    case 2:
					        month = "March";
					        break;
					    case 3:
					        month = "April";
					        break;
					    case 4:
					        month = "May";
					        break;
					    case 5:
					        month = "June";
					        break;
					    case 6:
					        month = "July";
					        break;
					    case 7:
					        month = "August";
					        break;
					    case 8:
					        month = "September";
					        break;
					    case 9:
					        month = "October";
					        break;
					    case 10:
					        month = "November";
					        break;
					    case 11:
					        month = "December";
					        break;
					}
					$('#months').text(month);
				
			/*DATE OF THE MONTH*/

			var dateNumber = d.getDate();
			//console.log(dateNumber);
					switch(dateNumber){
						case 1:
					        date = "1";
					        break;
					    case 2:
					        date = "2";
					        break;
					    case 3:
					        date = "3";
					        break;
					    case 4:
					        date = "4";
					        break;
					    case 5:
					        date = "5";
					        break;
					    case 6:
					        date = "6";
					        break;
					    case 7:
					        date = "7";
					        break;
					    case 8:
					        date = "8";
					        break;
					    case 9:
					        date = "9";
					        break;
					    case 10:
					        date = "10";
					        break;
					    case 11:
					        date = "11";
					        break;
					    case 12:
					        date = "12";
					        break;
					    case 13:
					        date = "13";
					        break;
					    case 14:
					        date = "14";
					        break;
					    case 15:
					        date = "15";
					        break;
					    case 16:
					        date = "16";
					        break;
					    case 17:
					        date = "17";
					        break;
					    case 18:
					        date = "18";
					        break;
					    case 19:
					        date = "19";
					        break;
					    case 20:
					        date = "20";
					        break;
					    case 21:
					        date = "21";
					        break;
					    case 22:
					        date = "22";
					        break;
					    case 23:
					        date = "23";
					        break;
					    case 24:
					        date = "24";
					        break;
					    case 25:
					        date = "25";
					        break;
					    case 26:
					        date = "26";
					        break;
					    case 27:
					        date = "27";
					        break;
					    case 28:
					        date = "28";
					        break;
					    case 29:
					        date = "29";
					        break;
					    case 30:
					        date = "30";
					        break;
					    case 31:
					        date = "31";
					        break;
					}
					$('#dates').text(date);
			

			var tempCel = Math.floor(data.main.temp);
			var nameEntered = data.name;
			var windSpeed = data.wind.speed;
			var condition = data.weather[0].main;
			var humidityValue = data.main.humidity;
			var weatherIcons = data.weather[0].icon;
						
			

			$('#temp_deg').text(tempCel);
			$('#inputCity').text(nameEntered);
			$('#wind').text(windSpeed);
			$('#conditions').text(condition);
			$('#humid').text(humidityValue);
			$('#forecast-icon').prepend('<img id="theImg" src="http://openweathermap.org/img/w/'+weatherIcons+'.png" alt="weather-icon" width=100>');
		});	

	}
