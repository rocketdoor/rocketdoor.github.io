function openMenu() {
  document.getElementById("menu_aba").style.display = "block"; 
}

function closeMenu() {
  document.getElementById("menu_aba").style.display = "none";    
}

function goToMain() {
  window.location.href = "../main.html";
}

function temaLim() {
    document.documentElement.style.setProperty('--cor-click', '#38184C');
    document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
    document.documentElement.style.setProperty('--cor-back2', '#4f6a93');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#38184C');
}

function temaInatel() {
    document.documentElement.style.setProperty('--cor-click', '#126ae2');
    document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
    document.documentElement.style.setProperty('--cor-back2', '#6a937a');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
  
}

function temaDark() {
    const cores = {
        '--cor-click': '#CEF09D',
        '--cor-sombra': '#9b0a59',
        '--cor-text': 'black',
        '--cor-back1': '#38184C',
        '--cor-back2': '#4f6a93',
        '--md-sys-color-primary': '#CEF09D'
    };

    for (const [variavel, valor] of Object.entries(cores)) {
        document.documentElement.style.setProperty(variavel, valor);
    }
}
const pendencias = [
  {
    id: 1,
        title: 'Cálculo',
        subtitle: 'Volume 1',
        data_retirada: '12/11',
        data_limite: '30/11',
        mes_limite: '11',   
        dia_limite: '30',
        author: 'James Stewart',
        image: 'https://m.media-amazon.com/images/I/61N+7TGGfEL._AC_UF1000,1000_QL80_.jpg'
    },
    {
    id: 2,
        title: 'Um Curso de Cálculo',
        subtitle: 'Volume 1',
        data_retirada: '20/11',
        data_limite: '02/12',
        mes_limite: '12',   
        dia_limite: '02',
        author: 'Hamilton Luiz Guidorizi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7ydjkH0U-C2XrQa2vqN6AfcLcEzW9214Wg&s'
    }
]


const carousel = document.querySelector('.carousel');

const date = new Date();


function createPendencia() {
    carousel.innerHTML = ''; // Limpa o carrossel antes de adicionar os cartões
    pendencias.forEach(pendencia => {
        const card = document.createElement('div');
        card.classList.add('card'); 
        if(pendencia.mes_limite < date.getMonth() || (pendencia.mes_limite == date.getMonth() && pendencia.dia_limite >= date.getDate())){
            card.innerHTML = `
            <style>
            .label-pendente {
            background-color: red;
            padding: 7px;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: 10px;
            border-radius: 500px;
            color: white;
            }
            </style>
            <img src="${pendencia.image}" alt="${pendencia.title}">
            <div class="info">
                <h3>${pendencia.title}</h3>
                <p>${pendencia.author}</p>
                <p class="label-pendente"> Devolver até: ${pendencia.data_limite}</p>
                <p> Retirado em: ${pendencia.data_retirada}</p>
            </div>
        `;
        carousel.appendChild(card);
        }
        else{
        card.innerHTML = `
            <style>
            .label-disponivel {
            background-color: blue;
            padding: 7px;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: 10px;
            border-radius: 500px;
            color: white;
            }
            </style>
            <img src="${pendencia.image}" alt="${pendencia.title}">
            <div class="info">
                <h3>${pendencia.title}</h3>
                <p>${pendencia.author}</p>
                <p class="label-disponivel"> Devolver até: ${pendencia.data_limite}</p>
                <p> Retirado em: ${pendencia.data_retirada}</p>
            </div>
        `;
        carousel.appendChild(card);
    }});
}


// Controle do carrossel
let index = 0;
function nextCard() {
    index = (index + 1) % pendencias.length;
    updateCarousel();
}

function prevCard() {
    index = (index - 1 + pendencias.length) % pendencias.length;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Adicionando interatividade
document.getElementById('nextBtn').addEventListener('click', nextCard);
document.getElementById('prevBtn').addEventListener('click', prevCard);

// Arrastar no celular
let startX;
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
carousel.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextCard();
    if (endX - startX > 50) prevCard();
});

