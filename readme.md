Weekend Challenge #4
------------------------

Description
----------------------------

Hello Primers!

Welcome to your 4th weekend challenge! Full stack is pretty awesome huh? The idea in such a short time, you are able to spin up a full application architecture is pretty incredible. Also worth noting, there are only two weekend challenges left!

This weekend is all about showing us that you have a handle on each of the different parts of the full stack. For this weekends challenge, you are going to create a 'TO DO' application. This is the type of application that is very common to tackle when learning a new language, which makes it extremely valuable to work through for the first time, since chances are good that at some point in your career you will tackle this type of application, but in another language.

Here are the specific components for the challenge:

Create a front end experience that allows a user to create a task.
When the task is created, it should be stored inside of a database (SQL)
Whenever a task is created the front end should refresh to show all tasks that need to be completed.
Each task should have an option to 'Complete' or 'Delete'.
When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete)
Whether or not a task is complete should also be stored in the database.
Deleting a task should remove it both from the Front End as well as the Database.
Make sure that you also show us your best styling chops. We encourage you to try and write pure CSS rather than use Bootstrap.

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

Additionally, please include some way to recreate your initial database schema. This can be a .sql file with CREATE TABLE statements or you can create your schema automatically when your app loads.

HARD MODE

In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task. Once again, you can interrupt this however you would like.

PRO MODE

Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.

Versioning Plan -courtesy of Luis Matos
---------------
* 0.1 - ReadMe & html/js/css/server/heroku handshakes - initial commit
* 0.2.0 - Database table created with creation queries stored in "dbSetup.sql"
* 0.2.1 - Server: app.post route to INSERT a new task into the database
* 0.2.2 - Client: ajax post call with new task information
* 0.2.3 - Client: #newTask button .on('click') to grab new task info
* 0.2.4 - HTML: #newTask button and input field
* 0.2.5 - CSS: Tweak basic styling of elements currently in HTML
* 0.2.6 - Client: logic to make sure that something is entered in the input field before making the ajax call
* 0.3.0 - Test Create Task button making sure new tasks persist in database
* 0.3.1 - Server: app.get route to SELECT all task in the database
* 0.3.2 - Client: ajax get call for entire task list added in #newTask .on('click')
* 0.3.3 - Client: displayTasks() function to show all tasks from dB on DOM (basic display of Task name and that it is not completed)
* 0.3.4 - HTML: #taskList div where updated task list will go
* 0.3.5 - CSS: Tweak basic styling of tasks when shown in the taskList
* 0.4.0 - Test Create Task button ensuring DOM is updated correctly
* 0.4.1 - Server: app.post route to UPDATE a completed task by id in the database
* 0.4.2 - Client: add 'Complete' button options to tasks in displayTasks() (No individual identifiers or classes yet)
* 0.4.3 - Client: add classes to each button (e.g. class="completeButton")
* 0.4.4 - Client: add individual identifiers to each button added to a task (for example: data-taskid="1")
* 0.4.5 - Client: add $('body').on('click') functions for '.completeButtons' (only console.log fuctionality for now)
* 0.4.6 - Client: .completeButton .on('click') function make an ajax post call to the update route sending the task id from the identifier
* 0.4.7 - Client: add call to displayTasks() to update list on DOM and update the function to now show both completed and uncompleted tasks (adding a class to completed ones and making them no longer able to be completed.)
* 0.4.8 - CSS: Add styling to buttons and completed tasks. The latter should be visually different than the uncompleted tasks and showing the completed ones as 'checked off'. Also add a display: hidden; to the Complete button on the tasks that are completed, so that they can't be completed again.
* 0.5.0 - Test Complete buttons ensuring proper behavior
* 0.5.1 - Server: app.post route to DELETE a task by id from the database
* 0.5.2 - Client: add 'Delete' button options to tasks in displayTasks() (No individual identifiers or classes yet)
* 0.5.3 - Client: add classes to each button (e.g. class="deleteButton")
* 0.5.4 - Client: add individual identifiers to each button added to a task (for example: data-taskid="1")
* 0.5.5 - Client: add $('body').on('click') functions for '.deleteButtons' (only console.log fuctionality for now)
* 0.5.6 - Client: .deleteButton .on('click') function make an ajax post call to the delete route sending the task id from the identifier
* 0.5.7 - Client: add call to displayTasks() to update list on DOM and show that the deleted task is removed
* 0.5.8 - CSS: Show your best styling chops with pure CSS
* 1.0 - Test the app functionality and sign off on Basic Mode
* 1.1.0 - Client: Create "Are you sure" interrupt message when deleting a task.  No functionality yet - just the message showing up when desired and "yes or no" buttons.
* 1.1.1 - Client: $('body').on('click')s to identify which button was clicked and if "yes" then go ahead with post delete call.  Or get rid of interrupt message if "no"
* 1.1.2 - CSS: Tweak styling of the interrupt message and buttons
* 2.0 - Test the app functionality and sign off on Hard Mode
* 2.1.0 - Server or Client: Decide where task sorting will be done and add it there.  Main thing is that the task array will be in order when the displayTasks() function is called. (Probably server query changed to sort by completed column)
* 2.1.1 - CSS: Tweak the styling of the entire page
* 3.0 - Test the app functionality and sign off on Pro Mode
