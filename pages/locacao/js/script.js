window.addEventListener('load', start)

function start() {
    const km = document.getElementById('km');
    const days = document.getElementById('days');
    const linha = document.getElementById('linha');
    const result = document.getElementById('result');
    const button = document.getElementById('submit');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        const pay = (km.value.replace(',', '.') * 0.5 + days.value * 100).toLocaleString('pt-br', { minimumFractionDigits: 2 });
        result.innerText = `Você pagará R$ ${pay} por ${days.value} dia(s) alugados e ${km.value.toLocaleString('pt-br', { minimumFractionDigits: 2 })} Km rodados. `
        linha.removeAttribute('class');
        linha.style.display = 'block'
    });
}