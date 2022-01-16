var prior = 0;
var next = 50;

function chbWeightOnClick() {
    if(document.getElementById("chbWeight").checked == true)
    {
		document.getElementById("maxCholesterol").value = "0";
		document.getElementById("maxCholesterol").setAttribute("style", "background-color: #72fc53;");
		document.getElementById("maxFat").value = "5";
		document.getElementById("maxFat").setAttribute("style", "background-color: #72fc53;");
		document.getElementById("maxSatFat").value = "0";
		document.getElementById("maxSatFat").setAttribute("style", "background-color: #72fc53;");
		document.getElementById("maxSugar").value = "5";
		document.getElementById("maxSugar").setAttribute("style", "background-color: #72fc53;");
		document.getElementById("maxSodium").value = "250";
		document.getElementById("maxSodium").setAttribute("style", "background-color: #72fc53;");
	}
	else
	{
		document.getElementById("maxCholesterol").value = "";
		document.getElementById("maxCholesterol").placeholder = "Max";
		document.getElementById("maxCholesterol").setAttribute("style", "background-color: white;");
		document.getElementById("maxFat").value = "";
		document.getElementById("maxFat").placeholder = "Max";
		document.getElementById("maxFat").setAttribute("style", "background-color: white;");
		document.getElementById("maxSatFat").value = "";
		document.getElementById("maxSatFat").placeholder = "Max";
		document.getElementById("maxSatFat").setAttribute("style", "background-color: white;");
		document.getElementById("maxSugar").value = "";
		document.getElementById("maxSugar").placeholder = "Max";
		document.getElementById("maxSugar").setAttribute("style", "background-color: white;");
		document.getElementById("maxSodium").value = "";
		document.getElementById("maxSodium").placeholder = "Max";
		document.getElementById("maxSodium").setAttribute("style", "background-color: white;");
	}
}

function chbDigestionOnClick() {
    if(document.getElementById("chbDigestion").checked == true)
    {
		document.getElementById("maxSugar").value = "0";
		document.getElementById("maxSugar").setAttribute("style", "background-color: #72fc53;");
	}
	else
	{
		document.getElementById("maxSugar").value = "";
		document.getElementById("maxSugar").placeholder = "Max";
		document.getElementById("maxSugar").setAttribute("style", "background-color: white;");
	}
}

function chbAnemiaOnClick() {
    if(document.getElementById("chbAnemia").checked == true)
    {
		document.getElementById("minIron").value = "50";
		document.getElementById("minIron").setAttribute("style", "background-color: #72fc53;");
	}
	else
	{
		document.getElementById("minIron").value = "";
		document.getElementById("minIron").placeholder = "Min";
		document.getElementById("minIron").setAttribute("style", "background-color: white;");
	}
}

function chbOsteoporosisOnClick() {
    if(document.getElementById("chbOsteoporosis").checked == true)
    {
		document.getElementById("maxSodium").value = "150";
		document.getElementById("maxSodium").setAttribute("style", "background-color: #72fc53;");
	}
	else
	{
		document.getElementById("maxSodium").value = "";
		document.getElementById("maxSodium").placeholder = "Max";
		document.getElementById("maxSodium").setAttribute("style", "background-color: white;");
	}
}

function getNextPage()
{
	prior = prior + 50;
	next = next + 50;
	advancedQuery()
}

function getPriorPage()
{
	if (prior>50)
	{
		prior = prior - 50;
		next = next - 50;		
	}
	advancedQuery();
}

function getKeyboardCode(event) {
    var x = event.keyCode;
    if(x==13)
	{
		advancedQuery();
	}
}

