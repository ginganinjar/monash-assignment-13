// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

$(".burgerToEat").on("click", function() {
    let daBurgerToEat = $(this).data("id"); //  this is the id to delete
   
    $.ajax("/api/change/" + daBurgerToEat, {
      type: "delete",
      data: daBurgerToEat
    }).then(
      function() {
        console.log("Deleted", daBurgerToEat);
       
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    

    var newBurger = {
      name: $("#ca").val().trim(),
      status : "served",
      action_date: Date.now()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
