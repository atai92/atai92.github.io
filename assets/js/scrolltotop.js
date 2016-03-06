$("#top_button").hide();

$("#top_button").click(function() {
    $("#links-container").scrollIntoView();
});

$("#inner-container").scroll(function() {
   if ($("#inner-container").scrollTop() > 0) $("#top_button").show(); 
   if ($("#inner-container").scrollTop() == 0) $("#top_button").hide();
});