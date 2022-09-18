anime({
  targets: ".caja input",
  value: [0, 100],
  round: 1,
  easing: 'easeInOutExpo',
  duration: 1900,
  direction: 'alternate'
});
 var pepe = setTimeout(()=>{
  var p = document.getElementById("fuera");
  p.remove();
 },2000);