var round = 1;
var matrizGame = Array(3);

matrizGame['a'] = Array(3);
matrizGame['b'] = Array(3);
matrizGame['c'] = Array(3);

matrizGame['a'][1] = 0;
matrizGame['a'][2] = 0;
matrizGame['a'][3] = 0;

matrizGame['b'][1] = 0;
matrizGame['b'][2] = 0;
matrizGame['b'][3] = 0;

matrizGame['c'][1] = 0;
matrizGame['c'][2] = 0;
matrizGame['c'][3] = 0;

$(document).ready(function () {
  $('#play').click(function () {
    if ($('#input_nickname_player1').val() == '') {
      alert('Nickname jogador 1 não foi preenchido!');
      return false
    }
    if ($('#input_nickname_player2').val() == '') {
      alert('Nickname jogador 2 não foi preenchido!');
      return false
    }

    $('#show_nickname_player1').html($('#input_nickname_player1').val());
    $('#show_nickname_player2').html($('#input_nickname_player2').val());

    $('#home').hide();
    $('#game').show();

  });

  $('.grids').click(function () {
    var id_field = this.id;
    $('#' + id_field).off();
    move(id_field);
  });

  function move(id) {
    var icon = '';
    var point = 0;

    if ((round % 2) == 1) {
      icon = 'url("imagens/marcacao_1.png")';
      point = -1;
    } else {
      icon = 'url("imagens/marcacao_2.png")';
      point = 1;
    }

    round++
    $('#' + id).css('background-image', icon);

    var lineColumn = id.split('-');
    matrizGame[lineColumn[0]][lineColumn[1]] = point;
    verify();
  }

  function verify() {
    //verify horizontal
    var points = 0;
    for (var i = 1; i <= 3; i++) {
      points = points + matrizGame['a'][i];
    }
    winner(points);

    points = 0;
    for (var i = 1; i <= 3; i++) {
      points = points + matrizGame['b'][i];
    }
    winner(points);

    points = 0;
    for (var i = 1; i <= 3; i++) {
      points = points + matrizGame['c'][i];
    }
    winner(points);

    //verify vertical
    for (var l = 1; l <= 3; l++) {
      points = 0;
      points += matrizGame['a'][l];
      points += matrizGame['b'][l];
      points += matrizGame['c'][l];

      winner(points);
    }

    //verify diagonal
    points = 0;
    points = matrizGame['a'][1] + matrizGame['b'][2] + matrizGame['c'][3];
    winner(points);

    points = 0;
    points = matrizGame['a'][3] + matrizGame['b'][2] + matrizGame['c'][1];
    winner(points);

  }


  function winner(points) {
    if (points == -3) {
      var player1 = $('#input_nickname_player1').val();
      alert(player1 + ' é o vencedor!');
      $('.grids').off();

    } else if (points == 3) {
      var player2 = $('#input_nickname_player2').val();
      alert(player2 + ' é o vencedor!');
      $('.grids').off();
    }
  }
});