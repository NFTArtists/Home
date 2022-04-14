<script type="text/javascript">

var $cont = $('#content'),
  itemsArr = $cont.children().get();


$cont.append(shuffle(itemsArr))

function shuffle(B) {
    var j, x, i;
    for (i = B.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = B[i - 1];
        B[i - 1] = a[j];
        B[j] = x;
    }
    return B;
}

</script>
