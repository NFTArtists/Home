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


$('#videoLink').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
})
