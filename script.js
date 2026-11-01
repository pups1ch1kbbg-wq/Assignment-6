$(document).ready(function () {

    console.log("jQuery is ready!");

    // Task 0
    $("#checkJquery").click(function () {
        $("#jqueryStatus").text("jQuery is working successfully!");
    });


    // Task 1: Selectors and CSS
    $("#changeText").click(function () {
        $("#idExample").text("Text changed using the ID selector!");
        $(".classExample").text("Text changed using the class selector!");
        $("main > .card:first p").first().css("color", "#7657e8");
    });

    $("#changeHtml").click(function () {
        $("#idExample").html("<strong>HTML content changed using .html()!</strong>");
    });

    $("#changeStyle").click(function () {
        $("#idExample").css({
            "color": "#e65ca8",
            "font-size": "22px",
            "background": "#f2edff",
            "padding": "10px",
            "border-radius": "8px"
        });

        $(".classExample").css("color", "#7657e8");
    });


    // Task 2: Visibility Methods
    $("#hideBtn").click(function () {
        $("#visibilityText").hide(500);
    });

    $("#showBtn").click(function () {
        $("#visibilityText").show(500);
    });

    $("#toggleBtn").click(function () {
        $("#visibilityText").toggle(500);
    });


    // Task 3: Fade Methods
    $("#fadeInBtn").click(function () {
        $("#fadeImage").fadeIn(700);
    });

    $("#fadeOutBtn").click(function () {
        $("#fadeImage").fadeOut(700);
    });

    $("#fadeToggleBtn").click(function () {
        $("#fadeImage").fadeToggle(700);
    });


    // Task 4: Slide Methods
    $("#slidePanel").hide();

    $("#slideDownBtn").click(function () {
        $("#slidePanel").slideDown(500);
    });

    $("#slideUpBtn").click(function () {
        $("#slidePanel").slideUp(500);
    });

    $("#slideToggleBtn").click(function () {
        $("#slidePanel").slideToggle(500);
    });


    // Task 5: Add and Remove Elements
    let itemNumber = 3;

    $("#addItem").click(function () {
        itemNumber++;
        $("#itemList").append("<li>New Item " + itemNumber + "</li>");
    });

    $("#prependItem").click(function () {
        itemNumber++;
        $("#itemList").prepend("<li>First Item " + itemNumber + "</li>");
    });

    $("#removeItem").click(function () {
        $("#itemList li:last").remove();
    });


    // Task 6: Modifying Attributes
    let imageChanged = false;

    $("#changeImage").click(function () {
        if (imageChanged === false) {
            $("#attributeImage").attr(
                "src",
                "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600"
            );
            imageChanged = true;
        } else {
            $("#attributeImage").attr(
                "src",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600"
            );
            imageChanged = false;
        }
    });

    let linkChanged = false;

    $("#changeLink").click(function () {
        if (linkChanged === false) {
            $("#dynamicLink")
                .attr("href", "https://www.wikipedia.org")
                .text("Open Wikipedia");

            linkChanged = true;
        } else {
            $("#dynamicLink")
                .attr("href", "https://www.google.com")
                .text("Open Google");

            linkChanged = false;
        }
    });


    // Task 7: Form Interaction
    $("#userName").on("input", function () {
        $("#nameOutput").text($(this).val() || "Your name will appear here");
    });

    $("#userEmail").on("input", function () {
        $("#emailOutput").text($(this).val() || "Your email will appear here");
    });


    // Task 8: Basic Animation
    $("#basicAnimate").click(function () {
        $("#basicBox").stop(true, true).css({
            width: "65px",
            height: "65px",
            left: "15px",
            top: "15px"
        }).animate({
            width: "110px",
            height: "110px",
            left: "150px",
            top: "60px"
        }, 1000);
    });


    // Task 9: Sequential Animations
    $("#sequenceAnimate").click(function () {
        $("#sequenceBox").stop(true, true).css({
            width: "65px",
            height: "65px",
            left: "15px",
            top: "15px"
        });

        $("#sequenceBox")
            .animate({ left: "200px" }, 700)
            .animate({ top: "120px" }, 700)
            .animate({ width: "30px", height: "30px" }, 700)
            .animate({
                left: "15px",
                top: "15px",
                width: "65px",
                height: "65px"
            }, 700);
    });


    // Task 10: Combined Animation
    $("#combinedAnimate").click(function () {
        $("#combinedBox").stop(true, true).css({
            width: "65px",
            height: "65px",
            left: "15px",
            top: "15px",
            opacity: 1
        });

        $("#combinedBox").animate({
            width: "120px",
            height: "120px",
            left: "200px",
            top: "50px",
            opacity: 0.3
        }, 1200);
    });


    // Task 11: Interactive Accordion
    $(".accordion-title").click(function () {
        $(this).next(".accordion-content").slideToggle(400);

        $(".accordion-content").not($(this).next()).slideUp(400);
    });

});