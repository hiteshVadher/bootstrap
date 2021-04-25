$(document).ready(function() {
    $("#mycarousel").carousel({interval: 3000});

    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show");
    });

    $("#reserveCancel").click(function() {
        $("#reserveModal").modal("hide");
    });

    $("#reserveClose").click(function() {
        $("#reserveModal").modal("hide");
    });

    $("#loginButton").click(function() {
        $("#loginModal").modal("show");
    });

    $("#loginCancel").click(function() {
        $("#loginModal").modal("hide");
    });

    $("#loginClose").click(function() {
        $("#loginModal").modal("hide");
    });

    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('bi-pause-fill')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('bi-pause-fill');
            $("#carouselButton").children("span").addClass('bi-play-fill');
        }
        else if ($("#carouselButton").children("span").hasClass('bi-play-fill')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('bi-play-fill');
            $("#carouselButton").children("span").addClass('bi-pause-fill');                    
        }
    });
});