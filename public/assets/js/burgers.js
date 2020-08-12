$(function () {
  $(".devour").on("click", function (event) {
    const id = $(this).data("id");
    let newDevour;
    if ($(this).data.devoured) {
      newDevour = false;
    } else {
      newDevour = true;
    }
    const newDevouredState = {
      devoured: newDevour,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("Burger was devoured");

      location.reload();
    });
  });
});

$(".create-form").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  const newBurger = {
    burger_name: $("#ca").val().trim(),
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger,
  }).then(function () {
    console.log("created new burger");
    // Reload the page to get the updated list
    location.reload();
  });
});
