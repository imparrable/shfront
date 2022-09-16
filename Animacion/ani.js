var carga = document.querySelectorAll("temp");
anime({
  targets: ".caja input",
  value: [0, 100],
  round: 1,
  easing: 'easeInOutExpo',
  duration: 3500,
  direction: 'alternate'
});
 var pepe = setTimeout(()=>{
  var p = document.getElementById("fuera");
  p.remove();
 },3700);