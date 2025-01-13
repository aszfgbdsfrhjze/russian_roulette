/*$(document).ready(function(){
    $("#start").click(function(){
        $('.play').css('display', 'none');
      $(".gamenone").removeClass( "gamenone" ).addClass( "game" );
    });
  });*/
  $(document).ready(function(){
    $("#start").click(function(){
        $('.play').css('display', 'none');
      $(".textnone").removeClass( "textnone" ).addClass( "textbot1" );
      $('body').css('background-image', 'url(media/okgslj.png)');
      $("#myAudio2")[0].play();
    });
  })
  $(document).ready(function(){
    $("#play").click(function(){
        $('#play img').addClass( "imggameplay" );
        $("#myAudio")[0].play();

    });
  });
   $(document).ready(function(){
    $("#next1").click(function(){
        $('body').css('background-image', 'url(media/bcg.png)');
        $('.textbot1').css('display', 'none');
        $(".textnone2").removeClass( "textnone2" ).addClass( "textbot2" );
        $("#myAudio3")[0].play();
    });
  });
  $(document).ready(function(){
    $("#next2").click(function(){
      $('.textbot2').css('display', 'none');
      $('body').css('background-image', 'url(media/bcg.png)');
      $(".textnone3").removeClass( "textnone3" ).addClass( "textbot3" );
      $("#myAudio4")[0].play();
    });
  })

  $(document).ready(function(){
    $("#chosePlay").click(function(){
      $('.textbot3').css('display', 'none');
      $('body').css('background-image', 'url(media/bcg.png)');
      $(".gamenone").removeClass( "gamenone" ).addClass( "game" );
      $("#myAudioReload")[0].play();
    });
  })
  $(document).ready(function(){
    $("#choseShot").click(function(){
      $('.textbot3').css('display', 'none');
      $('body').css('background-image', 'url(media/chern.jpg)');
      $(".gooutnone").removeClass( "gooutnone" ).addClass( "goout" );
      $("#myAudioShot")[0].play();
    });
  })
let totalBullets = 4;
let loadedBullet = 1; // Всегда одна пуля

const totalBulletsDisplay = document.getElementById('total-bullets');
const playButton = document.getElementById('play');
const resultDisplay = document.getElementById('result');

playButton.addEventListener('click', () => {
  if (totalBullets <= 0) {
    resultDisplay.textContent = "Патроны закончились! Игра окончена.";
    return;
  }

  const chamber = Math.floor(Math.random() * totalBullets); // Случайный номер камеры от 0 до totalBullets -1

  if (chamber < loadedBullet) {
    resultDisplay.textContent = "Выстрел! Игра окончена.";
    let audio = document.getElementById("myAudioShot");
    audio.play();
    totalBullets = 0; // Игра окончена
  } else {
    resultDisplay.textContent = "Холостой выстрел!";
    totalBullets--;
  }
  totalBulletsDisplay.textContent = totalBullets;
});
