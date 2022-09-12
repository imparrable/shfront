var elements = document.querySelectorAll('.caja');

anime({
    targets: elements,
    translateX: 444,
    loop: true,
    direction: 'alternate',
    easing: 'easeInElastic(1, .6)',
    delay: (el, i) => i * 100
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