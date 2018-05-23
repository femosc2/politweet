// Pair programming by Adam Nilsson and Victor Persson, 2018-04-09


(function ($) { // Start of jQuery name space
    $(function () {
        $("body").on("click", "#show-modal3", function() {
            console.log("Show Modal")
            $("#modal3").modal();
        });

        //initialize all implemented materialize modals on the page.
        $(".modal").modal();

        //Here it activiates mondals by click on trigger
        $(".trigger-modal").modal();
    }
  );
})(jQuery); // end of jQuery name space
