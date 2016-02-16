var weekly;
var monthly = weekly * 4;
var mta = 2.75;
var trips;

function tripCalc(){
	 weekly = document.getElementById("weekly").value;
	 monthly = weekly * 4
	 mta = 2.75;
	 trips = monthly * 2.75;
	alert("You spend $ " + trips + " on the MTA every month");
	rightTrips();
}

function rightTrips(){
	 if (trips > 116.50){
	alert("You need a monthly card. Save your money!!");
	} else {
	alert("You don't need a monthly card.")
 }
}
