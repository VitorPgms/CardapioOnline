$(document).ready(function () {
    cardapio.eventos.init();
})

let cardapio = {};

cardapio.eventos = {
    
    init: () => {
        console.log('iniciou')
    }
}

cardapio.metodos = {

    //Obtem a lista de Itens do cardapio
    obterItensCardapio: () => {

        let filtro = MENU['burgers'];
        console.log(filtro)

        $.each(filtro, (i, e) => {

            let temp = cardapio

        })

    }

}

cardapio.templates = {

    item: `
    <div class="col-3 mb-5">

        <div class="card card-item">

            <div class="img-produto">
                <img src="img/cardapio/burguers/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg" alt="#">
            </div>
            <p class="title-produto text-center mt-4">
                <strong>Nome do Produto</strong>
            </p>
            <p class="price-produto text-center">
                <strong>R$29,99</strong>
            </p>
            <div class="add-carrinho">
                <span class="btn-menos"><i class="fas fa-minus"></i></span>
                <span class="add-numero-itens">0</span>
                <span class="btn-mais"><i class="fas fa-plus"></i></span>
                <span class="btn btn-add"><i class="fas fa-shopping-bag"></i></span>
            </div>

        </div>
                            

    </div>
    `

}