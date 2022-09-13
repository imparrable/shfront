var elements = document.querySelectorAll('.caja');

anime({
    targets: elements,
    translateX: 444,
    loop: true,
    direction: 'alternate',
    easing: 'easeInElastic(1, .6)',
    delay: 350,
    rotate: {
      value: 360,
      duration: 1800,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 2,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
    scale: function(el, i, l) {
      return (2*l - 10*i) + .25;
  }
});

  var pepe = setTimeout(()=>{
    var p = document.getElementById("fuera");
    p.remove();
  },5000);
//   function parar() => {
//         setTimeout(() => {
//             document.getElementById("container").parentNode.removeChild(elements);
//         }, 6000);
//   })