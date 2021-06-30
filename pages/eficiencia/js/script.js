window.addEventListener('load', start)

function start() {
    const km = document.getElementById('km');
    const litros = document.getElementById('litros');
    const linha = document.getElementById('linha');
    const result = document.getElementById('result');
    const button = document.getElementById('submit');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        const pay = (km.value.replace(',', '.') / litros.value.replace(',', '.')).toLocaleString('pt-br', { minimumFractionDigits: 2 });
        result.innerText = `Seu carro teve uma eficiência de ${pay} Km/l.`
        linha.removeAttribute('class');
        linha.style.display = 'block'
    });
}