var x =  navigator.userAgent;
var texto = $("input").val();

function searchWiki (){
  $( ".row" ).remove();
  
 texto = $("input").val();
  console.log(texto);
  $.ajax( {
    url: "https://en.wikipedia.org/w/api.php",
    data: {
      
      format : "json",
      action : "opensearch",
      search : texto,
    },
    dataType: 'jsonp',
    type: 'POST',
    headers: { 'Api-User-Agent': x },
    success: function(data) {
      for (var i = 0; i < data[1].length; i ++) {
      $(".container-fluid2").append("<a  href='" + data[3][i] + "'" + "target='_blank'" + "<div class='row'><div class='col-sm-4'><h3 class= 'resultado'>" + data[1][i] + "</h3> </div> <div class='col-sm-4'><h5 class='descripcion'>" + data[2][i] + "</h5></div><div class='col-sm-4'><p class='link'>" + data[3][i] + "</p></div></div></a>");
      }     
    }
   });
  
}
function getRandom(){
  window.open("https://en.wikipedia.org/wiki/Special:Random", '_blank');
}
searchWiki();
 