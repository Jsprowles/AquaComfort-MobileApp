var locationToggle = 1;
var seasonToggle = 0;
var sizeToggle = 0;
var tempToggle = 0;
var blanketToggle = 0;
var resultsToggle = 0;
var usageToggle = 0;
var heatToggle = 0;
var activeTab = "location";
var selectedArea = "";
var selectedSeason = "";
var selectedTemp = "";
var selectedBlanket = "";
var selectedUsage = "";
var selectedHeat = "";
var heatLoadFactor = 525;
var poolSizeFactor = 0;
var surfaceArea = 0;
var tempFactor = 1;
var solarBlanketFactor = 1;
var btuCap = 115;
var cop = 6;
var elecCons = 5.5;
var elecRate = 0;
var ngRate = 0;
var oilRate = 0;
var propRate = 0;
var s = 1;
var locationLabel;

function setArea(areaSelected) {

	//selectedArea = areaSelected;
	//Search for previously selected areas

	$("#city-select li").each(function(i) {
		if ($(this).hasClass("selected")) {
			$(this).removeClass("selected");
			$(this).css("background-color", "#00CCFF");
		}
	});
	
	$("#"+areaSelected).addClass("selected");
	//$("#"+areaSelected).css("background-color", "yellow");
	selectedArea = areaSelected;
	locationLabel = $("#"+areaSelected).html();
	//selectedArea = areaSelected;//encodeURIComponent( $.trim($("#"+areaSelected).html()));
	//console.log(selectedArea);
	
	$.ajax({
			url: 'getSeasons.php',
			type: 'POST',
			data: {location_choice:areaSelected},
			dataType: 'html',
			success: function(data) {
				
				$("#ac-calculator-season-select").html(data);
				
				$("#ac-calculator-season-select li").mouseover(function() {
					if ($(this).hasClass("selected")) {
						
					} else {
						$(this).css("background-color", "#bed73b");
					}
				});

				$("#ac-calculator-season-select li").mouseout(function() {
					if ($(this).hasClass("selected")) {
					} else {
						$(this).css("background-color", "#00CCFF");
					}
				});
				
				$("#ac-calculator-season-select li").click(function() {
			
					$("#ac-calculator-season-select li").each(function(i){
						if ($(this).hasClass("selected")) {
							$(this).removeClass("selected");
							$(this).css("background-color", "#00CCFF");
						}
					});
	
					$(this).addClass("selected");
					$(this).css("background-color", "yellow");
	
					selectedSeason = $(this).attr('season');//$(this).html();
					
	//				console.log(selectedSeason);
				});
				
				if (seasonToggle == 0) {
					$("#ac-calculator-data-season-form").slideDown('fast');
					//$("#ac-calculator-data-season-button").css("background-image", "url(images/ac-data-season-button-active.png)");
					$("#ac-calculator-data-season").css("background-color", "#00CCFF");
				
					closePrevious(activeTab);
					seasonToggle = 1;
					activeTab = "season";
				} else {
					$("#ac-calculator-data-season-form").slideUp('fast');
					//$("#ac-calculator-data-season-button").css("background-image", "url(images/ac-data-season-button-closed.png)");
					seasonToggle = 0;
					activeTab = "";
				}
				
				// Mobile Stuff
				if (typeof isMobile === 'undefined') {
				    // isMobile is undefined
				} else {
					
					//console.log("Selected Area: " + areaSelected);
					
					var $page = $('#seasons');
					var markup = '<ul id="seasons-list" data-role="listview">';
						markup += data;
						markup += '</ul>';
					
					$('#seasonsContent').html(markup);
					
					$page.page();
					
					$('#seasons-list').listview();
					
					$("#seasons-list li").click(function() {
						
						selectedSeason = $(this).attr('season');
						
						console.log("Season Selected: " + selectedSeason);
					});
					
					$.mobile.changePage( $page );
					
				}
				
			} //success
			
		});
	
}

function mobileSetStep(step)
{
		s = step;
		alert(s);
}

