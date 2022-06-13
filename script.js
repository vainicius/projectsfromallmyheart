let musicas = [

    {titulo: 'You Shook Me All Night Long', artista:'AC/DC', src:'musicas/ACDC - You Shook Me All Night Long.mp3', img:'imagens/mini-acdc.jpg'},
    {titulo: 'N.I.B', artista:'Black Sabbath', src:'musicas/Black Sabbath - N.I.B.mp3', img:'imagens/BlackSabbath.jpg'},
    {titulo: 'Little Dark Age', artista:'MGMT', src:'musicas/MGMT - Little Dark Age.mp3', img:'imagens/MGMT4.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descrição h2');
let nomeArtista = document.querySelector('.descrição i');

renderizarMusica(indexMusica);

duracaoMusica.textContent = segundosMinutos(Math.floor(musica.duration));



// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click',() => {
    renderizarMusica(indexMusica);
    indexMusica--;
    if (indexMusica<0){
        indexMusica = 2;
    }
});
document.querySelector('.proxima').addEventListener('click',() => {
    renderizarMusica(indexMusica);
    indexMusica++;
    if (indexMusica>2){
        indexMusica = 0;
    }
});

//Funções
function renderizarMusica(index){
    musica.setAttribute('src',musicas[index].src);
    musica.addEventListener('loadeddata',()=>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosMinutos(Math.floor(musica.duration));
    });

}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block'; 
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime/ musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosMinutos(Math.floor(musica.currentTime));
}

function segundosMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
      campoSegundos = '0' + campoSegundos;  

    }

    return campoMinutos+ ':'+campoSegundos;
}
