$("#hide").click(function (e) { 

    $("ul").toggle();

});



$("#searchInput").on("keyup", function() {
    var searchList = $(this).val().toLowerCase();
    $("li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(searchList) > -1)
    });
  });