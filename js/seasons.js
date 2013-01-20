function getCalc(comparison, location,season,sarea,temp,blanket,spa,heat){
  
  
 
var comparison_choice = comparison;						
var location_choice   = location;
var season_choice     = season;
var surface_area      = sarea;
var water_temp        = temp;
var cover             = blanket;
var blanket_factor    = [];

if (comparison_choice == 2)
{
		
                var spa_usage   = spa;
		var heat_source = heat;
}

var units='';
if (heat_source == "NaturalGas") {
        units = "Therm";
} else if (heat_source == "Propane") {
	units = "Gallon";
}

var size_factor = surface_area / 648;

blanket_factor["Autocover"] = 1.6;
blanket_factor["No"] = 2.2;
blanket_factor["Solar Blanket"] = 1;

/* blanket_factor[cover] = the blanket factor */
var temp_factor = [];
temp_factor[78] = 0.68;
temp_factor[79] = 0.77;
temp_factor[80] = 0.85;
temp_factor[81] = 0.93;
temp_factor[82] = 1;
temp_factor[83] = 1.07;
temp_factor[84] = 1.15;
temp_factor[85] = 1.23;
temp_factor[86] = 1.31;
temp_factor[87] = 1.4;
temp_factor[88] = 1.48;
temp_factor[89] = 1.56;
temp_factor[90] = 1.65;
temp_factor[100] = 3;
temp_factor[104] = 3.5;

/* $temp_factor[$water_temp] = the temp factor */

var util_rates = [];
				
	util_rates["al_birmingham"] = {
			"KW" : 0.113,
		 	"Therm" : 1.85,
			"Gallon" : 2.21}

	util_rates["al_mobile"] = {
		 	"KW" : 0.113,
		 	"Therm" : 1.85,
			"Gallon" : 2.21}

	util_rates["little_rock_ar"] = {
                        "KW" : 0.091,
                        "Therm" : 1.49,
                        "Gallon" : 1.99}
			 
	util_rates["az_phoenix"] = {
			"KW" : 0.110,
			"Therm" : 1.77,
			"Gallon" : 1.89}
			  
	util_rates["concord_ca"] = {
			"KW" : 0.152,
			"Therm" : 1.01,
			"Gallon" : 1.99}
			 
	util_rates["los_angeles_ca"] = {
			"KW" : 0.152,
			"Therm" : 1.01,
			"Gallon" : 1.99}
			 
	util_rates["sacramento_ca"] = {
			"KW" : 0.140,
			"Therm" : 1.01,
			"Gallon" : 1.99}
			 
        util_rates["san_diego_ca"] ={
			"KW" : 0.175,
			"Therm" : 1.01,
			"Gallon" : 1.99}
			 
	util_rates["san_francisco_ca"] ={
			"KW" : 0.160,
			"Therm" : 1.01,
			"Gallon" : 1.99}
			 
	util_rates["denver_co"] ={
		     	"KW" : 0.112,
                        "Therm" : 0.87,
			"Gallon" : 1.79}

	util_rates["fairfield_county_ct"] ={
			 	"KW" : 0.172,
			 "Therm" : 1.79,
			 "Gallon" : 2.39}

	util_rates["hartford_ct"] ={
			 	"KW" : 0.172,
			 	"Therm" : 1.79,
			 	"Gallon" : 2.39}

	util_rates["washington_dc"] ={
			 	"KW" : 0.134,
			 "Therm" : 1.39,
			 "Gallon" : 2.39}
			 
	util_rates["wilmington_de"] ={
			 	"KW" : 0.137,
			 "Therm" : 1.81,
			 "Gallon" : 2.44}

	util_rates["daytona_beach_fl"] ={
			 	"KW" : 0.116,
			 "Therm" : 2.02,
			 "Gallon" : 2.19}
			 
	util_rates["fort_myers_fl"] ={
			 	"KW" : 0.116,
			 "Therm" : 2.02,
			 "Gallon" : 2.19}

        util_rates["gainesville_fl"] ={
			 	"KW" : 0.116,
			 "Therm" : 2.02,
			 "Gallon" : 2.19}

	util_rates["jacksonville_fl"] ={
			 	"KW" : 0.116,
			 "Therm" : 2.02,
			 "Gallon" : 2.19}

	util_rates["melbourne_fl"] ={
			 	"KW" : 0.116,
			 "Therm" : 2.02,
			 "Gallon" : 2.19}

	util_rates["miami_ft_lauderdale_fl"] ={
			 	"KW" : 0.116,
			 "Therm" : 2.02,
			 "Gallon" : 2.19}

	util_rates["orlando_fl"] ={
			 	"KW" : 0.116,
			 "Therm" : 2.02,
			 "Gallon" : 2.19}
			 
	util_rates["pensacola_fl"] ={
			 	"KW" : 0.116,
			 "Therm" : 2.02,
			 "Gallon" : 2.19}

	util_rates["sarasota_fl"] ={
			 	"KW" : 0.116,
			 "Therm" : 2.02,
			 "Gallon" : 2.19}

	util_rates["tallahasee_fl"] ={
			 	"KW" : 0.116,
			 "Therm" : 2.02,
			 "Gallon" : 2.19}

	util_rates["tampa_fl"] = {
			 	"KW" : 0.116,
			 "Therm" : 2.02,
			 "Gallon" : 2.19}
			 
	util_rates["FL-West Palm Beach"] ={
			 	"KW" : 0.116,
			 "Therm" : 2.02,
			 "Gallon" : 2.19}

	util_rates["atlanta_ga"] = {
			 	"KW" : 0.110,
			 "Therm" : 1.99,
			 "Gallon" : 2.39}

	util_rates["savannah_ga"] ={
			 	"KW" : 0.110,
			 "Therm" : 1.99,
			 "Gallon" : 2.39}

	util_rates["des_moines_ia"] ={
			 	"KW" : 0.105,
			 "Therm" : 1.06,
			 "Gallon" : 1.75}

	util_rates["boise_id"] ={
			 	"KW" : 0.079,
			 "Therm" : 1.01,
			 "Gallon" : 1.75}

	util_rates["chicago_il"] ={
			 	"KW" : 0.132,
			 "Therm" : 1.27,
			 "Gallon" : 1.99}

	util_rates["peoria_il"] ={
			 	"KW" : 0.118,
			 "Therm" : 1.27,
			 "Gallon" : 1.90}

        util_rates["springfield_il"] ={
			 	"KW" : 0.118,
			 "Therm" : 1.27,
			 "Gallon" : 1.90}

	util_rates["IN-Fort Wayne"] = {
			 	"KW" : 0.100,
			 "Therm" : 1.26,
			 "Gallon" : 1.90}

	util_rates["indianapolis_in"] = {
			 	"KW" : 0.100,
			 "Therm" : 1.26,
			 "Gallon" : 1.90}

	util_rates["wichita_ks"] = {
			 	"KW" : 0.106,
			 "Therm" : 1.30,
			 "Gallon" : 1.78}

	util_rates["lexington_ky"] ={
			 	"KW" : 0.090,
			 "Therm" : 1.38,
			 "Gallon" : 2.19}

	util_rates["louisville_ky"] = {
			 	"KW" : 0.090,
			 "Therm" : 1.38,
			 "Gallon" : 2.19}

	util_rates["baton_rouge_la"] ={
			 	"KW" : 0.091,
			 "Therm" : 1.39,
			 "Gallon" : 1.66}

	util_rates["new_orleans_la"] ={
			 	"KW" : 0.091,
			 "Therm" : 1.39,
			 "Gallon" : 1.66}

	util_rates["shreveport_la"] ={
			 	"KW" : 0.091,
			 "Therm" : 1.39,
			 "Gallon" : 1.66}

	util_rates["boston_ma"] ={ 
			 	"KW" : 0.156,
			 "Therm" : 1.56,
			 "Gallon" : 2.39}

	util_rates["springfield_ma"] = {
			 	"KW" : 0.140,
			 "Therm" : 1.56,
			 "Gallon" : 2.39}

	util_rates["baltimore_md"] = {
			 	"KW" : 0.134,
			 "Therm" : 1.47,
			 "Gallon" : 2.29}
			 
	util_rates["portland_me"] = {
			 	"KW" : 0.154,
			 "Therm" : 1.44,
			 "Gallon" : 2.39}

	util_rates["detroit_mi"] ={
			 	"KW" : 0.131,
			 "Therm" : 1.09,
			 "Gallon" : 2.05}

	util_rates["grand_rapids_mi"] = {
			 	"KW" : 0.131,
			 "Therm" : 1.09,
			 "Gallon" : 2.05}

	util_rates["minneapolis_mn"] = {
			 	"KW" : 0.109,
			 "Therm" : 0.91,
			 "Gallon" : 1.66}
			 
	util_rates["MO-Kansas City"] = {
			 	"KW" : 0.097,
			 "Therm" : 1.43,
			 "Gallon" : 1.62}

	util_rates["st_louis_mo"] = {
			 	"KW" : 0.097,
			 "Therm" : 1.43,
			 "Gallon" : 1.62}

	util_rates["jackson_ms"] = {
			 	"KW" : 0.101,
			 "Therm" : 1.27,
			 "Gallon" : 1.99}
			 
	util_rates["great_falls_mt"] = {
			 	"KW" : 0.097,
			 "Therm" : 0.90,
			 "Gallon" : 1.58}

	util_rates["asheville_nc"] = {
			 	"KW" : 0.102,
			 "Therm" : 1.48,
			 "Gallon" : 2.01}

	util_rates["charlotte_nc"] = {
			 	"KW" : 0.102,
			 "Therm" : 1.48,
			 "Gallon" : 2.01}

	util_rates["raleigh_nc"] = {
			 	"KW" : 0.102,
			 "Therm" : 1.48,
			 "Gallon" : 2.01}
			 
	util_rates["bismark_nd"] = {
			 	"KW" : 0.085,
			 "Therm" : 0.90,
			 "Gallon" : 1.45}

	util_rates["omaha_ne"] = {
			 	"KW" : 0.093,
			 "Therm" : 0.95,
			 "Gallon" : 1.56}

	util_rates["manchester_nh"] = {
			 	"KW" : 0.165,
			 "Therm" : 1.59,
			 "Gallon" : 2.39}

	util_rates["north_nj"] = {
			 	"KW" : 0.162,
			 "Therm" : 1.29,
			 "Gallon" : 2.49}

	util_rates["south_nj"] = {
			 	"KW" : 0.150,
			 "Therm" : 1.29,
			 "Gallon" : 2.49}

	util_rates["albuquerque_nm"] = {
			 	"KW" : 0.110,
			 "Therm" : 1.01,
			 "Gallon" : 1.68}

	util_rates["roswell_nm"] = {
			 	"KW" : 0.110,
			 "Therm" : 1.01,
			 "Gallon" : 1.68}

	util_rates["las_vegas_nv"] = {
			 	"KW" : 0.116,
			 "Therm" : 1.18,
			 "Gallon" : 1.89}
			 
	util_rates["reno_nv"] = {
			 	"KW" : 0.116,
			 "Therm" : 1.18,
			 "Gallon" : 1.89}

	util_rates["albany_ny"] = {
			 	"KW" : 0.147,
			 "Therm" : 1.52,
			 "Gallon" : 2.39}
			 
	util_rates["long_island_ny"] = {
			 	"KW" : 0.181,
			 "Therm" : 1.88,
			 "Gallon" : 2.69}

	util_rates["upstate_ny"] = {
			 	"KW" : 0.147,
			 "Therm" : 1.52,
			 "Gallon" : 2.39}

	util_rates["westchester_ny"] = {
			 	"KW" : 0.181,
			 "Therm" : 1.88,
			 "Gallon" : 2.79}

	util_rates["cincinnati_oh"] = {
			 	"KW" : 0.114,
			 "Therm" : 1.35,
			 "Gallon" : 1.99}
			 
	util_rates["cleveland_oh"] = {
			 	"KW" : 0.114,
			 "Therm" : 1.35,
			 "Gallon" : 1.99}

	util_rates["columbus_oh"] = {
			 	"KW" : 0.114,
			 "Therm" : 1.35,
			 "Gallon" : 1.99}

	util_rates["OH-Toledo"] = {
			 	"KW" : 0.114,
			 "Therm" : 1.35,
			 "Gallon" : 1.99}

	util_rates["oklahoma_city_ok"] = {
			 	"KW" : 0.095,
			 "Therm" : 1.18,
			 "Gallon" : 1.57}

	util_rates["OK-Tulsa"] = {
			 	"KW" : 0.095,
			 "Therm" : 1.18,
			 "Gallon" : 1.57}

	util_rates["portland_or"] = {
			 	"KW" : 0.096,
			 "Therm" : 1.31,
			 "Gallon" : 1.78}

	util_rates["harrisburg_pa"] = {
			 	"KW" : 0.102,
			 "Therm" : 1.43,
			 "Gallon" : 2.25}

	util_rates["philadelphia_pa"] = {
			 	"KW" : 0.132,
			 "Therm" : 1.43,
			 "Gallon" : 2.25}
			 
	util_rates["pittsburgh_pa"] = {
			 	"KW" : 0.102,
			 "Therm" : 1.43,
			 "Gallon" : 2.25}

	util_rates["providence_ri"] = {
			 	"KW" : 0.144,
			 "Therm" : 1.84,
			 "Gallon" : 2.69}

	util_rates["charleston_sc"] = {
			 	"KW" : 0.111,
			 "Therm" : 1.52,
			 "Gallon" : 2.10}
			 
	util_rates["columbia_sc"] = {
			 	"KW" : 0.111,
			 "Therm" : 1.52,
			 "Gallon" : 2.10}

	util_rates["pierre_sd"] = {
			 	"KW" : 0.093,
			 "Therm" : 0.89,
			 "Gallon" : 1.57}

	util_rates["knoxville_tn"] = {
			 	"KW" : 0.098,
			 "Therm" : 1.20,
			 "Gallon" : 1.66}

        util_rates["memphis_tn"] = {
			 	"KW" : 0.098,
			 "Therm" : 1.20,
			 "Gallon" : 1.66}
			 
	util_rates["nashville_tn"] = {
			 	"KW" : 0.098,
			 "Therm" : 1.20,
			 "Gallon" : 1.66}

	util_rates["austin_tx"] = {
			 	"KW" : 0.112,
			 "Therm" : 1.23,
			 "Gallon" : 1.58}
			 
	util_rates["dallas_tx"] = {
			 	"KW" : 0.112,
			 "Therm" : 1.23,
			 "Gallon" : 1.58}

	util_rates["el_paso_tx"] = {
			 	"KW" : 0.119,
			 "Therm" : 1.23,
			 "Gallon" : 1.58}

	util_rates["houston_tx"] = {
			 	"KW" : 0.119,
			 "Therm" : 1.23,
			 "Gallon" : 1.58}

	util_rates["san_antonio_tx"] = {
			 	"KW" : 0.112,
			 "Therm" : 1.23,
			 "Gallon" : 1.58}
			 
	util_rates["salt_lake_city_ut"] = {
			 	"KW" : 0.089,
			 "Therm" : 0.83,
			 "Gallon" : 1.57}

	util_rates["norfolk_va"] = {
			 	"KW" : 0.106,
			 "Therm" : 1.55,
			 "Gallon" : 2.33}

	util_rates["richmond_va"] = {
			 	"KW" : 0.106,
			 "Therm" : 1.55,
			 "Gallon" : 2.33}
			 
	util_rates["burlington_vt"] = {
			 	"KW" : 0.162,
			 "Therm" : 1.67,
			 "Gallon" : 2.39}

	util_rates["seattle_wa"] = {
			 	"KW" : 0.083,
			 "Therm" : 1.30,
			 "Gallon" : 1.72}

	util_rates["spokane_wa"] = {
			 	"KW" : 0.083,
			 "Therm" : 1.30,
			 "Gallon" : 1.72}

	util_rates["madison_wi"] = {
			 	"KW" : 0.130,
			 "Therm" : 1.09,
			 "Gallon" : 1.88}

	util_rates["milwaukee_wi"] = {
			 	"KW" : 0.130,
			 "Therm" : 1.09,
			 "Gallon" : 1.88}

	util_rates["charleston_wv"] = {
			 	"KW" : 0.094,
			 "Therm" : 1.30,
			 "Gallon" : 1.66}
			 
	util_rates["cheyenne-wy"] = {
			 	"KW" : 0.091,
			 "Therm" : 0.92,
			 "Gallon" : 1.57}
			    
var PHL = {
            "al_birmingham" : {
		"3/1 - 11/15" : 675,
			"3/1 - 11/30" : 725,
			"3/15 - 11/15" : 625,
			"4/1 - 11/15" : 505,
			"4/15 - 10/15" : 320,
			"4/15 - 11/1" : 370,
			"4/15 - 11/15" : 465},

		"al_mobile" : {
			"1/1 - 12/31" : 1500,
			"2/1 - 12/31" : 1300,
			"3/1 - 11/15" : 545,
			"3/1 - 11/30" : 595,
			"3/1 - 12/31" : 900,
			"3/15 - 11/15" : 465,
			"4/1 - 11/15" : 365,
			"4/15 - 10/15" : 200,
			"4/15 - 11/1" : 255,
			"4/15 - 11/15" : 330},

			 "little_rock_ar" :
		{"3/1 - 11/15" : 765,
			 "3/1 - 11/30" : 860,
			 "3/15 - 11/15" : 710,
			 "4/1 - 11/15" : 575,
			 "4/15 - 10/15" : 355,
			 "4/15 - 11/1" : 420,
			 "4/15 - 11/15" : 525},
			 
			 "az_phoenix" :
		{"1/1 - 12/31" : 1095,
			 "2/1 - 12/31" : 925,
			 "3/1 - 11/30" : 500,
			 "3/1 - 12/31" : 725},
			  
			 "concord_ca" :
		{"3/1 - 11/15" : 775,
			 "3/1 - 11/30" : 850,
			 "3/15 - 11/15" : 725,
			 "4/1 - 11/15" : 575,
			 "4/15 - 10/15" : 400,
			 "4/15 - 11/1" : 475,
			 "4/15 - 11/15" : 525},
			 
			 "los_angeles_ca" :
		{"1/1 - 12/31" : 1320,
			 "2/1 - 12/31" : 1200,
			 "3/1 - 11/30" : 750,
			 "3/1 - 12/31" : 1050},
			 
			 "sacramento_ca" :
		{"3/1 - 11/15" : 850,
			 "3/1 - 11/30" : 925,
			 "3/15 - 11/15" : 800,
			 "4/1 - 11/15" : 650,
			 "4/15 - 10/15" : 425,
			 "4/15 - 11/1" : 500,
			 "4/15 - 11/15" : 600},
			 
			 "san_diego_ca" :
		{"1/1 - 12/31" : 1220,
			 "2/1 - 12/31" : 1100,
			 "3/1 - 11/30" : 690,
			 "3/1 - 12/31" : 950},
			 
			 "san_francisco_ca" :
		{"3/1 - 11/15" : 900,
			 "3/1 - 11/30" : 1000,
			 "3/15 - 11/15" : 850,
			 "4/1 - 11/15" : 750,
			 "4/15 - 10/15" : 525,
			 "4/15 - 11/1" : 600,
			 "4/15 - 11/15" : 700},
			 
			 "denver_co" :
		{"5/1 - 9/15" : 525,
			 "5/1 - 9/30" : 555,
			 "5/1 - 10/15" : 585,
			 "5/15 - 9/15" : 470,
			 "5/15 - 9/30" : 505,
			 "5/15 - 10/15" : 540,
			 "6/1 - 9/15" : 330,
			 "6/1 - 9/30" : 380},
			
			 "fairfield_county_ct" :
		{"5/1 - 9/15" : 505,
			 "5/1 - 9/30" : 540,
			 "5/1 - 10/15" : 570,
			 "5/15 - 9/15" : 465,
			 "5/15 - 9/30" : 490,
			 "5/15 - 10/15" : 525,
			 "6/1 - 9/15" : 335,
			 "6/1 - 9/30" : 385},

		 "hartford_ct" :
		 	{"5/1 - 9/15" : 515,
			"5/1 - 9/30" : 550,
			"5/1 - 10/15" : 580,
			"5/15 - 9/15" : 465,
			"5/15 - 9/30" : 500,
			"5/15 - 10/15" : 535,
			"6/1 - 9/15" : 335,
			"6/1 - 9/30" : 385},
	
			 "washington_dc" :
		{"4/15 - 9/30" : 480,
			 "4/15 - 10/15" : 510,
			 "5/1 - 9/30" : 390,
			 "5/1 - 10/15" : 450,
			 "5/15 - 9/30" : 320,
			 "5/15 - 10/15" : 370,
			 "6/1 - 9/15" : 210,
			 "6/1 - 9/30" : 250},
			 
			 "wilmington_de" :
		{"4/15 - 9/30" : 530,
			 "4/15 - 10/15" : 570,
			 "5/1 - 9/30" : 440,
			 "5/1 - 10/15" : 500,
			 "5/15 - 9/30" : 370,
			 "5/15 - 10/15" : 420,
			 "6/1 - 9/15" : 240,
			 "6/1 - 9/30" : 290},

			 "daytona_beach_fl" :
		{"1/1 - 12/31" : 850,
			 "2/1 - 12/31" : 730,
			 "3/1 - 11/30" : 420,
			 "3/1 - 12/31" : 590},
			 
			 "fort_myers_fl" :
		{"1/1 - 12/31" : 620,
			 "2/1 - 12/31" : 525,
			 "3/1 - 11/30" : 285,
			 "3/1 - 12/31" : 400},

			 "gainesville_fl" :
		{"1/1 - 12/31" : 1000,
			 "2/1 - 12/31" : 900,
			 "3/1 - 11/30" : 520,
			 "3/1 - 12/31" : 710},

			 "jacksonville_fl" :
		{"1/1 - 12/31" : 1020,
			 "2/1 - 12/31" : 920,
			 "3/1 - 11/30" : 520,
			 "3/1 - 12/31" : 730},

			 "melbourne_fl" :
		{"1/1 - 12/31" : 760,
			 "2/1 - 12/31" : 685,
			 "3/1 - 11/30" : 380,
			 "3/1 - 12/31" : 510},

			 "miami_ft_lauderdale_fl" :
		{"1/1 - 12/31" : 660,
			 "2/1 - 12/31" : 585,
			 "3/1 - 11/30" : 300,
			 "3/1 - 12/31" : 410},

			 "orlando_fl" :
		{"1/1 - 12/31" : 825,
			 "2/1 - 12/31" : 720,
			 "3/1 - 11/30" : 400,
			 "3/1 - 12/31" : 570}, 
			 
			 "pensacola_fl" :
		{"1/1 - 12/31" : 1120,
			 "2/1 - 12/31" : 955,
			 "3/1 - 11/30" : 550,
			 "3/1 - 12/31" : 760},

			 "sarasota_fl" :
		{"1/1 - 12/31" : 760,
			 "2/1 - 12/31" : 685,
			 "3/1 - 11/30" : 380,
			 "3/1 - 12/31" : 510},

			 "tallahasee_fl" :
		{"1/1 - 12/31" : 1230,
			 "2/1 - 12/31" : 1100,
			 "3/1 - 11/30" : 600,
			 "3/1 - 12/31" : 850},

			 "tampa_fl" :
		{"1/1 - 12/31" : 820,
			 "2/1 - 12/31" : 700,
			 "3/1 - 11/30" : 400,
			 "3/1 - 12/31" : 560},
			 
			 "FL-West Palm Beach" :
		{"1/1 - 12/31" : 710,
			 "2/1 - 12/31" : 635,
			 "3/1 - 11/30" : 340,
			 "3/1 - 12/31" : 460},

			 "atlanta_ga" :
		{"3/1 - 11/15" : 790,
			 "3/1 - 11/30" : 885,
			 "3/15 - 11/15" : 735,
			 "4/1 - 11/15" : 600,
			 "4/15 - 10/15" : 380,
			 "4/15 - 11/1" : 445,
			 "4/15 - 11/15" : 550},

			 "savannah_ga" :
		{"3/1 - 11/15" : 590,
			 "3/1 - 11/30" : 685,
			 "3/15 - 11/15" : 535,
			 "4/1 - 11/15" : 400,
			 "4/15 - 10/15" : 200,
			 "4/15 - 11/1" : 245,
			 "4/15 - 11/15" : 350},

			 "des_moines_ia" :
		{"5/1 - 9/15" : 485,
			 "5/1 - 9/30" : 520,
			 "5/1 - 10/15" : 550,
			 "5/15 - 9/15" : 435,
			 "5/15 - 9/30" : 470,
			 "5/15 - 10/15" : 505,
			 "6/1 - 9/15" : 320,
			 "6/1 - 9/30" : 365},

			 "boise_id" :
		{"5/1 - 9/15" : 525,
			 "5/1 - 9/30" : 555,
			 "5/1 - 10/15" : 585,
			 "5/15 - 9/15" : 470,
			 "5/15 - 9/30" : 505,
			 "5/15 - 10/15" : 540,
			 "6/1 - 9/15" : 330,
			 "6/1 - 9/30" : 380},

			 "chicago_il" :
		{"5/1 - 9/15" : 515,
			 "5/1 - 9/30" : 550,
			 "5/1 - 10/15" : 580,
			 "5/15 - 9/15" : 465,
			 "5/15 - 9/30" : 500,
			 "5/15 - 10/15" : 535,
			 "6/1 - 9/15" : 335,
			 "6/1 - 9/30" : 385},

			 "peoria_il" :
		{"5/1 - 9/15" : 495,
			 "5/1 - 9/30" : 530,
			 "5/1 - 10/15" : 560,
			 "5/15 - 9/15" : 445,
			 "5/15 - 9/30" : 480,
			 "5/15 - 10/15" : 515,
			 "6/1 - 9/15" : 330,
			 "6/1 - 9/30" : 375},

			 "springfield_il" :
		{"5/1 - 9/15" : 475,
			 "5/1 - 9/30" : 510,
			 "5/1 - 10/15" : 540,
			 "5/15 - 9/15" : 425,
			 "5/15 - 9/30" : 460,
			 "5/15 - 10/15" : 495,
			 "6/1 - 9/15" : 315,
			 "6/1 - 9/30" : 360},

			 "IN-Fort Wayne" :
		{"5/1 - 9/15" : 510,
			 "5/1 - 9/30" : 545,
			 "5/1 - 10/15" : 575,
			 "5/15 - 9/15" : 460,
			 "5/15 - 9/30" : 490,
			 "5/15 - 10/15" : 530,
			 "6/1 - 9/15" : 335,
			 "6/1 - 9/30" : 380},

			 "indianapolis_in" :
		{"5/1 - 9/15" : 495,
			 "5/1 - 9/30" : 530,
			 "5/1 - 10/15" : 560,
			 "5/15 - 9/15" : 445,
			 "5/15 - 9/30" : 480,
			 "5/15 - 10/15" : 515,
			 "6/1 - 9/15" : 330,
			 "6/1 - 9/30" : 375},

			 "wichita_ks" :
		{"4/15 - 9/30" : 475,
			 "4/15 - 10/15" : 505,
			 "5/1 - 9/30" : 380,
			 "5/1 - 10/15" : 445,
			 "5/15 - 9/30" : 310,
			 "5/15 - 10/15" : 360,
			 "6/1 - 9/15" : 205,
			 "6/1 - 9/30" : 245},

			 "lexington_ky" :
		{"4/15 - 9/30" : 485,
			 "4/15 - 10/15" : 515,
			 "5/1 - 9/30" : 400,
			 "5/1 - 10/15" : 460,
			 "5/15 - 9/30" : 330,
			 "5/15 - 10/15" : 380,
			 "6/1 - 9/15" : 220,
			 "6/1 - 9/30" : 250},

			 "louisville_ky" :
		{"4/15 - 9/30" : 485,
			 "4/15 - 10/15" : 515,
			 "5/1 - 9/30" : 400,
			 "5/1 - 10/15" : 460,
			 "5/15 - 9/30" : 330,
			 "5/15 - 10/15" : 380,
			 "6/1 - 9/15" : 220,
			 "6/1 - 9/30" : 250},

			 "baton_rouge_la" :
		{"1/1 - 12/31" : 1500,
			 "2/1 - 12/31" : 1300,
			 "3/1 - 11/15" : 505,
			 "3/1 - 11/30" : 545,
			 "3/1 - 12/31" : 900,
			 "3/15 - 11/15" : 425,
			 "4/1 - 11/15" : 325,
			 "4/15 - 10/15" : 195,
			 "4/15 - 11/1" : 220,
			 "4/15 - 11/15" : 290},

			 "new_orleans_la" :
		{"1/1 - 12/31" : 1500,
			 "2/1 - 12/31" : 1300,
			 "3/1 - 11/15" : 505,
			 "3/1 - 11/30" : 545,
			 "3/1 - 12/31" : 900,
			 "3/15 - 11/15" : 425,
			 "4/1 - 11/15" : 325,
			 "4/15 - 10/15" : 195,
			 "4/15 - 11/1" : 220,
			 "4/15 - 11/15" : 290},

			 "shreveport_la" :
		{"3/1 - 11/15" : 610,
			 "3/1 - 11/30" : 705,
			 "3/15 - 11/15" : 555,
			 "4/1 - 11/15" : 420,
			 "4/15 - 10/15" : 230,
			 "4/15 - 11/1" : 260,
			 "4/15 - 11/15" : 370},

			 "boston_ma" :
		{"5/1 - 9/15" : 525,
			 "5/1 - 9/30" : 560,
			 "5/1 - 10/15" : 590,
			 "5/15 - 9/15" : 460,
			 "5/15 - 9/30" : 500,
			 "5/15 - 10/15" : 545,
			 "6/1 - 9/15" : 335,
			 "6/1 - 9/30" : 385},

			 "springfield_ma" :
		{"5/1 - 9/15" : 520,
			 "5/1 - 9/30" : 555,
			 "5/1 - 10/15" : 580,
			 "5/15 - 9/15" : 460,
			 "5/15 - 9/30" : 500,
			 "5/15 - 10/15" : 540,
			 "6/1 - 9/15" : 335,
			 "6/1 - 9/30" : 385},

			 "baltimore_md" :
		{"4/15 - 9/30" : 495,
			 "4/15 - 10/15" : 525,
			 "5/1 - 9/30" : 405,
			 "5/1 - 10/15" : 465,
			 "5/15 - 9/30" : 330,
			 "5/15 - 10/15" : 380,
			 "6/1 - 9/15" : 220,
			 "6/1 - 9/30" : 250},
			 
			 "portland_me" :
		{"5/1 - 9/15" : 600,
			 "5/1 - 9/30" : 640,
			 "5/1 - 10/15" : 755,
			 "5/15 - 9/15" : 545,
			 "5/15 - 9/30" : 580,
			 "5/15 - 10/15" : 620,
			 "6/1 - 9/15" : 390,
			 "6/1 - 9/30" : 450},

			 "detroit_mi" :
		{"5/1 - 9/15" : 510,
			 "5/1 - 9/30" : 550,
			 "5/1 - 10/15" : 580,
			 "5/15 - 9/15" : 460,
			 "5/15 - 9/30" : 495,
			 "5/15 - 10/15" : 530,
			 "6/1 - 9/15" : 335,
			 "6/1 - 9/30" : 395},

			 "grand_rapids_mi" :
		{"5/1 - 9/15" : 525,
			 "5/1 - 9/30" : 565,
			 "5/1 - 10/15" : 595,
			 "5/15 - 9/15" : 475,
			 "5/15 - 9/30" : 510,
			 "5/15 - 10/15" : 545,
			 "6/1 - 9/15" : 350,
			 "6/1 - 9/30" : 410},

			 "minneapolis_mn" :
		{"5/1 - 9/15" : 600,
			 "5/1 - 9/30" : 630,
			 "5/1 - 10/15" : 735,
			 "5/15 - 9/15" : 540,
			 "5/15 - 9/30" : 595,
			 "5/15 - 10/15" : 615,
			 "6/1 - 9/15" : 420,
			 "6/1 - 9/30" : 470},
			 
			 "MO-Kansas City" :
		{"4/15 - 9/30" : 485,
			 "4/15 - 10/15" : 515,
			 "5/1 - 9/30" : 395,
			 "5/1 - 10/15" : 455,
			 "5/15 - 9/30" : 300,
			 "5/15 - 10/15" : 370,
			 "6/1 - 9/15" : 220,
			 "6/1 - 9/30" : 250},

			 "st_louis_mo" :
		{"4/15 - 9/30" : 480,
			 "4/15 - 10/15" : 505,
			 "5/1 - 9/30" : 390,
			 "5/1 - 10/15" : 450,
			 "5/15 - 9/30" : 310,
			 "5/15 - 10/15" : 360,
			 "6/1 - 9/15" : 210,
			 "6/1 - 9/30" : 250},

			 "jackson_ms" :
		{"3/1 - 11/15" : 645,
			 "3/1 - 11/30" : 705,
			 "3/15 - 11/15" : 595,
			 "4/1 - 11/15" : 475,
			 "4/15 - 10/15" : 260,
			 "4/15 - 11/1" : 290,
			 "4/15 - 11/15" : 400},
			 
			 "great_falls_mt" :
		{"5/1 - 9/15" : 670,
			 "5/1 - 9/30" : 710,
			 "5/1 - 10/15" : 825,
			 "5/15 - 9/15" : 610,
			 "5/15 - 9/30" : 650,
			 "5/15 - 10/15" : 690,
			 "6/1 - 9/15" : 450,
			 "6/1 - 9/30" : 500},

			 "asheville_nc" :
		{"5/1 - 9/15" : 515,
			 "5/1 - 9/30" : 530,
			 "5/1 - 10/15" : 580,
			 "5/15 - 9/15" : 465,
			 "5/15 - 9/30" : 500,
			 "5/15 - 10/15" : 535,
			 "6/1 - 9/15" : 325,
			 "6/1 - 9/30" : 395},

			 "charlotte_nc" :
		{"4/15 - 9/30" : 435,
			 "4/15 - 10/15" : 465,
			 "5/1 - 9/30" : 350,
			 "5/1 - 10/15" : 410,
			 "5/15 - 9/30" : 285,
			 "5/15 - 10/15" : 330,
			 "6/1 - 9/15" : 190,
			 "6/1 - 9/30" : 215},

			 "raleigh_nc" :
		{"4/15 - 9/30" : 455,
			 "4/15 - 10/15" : 485,
			 "5/1 - 9/30" : 370,
			 "5/1 - 10/15" : 430,
			 "5/15 - 9/30" : 300,
			 "5/15 - 10/15" : 350,
			 "6/1 - 9/15" : 200,
			 "6/1 - 9/30" : 230},
			 
			 "bismark_nd" :
		{"5/1 - 9/15" : 625,
			 "5/1 - 9/30" : 665,
			 "5/1 - 10/15" : 780,
			 "5/15 - 9/15" : 565,
			 "5/15 - 9/30" : 605,
			 "5/15 - 10/15" : 645,
			 "6/1 - 9/15" : 405,
			 "6/1 - 9/30" : 455},

			 "omaha_ne" :
		{"5/1 - 9/15" : 420,
			 "5/1 - 9/30" : 460,
			 "5/1 - 10/15" : 530,
			 "5/15 - 9/15" : 350,
			 "5/15 - 9/30" : 390,
			 "5/15 - 10/15" : 450,
			 "6/1 - 9/15" : 240,
			 "6/1 - 9/30" : 300},

			 "manchester_nh" :
		{"5/1 - 9/15" : 600,
			 "5/1 - 9/30" : 640,
			 "5/1 - 10/15" : 735,
			 "5/15 - 9/15" : 545,
			 "5/15 - 9/30" : 580,
			 "5/15 - 10/15" : 620,
			 "6/1 - 9/15" : 390,
			 "6/1 - 9/30" : 450},

			 "north_nj" :
		{"5/1 - 9/15" : 420,
			 "5/1 - 9/30" : 460,
			 "5/1 - 10/15" : 530,
			 "5/15 - 9/15" : 350,
			 "5/15 - 9/30" : 390,
			 "5/15 - 10/15" : 450,
			 "6/1 - 9/15" : 240,
			 "6/1 - 9/30" : 300},

			 "south_nj" :
		{"4/15 - 9/30" : 540,
			 "4/15 - 10/15" : 580,
			 "5/1 - 9/30" : 440,
			 "5/1 - 10/15" : 510,
			 "5/15 - 9/30" : 370,
			 "5/15 - 10/15" : 420,
			 "6/1 - 9/15" : 240,
			 "6/1 - 9/30" : 290},

			 "albuquerque_nm" :
		{"4/15 - 9/30" : 460,
			 "4/15 - 10/15" : 490,
			 "5/1 - 9/30" : 380,
			 "5/1 - 10/15" : 430,
			 "5/15 - 9/30" : 310,
			 "5/15 - 10/15" : 360,
			 "6/1 - 9/15" : 205,
			 "6/1 - 9/30" : 250},

			 "roswell_nm" :
		{"3/1 - 11/15" : 765,
			 "3/1 - 11/30" : 860,
			 "3/15 - 11/15" : 710,
			 "4/1 - 11/15" : 575,
			 "4/15 - 10/15" : 355,
			 "4/15 - 11/1" : 420,
			 "4/15 - 11/15" : 525},

			 "las_vegas_nv" :
		{"3/1 - 11/15" : 705,
			 "3/1 - 11/30" : 800,
			 "3/15 - 11/15" : 650,
			 "4/1 - 11/15" : 515,
			 "4/15 - 10/15" : 315,
			 "4/15 - 11/1" : 370,
			 "4/15 - 11/15" : 475},
			 
			 "reno_nv" :
		{"5/1 - 9/15" : 540,
			 "5/1 - 9/30" : 585,
			 "5/1 - 10/15" : 600,
			 "5/15 - 9/15" : 500,
			 "5/15 - 9/30" : 530,
			 "5/15 - 10/15" : 555,
			 "6/1 - 9/15" : 350,
			 "6/1 - 9/30" : 400},

			 "albany_ny" :
		{"5/1 - 9/15" : 535,
			 "5/1 - 9/30" : 570,
			 "5/1 - 10/15" : 600,
			 "5/15 - 9/15" : 480,
			 "5/15 - 9/30" : 515,
			 "5/15 - 10/15" : 550,
			 "6/1 - 9/15" : 340,
			 "6/1 - 9/30" : 390},
			 
			 "long_island_ny" :
		{"5/1 - 9/15" : 505,
			 "5/1 - 9/30" : 540,
			 "5/1 - 10/15" : 570,
			 "5/15 - 9/15" : 455,
			 "5/15 - 9/30" : 490,
			 "5/15 - 10/15" : 525,
			 "6/1 - 9/15" : 335,
			 "6/1 - 9/30" : 385},

			 "upstate_ny" :
		{"5/1 - 9/15" : 565,
			 "5/1 - 9/30" : 605,
			 "5/1 - 10/15" : 635,
			 "5/15 - 9/15" : 505,
			 "5/15 - 9/30" : 545,
			 "5/15 - 10/15" : 580,
			 "6/1 - 9/15" : 370,
			 "6/1 - 9/30" : 420},

			 "westchester_ny" :
		{"5/1 - 9/15" : 495,
			 "5/1 - 9/30" : 530,
			 "5/1 - 10/15" : 560,
			 "5/15 - 9/15" : 455,
			 "5/15 - 9/30" : 480,
			 "5/15 - 10/15" : 515,
			 "6/1 - 9/15" : 335,
			 "6/1 - 9/30" : 385},

			 "cincinnati_oh" :
		{"4/15 - 9/30" : 550,
			 "4/15 - 10/15" : 590,
			 "5/1 - 9/30" : 455,
			 "5/1 - 10/15" : 515,
			 "5/15 - 9/30" : 385,
			 "5/15 - 10/15" : 435,
			 "6/1 - 9/15" : 255,
			 "6/1 - 9/30" : 305},
			 
			 "cleveland_oh" :
		{"5/1 - 9/15" : 540,
			 "5/1 - 9/30" : 580,
			 "5/1 - 10/15" : 610,
			 "5/15 - 9/15" : 485,
			 "5/15 - 9/30" : 520,
			 "5/15 - 10/15" : 555,
			 "6/1 - 9/15" : 340,
			 "6/1 - 9/30" : 390},

			 "columbus_oh" :
		{"5/1 - 9/15" : 495,
			 "5/1 - 9/30" : 540,
			 "5/1 - 10/15" : 570,
			 "5/15 - 9/15" : 440,
			 "5/15 - 9/30" : 475,
			 "5/15 - 10/15" : 520,
			 "6/1 - 9/15" : 320,
			 "6/1 - 9/30" : 370},

			 "OH-Toledo" :
		{"5/1 - 9/15" : 510,
			 "5/1 - 9/30" : 560,
			 "5/1 - 10/15" : 590,
			 "5/15 - 9/15" : 475,
			 "5/15 - 9/30" : 500,
			 "5/15 - 10/15" : 535,
			 "6/1 - 9/15" : 340,
			 "6/1 - 9/30" : 390},

			 "oklahoma_city_ok" :
		{"3/1 - 11/15" : 825,
			 "3/1 - 11/30" : 925,
			 "3/15 - 11/15" : 760,
			 "4/1 - 11/15" : 625,
			 "4/15 - 10/15" : 420,
			 "4/15 - 11/1" : 470,
			 "4/15 - 11/15" : 575},

			 "OK-Tulsa" :
		{"3/1 - 11/15" : 840,
			 "3/1 - 11/30" : 940,
			 "3/15 - 11/15" : 775,
			 "4/1 - 11/15" : 640,
			 "4/15 - 10/15" : 420,
			 "4/15 - 11/1" : 470,
			 "4/15 - 11/15" : 575},

			 "portland_or" :
		{"5/1 - 9/15" : 500,
			 "5/1 - 9/30" : 545,
			 "5/1 - 10/15" : 560,
			 "5/15 - 9/15" : 460,
			 "5/15 - 9/30" : 490,
			 "5/15 - 10/15" : 515,
			 "6/1 - 9/15" : 340,
			 "6/1 - 9/30" : 380},

			 "harrisburg_pa" :
		{"4/15 - 9/30" : 530,
			 "4/15 - 10/15" : 575,
			 "5/1 - 9/30" : 440,
			 "5/1 - 10/15" : 500,
			 "5/15 - 9/30" : 360,
			 "5/15 - 10/15" : 420,
			 "6/1 - 9/15" : 240,
			 "6/1 - 9/30" : 270},

			 "philadelphia_pa" :
		{"4/15 - 9/30" : 530,
			 "4/15 - 10/15" : 570,
			 "5/1 - 9/30" : 440,
			 "5/1 - 10/15" : 500,
			 "5/15 - 9/30" : 370,
			 "5/15 - 10/15" : 420,
			 "6/1 - 9/15" : 240,
			 "6/1 - 9/30" : 290},
			 
			 "pittsburgh_pa" :
		{"5/1 - 9/15" : 510,
			 "5/1 - 9/30" : 550,
			 "5/1 - 10/15" : 580,
			 "5/15 - 9/15" : 460,
			 "5/15 - 9/30" : 495,
			 "5/15 - 10/15" : 535,
			 "6/1 - 9/15" : 330,
			 "6/1 - 9/30" : 380},

			 "providence_ri" :
		{"5/1 - 9/15" : 505,
			 "5/1 - 9/30" : 545,
			 "5/1 - 10/15" : 580,
			 "5/15 - 9/15" : 460,
			 "5/15 - 9/30" : 495,
			 "5/15 - 10/15" : 530,
			 "6/1 - 9/15" : 335,
			 "6/1 - 9/30" : 385},

			 "charleston_sc" :
		{"3/1 - 11/15" : 620,
			 "3/1 - 11/30" : 775,
			 "3/15 - 11/15" : 560,
			 "4/1 - 11/15" : 425,
			 "4/15 - 10/15" : 235,
			 "4/15 - 11/1" : 260,
			 "4/15 - 11/15" : 375},

			 "columbia_sc" :
		{"3/1 - 11/15" : 670,
			 "3/1 - 11/30" : 825,
			 "3/15 - 11/15" : 610,
			 "4/1 - 11/15" : 470,
			 "4/15 - 10/15" : 285,
			 "4/15 - 11/1" : 305,
			 "4/15 - 11/15" : 420},

			 "pierre_sd" :
		{"5/1 - 9/15" : 535,
			 "5/1 - 9/30" : 570,
			 "5/1 - 10/15" : 600,
			 "5/15 - 9/15" : 485,
			 "5/15 - 9/30" : 520,
			 "5/15 - 10/15" : 555,
			 "6/1 - 9/15" : 335,
			 "6/1 - 9/30" : 415},

			 "knoxville_tn" :
		{"4/15 - 9/30" : 430,
			 "4/15 - 10/15" : 460,
			 "5/1 - 9/30" : 345,
			 "5/1 - 10/15" : 405,
			 "5/15 - 9/30" : 280,
			 "5/15 - 10/15" : 325,
			 "6/1 - 9/15" : 185,
			 "6/1 - 9/30" : 210},

			 "memphis_tn" :
		{"3/1 - 11/15" : 735,
			 "3/1 - 11/30" : 830,
			 "3/15 - 11/15" : 680,
			 "4/1 - 11/15" : 545,
			 "4/15 - 10/15" : 320,
			 "4/15 - 11/1" : 400,
			 "4/15 - 11/15" : 500},
			 
			 "nashville_tn" :
		{"4/15 - 9/30" : 430,
			 "4/15 - 10/15" : 460,
			 "5/1 - 9/30" : 345,
			 "5/1 - 10/15" : 405,
			 "5/15 - 9/30" : 280,
			 "5/15 - 10/15" : 325,
			 "6/1 - 9/15" : 185,
			 "6/1 - 9/30" : 210},

			 "austin_tx" :
		{"1/1 - 12/31" : 1450,
			 "3/1 - 11/15" : 520,
			 "3/1 - 11/30" : 560,
			 "3/15 - 11/15" : 440,
			 "4/1 - 11/15" : 340,
			 "4/15 - 10/15" : 200,
			 "4/15 - 11/1" : 225,
			 "4/15 - 11/15" : 300},
			 
			 "dallas_tx" :
		{"3/1 - 11/15" : 595,
			 "3/1 - 11/30" : 700,
			 "3/15 - 11/15" : 540,
			 "4/1 - 11/15" : 405,
			 "4/15 - 10/15" : 220,
			 "4/15 - 11/1" : 250,
			 "4/15 - 11/15" : 355},

			 "el_paso_tx" :
		{"3/1 - 11/15" : 730,
			 "3/1 - 11/30" : 900,
			 "3/15 - 11/15" : 680,
			 "4/1 - 11/15" : 540,
			 "4/15 - 10/15" : 320,
			 "4/15 - 11/1" : 375,
			 "4/15 - 11/15" : 500},

			 "houston_tx" :
		{"1/1 - 12/31" : 1450,
			 "3/1 - 11/15" : 520,
			 "3/1 - 11/30" : 560,
			 "3/15 - 11/15" : 440,
			 "4/1 - 11/15" : 340,
			 "4/15 - 10/15" : 200,
			 "4/15 - 11/1" : 225,
			 "4/15 - 11/15" : 300},

			 "san_antonio_tx" :
		{"1/1 - 12/31" : 1450,
			 "3/1 - 11/15" : 520,
			 "3/1 - 11/30" : 560,
			 "3/15 - 11/15" : 440,
			 "4/1 - 11/15" : 340,
			 "4/15 - 10/15" : 200,
			 "4/15 - 11/1" : 225,
			 "4/15 - 11/15" : 300},
			 
			 "salt_lake_city_ut" :
		{"5/1 - 9/15" : 480,
			 "5/1 - 9/30" : 500,
			 "5/1 - 10/15" : 530,
			 "5/15 - 9/15" : 455,
			 "5/15 - 9/30" : 470,
			 "5/15 - 10/15" : 495,
			 "6/1 - 9/15" : 310,
			 "6/1 - 9/30" : 375},

			 "norfolk_va" :
		{"4/15 - 9/30" : 465,
			 "4/15 - 10/15" : 500,
			 "5/1 - 9/30" : 375,
			 "5/1 - 10/15" : 435,
			 "5/15 - 9/30" : 310,
			 "5/15 - 10/15" : 355,
			 "6/1 - 9/15" : 205,
			 "6/1 - 9/30" : 240},

			 "richmond_va" :
		{"4/15 - 9/30" : 480,
			 "4/15 - 10/15" : 510,
			 "5/1 - 9/30" : 390,
			 "5/1 - 10/15" : 450,
			 "5/15 - 9/30" : 320,
			 "5/15 - 10/15" : 370,
			 "6/1 - 9/15" : 210,
			 "6/1 - 9/30" : 250},
			 
			  "burlington_vt" :
		{"5/1 - 9/15" : 620,
			 "5/1 - 9/30" : 660,
			 "5/1 - 10/15" : 775,
			 "5/15 - 9/15" : 560,
			 "5/15 - 9/30" : 600,
			 "5/15 - 10/15" : 640,
			 "6/1 - 9/15" : 400,
			 "6/1 - 9/30" : 450},

			 "seattle_wa" :
		{"5/1 - 9/15" : 540,
			 "5/1 - 9/30" : 585,
			 "5/1 - 10/15" : 600,
			 "5/15 - 9/15" : 500,
			 "5/15 - 9/30" : 530,
			 "5/15 - 10/15" : 555,
			 "6/1 - 9/15" : 380,
			 "6/1 - 9/30" : 420},

			 "spokane_wa" :
		{"5/1 - 9/15" : 640,
			 "5/1 - 9/30" : 660,
			 "5/1 - 10/15" : 700,
			 "5/15 - 9/15" : 580,
			 "5/15 - 9/30" : 620,
			 "5/15 - 10/15" : 655,
			 "6/1 - 9/15" : 460,
			 "6/1 - 9/30" : 520},

			 "madison_wi" :
		{"5/1 - 9/15" : 585,
			 "5/1 - 9/30" : 625,
			 "5/1 - 10/15" : 740,
			 "5/15 - 9/15" : 530,
			 "5/15 - 9/30" : 565,
			 "5/15 - 10/15" : 605,
			 "6/1 - 9/15" : 380,
			 "6/1 - 9/30" : 440},

			 "milwaukee_wi" :
		{"5/1 - 9/15" : 600,
			 "5/1 - 9/30" : 640,
			 "5/1 - 10/15" : 755,
			 "5/15 - 9/15" : 540,
			 "5/15 - 9/30" : 580,
			 "5/15 - 10/15" : 620,
			 "6/1 - 9/15" : 390,
			 "6/1 - 9/30" : 450},

			 "charleston_wv" :
		{"4/15 - 9/30" : 505,
			 "4/15 - 10/15" : 535,
			 "5/1 - 9/30" : 415,
			 "5/1 - 10/15" : 475,
			 "5/15 - 9/30" : 330,
			 "5/15 - 10/15" : 390,
			 "6/1 - 9/15" : 230,
			 "6/1 - 9/30" : 260},
			 
			 "cheyenne-wy" :
		{"5/1 - 9/15" : 740,
			 "5/1 - 9/30" : 760,
			 "5/1 - 10/15" : 800,
			 "5/15 - 9/15" : 680,
			 "5/15 - 9/30" : 720,
			 "5/15 - 10/15" : 755,
			 "6/1 - 9/15" : 550,
			 "6/1 - 9/30" : 620}
}
var model = new String;
var pct_hp = new Number;
var pct_not_hp = new Number;
APHL = size_factor * blanket_factor[cover] * temp_factor[water_temp] * PHL[location_choice][season_choice];

if( APHL < 300 )
{model = "AC-750";
pct_hp = 1.00;
pct_not_hp = 0.0;
}
else if ( APHL < 400 )
{model = "AC-750";
pct_hp = 0.95;
pct_not_hp = 0.05;

}
else if ( APHL < 500 )
{model = "AC-750";
pct_hp = 0.95;
pct_not_hp = 0.05;

}
else if ( APHL < 600 )
{model = "AC-1100";
pct_hp = 0.90;
pct_not_hp = 0.10;
}
else if ( APHL < 700 )
{model = "AC-1100";
pct_hp = 0.90;
pct_not_hp = 0.10;
}
else if ( APHL < 800 )
{model = "AC-1100";
pct_hp = 0.85;
pct_not_hp = 0.15;

}
else if ( APHL < 1000 )
{model = "AC-1250";
pct_hp = 0.80;
pct_not_hp = 0.20;
}
else if ( APHL < 1200 )
{model = "AC-1250";
pct_hp = 0.75;
pct_not_hp = 0.25;

}
else if ( APHL < 1375 )
{model = "AC-1250";
pct_hp = 0.70;
pct_not_hp = 0.30;
}
else if ( APHL < 1450 )
{model = "AC-1500";
pct_hp = 0.70;
pct_not_hp = 0.30;
}
else if ( APHL < 1600 )
{model = "AC-1500";
pct_hp = 0.65;
pct_not_hp = 0.35;

}
else if ( APHL < 1750 )
{model = "AC-1750";
pct_hp = 0.60;
pct_not_hp = 0.40;
}
else if ( APHL < 2400 )
{model = "(2) AC-1500";
pct_hp = 0.50;
pct_not_hp = 0.50;
}
else if ( APHL < 4000 )
{model = "(3) AC-1500";
pct_hp = 0.50;
pct_not_hp = 0.50;
}
else if ( APHL < 6000 )
{model = "(4) AC-1500";
pct_hp = 0.50;
pct_not_hp = 0.50;
}
else if ( APHL < 8000 )
{model = "(5) AC-1500";
pct_hp = 0.50;
pct_not_hp = 0.50;
}
else if ( APHL < 10000 )
{model = "(6) AC-1500";
pct_hp = 0.50;
pct_not_hp = 0.50;
}
else
{model = "(6) AC-1750";
pct_hp = 0.30;
pct_not_hp = 0.70;
}  
/* $model = properly sized ACT heat pump to handle the adjusted pool heat load
   $pct_hp = % of time the heat pump runs
   $pct_not_hp = % of time the propane or gas heater runs */

/* these were straight-lined across all the models per Dave Rybacki */
console.log(model);
var btu_cap = new Number;
var cop = new Number;
var elec_cons = new Number;

if( model == "AC-750" )
	{btu_cap = 115;
	cop = 6;
	elec_cons = 5.5;
	}
else if ( model == "AC-1100" )
	{btu_cap = 115;
	cop = 6;
	elec_cons = 5.5;
	}
else if ( model == "AC-1250" )
	{btu_cap = 115;
	cop = 6;
	elec_cons = 5.5;
	}
else if ( model == "AC-1500" )
	{btu_cap = 115;
	cop = 6;
	elec_cons = 5.5;
	}
else if ( model == "AC-1750" )
	{btu_cap = 115;
	cop = 6;
	elec_cons = 5.5;
	}
else if ( model == "(2) AC-1500" )
	{btu_cap = 115;
	cop = 6;
	elec_cons = 5.5;
	}
else if ( model == "(3) AC-1500" )
	{btu_cap = 115;
	cop = 6;
	elec_cons = 5.5;
	}
else if ( model == "(4) AC-1500" )
	{btu_cap = 115;
	cop = 6;
	elec_cons = 5.5;
	}
else if ( model == "(5) AC-1500" )
	{btu_cap = 115;
	cop = 6;
	elec_cons = 5.5;
	}
else if ( model == "(6) AC-1500" )
	{btu_cap = 115;
	cop = 6;
	elec_cons = 5.5;
	}
else if ( model == "(6) AC-1750" )
	{btu_cap = 115;
	cop = 6;
	elec_cons = 5.5;
	};

/* btu_cap = Btu capacity of the ACT model (model)
   cop = COP of the ACT model
   elec_cons = electrical consumption of the ACT model */

/* Btu Load (for the pool only) = ( APHL * 1000 / Btu Capacity * 0.95 ) * 0.68 */

var btu_pool_load = ( APHL * 1000 / btu_cap * 0.95 ) * 0.68;

/* -------- POOL ONLY HEATED BY ACT ---------- */

/* annual  ACT oper cost (for pool only) = Btu load / COP * elec cons * elec cost * 0.75 */
//AC_pool_cost = btu_pool_load / cop * elec_cons * util_rates[location_choice]["KW"] * 0.55;
var AC_pool_cost = btu_pool_load / cop * elec_cons * util_rates[location_choice]["KW"] * 0.79;

/* annual ACT KW usage in KW (for pool only) = AC oper cost / elec cost */
var AC_pool_kw = btu_pool_load / cop * elec_cons * 0.79;

/* annual ACT CO2 emissions in lbs (for pool only) = ACT KW * .9 lbs/KW */
var AC_pool_CO2 = AC_pool_kw * .9;

/* ---------- POOL ONLY HEATED BY NAT GAS ----- */

/* annual  NatGas oper cost (for pool only) = APHL * 14.2 / 0.78 * NatGas Cost * 0.9  */
var NG_pool_cost = APHL * 1.42 / 0.78 * util_rates[location_choice]["Therm"] * 0.8;
var NG_pool_cost_redux = NG_pool_cost - AC_pool_cost;

/* annual NatGas usage in Therms (for pool only) = NG util cost / natgas cost */
var NG_pool_therms = APHL * 1.42 / 0.78 * 0.9;

/* annual NatGas CO2 emissions in lbs (for pool only) = NG therms * 12.2 lbs/therm */
var NG_pool_CO2 = NG_pool_therms * 12.2;

/* annual reduction in CO2 emissions from using ACT (on pool only) vs. NatGas */
var NG_pool_CO2_redux = NG_pool_CO2 - AC_pool_CO2;

/* ----------- POOL ONLY HEATED BY PROPANE ------ */

/* annual  Propane oper cost (for pool only) = APHL * 1.56 / 0.78 * LP Cost * 0.82  */
var LP_pool_cost = APHL * 1.56 / 0.78 * util_rates[location_choice]["Gallon"] * 0.82;
var LP_pool_cost_redux = LP_pool_cost - AC_pool_cost;

/* annual Propane usage in gallons (for pool only) = LP util cost / LP cost per gallon */
var LP_pool_gallons = APHL * 1.56 / 0.78 * 0.82;

/* annual Propane CO2 emissions in lbs (for pool only) = NG gallons * 11.7 lbs/gallon */
var LP_pool_CO2 = LP_pool_gallons * 11.7;

/* annual reduction in CO2 emissions from using ACT (on pool only) vs. Propane */
var LP_pool_CO2_redux = LP_pool_CO2 - AC_pool_CO2;

/* ------------------ OPTIFLEX CALCULATIONS ----------------------- */

if (comparison_choice == 2){
                var spa_cost_factor = [];
                spa_cost_factor["HP"] = 1;
                spa_cost_factor["NaturalGas"] = 1.5;
                spa_cost_factor["Propane"] = 1.8;

                /* spa_cost_factor["HP"]
                   spa_cost_factor["NaturalGas"]
                   spa_cost_factor["Propane"] */
                
                /* ---------- SPA ONLY HEATED BY NAT GAS ------ */
                        
                /* NG spa cost = spa usage * 20 * 4 * NG spa cost factor */
                var NG_spa_cost = spa_usage * 20 * 4 * spa_cost_factor["NaturalGas"];
                
                /* ----------- POOL & SPA HEATED BY NAT GAS -----  */
                
                var NG_poolspa_cost = NG_pool_cost + NG_spa_cost;
                
                var NG_poolspa_therms = NG_poolspa_cost / util_rates[location_choice]["Therm"];
                var NG_poolspa_CO2 = NG_poolspa_therms * 12.2;
                
                var NG_spa_therms = NG_poolspa_therms - NG_pool_therms;
                
                /* ---------- SPA ONLY HEATED BY PROPANE ------ */
                        
                /* LP spa cost = spa usage * 20 * 4 * LP spa cost factor */
                var LP_spa_cost = spa_usage * 20 * 4 * spa_cost_factor["Propane"];
                
                /* ----------- POOL & SPA HEATED BY PROPANE -----  */
                
                var LP_poolspa_cost = LP_pool_cost + LP_spa_cost;
                
                var LP_poolspa_gallons = LP_poolspa_cost / util_rates[location_choice]["Gallon"];
                var LP_poolspa_CO2 = LP_poolspa_gallons * 11.7;
                
                var LP_spa_gallons = LP_poolspa_gallons - LP_pool_gallons;
                
                /* ---------- POOL ONLY PORTION HEATED BY OPTIFLEX COMBO ------ */
                
                /* hybrid's portion of pool util cost = ACT pool heater util cost * % of time heat pump runs */
                var HP_portion_Opt_pool_cost = AC_pool_cost * pct_hp;
                var non_HP_portion_Opt_pool_cost;
                if (heat_source == "NaturalGas")
                        {
                                non_HP_portion_Opt_pool_cost = NG_pool_cost * pct_not_hp;
                        }
                        else if (heat_source == "Propane")
                        {
                                non_HP_portion_Opt_pool_cost = LP_pool_cost * pct_not_hp;
                        }
                
                var Opt_pool_cost = HP_portion_Opt_pool_cost + non_HP_portion_Opt_pool_cost;
                
                /* ---------- SPA ONLY PORTION HEATED BY OPTIFLEX COMBO ------ */
                        
                /* Prorated HP spa cost = spa usage * 20 * 4 * HP spa cost factor * % of time heat pump runs */
                var HP_portion_Opt_spa_cost = spa_usage * 20 * 4 * spa_cost_factor["HP"] * pct_hp;
                
                var non_HP_portion_Opt_spa_cost = spa_usage * 20 * 4 * spa_cost_factor[heat_source] * pct_not_hp;
                
                var Opt_spa_cost = HP_portion_Opt_spa_cost + non_HP_portion_Opt_spa_cost; 
                
                /* ----------- POOL & SPA HEATED BY NON-HP PORTION OF OPTIFLEX COMBO -----  */
                
                var non_HP_portion_Opt_poolspa_cost = non_HP_portion_Opt_pool_cost + non_HP_portion_Opt_spa_cost;
                
                var non_HP_portion_Opt_fuel = non_HP_portion_Opt_poolspa_cost / util_rates[location_choice][units];
                var non_HP_portion_Opt_CO2;
                if (heat_source == "NaturalGas")
                        {
                                non_HP_portion_Opt_CO2 = non_HP_portion_Opt_fuel * 12.2;
                        }
                        else if (heat_source == "Propane")
                        {
                                non_HP_portion_Opt_CO2 = non_HP_portion_Opt_fuel * 11.7;
                        }
                
                /* ----------- POOL & SPA HEATED BY HP PORTION OF OPTIFLEX COMBO -----  */
                
                var HP_portion_Opt_poolspa_cost = HP_portion_Opt_pool_cost + HP_portion_Opt_spa_cost;
                
                var HP_portion_Opt_elec = HP_portion_Opt_poolspa_cost / util_rates[location_choice]["KW"];
                
                var HP_portion_Opt_CO2 = HP_portion_Opt_elec * .9 ;
                
                /* ----------- POOL & SPA OPTIFLEX COMBO TOTAL COST & TOTAL CO2 ----------- */
                
                var Opt_poolspa_cost = Opt_pool_cost + Opt_spa_cost;
                
                var Opt_poolspa_CO2 = non_HP_portion_Opt_CO2 + HP_portion_Opt_CO2;
                
                /* ------------ POOL & SPA COST & CO2 SAVINGS USING OPTIFLEX ---- */
                var non_HP_poolspa_cost;
                var non_HP_poolspa_CO2;
                if (heat_source == "NaturalGas")
                        {
                        non_HP_poolspa_cost = NG_poolspa_cost;
                        non_HP_poolspa_CO2 = NG_poolspa_CO2;
                        }
                        else if(heat_source == "Propane")
                        {
                        non_HP_poolspa_cost = LP_poolspa_cost;
                        non_HP_poolspa_CO2 = LP_poolspa_CO2;
                        }
                
                var Opt_1yr_cost_savings = non_HP_poolspa_cost - Opt_poolspa_cost;
                var Opt_5yr_cost_savings = Opt_1yr_cost_savings * 5 * 1.21;
                var Opt_10yr_cost_savings = Opt_5yr_cost_savings + Opt_1yr_cost_savings * 5 * 1.89;
                
                /* Return on Optiflex investment = cost savings / up front install cost */
                
                var Opt_AC750_install_cost = 5000;
                var Opt_ROI = 100 * Opt_1yr_cost_savings / Opt_AC750_install_cost;
                 var Opt_CO2_savings = non_HP_poolspa_CO2 - Opt_poolspa_CO2;
                
                /* --------- END OF OPTIFLEX ONLY CALCULATIONS -------- */

	}
        var defaults = {
                'choice' : comparison_choice,
                'location' : location_choice,
                'season' : season_choice,
                'area' : surface_area,
                'water_temp' : water_temp,
                'cover' : cover,
                'model' : model
        };
        if(comparison_choice == 2){
        
                var values = {
                        'spa' : spa_usage,
                        'heatSource' : heat_source,
                        'optPoolSpaCost':Opt_poolspa_cost,
                        'nonHPPoolSpaCost':non_HP_poolspa_cost,
                        '1yrCost':Opt_1yr_cost_savings,
                        '5yrCost':Opt_5yr_cost_savings,
                        '10yrCost':Opt_10yr_cost_savings,
                        'optCO2Save': Opt_CO2_savings,
                        'optROI':Opt_ROI
                };
                
                //console.log(Opt_poolspa_cost, non_HP_poolspa_cost, Opt_CO2_savings); 
                
        }else if(comparison_choice == 3){
                var values = {
                        'acPoolCO2': AC_pool_CO2,
                        'optCO2Save': Opt_CO2_savings,
                        'ngPoolCO2' : NG_pool_CO2,
                        'ngPoolCO2Save': NG_pool_CO2_redux,
                        'lpPoolCO2':LP_pool_CO2,
                        'lpPoolCO2Save':LP_pool_CO2_redux,
                        
                };
                //console.log(NG_pool_CO2, NG_pool_CO2_redux, LP_pool_CO2, LP_pool_CO2_redux);
        }else{
        
                var values = {
                        'acPoolCost':AC_pool_cost,
                        'ngPoolCost':NG_pool_cost,
                        'ngPoolCostSave':NG_pool_cost_redux,
                        'lpPoolCost':LP_pool_cost,
                        'lpPoolCostSave':LP_pool_cost_redux,
                };
        }
  getResult(defaults, values);
     
};

