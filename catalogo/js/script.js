let produtos=[];
fetch('data/produtos.json').then(r=>r.json()).then(d=>{produtos=d;renderizar(produtos)});

const busca=document.getElementById('campoBusca');
const filtro=document.getElementById('filtroCategoria');
const catalogo=document.getElementById('catalogo');

busca.addEventListener('input',aplicarFiltros);
filtro.addEventListener('change',aplicarFiltros);

function aplicarFiltros(){
 const t=busca.value.toLowerCase();
 const c=filtro.value;
 renderizar(produtos.filter(p=>(p.nome.toLowerCase().includes(t))&&(c==='todos'||p.categoria===c)));
}

function renderizar(lista){
 catalogo.innerHTML='';
 lista.forEach(p=>{
  catalogo.innerHTML+=`
  <div class="produto">
   <img src="${p.imagem}">
   <h3>${p.nome}</h3>
   <button onclick="abrirModal(${p.id})">Saiba mais</button>
  </div>`;
 });
}

function mudarLayout(t){catalogo.className=t}

function abrirModal(id){
 const p=produtos.find(x=>x.id===id);
 document.getElementById('modalImagem').src=p.imagem;
 document.getElementById('modalNome').innerText=p.nome;
 document.getElementById('modalDescricao').innerText=p.descricao;
 document.getElementById('modal').style.display='flex';
}
function fecharModal(){document.getElementById('modal').style.display='none'}
