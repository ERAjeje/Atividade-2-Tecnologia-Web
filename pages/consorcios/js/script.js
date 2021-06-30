window.addEventListener('load', start)

function start() {
    const total = document.getElementById('total');
    const pagas = document.getElementById('pagas');
    const valor = document.getElementById('valor');
    const linha = document.getElementById('linha');
    const result = document.getElementById('result');
    const button = document.getElementById('submit');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        const pay = (pagas.value * valor.value).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        const res = ((total.value - pagas.value) * valor.value).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        result.innerText = `Valor já pago: R$ ${pay}. Valor restante: R$ ${res}`
        linha.removeAttribute('class');
        linha.style.display = 'block'
    });
}