// Inicializando
createPendencia(pendencias);

const novidades = [
  {
    id: 1,
        title: 'Cálculo',
        subtitle: 'Volume 1',
        data_adicao: '12/11',
        mes_adicao: '11',
        dia_adicao: '12',
        author: 'James Stewart',
        image: 'https://m.media-amazon.com/images/I/61N+7TGGfEL._AC_UF1000,1000_QL80_.jpg'
    },
    {
    id: 2,
        title: 'Um Curso de Cálculo',
        subtitle: 'Volume 1',
        data_adicao: '20/11',
        mes_adicao: '11',
        dia_adicao: '20',
        author: 'Hamilton Luiz Guidorizi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7ydjkH0U-C2XrQa2vqN6AfcLcEzW9214Wg&s'
    }
]


const carousel_novidades = document.querySelector('.carousel-novidades');

function createNovidades() {
    novidades.forEach(novidade => {
        const card = document.createElement('div');
        card.classList.add('card'); 
        card.innerHTML = `
            <img src="${novidade.image}" alt="${novidade.title}">
            <div class="info">
                <h3>${novidade.title}</h3>
                <p>${novidade.author}</p>
                <p> Adicionado em: ${novidade.data_adicao}</p>

            </div>
        `;
        carousel_novidades.appendChild(card);
    });
}


// Controle do carrossel
let index_novidades = 0;
function nextCard() {
    index_novidades = (index_novidades + 1) % novidades.length;
    updateCarousel();
}

function prevCard() {
    index_novidades = (index_novidades - 1 + novidades.length) % novidades.length;
    updateCarousel();
}

function updateCarousel() {
    novidades.style.transform = `translateX(-${index_novidades * 100}%)`;
}

// Adicionando interatividade
document.getElementById('nextBtn').addEventListener('click', nextCard);
document.getElementById('prevBtn').addEventListener('click', prevCard);

// Arrastar no celular
let startX_novidades;
carousel_novidades.addEventListener('touchstart', (e) => {
    startX_novidades = e.touches[0].clientX;
});
carousel_novidades.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX_novidades - endX > 50) nextCard();
    if (endX - startX_novidades > 50) prevCard();
});

// Inicializando
createNovidades();

const livros = [
  {
    id: 1,
        title: 'Cálculo',
        subtitle: 'Volume 1',
        author: 'James Stewart',
        image: 'https://m.media-amazon.com/images/I/61N+7TGGfEL._AC_UF1000,1000_QL80_.jpg',
        disponivel: true
    },
    {
    id: 2,
        title: 'Um Curso de Cálculo',
        subtitle: 'Volume 1',
        author: 'Hamilton Luiz Guidorizi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7ydjkH0U-C2XrQa2vqN6AfcLcEzW9214Wg&s',
        disponivel: false
    },
    {
    id: 3,
        title: 'Algoritmos',
        subtitle: 'Teoria e Prática',
        author: 'Clifford Stein',
        image: 'https://m.media-amazon.com/images/I/71QtOUBMtNL._AC_UF1000,1000_QL80_.jpg',
        disponivel: true
    },
    {
    id: 4,
        title: 'Introdução a Sistemas de Bancos de Dados',
        subtitle: '8ª Edição',
        author: 'C. J. Date',
        image: 'https://m.media-amazon.com/images/I/91tnreqKnEL._AC_UF1000,1000_QL80_.jpg',
        disponivel: true
    },
    {
    id: 5,
        title: 'Microcontroladores',
        subtitle: 'PIC - Programação em C',
        author: 'Fábio Pereira',
        image: 'https://m.media-amazon.com/images/I/61Kgu2tEyXL._AC_UF1000,1000_QL80_.jpg',
        disponivel: true
    }
    

]

// Função de busca
function buscarLivroPorNome(nome) {
  return livros.filter(livro =>
    livro.title.toLowerCase().match(nome.toLowerCase())
  );
}

