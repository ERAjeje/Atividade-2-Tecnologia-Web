# Trabalho de Tecnologias Web
Este trabalho foi realizado como exigencia para obtenção de nota parcial da matéria Tecnologias Web, ministrada pelo Professor Me. Fernando Roberto Proença.
A proposta do trabalho é desenvolver um mini sistema web para uma empresa de veículos utilizando HTML, CSS e JS.

## Requisitos da Atividade
Esse projeto (sistema web) deverá ter uma página inicial (“index.html”) contendo
informações básicas sobre a empresa, como nome, breve descrição, foto da
empresa, entre outras informações que achar relevantes. Além da página
“index.html”, o sistema web deverá ter as seguintes páginas HTML: 
* **Página HTML para simulação de consórcios de veículos:** Nessa página o usuário deverá digitar o total de prestações, a quantidade de prestações pagas e o valor de cada prestação. Após digitar os valores o usuário
deverá clicar em um botão, que executará uma Função em implementada
em JavaScript que calcula e mostra na página HTML (em TAGs `<p>` ou
`<label>`) o valor total pago e o valor que ainda falta para ser pago. 
* **Página HTML para calcular o valor de locação de veículos:** Nessa página o usuário deverá digitar a quantidade de quilômetros que serão
percorridos e a quantidade de dias pelos quais o carro ficará locado. Ao
clicar em um botão deverá ser executada uma função implementada em
JavaScript que calcula e exiba o preço total a pagar pela locação do
veículo. Considere que o valor de locação do veículo é de R$ 100,00 por
dia mais R$ 0,50 por cada quilômetro rodado.
* **Página HTML para calcular a quantidade de quilômetros que o veículo está fazendo com um litro de combustível:** Essa página deverá permitir
que o usuário digite a quantidade de litros e a quantidade de quilômetros percorridos. Ao clicar em um botão deverá ser executada
uma Função em implementada em JavaScript que calcula e mostra na página HTML quantos KM o veículo está fazendo com um litro de combustível. 
* **Página HTML para verificar se está compensando abastecer com gasolina ou com etanol:** Nessa página o usuário deverá digitar preço atual da
gasolina e do etanol e, após o usuário clicar no botão “Calcular” o
sistema deverá calcular e informar se está compensando abastecer com
com gasolina ou com etanol. OBS.: Para o etanol ser mais vantajoso do
que a gasolina, o preço do litro tem que custar até 70% do litro da
gasolina. 
* Desenvolva uma página contendo os contatos da empresa, tais como
endereço, telefone, e-mail e redes sociais (esses contatos podem ser
fictícios) contendo imagens com links que ao ser clicados deverá abrir
uma nova aba (ou janela) de um site externo, que pode ser suas redes
sociais ou outros sites.
* Todas as páginas deverão conter um cabeçalho, menu contendo links para navegar entre as páginas do sistema web e um rodapé padrão para todas as páginas.

Foi utilizada uma empresa local real para desenvolvimento desta tarefa, assim todos os direitos autorais das imagens e logomarca pertencem a ela e para garantir os direitos de propriedade da empresa, todas as informações deste projeto, como telefones, endereços, horários de funcionamento e redes sociais, são reais e pertencentes à mesma. 

A escolha de uma empresa existente deu-se para utilizar a linguagem visual já existente sem que fosse necessário criar uma identidade visual para um empresa ficticia, agilizando assim o desenvolvimento do trabalho.

## Como Rodar o Projeto
Trata-se de um site estático utilizando HTML, CSS e Javascript, assim é possível clonar o projeto e rodá-lo no vscode de forma simples seguindo os seguintes passos:

1- Faça uma cópia do projeto em sua máquina utilizando o comando ``` git clone https://github.com/ERAjeje/EdsonAjejeAtiv2.git ```

2- Navegue até a pasta do projeto e abra o vscode

3- Instale, caso não o tenha instalado anteriormente, a extensão `Live Server`.

4- No arquivo `index.html`, clique com o botão direito do mouse sobre o código e escolha a opção `Open with Live Server` ou utilize o atalho de teclado `Alt+L Alt+O`

O sistema abrirá em seu navegador web e você poderá navegar normalmente.