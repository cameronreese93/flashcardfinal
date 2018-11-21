const onFlipCard = function () {
    $('.frontCard').hide();
    $('.backCard').show();
  }

const addHandlers = () => {
    $('.backCard').hide();
    $('#flipCard').on('click', onFlipCard)
  }
  function flip() {
    $('.card').toggleClass('flipped');
}


  $(() => {
    addHandlers()
  })
