

var location_choice = _POST['location_choice'];						
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
										
if (season_list[location_choice] == 1){
	foreach(season_list_1 as season){
		echo '<li id="season1" season="'. season .'"><a href="#" style="text-decoration:none;color:#000;">'. season .'</a></li>';
		//echo "<option value=" . '"' . season . '">' . season . "</option>";
	};
};
						
if (season_list[location_choice] == 2)
{
	foreach (season_list_2 as season)
	{
		echo '<li id="season2" season="'. season .'"><a href="#" style="text-decoration:none;color:#000;">'. season .'</a></li>';
		//echo "<option value=" . '"' . season . '">' . season . "</option>";
	}
}
						
if (season_list[location_choice] == 3)
{
	foreach (season_list_3 as season)
	{	
		echo '<li id="season3" season="'. season .'"><a href="#" style="text-decoration:none;color:#000;">'. season .'</a></li>';
		//echo "<option value=" . '"' . season . '">' . season . "</option>";
	}
}
						
if (season_list[location_choice] == 4)
{
	foreach (season_list_4 as season)
	{
		echo '<li id="season4" season="'. season .'"><a href="#" style="text-decoration:none;color:#000;">'. season .'</a></li>';
		//echo "<option value=" . '"' . season . '">' . season . "</option>";
	}
}

if (season_list[location_choice] == 5)						
{
	foreach (season_list_5 as season)
	{	
		echo '<li id="season5" season="'. season .'"><a href="#" style="text-decoration:none;color:#000;">'. season .'</a></li>';
		//echo "<option value=" . '"' . season . '">' . season . "</option>";
	}
}
						
if (season_list[location_choice] == 6)						
{
	foreach (season_list_6 as season)
	{
		echo '<li id="season6" season="'. season .'"><a href="#" style="text-decoration:none;color:#000;">'. season .'</a></li>';
		//echo "<option value=" . '"' . season . '">' . season . "</option>";
	}
}

?>