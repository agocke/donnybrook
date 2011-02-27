$(function() {
    $(".comment").live("showoff:next", function(event) {
        var comment = $(event.target).find(".comment");
        //comment.css("visibility");
        comment.css("visibility", "visible");
    });
});
