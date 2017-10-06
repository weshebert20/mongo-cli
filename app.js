//getting mongo
var mongo = require("mongodb").MongoClient;
//getting prompt sync () = grab everything
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  	var collection = db.collection('restaurants');

  		//view information by name

  	var allRestaurants = collection.find().toArray(function(err, doc){
  		var all = doc;
  		// var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  		var findChoice = prompt("Type a name and press enter to view your restaurant of choice: ");
  			// for(let i=0; i < all.length; i++){
  			if(findChoice == "Cookies Corner"){
    			console.log(all[0]);
  			} else if (findChoice == "The Blind Dog Cafe"){
    			console.log(all[1]);
  			} else if (findChoice == "Birch & Barley"){
  				console.log(all[2]);
  			} else if (findChoice == "Captain Cookie and the Milk Man"){
  				console.log(all[3]);
  			} else if (findChoice == "J's Cookie"){
  				console.log(all[4]);
  			} else {
  				console.log("Hmm, try again");
  			}
	});


		//add new restaurant 

 //  	var addNewName = prompt("Add a new restaurant, to get started add a name and press enter: ");
 //  	var addNewStreet = prompt("Enter the street and press enter: ");
 //  	var addNewZip = prompt("Enter the zip code: ");
 //  	var addYelp = prompt("If you know the yelp URL, please enter here: ");

 //  	collection.insert(
 //   		{
 //      		name: addNewName,
 //         	street : addNewStreet,
 //         	zipcode : addNewZip,
 //      		yelp: addYelp,
	// 	}
	// );


		//delete restaurant

		// var deleteRestaurant = prompt("Which restaurant would you like to delete? ");
		// 	collection.remove({name: deleteRestaurant});

		//edit restaurant

		// var editName = prompt("Which restaurant are you looking to edit? ");
	
		// var editNameRestaurant = prompt("Give the restaurant a new name? ");
		// var editStreetRestaurant = prompt("Give the restuarant a new street: ");
		// var editZip = prompt("Give the restuarant a new Zip: ");
		// var editYelp = prompt("Give the restuarant a new Yelp: ");

		// collection.update({name: editName},

		// {
		// 	name: editNameRestaurant,
		// 	street: editStreetRestaurant,
		// 	zip: editZip,
		// 	yelp: editYelp
		// });


});