$(document).ready(function() {
    let height = window.innerHeight,
        x = 0,
        y = height / 2,
        // curveX = 10,
        curveX = 0,
        curveY = 0,
        targetX = 0,
        xitteration = 0,
        yitteration = 0,
        menuExpanded = false;

    (blob = $("#blob")),
        (blobPath = $("#blob-path")),
        (hamburger = $(".hamburger"));

    $(this).on("mousemove", function (e) {
        x = e.pageX;

        y = e.pageY;
    });

    $(".menu-inner").on("mouseenter", function () {
        $(this).parent().addClass("expanded");
        menuExpanded = true;
    });
    $(".hamburger, #blob").on("mouseenter", function () {
        $(".menu-inner").parent().addClass("expanded");
        menuExpanded = true;
    });

    $(".menu-inner").on("mouseleave", function () {
        menuExpanded = false;
        $(this).parent().removeClass("expanded");
    });
    $(".hamburger, #blob").on("mouseleave", function () {
        $(".menu-inner").parent().removeClass("expanded");
        menuExpanded = false;
    });

    $(".menu-inner").click(function () {
        if (menuExpanded == false) {
            $(this).parent().addClass("expanded");
            menuExpanded = true;
            console.log("c'est bon");
        } else {
            menuExpanded = false;
            $(this).parent().removeClass("expanded");
            console.log("c'est pas bon");
        }
    });
    $(".hamburger, #blob").on("click", function () {
        if (menuExpanded == false) {
            $(this).parent().addClass("expanded");
            menuExpanded = true;
            console.log("c'est bon2");
        } else {
            $(".menu-inner").parent().removeClass("expanded");
            menuExpanded = false;
            console.log("c'est pas bon 2");
        }
    });

    function easeOutExpo(
        currentIteration,
        startValue,
        changeInValue,
        totalIterations
    ) {
        return (
            changeInValue *
            (-Math.pow(2, (-3 * currentIteration) / totalIterations) + 1) +
            startValue
        );
    }

    const hoverZone = 50;
    const expandAmount = 5;

    function svgCurve() {
        if (curveX > x - 1 && curveX < x + 1) {
            xitteration = 0;
        } else {
            if (menuExpanded) {
                targetX = 0;
            } else {
                xitteration = 0;
                if (x > hoverZone) {
                    targetX = 0;
                } else {
                    targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
                }
            }
            xitteration++;
        }

        if (curveY > y - 1 && curveY < y + 1) {
            yitteration = 0;
        } else {
            yitteration = 0;
            yitteration++;
        }

        curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
        curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);

        const anchorDistance = 200;
        const curviness = anchorDistance - 40;

        let newCurve2 =
            "M60," +
            height +
            "H0V0h60v" +
            (curveY - anchorDistance) +
            "c0," +
            curviness +
            "," +
            curveX +
            "," +
            curviness +
            "," +
            curveX +
            "," +
            anchorDistance +
            "S60," +
            curveY +
            ",60," +
            (curveY + anchorDistance * 2) +
            "V" +
            height +
            "z";

        blobPath.attr("d", newCurve2);

        blob.width(curveX + 50);

        hamburger.css("transform", "translate(" + curveX + "px, " + curveY + "px)");
        blob.css("transform", "translate(" + curveX + "px, " + curveY + 60 + "px)");

        // $("h2").css("transform", "translateY(" + curveY + "px)");
        window.requestAnimationFrame(svgCurve);
    }

    window.requestAnimationFrame(svgCurve);
});