function setTemp(tempSelected) {
	selectedTemp = tempSelected;
	
	$("#ac-calculator-temp-select li").each(function(i) {
		if($(this).hasClass("selected")) {
			$(this).removeClass("selected");
			//$(this).css("background-color", "#00CCFF");
		}
	});
	
	$("#temp"+selectedTemp).addClass("selected");
	//$("#temp"+selectedTemp).css("background-color", "yellow");
	console.log(tempSelected);
}


function setBlanket(blanketSelected) {
	selectedBlanket = blanketSelected;
	
	$("#ac-calculator-data-blanket-select li").each(function(i) {
			if ($(this).hasClass("selected")) {
				$(this).removeClass("selected");
				//$(this).css("background-color", "#00CCFF");
			}
	});
	
	$("#"+selectedBlanket).addClass("selected");
	//$("#"+selectedBlanket).css("background-color", "yellow");
	
	if (selectedBlanket == "SolarBlanket")
		selectedBlanket = $("#"+selectedBlanket).html();
		
	console.log(selectedBlanket);
																 
}

function setUsage(usageSelected) {
	selectedUsage = usageSelected;
	
	$("#ac-calculator-spausage-select li").each(function(i) {
			if ($(this).hasClass("selected")) {
				$(this).removeClass("selected");
				$(this).css("background-color", "#00CCFF");
			}
	});
	
	$("#spa"+selectedUsage).addClass("selected");
	$("#spa"+selectedUsage).css("background-color", "yellow");
	console.log(usageSelected);															 
}

function setHeat(heatSelected) {
	selectedHeat = heatSelected;
	
	$("#ac-calculator-heat-select li").each(function(i) {
			if ($(this).hasClass("selected")) {
				$(this).removeClass("selected");
				$(this).css("background-color", "#00CCFF");
			}
	});
	
	$("#"+heatSelected).addClass("selected");
	$("#"+heatSelected).css("background-color", "yellow");
	
	selectedHeat = $("#"+heatSelected).html();
	console.log(heatSelected);													 
}

function closePrevious(activeTab) {	
	switch (activeTab) {
		case "location":
			$("#ac-calculator-data-location-form").slideUp('fast');
			$("#ac-calculator-data-location").css("background-color", "#bed73b");
			$("#ac-calculator-data-location-button").css("background-image", "url(images/ac-data-location-button-closed.png)");
			locationToggle = 0;
			break;
		
		case "season":
			$("#ac-calculator-data-season-form").slideUp('fast');
			$("#ac-calculator-data-season").css("background-color", "#bed73b");
			$("#ac-calculator-data-season-button").css("background-image", "url(images/ac-data-season-button-closed.png)");
			seasonToggle = 0;
			break;
			
		case "size":
			$("#ac-calculator-data-size-form").slideUp('fast');
			$("#ac-calculator-data-size").css("background-color", "#bed73b");
			$("#ac-calculator-data-size-button").css("background-image", "url(images/ac-data-area-button-closed.png)");
			sizeToggle = 0;
			break;
			
		case "temp":
			$("#ac-calculator-data-temp-form").slideUp('fast');
			//$("#ac-calculator-data-temp").css("background-color", "#bed73b");
			$("#ac-calculator-data-temp-button").css("background-image", "url(images/ac-data-temp-button-closed.png)");
			break;
			
		case "blanket":
			$("#ac-calculator-data-blanket-form").slideUp('fast');
			//$("#ac-calculator-data-blanket").css("background-color", "#bed73b");
			$("#ac-calculator-data-blanket-button").css("background-image", "url(images/ac-data-blanket-button-closed.png)");
			break;
			
		case "spausage":
			$("#ac-calculator-data-spausage-form").slideUp('fast');
			$("#ac-calculator-data-spausage").css("background-color", "#bed73b");
			$("#ac-calculator-data-spausage-button").css("background-image", "url(images/ac-data-spausage-button-closed.png)");
			break;
			
		case "heat":
			$("#ac-calculator-data-heat-form").slideUp('fast');
			$("#ac-calculator-data-heat").css("background-color", "#bed73b");
			$("#ac-calculator-data-heat-button").css("background-image", "url(images/ac-data-heat-button-closed.png)");
			break;
		
		default:
			break;
	}
	
}


