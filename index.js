window.onload = function () {

var $cont = $('#contents'),
  itemsArr = $cont.children().get();


$cont.append(shuffle(itemsArr))

function shuffle(array) {
    for (let i = (array).length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [(array)[i], (array)[j]] = [(array)[j], (array)[i]];
      
    }
  return (array);
}
}


function myFunction() {
  var x = document.getElementById("Hide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function refreshPage(){
    window.location.reload();
} 
