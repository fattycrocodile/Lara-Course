$(document).ready(function () {
    "use strict";

    $('.add-video-button').click(function () {
        $('.add-video').fadeIn(400);
    });

    //-------------------------------------------

    $('.add-description-button').click(function () {
        $('.add-description').fadeIn(400);
    });


    //-------------------------------------------

    $('.cancel').click(function () {
        $('.add-video, .add-description').fadeOut(400);
    });

    //-------------------------------------------

    $(".confirm").click(function () {
        return confirm("Are you sure that you want to delete this content?");
    });

    //-------------------------------------------

    $(".start-exam").click(function () {
        return confirm("Are you sure that you want to start the exam now?");
    });

    //-------------------------------------------

    $(".delete-exam").click(function () {
        return confirm("Are you sure that you want to delete the course exam?");
    });

    //-------------------------------------------
});