let changeImg= true;
let img = document.querySelector('#imagen');
const cambiarImagen = () =>{
  changeImg ? img.src = "./img/PinguLinux_Yoda.jpg" : img.src = "./img/PinguLinux_Ying_Yang.png";
  changeImg ? changeImg=false: changeImg=true;
}
document.querySelector('#imagen').addEventListener('click', cambiarImagen);

