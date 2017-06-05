$(document).ready(function() {
  $("#groceries").submit(function(event) {
    event.preventDefault();

    var produce = $("input#produce").val();
    var snacks = $("input#snacks").val();
    var proteins = $("input#proteins").val();

    var groceries = [produce, snacks, proteins];
    groceries.sort();

    var groceriesUp = groceries.map(function(grocery) {
      return "<li>" + grocery.toUpperCase() + "</li>";

    });

    $("#groceries").hide();
    $("#items").after(groceriesUp);
    $(".list").show();

  });
});