function getResult(defaults, values){
                //$('#page1').hide();
                //console.log(choice+' '+location+' '+swimSeason+' '+surfaceArea+' '+parseInt(desiredTemp)+' '+solarBlanket+' '+spaUsage+' '+heatSource);
                //$('#page2').show();
                $('#resultsTable').children('.location').append(defaults['location']);
                $('#resultsTable').children('.season').append(defaults['season']);
                $('#resultsTable').children('.area').append(defaults['area']);
                $('#resultsTable').children('.cover').append(defaults['cover']);
                $('#resultsTable').children('.model').append(defaults['model']);
                if(defaults.choice == 2){
                                $('#var').children().remove();
                                var row = '<div class="ui-block-a"><span>Spa Usage (days/week)</span></div><div class="ui-block-b"></div><div class="ui-block-c"><span>'+values['spa']+'<span></div>';
                                row += '<div class="ui-block-a"><span>Type of Heater</span></div><div class="ui-block-b"></div><div class="ui-block-c">'+values['heatSource']+'</div>';
                                row += '<div class="ui-block-a"><strong>Cost Comparison</strong></div><div class="ui-block-b"></div><div class="ui-block-c"><strong>Annual Utility Costs</strong></div>'; 
                                row += '<div class="ui-block-a"><span>Optiflex&trade; Pool Heating System</span></div><div class="ui-block-b"><span></span></div><div class="ui-block-c"><span>$'+values['optPoolSpaCost'].toFixed(2)+'</span></div>';
                                row += '<div class="ui-block-a"><span>Natural Gas Heater (alone)</span></div><div class="ui-block-b"><span></span></div><div class="ui-block-c"><span></span>$'+values['nonHPPoolSpaCost'].toFixed(2)+'</div>';
                                row += '<div class="ui-block-a"><span>Annual Operating Cost Savings</span></div><div class="ui-block-b"><span></span></div><div class="ui-block-c"><span>$'+values['1yrCost'].toFixed(2)+'</span></div>';
                                row += '<div class="ui-block-a"><span>Return On Investment (Tax Free)</span></div><div class="ui-block-b"><span></span></div><div class="ui-block-c"><span>'+values['optROI'].toFixed(2)+'%</span></div>';
                                row += '<div class="ui-block-a"><span>Cost Savings Thru 5 years</span></div><div class="ui-block-b"><span></span></div><div class="ui-block-c"><span></span>$'+values['5yrCost'].toFixed(2)+'</div>';
                                row += '<div class="ui-block-a"><span>Cost Savings Thru 10 years</span></div><div class="ui-block-b"><span></span></div><div class="ui-block-c"><span>$'+values['10yrCost'].toFixed(2)+'</span></div>';
                                row += '<div class="ui-block-a"><strong>CO<sub>2</sub> Comparison</strong></span></div><div class="ui-block-b"><span></span></div><div class="ui-block-c"><strong>Annual CO<sub>2</sub> Savings (lbs)</strong></div>';
                                row += '<div class="ui-block-a"><span>Annual CO<sub>2</sub> Savings</span></div><div class="ui-block-b"><span></span></div><div class="ui-block-c"><span>'+values['optCO2Save'].toFixed(0)+'</span></div>';
                                $('#var').append(row);
                }else if(defaults.choice == 3){
                                $('#var').children().remove();
                                var row = '<div class="ui-block-a"><Strong>Annual CO<sub>2</sub> Reductions:</strong></div><div class="ui-block-b"><strong></strong></div><div class="ui-block-c"><span><span></div>';
                                row += '<div class="ui-block-a"><span>'+ 'vs. Natural Gas Heater' +'</span></div><div class="ui-block-b"></div><div class="ui-block-c">'+values['ngPoolCO2Save'].toFixed(0)+'</div>';
                                row += '<div class="ui-block-a"><span>'+ 'vs. Propane Heater' +'</span></div><div class="ui-block-b"><span></span></div><div class="ui-block-c"><span>'+values['lpPoolCO2Save'].toFixed(0)+'</span></div>'; 
                                $('#var').append(row);
                }else{
                                $('#var').children().remove();
                                var row = '<div class="ui-block-a"><span><strong>Heating Option</strong></span></div><div class="ui-block-b"><strong>Annual Cost</strong></div><div class="ui-block-c"><strong>Savings</strong></div>';
                                row += '<div class="ui-block-a"><span>AquaComfort</span></div><div class="ui-block-b"><span>$'+values['acPoolCost'].toFixed(2)+'</span></div><div class="ui-block-c"><span></span></div>';
                                row += '<div class="ui-block-a"><span>Natural Gas Heater</span></div><div class="ngOC ui-block-b"><span>$'+values['npPoolCost'].toFixed(2)+'</span></div><div class="ui-block-c"><span>$'+values['npPoolCostSave'].toFixed(2)+'</span></div>';
                                row += '<div class="ui-block-a"><span>Propane Heater</span></div><div class="proOC ui-block-b"><span>$'+values['lpPoolCost'].toFixed(2)+'</span></div><div class="ui-block-c"><span></span>$'+values['lpPoolCostSave'].toFixed(2)+'</div>';
                                $('#var').append(row);
                }
                
                
                




                //        </div>
                
};
var getSeasons = function(e){
    

    var location_choice = e					
    var season_list = [];
        season_list["al_birmingham"] = 4;
        season_list["al_mobile"] = 2;
        season_list["little_rock_ar"] = 4;
        season_list["az_phoenix"] = 1;
        season_list["concord_ca"] = 4;
        season_list["los_angeles_ca"] = 1;
        season_list["sacramento_ca"] = 4;
        season_list["san_francisco_ca"] = 4;
        season_list["san_diego_ca"] = 1;
        season_list["denver_co"] = 6;
        season_list["fairfield_county_ct"] = 6;
        season_list["hartford_ct"] = 6;
        season_list["washington_dc"] = 5;
        season_list["wilmington_de"] = 5;
        season_list["daytona_beach_fl"] = 1;
        season_list["fort_myers_fl"] = 1;
        season_list["gainesville_fl"] = 1;
        season_list["jacksonville_fl"] = 1;
        season_list["melbourne_fl"] = 1;
        season_list["miami_ft_lauderdale_fl"] = 1;
        season_list["orlando_fl"] = 1;
        season_list["pensacola_fl"] = 1;
        season_list["sarasota_fl"] = 1;
        season_list["tallahasee_fl"] = 1;
        season_list["tampa_fl"] = 1;
        season_list["FL-West Palm Beach"] = 1;
        season_list["atlanta_ga"] = 4;
        season_list["savannah_ga"] = 4;
        season_list["des_moines_ia"] = 6;
        season_list["boise_id"] = 6;
        season_list["chicago_il"] = 6;
        season_list["peoria_il"] = 6;
        season_list["springfield_il"] = 6;
        season_list["IN-Fort Wayne"] = 6;
        season_list["indianapolis_in"] = 6;
        season_list["wichita_ks"] = 5;
        season_list["lexington_ky"] = 5;
        season_list["louisville_ky"] = 5;
        season_list["baton_rouge_la"] = 2;
        season_list["new_orleans_la"] = 2;
        season_list["shreveport_la"] = 4;
        season_list["boston_ma"] = 6;
        season_list["springfield_ma"] = 6;
        season_list["baltimore_md"] = 5;
        season_list["portland_me"] = 6;
        season_list["detroit_mi"] = 6;
        season_list["grand_rapids_mi"] = 6;
        season_list["minneapolis_mn"] = 6;
        season_list["MO-Kansas City"] = 5;
        season_list["st_louis_mo"] = 5;
        season_list["jackson_ms"] = 4;
        season_list["great_falls_mt"] = 6;
        season_list["asheville_nc"] = 6;
        season_list["charlotte_nc"] = 5;
        season_list["raleigh_nc"] = 5;
        season_list["bismark_nd"] = 6;
        season_list["omaha_ne"] = 6;
        season_list["manchester_nh"] = 6;
        season_list["north_nj"] = 6;
        season_list["south_nj"] = 5;
        season_list["albuquerque_nm"] = 5;
        season_list["roswell_nm"] = 4;
        season_list["las_vegas_nv"] = 4;
        season_list["reno_nv"] = 6;
        season_list["albany_ny"] = 6;
        season_list["long_island_ny"] = 6;
        season_list["upstate_ny"] = 6;
        season_list["westchester_ny"] = 6;
        season_list["cincinnati_oh"] = 5;
        season_list["cleveland_oh"] = 6;
        season_list["columbus_oh"] = 6;
        season_list["OH-Toledo"] = 6;
        season_list["oklahoma_city_ok"] = 4;
        season_list["OK-Tulsa"] = 4;
        season_list["portland_or"] = 6;
        season_list["harrisburg_pa"] = 5;
        season_list["philadelphia_pa"] = 5;
        season_list["pittsburgh_pa"] = 6;
        season_list["providence_ri"] = 6;
        season_list["charleston_sc"] = 4;
        season_list["columbia_sc"] = 4;
        season_list["pierre_sd"] = 6;
        season_list["knoxville_tn"] = 5;
        season_list["memphis_tn"] = 4;
        season_list["nashville_tn"] = 5;
        season_list["austin_tx"] = 3;
        season_list["dallas_tx"] = 4;
        season_list["el_paso_tx"] = 4;
        season_list["houston_tx"] = 3;
        season_list["san_antonio_tx"] = 3;
        season_list["salt_lake_city_ut"] = 6;
        season_list["norfolk_va"] = 5;
        season_list["richmond_va"] = 5;
        season_list["burlington_vt"] = 6;
        season_list["seattle_wa"] = 6;
        season_list["spokane_wa"] = 6;
        season_list["madison_wi"] = 6;
        season_list["milwaukee_wi"] = 6;
        season_list["charleston_wv"] = 5;
        season_list["cheyenne_wy"] = 6;
    
    var season_list_1 = [];
        season_list_1[1] = "1/1 - 12/31";
        season_list_1[2] = "2/1 - 12/31";
        season_list_1[3] = "3/1 - 11/30";
        season_list_1[4] = "3/1 - 12/31";
    
    var season_list_2 = [];
        season_list_2[1] = "1/1 - 12/31";
        season_list_2[2] = "2/1 - 12/31";
        season_list_2[3] = "3/1 - 11/15";
        season_list_2[4] = "3/1 - 11/30";
        season_list_2[5] = "3/1 - 12/31";
        season_list_2[6] = "3/15 - 11/15";
        season_list_2[7] = "4/1 - 11/15";
        season_list_2[8] = "4/15 - 10/15";
        season_list_2[9] = "4/15 - 11/1";
        season_list_2[10] = "4/15 - 11/15";
    
    var season_list_3 = [];
        season_list_3[1] = "1/1 - 12/31";
        season_list_3[2] = "3/1 - 11/15";
        season_list_3[3] = "3/1 - 11/30";
        season_list_3[4] = "3/15 - 11/15";
        season_list_3[5] = "4/1 - 11/15";
        season_list_3[6] = "4/15 - 10/15";
        season_list_3[7] = "4/15 - 11/1";
        season_list_3[8] = "4/15 - 11/15";
    
    var season_list_4 = [];
        season_list_4[1] = "3/1 - 11/15";
        season_list_4[2] = "3/1 - 11/30";
        season_list_4[3] = "3/15 - 11/15";
        season_list_4[4] = "4/1 - 11/15";
        season_list_4[5] = "4/15 - 10/15";
        season_list_4[6] = "4/15 - 11/1";
        season_list_4[7] = "4/15 - 11/15";
    
    var season_list_5 = [];
        season_list_5[1] = "4/15 - 9/30";
        season_list_5[2] = "4/15 - 10/15";
        season_list_5[3] = "5/1 - 9/30";
        season_list_5[4] = "5/1 - 10/15";
        season_list_5[5] = "5/15 - 9/30";
        season_list_5[6] = "5/15 - 10/15";
        season_list_5[7] = "6/1 - 9/15";
        season_list_5[8] = "6/1 - 9/30";
    var season_list_6 = [];
        season_list_6[1] = "5/1 - 9/15";
        season_list_6[2] = "5/1 - 9/30";
        season_list_6[3] = "5/1 - 10/15";
        season_list_6[4] = "5/15 - 9/15";
        season_list_6[5] = "5/15 - 9/30";
        season_list_6[6] = "5/15 - 10/15";
        season_list_6[7] = "6/1 - 9/15";
        season_list_6[8] = "6/1 - 9/30";
    

    if(season_list[location_choice] == 1){
        
            return season_list_1;
        
    }else if(season_list[location_choice] == 2){
        
        return season_list_2;
    
    }else if(season_list[location_choice] == 3){
        
        return season_list_3;
    
    }else if(season_list[location_choice] == 4){
        
        return season_list_4;
    
    }else if(season_list[location_choice] == 5){
        
        return season_list_5;
    
    }else if(season_list[location_choice] == 6){
        
        return season_list_6;
    
    }else{
        return false;
    }
    
    //
}
$(document).ready(function() {
    $('#spaUse').css('visibility','hidden');
    $('#heatSource').css('visibility','hidden');
    $('li').click(listClick);
    $(':radio').click(clickChoices);
    $('#calc').click(function(event) {
                
                clickCalculate();
    });
    

    function listClick(){
        
        var container = $(this).parent().attr('id');
        
        if(container == 'city-select'){
            var season = getSeasons(this.id);
            $('#season-select').children('li').remove();
            var newSeason = [];
            var seastring = ''
            for(var i = 1; i < season.length; ++i){ 
                seastring += '<li id="season'+i+'" class="new ui-li ui-li-static ui-body-e ui-corner-top" data-theme="e">'+season[i]+'</li>';
            }   
            $('#season-select').append(seastring);
            $('#season-select').children('li').click(listClick);
        }
        //-------remove selected before adding new selection
        $('#'+container+' li').each(function(){
            $(this).removeClass('selected');
        });
        //------- remove jquery class then reapply after selected is placed
        $(this).removeClass('ui-li ui-li-static ui-body-e');
        $(this).addClass('selected ui-li ui-li-static ui-body-e');  
    };


    function clickChoices(){

        if(this.id == 'radio2'){
            $('#spaUse').removeAttr('style');
            $('#heatSource').removeAttr('style');
            
        }else{
            $('#spaUse').css('visibility','hidden');
            $('#heatSource').css('visibility','hidden');
            
        }
    };

    function clickCalculate(){

            
            var choice = $("input[name='radio1']:checked").val();
            
            
            
            
            
            if($('#city-select').children('li').hasClass('selected')){
                                var location = $('#city-select').children('.selected').attr('id');
                }else{
                                alert('Please Select A Location');
                }
            if($('#season-select').children('li').hasClass('selected')){
                                 var swimSeason = $('#season-select').children('.selected').text();
                }else{
                                alert('Please Select A Desired Season');
                }
            if($("input[name='surface']").val() != "Surface Area (sq. ft)" && $("input[name='surface']").val().length > 0){
                
                                var surfaceArea = parseInt($("input[name='surface']").val());
                
                }else if($("input[name='width']").val() != "width" && $("input[name='length']").val() != "length" ){
                
                                var surfaceArea = parseInt($("input[name='width']").val()) * parseInt($("input[name='width']").val());
                
                }else{
                                alert('Please Indicate your Pools Surface Area');
                }
            if($('#temp-select').children('li').hasClass('selected')){
                                var desiredTemp = $('#temp-select').children('.selected').attr('id');
                                var dt = desiredTemp.split('p');
                                var desiredTemp = dt[1];
                }else{
                                alert('Please Select A Desired Temp');
                }
            if($('#blanket-select').children('li').hasClass('selected')){
                                var solarBlanket = $('#blanket-select').children('.selected').attr('id');
                }else{
                                alert('Please Select A Solar Blanket Option');
                }
            
            if(choice == '2'){
                
               
                
                if($('#spa-select').children('li').hasClass('selected')){
                                var spaUsage = $('#spa-select').children('.selected').attr('id');
                                var dt = spaUsage.split('a');
                                var spaUsage = dt[1];
                }else{
                                alert('Please Select A Spa Option');
                }
                if($('#heat-select').children('li').hasClass('selected')){
                                var heatSource = $('#heat-select').children('.selected').attr('id');
                }else{
                                alert('Please Selected A Heat Source');
                }
                
            }else{
                var spaUsage = false;
                var heatSource = false;
                
            }
            if(choice && location && swimSeason && surfaceArea && desiredTemp && solarBlanket){
                
                getCalc(choice, location, swimSeason, surfaceArea ,desiredTemp, solarBlanket, spaUsage, heatSource);
            }else{
                alert('Please make sure all fields have an option selected');
            }

};

});