function resetNav()
{
	$('#ac-calculator-data-spausage').hide('fade');
	$('#ac-calculator-data-heat').hide('fade');
	$('#ac-calculator-results').slideUp('fast');
	$('#ac-calculator-1').removeClass('active');
	$('#ac-calculator-1').attr('src','images/s1.png');
			
	$('#ac-calculator-2').removeClass('active');
	$('#ac-calculator-2').attr('src','images/s2.png');
			
	$('#ac-calculator-3').removeClass('active');
	$('#ac-calculator-3').attr('src','images/s3.png');
}


$(document).ready(function() {

	$(document).ajaxStop($.unblockUI);
	
	$(document).ajaxStart(function() {
		$.blockUI({ css: { 
            border: 'none', 
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: .5, 
            color: '#fff' 
        } });
	});
	
	$("#city-select li").click(function() {
		setArea($(this).attr('id'));
	});
					   
	$("#city-select li:last").css("border-bottom", "1px solid #FFFFFF");
	$("#ac-calculator-season-select li:last").css("border-bottom", "1px solid #FFFFFF");
	$("#ac-calculator-data-blanket-select li:last").css("border-bottom", "1px solid #FFFFFF");
	
	
	$("#ac-calculator-1").mouseover(function() {
			$(this).attr('src', 'images/s1-active.png');
	});
	
	
	$("#ac-calculator-1").mouseout(function() {
			if(!$(this).hasClass('active')) {
				$(this).attr('src', 'images/s1.png');
			}
	});
	
	$("#ac-calculator-2").mouseover(function() {
			$(this).attr('src', 'images/s2-active.png');
	});
	
	
	$("#ac-calculator-2").mouseout(function() {
			if(!$(this).hasClass('active')) {
				$(this).attr('src', 'images/s2.png');
			}
	});
	
	$("#ac-calculator-3").mouseover(function() {
			$(this).attr('src', 'images/s3-active.png');
	});
	
	
	$("#ac-calculator-3").mouseout(function() {
			if(!$(this).hasClass('active')) {
				$(this).attr('src', 'images/s3.png');
			}
	});

	if (typeof isMobile === 'undefined') {
		
	    $("#ac-calculator-1").click(function() {
			resetNav();
			s = 1;
			$(this).addClass('active');
			$(this).attr('src','images/s1-active.png');
		});
		
		$("#ac-calculator-2").click(function() {
				resetNav();
				s = 2;
				$(this).addClass('active');
				$(this).attr('src','images/s2-active.png');
				$('#ac-calculator-data-spausage').show('fade');
				$('#ac-calculator-data-heat').show('fade');
		});
		
		$("#ac-calculator-3").click(function() {
				resetNav();
				s = 3;
				$(this).addClass('active');
				$(this).attr('src','images/s3-active.png');
		});
	} else {
		$("#ac-calculator-1").click(function() {
			s = 1;
		});
		
		$("#ac-calculator-2").click(function() {
			s = 2;
		});
		
		$("#ac-calculator-3").click(function() {
			s = 3;
		});
	}
	
	
	//Controls the mouseovers for the City Select List
	$("#city-select li").mouseover(function() {
	
		var cityID = $(this).attr("id");
		
		//alert ("You hovered over "+cityID);
	
		if ($("#"+cityID).hasClass("selected")) {
			//alert ("This button has already been selected, so don't do anything");
		} else {
			$(this).css("background-color", "#bed73b");
		}
	});
	
	$("#city-select li").mouseout(function() {
		
		var cityID = $(this).attr("id");
		
		if ($("#"+cityID).hasClass("selected")) {
			//do nothing
		} else {
			$(this).css("background-color", "#00CCFF");
		}
	});
	
	
	$("#ac-calculator-temp-select li").mouseover(function() {
		
			var tempID = $(this).attr("id");
			
			if ($("#"+tempID).hasClass("selected")) {
				//
			} else {
				//$(this).css("background-color", "#bed73b");
			}
	});
	
	
	$("#ac-calculator-temp-select li").mouseout(function() {
		
			var tempID = $(this).attr("id");
			
			if ($("#"+tempID).hasClass("selected")) {
				//do nothing
			} else {
				//$(this).css("background-color", "#00CCFF");
			}
	});
	
	
	$("#ac-calculator-data-blanket-select li").mouseover(function() {
		
			var tempID = $(this).attr("id");
			
			if ($("#"+tempID).hasClass("selected")) {
				//do nothing
			} else {
				//$(this).css("background-color", "#bed73b");
			}
	});
	
	
	$("#ac-calculator-data-blanket-select li").mouseout(function() {
		
			var tempID = $(this).attr("id");
			
			if ($("#"+tempID).hasClass("selected")) {
				//do nothing
			} else {
				//$(this).css("background-color", "#00CCFF");
			}
	});
	
	$("#ac-calculator-spausage-select li").mouseover(function() {
		
			var tempID = $(this).attr("id");
			
			if ($("#"+tempID).hasClass("selected")) {
				//do nothing
			} else {
				$(this).css("background-color", "#bed73b");
			}
	});
	
	
	$("#ac-calculator-spausage-select li").mouseout(function() {
		
			var tempID = $(this).attr("id");
			
			if ($("#"+tempID).hasClass("selected")) {
				//do nothing
			} else {
				$(this).css("background-color", "#00CCFF");
			}
	});
	
	$("#ac-calculator-heat-select li").mouseover(function() {
		
			var tempID = $(this).attr("id");
			
			if ($("#"+tempID).hasClass("selected")) {
				//do nothing
			} else {
				$(this).css("background-color", "#bed73b");
			}
	});
	
	
	$("#ac-calculator-heat-select li").mouseout(function() {
		
			var tempID = $(this).attr("id");
			
			if ($("#"+tempID).hasClass("selected")) {
				//do nothing
			} else {
				$(this).css("background-color", "#00CCFF");
			}
	});
	

	$("#ac-calculator-data-location-button").mouseover(function() {
		if (activeTab != "location") {
			$("#ac-calculator-data-location-button").css("background-image", "url(images/ac-data-location-button-hover.png)");
		}
	});
	
	$("#ac-calculator-data-location-button").mouseout(function() {								
		if (activeTab != "location") {
			$("#ac-calculator-data-location-button").css("background-image", "url(images/ac-data-location-button-closed.png)");
		}
	});

	$("#ac-calculator-data-location-button").click(function() {
			if (locationToggle == 0) {
				$("#ac-calculator-data-location-form").slideDown('fast');
			
				$("#ac-calculator-data-location-button").css("background-image", "url(images/ac-data-location-button-active.png)");
				$("#ac-calculator-data-location").css("background-color", "#00CCFF");
				
				closePrevious(activeTab);
				locationToggle = 1;
				activeTab = "location";
			} else {
				activeTab = "";
				$("#ac-calculator-data-location-form").slideUp('fast');
				$("#ac-calculator-data-location-button").css("background-image", "url(images/ac-data-location-button-closed.png)");
				locationToggle = 0;
			}
	});
	
	
	
	
	
	$("#ac-calculator-data-season-button").mouseover(function() {
		if (activeTab != "season") {
			$("#ac-calculator-data-season-button").css("background-image", "url(images/ac-data-season-button-hover.png)");
		}
	});
	
	$("#ac-calculator-data-season-button").mouseout(function() {
		if (activeTab != "season") {
			$("#ac-calculator-data-season-button").css("background-image", "url(images/ac-data-season-button-closed.png)");
		}
	});
	
	$("#ac-calculator-data-season-button").click(function() {
		if (seasonToggle == 0) {
			$("#ac-calculator-data-season-form").slideDown('fast');
		
			$("#ac-calculator-data-season-button").css("background-image", "url(images/ac-data-season-button-active.png)");
			$("#ac-calculator-data-season").css("background-color", "#00CCFF");
			
			closePrevious(activeTab);
			seasonToggle = 1;
			activeTab = "season";
		} else {
			$("#ac-calculator-data-season-form").slideUp('fast');
			$("#ac-calculator-data-season-button").css("background-image", "url(images/ac-data-season-button-closed.png)");
			seasonToggle = 0;
			activeTab = "";
		}
	});
	
	
	
	
	$("#ac-calculator-data-size-button").mouseover(function() {
		if (activeTab != "size") {
			$("#ac-calculator-data-size-button").css("background-image", "url(images/ac-data-area-button-hover.png)");		
		}
	});
	
	$("#ac-calculator-data-size-button").mouseout(function() {
		if (activeTab != "size") {
			$("#ac-calculator-data-size-button").css("background-image", "url(images/ac-data-area-button-closed.png)");
		}
	});
	
	$("#ac-calculator-data-size-button").click(function() {
		if (sizeToggle == 0) {
			$("#ac-calculator-data-size-form").slideDown('fast');
			$("#ac-calculator-data-size-button").css("background-image", "url(images/ac-data-area-button-active.png)");
			$("#ac-calculator-data-size").css("background-color", "#00CCFF");
			
			closePrevious(activeTab);
			sizeToggle = 1;
			activeTab = "size";
		} else {
			$("#ac-calculator-data-size-form").slideUp('fast');
			$("#ac-calculator-data-size-button").css("background-image", "url(images/ac-data-area-button-closed.png)");
			sizeToggle = 0;
			activeTab = "";
		}
	});
	
	
	
	
	$("#ac-calculator-data-temp-button").mouseover(function() {
		if (activeTab != "temp") {
			$("#ac-calculator-data-temp-button").css("background-image", "url(images/ac-data-temp-button-hover.png)");
		}
	});
	
	$("#ac-calculator-data-temp-button").mouseout(function() {
		if (activeTab != "temp") {
			$("#ac-calculator-data-temp-button").css("background-image", "url(images/ac-data-temp-button-closed.png)");
		}
	});

	$("#ac-calculator-data-temp-button").click(function() {
		if (tempToggle == 0) {
			$("#ac-calculator-data-temp-form").slideDown('fast');
			$("#ac-calculator-data-temp-button").css("background-image", "url(images/ac-data-temp-button-active.png)");
			$("#ac-calculator-data-temp").css("background-color", "#00CCFF");
			
			closePrevious(activeTab);
			tempToggle = 1;
			activeTab = "temp";
		} else {
			$("#ac-calculator-data-temp-form").slideUp('fast');
			$("#ac-calculator-data-temp-button").css("background-image", "url(images/ac-data-temp-button-closed.png)");
			tempToggle = 0;
			activeTab = "";
		}
	});





	$("#ac-calculator-data-blanket-button").mouseover(function() {
		if (activeTab != "blanket") {
			$("#ac-calculator-data-blanket-button").css("background-image", "url(images/ac-data-blanket-button-hover.png)");
		}
	});
	
	$("#ac-calculator-data-blanket-button").mouseout(function() {
		if (activeTab != "blanket") {
			$("#ac-calculator-data-blanket-button").css("background-image", "url(images/ac-data-blanket-button-closed.png)");
		}
	});
	
	$("#ac-calculator-data-blanket-button").click(function() {
		if (blanketToggle == 0) {
			$("#ac-calculator-data-blanket-form").slideDown('fast');
			$("#ac-calculator-data-blanket-button").css("background-image", "url(images/ac-data-blanket-button-active.png)");
			$("#ac-calculator-data-blanket").css("background-color", "#00CCFF");
			
			closePrevious(activeTab);
			blanketToggle = 1;
			activeTab = "blanket";
		} else {
			$("#ac-calculator-data-blanket-form").slideUp('fast');
			$("#ac-calculator-data-blanket-button").css("background-image", "url(images/ac-data-blanket-button-closed.png)");
			blanketToggle = 0;
			activeTab = "";
		}
	});
	
	$("#ac-calculator-data-spausage-button").mouseover(function() {
		if (activeTab != "spausage") {
			$("#ac-calculator-data-spausage-button").css("background-image", "url(images/ac-data-spausage-button-hover.png)");
		}
	});
	
	$("#ac-calculator-data-spausage-button").mouseout(function() {
		if (activeTab != "spausage") {
			$("#ac-calculator-data-spausage-button").css("background-image", "url(images/ac-data-spausage-button-closed.png)");
		}
	});
	
	$("#ac-calculator-data-spausage-button").click(function() {
		if (usageToggle == 0) {
			$("#ac-calculator-data-spausage-form").slideDown('fast');
			$("#ac-calculator-data-spausage-button").css("background-image", "url(images/ac-data-spausage-button-active.png)");
			$("#ac-calculator-data-spausage").css("background-color", "#00CCFF");
			
			closePrevious(activeTab);
			usageToggle = 1;
			activeTab = "spausage";
		} else {
			$("#ac-calculator-data-spausage-form").slideUp('fast');
			$("#ac-calculator-data-spausage-button").css("background-image", "url(images/ac-data-spausage-button-closed.png)");
			usageToggle = 0;
			activeTab = "";
		}
	});
	
	
	$("#ac-calculator-data-heat-button").mouseover(function() {
		if (activeTab != "heat") {
			$("#ac-calculator-data-heat-button").css("background-image", "url(images/ac-data-heat-button-hover.png)");
		}
	});
	
	$("#ac-calculator-data-heat-button").mouseout(function() {
		if (activeTab != "heat") {
			$("#ac-calculator-data-heat-button").css("background-image", "url(images/ac-data-heat-button-closed.png)");
		}
	});
	
	$("#ac-calculator-data-heat-button").click(function() {
		if (heatToggle == 0) {
			$("#ac-calculator-data-heat-form").slideDown('fast');
			$("#ac-calculator-data-heat-button").css("background-image", "url(images/ac-data-heat-button-active.png)");
			$("#ac-calculator-data-heat").css("background-color", "#00CCFF");
			
			closePrevious(activeTab);
			heatToggle = 1;
			activeTab = "heat";
		} else {
			$("#ac-calculator-data-heat-form").slideUp('fast');
			$("#ac-calculator-data-heat-button").css("background-image", "url(images/ac-data-heat-button-closed.png)");
			heatToggle = 0;
			activeTab = "";
		}
	});
	
	
	$("#ac-calculator-data-calculateBtn").mouseover(function() {
		$("#ac-calculator-data-calculateBtn").css("background", "gradient(#FFF28, #EOE521) repeat scroll 0 0 #F9FF25;)");														 
	});
	
	$("#ac-calculator-data-calculateBtn").mouseout(function() {
		$("#ac-calculator-data-calculateBtn").css("background", "gradient(#EEF624, #C3C91D) repeat scroll 0 0 #D9E021;)");														
	});

	$("#ac-calculator-data-calculateBtn").click(function() {
		
			$("#ac-calculator-data-location-form").slideUp('fast');
			$("#ac-calculator-data-location").css("background-color", "#bed73b");
			$("#ac-calculator-data-location-button").css("background-image", "url(images/ac-data-location-button-closed.png)");
			locationToggle = 0;
		
			$("#ac-calculator-data-season-form").slideUp('fast');
			$("#ac-calculator-data-season").css("background-color", "#bed73b");
			$("#ac-calculator-data-season-button").css("background-image", "url(images/ac-data-season-button-closed.png)");
			seasonToggle = 0;
			
			$("#ac-calculator-data-size-form").slideUp('fast');
			$("#ac-calculator-data-size").css("background-color", "#bed73b");
			$("#ac-calculator-data-size-button").css("background-image", "url(images/ac-data-area-button-closed.png)");
			sizeToggle = 0;

			$("#ac-calculator-data-temp-form").slideUp('fast');
			$("#ac-calculator-data-temp").css("background-color", "#bed73b");
			$("#ac-calculator-data-temp-button").css("background-image", "url(images/ac-data-temp-button-closed.png)");
			
			$("#ac-calculator-data-blanket-form").slideUp('fast');
			$("#ac-calculator-data-blanket").css("background-color", "#bed73b");
			$("#ac-calculator-data-blanket-button").css("background-image", "url(images/ac-data-blanket-button-closed.png)");
			
			$("#ac-calculator-data-spausage-form").slideUp('fast');
			$("#ac-calculator-data-spausage").css("background-color", "#bed73b");
			$("#ac-calculator-data-spausage-button").css("background-image", "url(images/ac-data-spausage-button-closed.png)");
			
			$("#ac-calculator-data-heat-form").slideUp('fast');
			$("#ac-calculator-data-heat").css("background-color", "#bed73b");
			$("#ac-calculator-data-heat-button").css("background-image", "url(images/ac-data-heat-button-closed.png)");

		
		
		switch(selectedSeason) {
			case "season1":
				heatLoadFactor = 525;
				break;
			
			case "season2":
				heatLoadFactor = 495;
				break;
			
			case "season3":
				heatLoadFactor = 465;
				break;
				
			case "season4":
				heatLoadFactor = 405;
				break;
				
			case "season5":
				heatLoadFactor = 380;
				break;
				
			case "season6":
				heatLoadFactor = 330;
				break;
				
			case "season7":
				heatLoadFactor = 250;
				break;
				
			case "season8":
				heatLoadFactor = 220;
				break;
				
			default:
				heatLoadFactor = 525;
		}
		
		
		switch(selectedTemp) {
			
			case "temp78":
				tempFactor = 0.68;
				break;
			
			case "temp79":
				tempFactor = 0.77;
				break;
				
			case "temp80":
				tempFactor = 0.85;
				break;
				
			case "temp81":
				tempFactor = 0.93;
				break;
			
			case "temp82":
				tempFactor = 1.0;
				break;
				
			case "temp83":
				tempFactor = 1.07;
				break;
				
			case "temp84":
				tempFactor = 1.15;
				break;
				
			case "temp85":
				tempFactor = 1.23;
				break;
				
			case "temp86":
				tempFactor = 1.31;
				break;
				
			case "temp87":
				tempFactor = 1.40;
				break;
				
			case "temp88":
				tempFactor = 1.48;
				break;
				
			case "temp89":
				tempFactor = 1.56;
				break;
				
			case "temp90":
				tempFactor = 1.63;
				break;
				
			case "temp100":
				tempFactor = 3.0;
				break;
				
			case "temp104":
				tempFactor = 3.5;
				break;
				
			default:
				tempFactor = 1;
		}
		
		
		if ($("#surface-area-input").attr("value") == "" || $("#surface-area-input").attr("value") == "Surface Area (sq. ft)") {
			if ($("#width-input").attr("value") == "" || $("#length-input").attr("value") == "" || $("#width-input").attr("value") == "width" || $("#length-input").attr("value") == "length") {
				if ($("#capacity-input").attr("value") == "" || $("#capacity-input").attr("value") == "capacity") {
					surfaceArea = null;
					alert ("You need to enter a Surface Area");
				} else {
					surfaceArea = $("#capacity-input").attr("value");	
				}
			} else {
				surfaceArea = $("#width-input").attr("value") * $("#length-input").attr("value");	
			}
		} else {
			surfaceArea = $("#surface-area-input").attr("value");
		}
		
		poolSizeFactor = surfaceArea / 648;
		
		switch (selectedBlanket) {
			case "blanket1":
				solarBlanketFactor = 1;
				break;
				
			case "blanket2":
				solarBlanketFactor = 2.2;
				break;
				
			case "blanket3":
				solarBlanketFactor = 1.8;
				break;
				
			default:
				solarBlanketFactor = 1;
		}
		
		var json = {location_label:locationLabel,comparison_choice:s,location_choice:selectedArea,season_choice:selectedSeason,surface_area:surfaceArea,water_temp:selectedTemp,cover:selectedBlanket,spa_usage:selectedUsage,heat_source:selectedHeat};
		console.log(json);
		
		$.ajax({
			url: 'getResults.php',
			type: 'POST',
			data: json,
			dataType: 'html',
			success: function(data) {
				console.log(data);
				
				//$("#ac-calculator-results").slideDown('fast');
				
				$("#ac-calculator-results").html(data);
				$("#ac-calculator-results").slideDown('fast');
				
				//elecRate = data.elecRate;
				//ngRate = data.ngRate;
				//oilRate = data.oilRate;
				//propRate = data.propRate;
			}
		});
		
		/*
		var heatFactor = heatLoadFactor * poolSizeFactor * tempFactor * solarBlanketFactor;
		
		var btuLoad = (heatFactor * 1000 / btuCap * 0.95) * 0.68;
		
		var ngCost = ((heatFactor * 1.42 / 0.78 * ngRate) * 0.9).toFixed(2);
		var propCost = ((heatFactor * 1.56 / 0.78 * propRate) * 0.75).toFixed(2);
		var oilCost = ((heatFactor * 1.16 / 0.68 * oilRate) * 0.8).toFixed(2);
		var opCost = (((btuLoad / cop * elecCons * elecRate) * 100) / 100).toFixed(2);
		
		var ngSavings = (ngCost - opCost).toFixed(2);
		var propSavings = (propCost - opCost).toFixed(2);
		var oilSavings = (oilCost - opCost).toFixed(2);
		*/
		
		/*
		var alertString = "Heat Load Factor:  " + heatLoadFactor + "\nPool Size Factor:  " + poolSizeFactor + "\nTemperature Factor:  " + tempFactor + "\nSolar Blanket Factor:  " + solarBlanketFactor + "\nHeat Factor:  " + heatFactor + "\nbtu Load:  " + btuLoad + "\nElectricity Rate:  $" + elecRate + "\nNatural Gas Rate:  $" + ngRate + "\nPropane Rate:  $" + propRate + "\nOil Rate:  $" + oilRate + "\n\nOperating Costs:  $" + opCost + "\n\nNatural Gas Cost:  $" + ngCost + "\nPropane Cost:  $" + propCost + "\nOil Cost:  $" + oilCost + "\n\nNatural Gas Savings:  $" + ngSavings + "\nPropane Savings:  $" + propSavings + "\nOil Savings:  $" + oilSavings;
		
		alert (alertString);
		*/
		
		/*
		$("#ac-calculator-results-acOpCost").empty().append("<span>$" + opCost + "</span>");
		$("#ac-calculator-results-ngCost").empty().append("<span>$" + ngCost + "</span>");
		$("#ac-calculator-results-propCost").empty().append("<span>$" + propCost + "</span>");
		//$("#ac-calculator-results-oilCost").empty().append("<span>$" + oilCost + "</span>");
		$("#ac-calculator-results-ngSavings").empty().append("<span>$" + ngSavings + "</span>");
		$("#ac-calculator-results-propSavings").empty().append("<span>$" + propSavings + "</span>");
		//$("#ac-calculator-results-oilSavings").empty().append("<span>$" + oilSavings + "</span>");
		
		$("#ac-calculator-results").slideDown('fast');
		*/
		
		/*
		if (resultsToggle == 0) {
			$("#ac-calculator-results").slideDown('fast');
			resultsToggle = 1;
		} else {
			$("#ac-calculator-results").slideUp('fast');
			resultsToggle = 0;
		}
		*/
	});
	
	
	
//Input Entry Functions
	$("#surface-area-input").focus(function() {
		if ($(this).attr("value") == "Surface Area (sq. ft)") {
			$(this).attr("value", "");
		}
	});
	
	$("#surface-area-input").blur(function() {
		if ($(this).attr("value") == "" || $(this).attr("value") == null) {
			$(this).attr("value", "Surface Area (sq. ft)");
		}
	});
	
	
	$("#width-input").focus(function() {
		if ($(this).attr("value") == "width") {
			$(this).attr("value", "");
		}
	});
	
	$("#width-input").blur(function() {
		if ($(this).attr("value") == "" || $(this).attr("value") == null) {
			$(this).attr("value", "width");
		}
	});
	
	$("#length-input").focus(function() {
		if ($(this).attr("value") == "length") {
			$(this).attr("value", "");
		}
	});
	
	$("#length-input").blur(function() {
		if ($(this).attr("value") == "" || $(this).attr("value") == null) {
			$(this).attr("value", "length");
		}
	});
	
	$("#capacity-input").focus(function() {
		if ($(this).attr("value") == "capacity") {
			$(this).attr("value", "");
		}
	});
	
	$("#capacity-input").blur(function() {
		if ($(this).attr("value") == "" || $(this).attr("value") == null) {
			$(this).attr("value", "capacity");
		}
	});
	
});