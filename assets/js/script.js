var windowWidthSize = $(document).width()
var windowHeightSize = $(document).height()
console.log('Largeur: ' + windowWidthSize + '\nHauteur: ' + windowHeightSize)
function moving(e){
  //Gauche
  if (e.keyCode == 37)
  {
    var ml = parseInt($('#carré').css('margin-left')) - 10;
    var test = parseInt($('#carré').css('width')) + ml - 10
    $('#carré').css('margin-left', ml)
    console.log(test)
    if (test < 30) {
      $('#carré').css('margin-left', (windowWidthSize - $('#carré').width() - 20))
    }
    else
    {
      $('#carré').css('margin-left', ml)
    }
  }
  //Droite
  else if (e.keyCode == 39)
  {
    var mr = parseInt($('#carré').css('margin-left')) + 10;
    var test = parseInt($('#carré').css('width')) + mr + 10
    if (test > windowWidthSize - 10)
    {
      $('#carré').css('margin-left', '-10px')
    }
    else
    {
      $('#carré').css('margin-left', mr)
    }
  }
  //Monter
  else if (e.keyCode == 38)
  {
    var mt = parseInt($('#carré').css('margin-top')) - 10;
    var test = parseInt($('#carré').css('height')) + mt - 10
    if (test < 20)
    {
      $('#carré').css('margin-top', 595)
    }
    else
    {
      $('#carré').css('margin-top', mt)
    }
  }
  //Descendre
  else if (e.keyCode == 40)
  {
    var mt = parseInt($('#carré').css('margin-top')) + 10;
    var test = parseInt($('#carré').css('height')) + mt + 10
    if (test > 595)
    {
      $('#carré').css('margin-top', '-20px')
    }
    else
    {
      $('#carré').css('margin-top', mt)
    }
  }
}
