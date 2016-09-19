var express = require(' express ');
var app = express();
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var pg = require('pg');
var connectionString = 'postgress://localhost:5432/to_do_list';
var port = process.env.PORT || 3000;


//static folder

app.use(express.static('public'));

//spin up server
app.listen(port, function() {
    console.log(' server up on', port);
});


//base url
app.get('/', function(req, res) {
    console.log('base url hit');
    res.sendFile(path.resolve('public/index.html'));
});

//get tasks

app.get(' /getTask', function(req, res) {
    console.log('getTask route hit');
    //connect to db
    pg.connect(connectionString, function(err, client, done) {
        //if error
        if (err) {
            console.log(err);
        } // end error connect
        else {
            console.log('connected to db');
            //array to hold our results
            var resultsArray = [];
            //query to db
            var queryResults = client.query('SELECT * FROM tasks');
            console.log(queryResults);
            queryResults.on(' row', function(row) {
                resultsArray.push(row);
            }); // end on row
            queryResults.on(' end', function() {
                done();
                return res.json(resultsArray);
            }); // end query results
        } //end else
    }); //end connect (PG)
}); // end get tasks route

//add task
app.post('/addTask', urlencodedParser, function(req, res) {
    console.log('addTask route hit:', req.body);
    //create DB data
    var task = req.body.task;
    var status = req.body.status;
    pg.connect(connectionString, function(err, client, done) {
        //if err
        if (err) {
            console.log(err);
        } // successful conncetions
        else {
            console.log("conncected to the db");
            //make a client var
            client.query("INSERT INTO to_do(task) VAlUES($1, $2);" [task, status]);
            console.log("task added to DB");
            done();
        } //end else
    }); //end connect (PG)
}); // end add task

//post route to change status
app.post("/changeStatus", urlEncodedParser, function(req, res) {
    console.log("changin a task with", req.body);
    var id = req.body.id;
    var status = req.body.status;
    pg.connect(connectionString, function(err, client, done) {
        //error
        if (err) {
            console.log(err);
        }
        //successful connectionString
        else {
            console.log("connected to the DB");
            //make query var
            client.query("UPDATE tasks SET status = " + status + " WHERE id= " + id + ";");
            console.log("status changed in DB");
            done();
        }
    }); // end connection (PG)
}); //end change status

//delete route to remove a task
app.delete("/deleteTask", urlEncodedParser, function(req, res) {
console.log("deleting task", req.body);
pg.connect(connectionString, function(err, client, done) {
//error
if (err) {
    console.log(err);
}
//successful connection
else {
    console.log("connected to the DB");
    //make query var
    client.query("DELETE FROM tasks WHERE id =($1);", [req.body.id]);
    console.log("Task" + req.body.id + " has been deleted.");
    done();
} // end else
}); // end connection (PG)
}); //end delete route
}
})

})
