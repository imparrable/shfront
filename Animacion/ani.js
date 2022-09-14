var elements = document.querySelectorAll('.caja');

anime({
    targets: elements,
    translateX: "30vw",
    loop: true,
    direction: 'alternate',
    easing: 'easeInElastic(1, .6)',
    delay: function(el, i, l) {
      return i * 250;
    },
    rotate: {
      value: 360,
      duration: 4000,
      easing: 'easeInOutSine'
    },
    borderRadius: function() { return ['90%', anime.random(10, 65) + '%']; },
    scale: {
      value: 2000,
      duration: 600,
      delay: 500,
      easing: 'easeInOutQuart'
    },
});

  var pepe = setTimeout(()=>{
    var p = document.getElementById("fuera");
    p.remove();
  },250000);
//   function parar() => {
//         setTimeout(() => {
//             document.getElementById("container").parentNode.removeChild(elements);
//         }, 6000);
//   })