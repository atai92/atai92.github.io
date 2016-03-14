$("#hobbies").hide();
$("#contact").hide();
$("#resume").hide();

$("#hobbies-button").click(function () {
    $("#hobbies").show(1000);
    $("#contact").hide(500);
    $("#resume").hide(500);
    $("#welcome").hide(500);
});

$("#resume-button").click(function () {
    $("#resume").show(1000);
    $("#contact").hide(500);
    $("#hobbies").hide(500);
    $("#welcome").hide(500);
});

$("#github-button").click(function () {
    window.open("https://github.com/atai92");
});

$("#title-bar").click(function () {
    $("#welcome").show(1000);
    $("#contact").hide(500);
    $("#hobbies").hide(500);
    $("#resume").hide(500);
});