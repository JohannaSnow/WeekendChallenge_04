console.log( "client is sourced");

$(document).ready(function(){
  console.log("JQ is sourced");
  // call display tasks
  displayTask();

  //Create Task on Click
  $('#createAddTask').on('click' function(){
    //create true false values for tasks
    var statusIn;
    if('#statusIn').val() == "Complete"){
      statusIn = true;
    }
    else if($('#statusIn').val() == "Work In Progress") {
      statusIn = false;
    } // end if else statement
    //assemble an object to sendFile
    var taskToCreate ={
      status: statusIn
    };
    console.log("task to create:", taskToCreate);
    //AJAX call to the server
    $.ajax({
      type:"POST",
      url:"/addTask",
      data: taskToCreate,
      success: function(data){
        console.log("back with:" , data);
      }  //end successful
    }); // end AJAX call
    displayTask();
  } //end create/add task Click
});

  //update status on Click
  $("#changeTaskStatus").on('click'), funtion(){
    console.log("in changeTaskStatus on click");
    //convert to true or false statement
    var statusSelect;
    if($('#statusChangeIn').val()=="Complete"){
      statusSelect = true;
    }
    else if ($('#statusChangeIn').val()== "Work In Progress"){
      statusSelect = false;
    } // end if else
    //create object
    var objectToSend ={
      id: $('#selectTaskIn').find(':selected').data('value'),
      status: statusSelect
    };
    console.log("object to send", ObjectToSend);
    //AJAX call
    $.ajax({
      type:"POST",
      url: "/changeStatus",
      data: objectToSend
      success: function(data){
      console.log("back from changeStatus:", data);
      displayTask();
    } // end success
  } //end ajax
}); //end change task on Click


 // delete tasks on click

  $("#deleteTask").on('click', function(){
    console.log("In delete task on click");
    //convert to true false
    var statusSelect;
    if($('#statusChangeIn').val()== "Complete"){
      statusSelect = true;
    }
    else if($('#statusChangeIn').val()=="Work In Progress"){
      statusSelect = false;
    } //end if else

    //create object
    var taskToDelete={
   id: $('#deleteTaskSelect').find(':selected').data('value'),
 };
    });
    console.log("object to send", objectToSend);
    //AJAX call
    $.ajax({
      type:"DELETE",
      url: "/deleteTask",
      data: taskToDelete,
      success: function(data){
      console.log("back from deleteTask", data);
      displayTask();
    }// end success

}); // end document ready


//Display tasks
var displayTask = function(){
  $.ajax({
    url:"/getTasks",
    success: function(data){
      console.log(" back with the Tasks:", data);
      //establish display string
      var displayString="";
      var selectList="";
      var deleteList="";
      //loop through data array
      for (var i = 0; i < data.length; i++) {
        displayString +='<li id ="'+data[ i ].id+'"data-value="'+ data[ i ].status+'">'+ data[ i ].task +"</li>";
        selectList+='<option data-value="'+data[ i ].id+'"> Item '+ data[ i ].id + "</option>";
        deleteList+='<option data-value="'+data[ i ].id+'"> Item '+ data[ i ].id + "</option>";
      }
      //display on DOM
      $('#toDoList').apend(displayString);
      $('#selectTaskIn').apend(selectList);
      $('#deleteTaskSelect').apend(deleteList);
    }// end success

  });//end ajax
};//end display tasks
