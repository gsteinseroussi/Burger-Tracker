$(function () {
  $(".devour").on("click", function (event) {
    const id = $(this).data("id");
    const newDevouredState = {
      devoured: true,
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
