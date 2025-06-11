  const numeros = document.querySelectorAll('.numero-mapa');
  const items = document.querySelectorAll('.listado-municipios li');

  numeros.forEach(n => {
    n.addEventListener('mouseenter', () => {
      const id = n.dataset.id;
      n.classList.add('hover');
      document.querySelector(`.listado-municipios li[data-id='${id}']`).classList.add('hover');
    });
    n.addEventListener('mouseleave', () => {
      const id = n.dataset.id;
      n.classList.remove('hover');
      document.querySelector(`.listado-municipios li[data-id='${id}']`).classList.remove('hover');
    });
  });

  items.forEach(i => {
    i.addEventListener('mouseenter', () => {
      const id = i.dataset.id;
      i.classList.add('hover');
      document.querySelector(`.numero-mapa[data-id='${id}']`).classList.add('hover');
    });
    i.addEventListener('mouseleave', () => {
      const id = i.dataset.id;
      i.classList.remove('hover');
      document.querySelector(`.numero-mapa[data-id='${id}']`).classList.remove('hover');
    });
  });
