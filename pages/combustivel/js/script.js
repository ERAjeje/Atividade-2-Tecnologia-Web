window.addEventListener('load', start)

function start() {
    const gas = document.getElementById('gas');
    const eth = document.getElementById('eth');
    const linha = document.getElementById('linha');
    const result = document.getElementById('result');
    const button = document.getElementById('submit');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        const pay = (gas.value.replace(',', '.') * 0.7).toLocaleString('pt-br', { minimumFractionDigits: 2 });
        const comp = (eth.value.replace(',', '.')).toLocaleString('pt-br', { minimumFractionDigits: 2 });
        result.innerText = pay > comp ? `Abasteça seu carro com Alcool.` : `Abasteça seu carro com Gasolina.`;
        linha.removeAttribute('class');
        linha.style.display = 'block'
    });
}