function advancedQuery() {
    
		
	//Search food 
	var url1="";
	var output="";
    
	if(document.getElementById("foodName").value=="")
	{
		document.getElementById("foodError").innerHTML = "Please enter food name";
		document.getElementById("lookupResult").innerHTML ="";
		return;
	}
	else
	{
		document.getElementById("foodError").innerHTML = "";
	}
	
	//************************ Begin Calories Input ******************************
	var minCalories = document.getElementById("minCalories").value;
	if(isNaN(minCalories) || minCalories=="")
	{
		minCalories=0;
		document.getElementById("minCalories").value="";
		document.getElementById("minCalories").placeholder="Min";
	}
	else
	{
		minCalories = Number(document.getElementById("minCalories").value);
	}
	
	var maxCalories = document.getElementById("maxCalories").value;
	if(isNaN(maxCalories) || maxCalories=="")
	{
		maxCalories=100000000;
		document.getElementById("maxCalories").value="";
		document.getElementById("maxCalories").placeholder="Max";
	}
	else
	{
		maxCalories = Number(document.getElementById("maxCalories").value);
	}
	
	if ((minCalories > maxCalories) || (minCalories<0) || (maxCalories<0))
	{
		if(minCalories > maxCalories)
		{
			document.getElementById("CaloriesError").innerHTML = "Invalid input: Min value is greater than Max";
		}
		if((minCalories<0) || (maxCalories<0))
		{
			document.getElementById("CaloriesError").innerHTML = "Invalid input: Negative value";
		}
	}
	else
	{
		document.getElementById("CaloriesError").innerHTML = "";
	}
	//************************ End Calories Input ******************************

	//************************ Begin Fat Input ******************************
	var minFat = document.getElementById("minFat").value;
	if(isNaN(minFat) || minFat=="")
	{
		minFat=0;
		document.getElementById("minFat").value="";
		document.getElementById("minFat").placeholder="Min";
	}
	else
	{
		minFat = Number(document.getElementById("minFat").value);
	}
		
	var maxFat = document.getElementById("maxFat").value;
	if(isNaN(maxFat) || maxFat=="")
	{
		maxFat=100000000;
		document.getElementById("maxFat").value="";
		document.getElementById("maxFat").placeholder="Max";
	}
	else
	{
		maxFat = Number(document.getElementById("maxFat").value);
	}
		
	if ((minFat > maxFat) || (minFat<0) || (maxFat<0))
	{
		if(minFat > maxFat)
		{
			document.getElementById("FatError").innerHTML = "Invalid input: Min value is greater than Max";
		}
		if((minFat<0) || (maxFat<0))
		{
			document.getElementById("FatError").innerHTML = "Invalid input: Negative value";
		}
	}
	else
	{
		document.getElementById("FatError").innerHTML = "";
	}
	//************************ End Fat Input ******************************
	
	
	//************************ Begin Saturated Fat Input ******************************
	var minSatFat = document.getElementById("minSatFat").value;
	if(isNaN(minSatFat) || minSatFat=="")
	{
		minSatFat=0;
		document.getElementById("minSatFat").value="";
		document.getElementById("minSatFat").placeholder="Min";
	}
	else
	{
		minSatFat = Number(document.getElementById("minSatFat").value);
	}
		
	var maxSatFat = document.getElementById("maxSatFat").value;
	if(isNaN(maxSatFat) || maxSatFat=="")
	{
		maxSatFat=100000000;
		document.getElementById("maxSatFat").value="";
		document.getElementById("maxSatFat").placeholder="Max";
	}
	else
	{
		maxSatFat = Number(document.getElementById("maxSatFat").value);
	}
	
	if ((minSatFat > maxSatFat) || (minSatFat<0) || (maxSatFat<0))
	{
		if(minSatFat > maxSatFat)
		{
			document.getElementById("SatFatError").innerHTML = "Invalid input: Min value is greater than Max";
		}
		if((minSatFat<0) || (maxSatFat<0))
		{
			document.getElementById("SatFatError").innerHTML = "Invalid input: Negative value";
		}
	}
	else
	{
		document.getElementById("SatFatError").innerHTML = "";
	}
	//************************ End Saturated Fat Input ******************************
		
	//************************ Begin Sodium Input ******************************
	var minSodium = document.getElementById("minSodium").value;
	if(isNaN(minSodium) || minSodium=="")
	{
		minSodium=0;
		document.getElementById("minSodium").value="";
		document.getElementById("minSodium").placeholder="Min";
	}
	else
	{
		minSodium = Number(document.getElementById("minSodium").value);
	}
		
	var maxSodium = Number(document.getElementById("maxSodium").value);
	if(isNaN(maxSodium) || maxSodium=="")
	{
		maxSodium=100000000;
		document.getElementById("maxSodium").value="";
		document.getElementById("maxSodium").placeholder="Max";
	}
	else 
	{
		maxSodium = Number(document.getElementById("maxSodium").value);
	}
	
	if ((minSodium > maxSodium) || (minSodium<0) || (maxSodium<0))
	{
		if(minSodium > maxSodium)
		{
			document.getElementById("SodiumError").innerHTML = "Invalid input: Min value is greater than Max";
		}
		if((minSodium<0) || (maxSodium<0))
		{
			document.getElementById("SodiumError").innerHTML = "Invalid input: Negative value";
		}
	}
	else
	{
		document.getElementById("SodiumError").innerHTML = "";
	}
	//************************ End Sodium Input ******************************
	
	//************************ Begin Fiber Input ******************************
	var minFiber = document.getElementById("minFiber").value;
	if(isNaN(minFiber) || minFiber=="")
	{
		minFiber=0;
		document.getElementById("minFiber").value="";
		document.getElementById("minFiber").placeholder="Min";
	}
	else
	{
		minFiber = Number(document.getElementById("minFiber").value);
	}
	
	var maxFiber = document.getElementById("maxFiber").value;
	if(isNaN(maxFiber) || maxFiber=="")
	{
		maxFiber=100000000;
		document.getElementById("maxFiber").value="";
		document.getElementById("maxFiber").placeholder="Max";
	}
	else 
	{
		maxFiber = Number(document.getElementById("maxFiber").value);
	}

	if ((minFiber > maxFiber) || (minFiber<0) || (maxFiber<0))
	{
		if(minFiber > maxFiber)
		{
			document.getElementById("FiberError").innerHTML = "Invalid input: Min value is greater than Max";
		}
		if((minFiber<0) || (maxFiber<0))
		{
			document.getElementById("FiberError").innerHTML = "Invalid input: Negative value";
		}
	}
	else
	{
		document.getElementById("FiberError").innerHTML = "";
	}
	//************************ End Fiber Input ******************************
	
	//************************ Begin Sugar Input ******************************
	var minSugar = document.getElementById("minSugar").value;
	if(isNaN(minSugar) || minSugar=="")
	{
		minSugar=0;
		document.getElementById("minSugar").value="";
		document.getElementById("minSugar").placeholder="Min";
	}
	else
	{
		minSugar = Number(document.getElementById("minSugar").value);
	}
	
	var maxSugar = document.getElementById("maxSugar").value;
	if(isNaN(maxSugar) || maxSugar=="")
	{
		maxSugar=100000000;
		document.getElementById("maxSugar").value="";
		document.getElementById("maxSugar").placeholder="Max";
	}
	else 
	{
		maxSugar = Number(document.getElementById("maxSugar").value);
	}
	
	if ((minSugar > maxSugar) || (minSugar<0) || (maxSugar<0))
	{
		if(minSugar > maxSugar)
		{
			document.getElementById("SugarError").innerHTML = "Invalid input: Min value is greater than Max";
		}
		if((minSugar<0) || (maxSugar<0))
		{
			document.getElementById("SugarError").innerHTML = "Invalid input: Negative value";
		}
	}
	else
	{
		document.getElementById("SugarError").innerHTML = "";
	}
	
	//************************ End Sugar Input ******************************
	
	//************************ Begin Protein Input ******************************
	var minProtein = document.getElementById("minProtein").value;
	if(isNaN(minProtein) || minProtein=="")
	{
		minProtein=0;
		document.getElementById("minProtein").value="";
		document.getElementById("minProtein").placeholder="Min";
	}
	else
	{
		minProtein = Number(document.getElementById("minProtein").value);
	}
		
	var maxProtein = document.getElementById("maxProtein").value;
	if(isNaN(maxProtein) || maxProtein=="")
	{
		maxProtein=100000000;
		document.getElementById("maxProtein").value="";
		document.getElementById("maxProtein").placeholder="Max";
	}
	else 
	{
		maxProtein = Number(document.getElementById("maxProtein").value);
	}
	
	if ((minProtein > maxProtein) || (minProtein<0) || (maxProtein<0))
	{
		if(minProtein > maxProtein)
		{
			document.getElementById("ProteinError").innerHTML = "Invalid input: Min value is greater than Max";
		}
		if((minProtein<0) || (maxProtein<0))
		{
			document.getElementById("ProteinError").innerHTML = "Invalid input: Negative value";
		}
	}
	else
	{
		document.getElementById("ProteinError").innerHTML = "";
	}
	//************************ End Protein Input ******************************
	
	
	//************************ Begin Cholesterol Input ******************************
	var minCholesterol = document.getElementById("minCholesterol").value;
	if(isNaN(minCholesterol) || minCholesterol=="")
	{
		minCholesterol=0;
		document.getElementById("minCholesterol").value="";
		document.getElementById("minCholesterol").placeholder="Min";
	}
	else
	{
		minCholesterol = Number(document.getElementById("minCholesterol").value);
	}
		
	var maxCholesterol = document.getElementById("maxCholesterol").value;
	if(isNaN(maxCholesterol) || maxCholesterol=="")
	{
		maxCholesterol=100000000;
		document.getElementById("maxCholesterol").value="";
		document.getElementById("maxCholesterol").placeholder="Max";
	}
	else 
	{
		maxCholesterol = Number(document.getElementById("maxCholesterol").value);
	}	
	
	if ((minCholesterol > maxCholesterol) || (minCholesterol<0) || (maxCholesterol<0))
	{
		if(minCholesterol > maxCholesterol)
		{
			document.getElementById("CholesterolError").innerHTML = "Invalid input: Min value is greater than Max";
		}
		if((minCholesterol<0) || (maxCholesterol<0))
		{
			document.getElementById("CholesterolError").innerHTML = "Invalid input: Negative value";
		}
	}
	else
	{
		document.getElementById("CholesterolError").innerHTML = "";
	}
	//************************ End Cholesterol Input ******************************
	
    
    //************************ Begin Iron Input ******************************
	var minIron = document.getElementById("minIron").value;
	if(isNaN(minIron) || minIron=="")
	{
		minIron=0;
		document.getElementById("minIron").value="";
		document.getElementById("minIron").placeholder="Min";
	}
	else
	{
		minIron = Number(document.getElementById("minIron").value);
	}
	
	var maxIron = document.getElementById("maxIron").value;
	if(isNaN(maxIron) || maxIron=="")
	{
		maxIron=100000000;
		document.getElementById("maxIron").value="";
		document.getElementById("maxIron").placeholder="Max";
	}
	else 
	{
		maxIron = Number(document.getElementById("maxIron").value);
	}	
	if ((minIron > maxIron) || (minIron<0) || (maxIron<0))
	{
		if(minIron > maxIron)
		{
			document.getElementById("IronError").innerHTML = "Invalid input: Min value is greater than Max";
		}
		if((minIron<0) || (maxIron<0))
		{
			document.getElementById("IronError").innerHTML = "Invalid input: Negative value";
		}
	}
	else
	{
		document.getElementById("IronError").innerHTML = "";
	}
	//************************ End Iron Input ******************************
    

    
	if(document.getElementById("chbWeight").checked == true)
	{
		maxCholesterol=0;
		maxFat=5;
		maxSatFat=0;
		maxSugar=5;
		maxSodium=250;
	}
	
	if(document.getElementById("chbDigestion").checked == true)
	{
		maxSugar=0;
	}
	
	if(document.getElementById("chbAnemia").checked == true)
	{
		minIron=50;
	}
	
	if(document.getElementById("chbOsteoporosis").checked == true)
	{
		maxSodium=150;
	}
        
	var calories=0;
	var fat=0;
	var cholesterol=0;
	var sodium=0;
	var fiber=0;
	var sugar=0;
	var protein=0;
	var satFat=0;
	var iron=0;
    
	//window.location.href = "nutrilookup.html"
	//url1='https://api.nutritionix.com/v1_1/search/taco?results=0%3A20&cal_min=0&cal_max=5000&fields=*&appId=33390a27&appKey=bfe5d38a5bacee5ca7da94984afa5c05';
    url1='https://api.nutritionix.com/v1_1/search/' + foodName.value + '?results=' + prior + '%3A' + next +'&fields=*&appId=33390a27&appKey=bfe5d38a5bacee5ca7da94984afa5c05';
    $.getJSON(url1, function(data) {
        $.each(data.hits, function(i, element){
		//output += "Total hits: " + data["total_hits"] + "<br>";
		
                calories=Number(data["hits"][i]["fields"]["nf_calories"]);
                fat=Number(data["hits"][i]["fields"]["nf_total_fat"]);
                satFat=Number(data["hits"][i]["fields"]["nf_saturated_fat"]);
                cholesterol=Number(data["hits"][i]["fields"]["nf_cholesterol"]);
                sodium=Number(data["hits"][i]["fields"]["nf_sodium"]);
                fiber=Number(data["hits"][i]["fields"]["nf_dietary_fiber"]);
                sugar=Number(data["hits"][i]["fields"]["nf_sugars"]);
                protein=data["hits"][i]["fields"]["nf_protein"];
                iron=data["hits"][i]["fields"]["nf_calories"];
                
                //alert(calories);
                if ( (calories >= minCalories && calories <= maxCalories) && (fat >= minFat && fat <= maxFat) && (cholesterol >= minCholesterol && cholesterol <= maxCholesterol) 
                && (sodium >= minSodium && sodium <= maxSodium) && (fiber >= minFiber && fiber <= maxFiber) && (sugar >= minSugar && sugar <= maxSugar) 
                && (protein >= minProtein && protein <= maxProtein) && (satFat >= minSatFat && satFat <= maxSatFat) && (iron >= minIron && iron <= maxIron) )
                {
		    
                        output +="<div class=\"col-md-3 col-sm-6\">";
                            output += "<div class=\"border-style2\">";
                                output += "<b>Brand: </b>" + data["hits"][i]["fields"]["brand_name"] + "<br>";
                                output += "<b>Item Name: </b>" + data["hits"][i]["fields"]["item_name"] + "<br>";
                                output += "<b>Calories: </b>" + calories + "<br>"; 
                                output += "<b>Calories From Fat: </b>" + data["hits"][i]["fields"]["nf_calories_from_fat"] + "<br>";
                                output += "<b>Total Fat: </b>" + fat + "<br>"; 
                                output += "<b>Saturated Fat: </b>" + satFat + "<br>";
                                output += "<b>Trans Fatty Acid: </b>" + data["hits"][i]["fields"]["nf_trans_fatty_acid"] + "<br>";
                                output += "<b>Polyunsaturated Fat: </b>" + data["hits"][i]["fields"]["nf_polyunsaturated_fat"] + "<br>";
                                output += "<b>Monounsaturated Fat: </b>" + data["hits"][i]["fields"]["nf_monounsaturated_fat"] + "<br>";
                                output += "<b>Cholesterol: </b>" + cholesterol + "<br>"; 
                                output += "<b>Sodium: </b>" + sodium + "<br>"; 
                                output += "<b>Total Carbohydrate: </b>" + data["hits"][i]["fields"]["nf_total_carbohydrate"] + "<br>";
                                output += "<b>Fiber: </b>" + fiber + "<br>";
                                output += "<b>Sugar: </b>" + sugar + "<br>";
                                output += "<b>Protein: </b>" + protein + "<br>";
                                output += "<b>Iron: </b>" + iron + "<br>";
                                output += "<b>Vitamin A: </b>" + data["hits"][i]["fields"]["nf_vitamin_a_dv"] + "<br>";
                                output += "<b>Vitamin C: </b>" + data["hits"][i]["fields"]["nf_vitamin_c_dv"] + "<br>";
                                output += "<b>Calcium D: </b>" + data["hits"][i]["fields"]["nf_calcium_dv"] + "<br>";
                                output += "<b>Servings Per Container: </b>" + data["hits"][i]["fields"]["nf_servings_per_container"] + "<br>";
                                output += "<b>Serving Size Qty: </b>" + data["hits"][i]["fields"]["nf_serving_size_qty"] + "<br>";
                                output += "<b>Serving Size Unit: </b>" + data["hits"][i]["fields"]["nf_serving_size_unit"] + "<br>";
                                output += "<b>Serving Weight Grams: </b>" + data["hits"][i]["fields"]["nf_serving_weight_grams"] + "<br>";
                                output += "<b>Allergen Contains Gluten: </b>" + data["hits"][i]["fields"]["allergen_contains_gluten"] + "<br>";
                            output +="</div>";
                            output +="<br>";
                        output +="</div>";
                    
                }
                
                document.getElementById("lookupResult").innerHTML = output;
 	    });
	});
 
}


