const limit = 60;
const max = 720;

function renderCard() {
    let total = 0;
    let squip = 1;
    for (let index = 1; index <= max / limit; index++) {
        if (total >= limit) squip = total + 1;
        total += limit;
        console.log(total, squip);
        document.body.appendChild(
            createRaffleCard(createNumbers(total, squip))
        );
    }
}

function createNumbers(max = 60, start = 1) {
    const container = document.createElement('div');
    container.className = 'numbers-grid';

    for (let index = start; index <= max; index++) {
        const number = document.createElement('div');
        number.classList.add('number');
        number.textContent = index;
        container.appendChild(number);
    }

    return container;
}

function createRaffleCard(numbersGrid) {
    const container = document.createElement('div');
    container.className = 'container';

    // Header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';

    const h1 = document.createElement('h1');

    const spanGray = document.createElement('span');
    spanGray.className = 'title-gray';
    spanGray.textContent = 'Rifa';

    h1.appendChild(spanGray);

    const spanPink = document.createElement('span');
    spanPink.className = 'title-pink';
    spanPink.textContent = 'Solidária';

    h1.appendChild(spanPink);

    const subtitle = document.createElement('div');
    const text = document.createElement('p');
    const icon = document.createElement('img');

    const pixDiv = document.createElement('div');
    const meuPixText = document.createElement('p');
    const meuPixNumber = document.createElement('p');

    pixDiv.classList.add('pix');

    meuPixText.textContent = 'Meu Pix';
    meuPixNumber.textContent = '(82) 9 9151 - 8203';

    pixDiv.append(meuPixText, meuPixNumber);

    icon.src = './src/assets/imagens/SolarRoundArrowRightBold.svg';
    icon.alt = 'SolarRoundArrowRightBold';

    subtitle.appendChild(icon);
    subtitle.appendChild(text);

    subtitle.className = 'subtitle';
    text.textContent = 'Em prol da Jandira';

    headerDiv.appendChild(h1);
    headerDiv.appendChild(subtitle);
    headerDiv.appendChild(pixDiv);

    container.appendChild(headerDiv);

    // Prize
    const prizeDiv = document.createElement('div');
    prizeDiv.className = 'prize';

    const prizeTitle = document.createElement('h2');
    prizeTitle.innerHTML =
        'Prêmio: <br><span>Liquidificador</span><br>ou<br><span> R$ 100,00 reais em dinheiro</span>';
    prizeDiv.appendChild(prizeTitle);

    const prizeImage = document.createElement('img');
    prizeImage.src =
        'https://a-static.mlcdn.com.br/800x560/liquidificador-mondial-turbo-power-l-99-fb-preto-com-filtro-3-velocidades-550w/magazineluiza/021756700/3c01c99d68c41b9280d2a18f8e4d2539.jpg';
    prizeImage.alt = 'Prêmio Liquidificador';
    prizeImage.className = 'prize-image';
    prizeDiv.appendChild(prizeImage);

    headerDiv.appendChild(prizeDiv);

    // Raffle
    const raffleDiv = document.createElement('div');
    raffleDiv.className = 'raffle';

    const raffleText = document.createElement('p');
    raffleText.textContent = 'Cada número R$ 5,00';
    raffleDiv.appendChild(raffleText);

    raffleDiv.appendChild(numbersGrid);
    container.appendChild(raffleDiv);

    return container;
}

renderCard();
