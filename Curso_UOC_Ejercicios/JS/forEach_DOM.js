//https://pablomonteserin.com/curso/javascript/foreach-dom/

//ejer 1

document.querySelector('.button').addEventListener('click', () => {
  document.querySelectorAll('span').forEach((p) => {
    p.style.backgroundColor = 'red';
  });
});

//ejer 2
let salida = 0;
document.querySelector('.button2').addEventListener('click', () => {
  document.querySelectorAll('input').forEach((p) => {
    salida+=parseInt(p.value);
  });
  document.querySelector('.salidadatos').textContent = salida;
});

// ejer 3
document.querySelectorAll('.btn_3').forEach(button => {
  button.addEventListener('click', (e) => {
    e.target.closest('div').style.backgroundColor = 'red';
  });
});
// El error se produce porque estás utilizando closest() en el evento e, pero e no es un elemento del DOM; es el evento en sí. Para usar closest(), necesitas invocarlo sobre el elemento que disparó el evento, que puedes obtener con e.target.

//ejer4
document.querySelector('.btn_4').addEventListener('click', () => {
  document.querySelectorAll('input[type=radio]:checked').forEach((p) => {
    if(p.className === 'correcto'){
      p.closest('div').style.backgroundColor = 'green';
    }
    else {
      p.closest('div').style.background = 'red';
    }
     
     console.log('pintamos...')
  });
});
