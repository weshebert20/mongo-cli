# Build a CLI Mongo App w/ Node

Your task is to connect to the `restaurant_db` via the `mongodb` node module and
build a little CLI app that will allow a user to enter commands to query our
database.

## Setup:

1. Forking and clone this repo
2. Create a `js` file, and install the `mongodb` node module:

```bash
$ touch app.js
$ npm init -y
$ npm install --save mongodb
```

Since we dropped the `restaurant_db` from the last lesson, we will need seed data, so follow the additional setup from [this file.](./seeds.md)

Great, now use an instance of the MongoClient to connect to the `restaurant_db` and search for all restaurants:

```js
// app.js

var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  collection.find().toArray(function(err, docs){
    console.log(docs);
  });
});
```

Test this code by running the file in node `$ node app.js`: if you see all the documents outputed to your server logs, you're in great shape!
> If not, double check your connection url and that your database is in fact there and populated!

Now, add in the functionality to prompt the user for some input. To do that, we
are going to use a node module that will allow us to use the `prompt` method,
much like how we used it w/ front-end JS in the browser:

```
$ npm install --save prompt-sync
```

Now let's create a little menu prompt that will return all documents in our collection
if the user enters in the right input:

```js
// app.js

var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  if(allChoice == "all"){
    collection.find().toArray(function(err, doc){
      console.log(doc);
    });
  } else {
    console.log("Aw, you don't want to see the restaurants?");
  }
});
```

> **Note:** It is probably a good idea to test each of these in the `mongo` shell before adding the prompt to `app.js`.

### Protip: Don't run nodemon when using prompt-sync.
It won't work ¯\ _(ツ)_/¯

## Task 1:

Comment out the first prompt and add another prompt to let the user view information about a specific restaurant, by entering a name.

> **Hint:** How can we use the `.find()` command with a specific name?  

You may want to research the [.forEach()](https://docs.mongodb.com/v3.2/reference/method/cursor.forEach/) command to see how you could employ a callback function.

## Task 2:

Create a prompt for users to add their own restaurants.

> **Hint:** You can use a prompt for each property in the `restaurant` object and use `.insert()` to put this object into the DB.

### Bonus / Homework

Create a prompt for users to edit restaurants.

Create a prompt for users to delete restaurants.
