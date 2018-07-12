/*standings responsive table */


    //set the variable
    var switched = false;
    var overlay = false;
    var updateTables = function () {

        //set up if/else depending on screen - width set at current tablet settings
        if (($(window).width() < 800) && !switched) {
            switched = true;
            //grab the table.responsive and all the children elements
            $(".responsive").each(function (i, element) {
                //call the splitTable function to attach the scrollable table. This attaches new CSS classes to the div
                splitTable($(element));
            });
            return true;
        }
        else if (switched && ($(window).width() > 800)) {
            //if screen is on desktop
            switched = false;
            $("table.responsive").each(function (i, element) {
                //remove all custom CSS classes
                unsplitTable($(element));
            });
        }
    };

    function splitTable(original) {
        original.wrap("<div class='table-wrapper' />");

        var copy = original.clone();
        copy.find("td:not(:nth-child(-n+2)), th:not(:nth-child(-n+2))").css("display", "none");
        copy.removeClass("responsive");
        original.closest(".table-wrapper").append(copy);
        copy.wrap("<div class='pinned' />");
        original.wrap("<div class='scrollable' />");
        original.closest(".scrollable").append("<div class='overlay'><p class='scroll'><strong>TAP TO SCROLL</strong></p></div>");
    }

    function unsplitTable(original) {
        original.closest(".table-wrapper").find(".pinned").remove();
        original.unwrap();
        original.unwrap();
        $(".overlay").remove();
    }