var input = $("#input-range");

input.bind("input", function () {
  getRangeValue(input);
});

function getRangeValue(e) {
  var value = $(e).val();
  $(".range-value").text(value);
  $(".range").attr("data-value", value);
  input.attr("value", value);
}
