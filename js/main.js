window.onload = function() {
    $("#logo").addClass("loaded-appear");
    $("#logo").show();

    var now = new Date();
    var year = now.getFullYear();
	  month = 10; // November
    date = 1;

    if (now > new Date(year, month + 1)) year++;
    while (new Date(year, month, date).getDay()) date++;

    if (date == 1) {
      th = "st"
    } else if (date == 2) {
      th = "nd"
    } else if (date == 3) {
      th = "rd"
    } else {
      th = "th"
    }

    $("#date").html("Sunday November " + date + th.sup() + " " + year)

}
