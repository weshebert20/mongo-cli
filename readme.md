# Build a CLI Mongo App w/ Node

_**Note**_ If you did not finish creating the restaurants db from the last lesson, and need seed data follow the additional setup from [this file.](./seeds.md)

Your task is to connect to the `restaurant_db` via the `mongodb` node module and
build a little CLI app that will allow a user to enter commands to query our
database.

## Setup:

Start by:
1. forking and cloning this exercise
2. creating a main `js` file, and installing the `mongodb` node module:

```bash
$ touch app.js
$ npm init
$ npm install --save mongodb
```

Great, now use an instance of the MongoClient to connect to the `restaurant_db` and search for all restaurants:

```js
// app.js

var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  collection.find().toArray(function(err, docs){
    console.log(docs);
  })
})
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
  var userChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  if(userChoice == "all"){
    collection.find().toArray(function(err, doc){
      console.log(doc);
    })
  }
})
```

> **Note:** It is probably a good idea to test each of these in the `mongo` shell before adding the prompt to `app.js`.

## Task 1:

Comment out the first prompt and add another prompt to let the user view more information about a specific restaurant, by entering a name.

> **Hint:** How can we use the `.find()` command with a specific name?  You may want to research the [.forEach()](https://docs.mongodb.com/v3.2/reference/method/cursor.forEach/) command.

## Task 2:

Allow users to add their own restaurants.

> **Hint:** You can use a prompt for each property in the `restaurant` object and use `.insert()` to put this object into the DB.

### Bonus!

Allow users to edit/delete restaurants.
