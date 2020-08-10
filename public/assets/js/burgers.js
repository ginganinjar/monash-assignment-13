// Make sure we wait to attach our handlers until the DOM is fully loaded.


$(function() {


$(".burgerToEat").on("click", function() {

    let daBurgerToEat = $(this).data("id"); //  this is the id to delete
     let theStatus = $(this).data("status");
  
    $.ajax("/api/change/" + daBurgerToEat, {
      type: "put",
      data: daBurgerToEat
    }).then(
      function() {
        console.log("Updated", daBurgerToEat);
       
 
        if (theStatus == "act") { 
          var audio = new Audio('./assets/sound/eating.wav');
            } else 
              {
                var audio = new Audio('./assets/sound/boing.wav');
                }

        // load sound effect
        
         audio.play();

         // wait for sound effect to complete before executing reload. 
          audio.onended= function () {
              console.log("Audio Complete");
              location.reload();
        }
      }
    );
  });
 

  $(".burgerToDelete").on("click", function() {

    let daBurgerToEat = $(this).data("id"); //  this is the id to delete
   
    $.ajax("/api/del/" + daBurgerToEat, {
      type: "delete",
      data: daBurgerToEat
    }).then(
      function() {
        console.log("Updated", daBurgerToEat);
       
        // Reload the page to get the updated list
        
        // load sound effect
         var audio = new Audio('./assets/sound/toilet.wav');
         audio.play();

         // wait for sound effect to complete before executing reload. 
          audio.onended= function () {
              console.log("Audio Complete");
              location.reload();
        }
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


