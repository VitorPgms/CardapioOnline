$(document).ready(function () {
    cardapio.eventos.init();
})

let cardapio = {};

let MEU_CARRINHO = [];

cardapio.eventos = {
    
    init: () => {
        cardapio.metodos.obterItensCardapio();
    }
}

cardapio.metodos = {

    //Obtem a lista de Itens do cardapio
    obterItensCardapio: (categoria = 'burgers', vermais = false) => {

        let filtro = MENU[categoria];
        console.log(filtro)

        if (!vermais) {
            $('#itensCardapio').html('')
            $('#btnVerMais').removeClass('hidden')
        }

        $.each(filtro, (i, e) => {

            let temp = cardapio.templates.item.replace(/\${img}/g, e.img).replace(/\${name}/g, e.name).replace(/\${price}/g, e.price.toFixed(2).replace('.' , ',')).replace(/\${id}/g, e.id);

            //Botao ver mais
            if(vermais && i >= 8 && i <12) {
                $('#itensCardapio').append(temp)
            }

            //Pagina inicial (8 itens)
            if(!vermais && i < 8) {
                $('#itensCardapio').append(temp)
            }
            

        })

        //Remover Active
        $('.container-menu a').removeClass('active');
        
        //Setar o menu para ativar
        $('#menu-' + categoria).addClass('active')


    },
    
    //Click no botão de ver mais
    verMais: () => {

        let ativo = $('.container-menu a.active').attr('id').split('menu-')[1];
        cardapio.metodos.obterItensCardapio(ativo, true);

        $('#btnVerMais').addClass('hidden');
    },

    //Diminuir a quantidade do item no cardapio
    diminuirQuantidade: (id) => {

        let qntdAtual = parseInt($("#qntd-" + id).text());

        if(qntdAtual > 0) {
            $("#qntd-" + id).text(qntdAtual - 1)

        }

    },

    //Aumentar a quantidade do itemn no cardapio
    aumentarQuantidade: (id) => {

        let qntdAtual = parseInt($("#qntd-" + id).text());
        $("#qntd-" + id).text(qntdAtual + 1)
    },

    //Adicionar ao Carrinho o item do cardapio
    adicionarAoCarrinho: (id) => {

        let qntdAtual = parseInt($("#qntd-" + id).text());

        if (qntdAtual > 0) {

            //Obter a categoria ativa
            let categoria =  $('.container-menu a.active').attr('id').split('menu-')[1];

            //Obtem a lista de itens
            let filtro = MENU[categoria];

            //Obtem o item
            let item = $.grep(filtro, (e, i) => {return e.id == id });

            if (item.legth > 0) {

                MEU_CARRINHO.push(item[0])

            }

        }

    },
}

cardapio.templates = {

    item: `
    <div class="col-3 mb-5">

        <div class="card card-item" id="\${id}">

            <div class="img-produto">
                <img src="\${img}" alt="#">
            </div>
            <p class="title-produto text-center mt-4">
                <strong>\${name}</strong>
            </p>
            <p class="price-produto text-center">
                <strong>R$ \${price}</strong>
            </p>
            <div class="add-carrinho">
                <span class="btn-menos" onclick="cardapio.metodos.diminuirQuantidade('\${id}')"><i class="fas fa-minus"></i></span>
                <span class="add-numero-itens" id="qntd-\${id}">0</span>
                <span class="btn-mais" onclick="cardapio.metodos.aumentarQuantidade('\${id}')"><i class="fas fa-plus"></i></span>
                <span class="btn btn-add" onclick="cardapio.metodos.adicionarAoCarrinho('\${id}')"><i class="fas fa-shopping-bag"></i></span>
            </div>

        </div>
                            

    </div>
    `

}