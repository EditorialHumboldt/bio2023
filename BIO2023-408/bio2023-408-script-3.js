document.addEventListener("DOMContentLoaded", function () {
 // scripts/tarjetas.js
const $list   = document.getElementById('cardList');
const $fActor = document.getElementById('filter-actor');
const $fDept  = document.getElementById('filter-depto');
const $fTipo  = document.getElementById('filter-tipo');

const iconMap = {
  "Comunidades locales":"comunidades-locales",
  "Entidades de control":"entidades-control",
  "Gobiernos municipales y departamentales":"gobiernos-municipales",
  "Gremios y empresas":"gremios",
  "Organizaciones sociales y ambientales y ONG":"organizaciones",
  "Población migrante":"poblacion-migrante",
  "Sociedad civil":"sociedad-civil",
  "Actores armados":"actores-armados",
  "Autoridades ambientales":"autoridades-ambientales",
  "Comunidades campesinas":"comunidades-campesinas",
  "Autoridades locales":"autoridades-locales",
  "Comunidades indígenas":"comunidades-indigenas"
};

let data    = [];   // dataset completo
let filters = {actor:[], depto:[], tipo:[]};

init();
//https://reporte.humboldt.org.co/assets/datasets/2023/4/408/bio2023-408-dataset.json
//bio2023-408-dataset.json
async function init(){
  data = await fetch('https://reporte.humboldt.org.co/assets/datasets/2023/4/408/bio2023-408-dataset.json').then(r=>r.json());
  buildFilters();
  addClearButton();   
  renderCards();
}

/* ---------- construir filtros dinámicamente ---------- */
function buildFilters(){
  // actores
  Object.keys(iconMap).forEach(a=>{
    addFilterCheckbox($fActor,'actor',a,a);
  });
  // departamentos únicos
  const dptos = [...new Set(data.flatMap(c=>c.departamentos))].sort();
  dptos.forEach(d=>addFilterCheckbox($fDept,'depto',d,d));

  // tipos T1-T3
  ['T1','T2','T3'].forEach(t=>addFilterCheckbox($fTipo,'tipo',t,t));
}

function addFilterCheckbox(container,group,value,labelTxt){
  const id = `${group}-${slugify(value)}`;
  container.insertAdjacentHTML('beforeend',`
    <div>
      <input type="checkbox" id="${id}" data-group="${group}" value="${value}">
      <label for="${id}">${labelTxt}</label>
    </div>
  `);
  container.lastElementChild.querySelector('input')
           .addEventListener('change',handleFilterChange);
}
/* ---------- botón Limpiar filtros ---------- */
function addClearButton(){
    const sidebar = document.querySelector('.filters');
    if(!sidebar) return;
    sidebar.insertAdjacentHTML('beforeend',
      '<button id="clearFilters" class="clear-btn">Limpiar filtros</button>');
  
    document.getElementById('clearFilters').addEventListener('click',()=>{
      // desmarcar todos los checkboxes
      document.querySelectorAll('.filter-group input[type="checkbox"]')
              .forEach(cb=>cb.checked = false);
      // reiniciar objeto filtros
      filters = {actor:[], depto:[], tipo:[]};
      renderCards();
    });
  }
function handleFilterChange(e){
  const group   = e.target.dataset.group;
  const value   = e.target.value;
  const checked = e.target.checked;
  const arr = filters[group];
  if(checked){
    if(!arr.includes(value)) arr.push(value);
  }else{
    const idx = arr.indexOf(value);
    if(idx!==-1) arr.splice(idx,1);
  }
  renderCards();
}

/* ---------- renderizado de tarjetas ---------- */
function renderCards(){
  const frag = document.createDocumentFragment();
  const items = data.filter(matchesFilters);

  if(!items.length){$list.innerHTML='<p>No hay coincidencias.</p>';return;}

  items.forEach(c=>{
    const actorIcons = c.actores.map(a=>
      `<img src="https://reporte.humboldt.org.co/assets/img/2023/4/408/bio2023-408-icono-${iconMap[a]}.png" title="${a}" alt="${a}">`).join('');
    const loc = `<strong>${c.departamentos.join(' / ')}</strong> | ${c.municipios.join(' / ')}`;
    const tipos = c.tipos.length?`T${c.tipos.join(' / T')}`:'';
    const card = document.createElement('article');
    card.className='card';
    card.innerHTML=`
      <h4>${c.nombre}</h4>
      <p class="meta">${c.descripcion||''}</p>
      <p class="meta">${loc}</p>
      <p class="meta"><strong>Conflicto</strong> | ${tipos}</p>
      <div class="actors">${actorIcons}</div>`;
    frag.appendChild(card);
  });
  $list.replaceChildren(frag);
}

/* ---------- helpers ---------- */
function matchesFilters(c){
  const f = filters;
  // Para que los filtros funcionen como "Y" (AND) dentro de cada categoría
  const actorOK = !f.actor.length || f.actor.every(sel => c.actores.includes(sel));
  const deptOK  = !f.depto.length || f.depto.every(sel => c.departamentos.includes(sel));
  const tipoOK  = !f.tipo.length  || f.tipo.every(sel => c.tipos.includes(sel));

  return actorOK && deptOK && tipoOK; // AND global entre categorías
}

function slugify(str){
  return str.toString().toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/\s+/g,'-').replace(/[^\w\-]+/g,'')
    .replace(/\-\-+/g,'-').replace(/^-+/, '').replace(/-+$/, '');
}

});