const input = document.getElementById("busca");
const resultadoDiv = document.getElementById("resultado");
const detalhesDiv = document.getElementById("detalhes");

// Evento de digitar
input.addEventListener("input", () => {
  const texto = input.value.trim();

  // Limpa resultados e detalhes se estiver vazio
  if (texto === "") {
    resultadoDiv.innerHTML = "";
    detalhesDiv.innerHTML = "";
    return;
  }

  const encontrados = buscarLivroPorNome(texto);

  resultadoDiv.innerHTML = encontrados
    .map(livro => `<p class="item-resultado" data-id="${livro.id}">${livro.title}   -   ${livro.author}</p>`)
    .join("");

  // Adiciona eventos de clique nos resultados
  document.querySelectorAll(".item-resultado").forEach(el => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-id");
      mostrarDetalhes(id);
    });
  });
});

// Função para mostrar detalhes
function mostrarDetalhes(id) {
  const livro = livros.find(l => l.id == id);

  if(livro.disponivel){
  detalhesDiv.innerHTML = `
     <style>
            .label-titulo {
            font-family: "Arimo", sans-serif;
            font-optical-sizing: auto;
            font-weight: bold;
            font-style: normal;
            font-size: 22px;
            padding-bottom: 10px;
            }
            .label-subtitle {
            font-family: "Arimo", sans-serif;
            font-optical-sizing: auto;
            font-weight: bold;
            font-style: normal;
            font-size: 14px;
            padding-bottom: 10px;
            }
            .label-autor {
            font-family: "Arimo", sans-serif;
            font-optical-sizing: auto;
            font-weight: weight;
            font-style: normal;
            font-size: 11px;
            padding-bottom: 10px;
            }
     </style>
    <div class="label-titulo">${livro.title}</div>
    <div class="label-subtitle">${livro.subtitle}</div>
    <div class="label-autor">${livro.author}</div>
    <img src="${livro.image}" width="200" style="border-radius: 8px;"/>
    <button onclick="reservarLivro(${livro.id})">Reservar Livro</button>

  `;
    }
    else{ 
        detalhesDiv.innerHTML = `
     <style>
            .label-titulo {
            font-family: "Arimo", sans-serif;
            font-optical-sizing: auto;
            font-weight: bold;
            font-style: normal;
            font-size: 22px;
            padding-bottom: 10px;
            }
            .label-subtitle {
            font-family: "Arimo", sans-serif;
            font-optical-sizing: auto;
            font-weight: bold;
            font-style: normal;
            font-size: 14px;
            padding-bottom: 10px;
            }
            .label-autor {
            font-family: "Arimo", sans-serif;
            font-optical-sizing: auto;
            font-weight: weight;
            font-style: normal;
            font-size: 11px;
            padding-bottom: 10px;
            }
     </style>
    <div class="label-titulo">${livro.title}</div>
    <div class="label-subtitle">${livro.subtitle}</div>
    <div class="label-autor">${livro.author}</div>
    <img src="${livro.image}" width="200" style="border-radius: 8px; filter: grayscale(100%);"/>

  `;
    }
}

function reservarLivro(id) {
    pendencias.push({
    id: pendencias.length + 1,
    title: livros.find(livro => livro.id === id).title,
    author: livros.find(livro => livro.id === id).author,
    subtitle: livros.find(livro => livro.id === id).subtitle,
    data_retirada: date.getDate() + '/' + (date.getMonth() + 1),
    data_limite: date.getDate() + 5 + '/' + (date.getMonth() + 1),
    mes_limite: (date.getMonth() + 1),   
    dia_limite:  date.getDate() + 5,
    image: livros.find(livro => livro.id === id).image,
  });
  livros.forEach(livro => {
    if (livro.id === id) {
      livro.disponivel = false;
      mostrarDetalhes(id);
    }
  });
  createPendencia(); 
 
}