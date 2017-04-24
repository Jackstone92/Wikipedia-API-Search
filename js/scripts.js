$(document).ready(function() {

  //by default, #output is hidden
  // $(document).ready(function(){
    $("#output").hide();
  // });

  //when submit is clicked, then show #output
  $("#search").click(function(){
    $("#output").show();
  });

  //when search is clicked, run code
  $("#search").click(function() {
    //gets search input
    var searchTerm = $("#searchTerm").val();
    //API url with search term
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        //clear searchbox for new searches
        $("#output").html('');
        for(var i=0; i<data[1].length; i++) {
          $('#output').prepend("<li><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
        $("#searchTerm").val("");
      }, //end of success function
      error: function(errorMessage){
        alert("Error");
      }
    }); //end of ajax
  });//end of search function
  //function to allow to press enter to submit
  $('#searchTerm').keypress(function(e){
      if(e.which === 13)
         $('#search').click();
   });
}); //end of main function
