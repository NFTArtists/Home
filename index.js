var $cont = $('#contents'),
  itemsArr = $cont.children().get();


$cont.append(shuffle(itemsArr))

console.log(array)

function shuffle(array) {
    for (let i = (array).length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [(array)[i], (array)[j]] = [(array)[j], (array)[i]];
      
      console.log(array)
    }
  return (array);
}
