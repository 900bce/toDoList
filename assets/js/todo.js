//line through and change color when click on list item
$("ul").on("click", "li", function() {
  $(this).toggleClass("deleted");
});

//when user type in new todo and hit enter
$("input[type='text']").on("keypress", function(event) {
  if(event.which == "13") {
    var newTodo = $(this).val();
    $("ul").append("<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span>" + newTodo + "</li>");
    $("input[type='text']").val("");
  }
});

//delete item when click on trash can
$("ul").on("click", "span", function() {
  $(this).parent().remove();
});

$(".fa-plus").click( function() {
  $("input[type='text']").fadeToggle();
})