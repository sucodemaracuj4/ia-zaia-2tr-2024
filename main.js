const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const caixaResultado1 = document.querySelector(".caixa-principal");
const perguntas = [
    {
        enunciado:"De que maneira podemos abordar as discriminações de classe propagadas nas redes de comunicação e ainda, podendo abranger resoluções frugais no intuito de enaltecer essas comunidades?",
        alternativas:[
        "Permitindo conexões com o mundo digital",
        "Utilizar redes de comunicação mais acessíveis para divulgar novidades ecológicas e simples que caiba no cotidiano de cada cidadão."    
        ]
        
    },
    {
        enunciado: "Qual é a visão da comunidade diante das resoluções e propostas intuitivamente ecológicas?",
        alternativas:[
            "Um novo dilema a ser enfrentado",
            "Aceitam o incentivo e trabalham para o bem-estar comum"
        ]
    },
    {
        enunciado: "Como os ecossistemas irão beneficiar-se  das resoluções propostas, adiantando que a divulgação será iminente e abordará diferentes residências?",
        alternativas: ["Através da mudança na quantidade de materiais descartados, a fauna e flora poderão perpetuar-se de forma natural e benéfica, habituando a vida de pessoas em diferentes realidades socioeconômicas",
        "As consequências negativas em meio à natureza  irão diminuir substancialmente, com níveis de lixo, doença, emissões de carbono reduzida"
        ] 

    }
];

let atual = 0;
let perguntaAtual;
function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[0].enunciado;

}
function mostraPerguntas(){
    if(atual>=perguntas.length){
        mostraResultado();
        return;
    }
}
