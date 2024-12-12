document.querySelector('#pedido').addEventListener('click', () => {
  const colorSeccionado = document.querySelector('#colores').value;
  console.log(colorSeccionado);
  document.querySelectorAll('.container div').forEach((p) => {
            const href = p.querySelector('a').getAttribute('href');
            console.log('Href asociado:', href);
            if(colorSeccionado === 'all'){
                p.style.display = 'block';
            }else
            if (colorSeccionado !== href.substring(1)) {
                p.style.display = 'none';
            }else{
                p.style.display = 'block';
            }
        });
});
