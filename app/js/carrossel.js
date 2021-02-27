export default function carrossel() {
  const carrosselItems = document.querySelectorAll('.banner-item');
  const carrosselItemsImg = document.querySelectorAll('.banner-item-img');
  const carrosselButtonWrapper = document.querySelector('.banner-buttons');
  let atual = 0;
  let ableButton = 1;
  let start;

  if (carrosselItems.length === 0) return null;

  carrosselItems[0].classList.add('ativo');
  carrosselItemsImg[0].classList.add('ativo');

  carrosselItems.forEach((item, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.classList.add(index === 0 && 'ativo')
    carrosselButtonWrapper.appendChild(dot);
  });

  const dotButtons = document.querySelectorAll('.banner-buttons .dot');

  dotButtons.forEach((dot, index) => {
    dot.addEventListener('click', e => {
      e.preventDefault();

      if (ableButton !== 1) return;

      ableButton = 0;

      clearInterval(start);

      carrosselItems.forEach((carrosselInative, index) => {
        carrosselInative.classList.forEach(itemClass => {
          if (itemClass === 'ativo') {
            carrosselInative.classList.add('inativo');
            carrosselItemsImg[index].classList.add('inativo');
          }
        })
        
        carrosselInative.classList.remove('ativo');
        carrosselItemsImg[index].classList.remove('ativo');
      });
    
      atual = index;

      dotButtons.forEach(cleanDot => {
        cleanDot.classList.remove('ativo');
      });

      dot.classList.add('ativo');
      setClass(carrosselItems, atual);
      setClass(carrosselItemsImg, atual);

      setTime();

      const setRecoveryToButton = window.setTimeout(() => {
        ableButton = 1;
      }, 3000);
    });
  });

  function setTime() {
    start = window.setInterval(() => {
      ableButton = 0;

      if (atual === carrosselItems.length - 1) {
        atual = 0;
      } else {
        atual++;
      }

      setClass(carrosselItems, atual);
      setClass(carrosselItemsImg, atual);
      setClass(dotButtons, atual);

      const setRecoveryToButton = window.setTimeout(() => {
        ableButton = 1;
      }, 3000);
    }, 10000);
  }

  setTime();
}

function setClass(items, atual) {
  items.forEach(item => {
    item.classList.forEach(itemClass => {
      if (itemClass === 'ativo') {
        item.classList.add('inativo');
      }
    })
    item.classList.remove('ativo');
  });

  items[atual].classList.remove('inativo');

  const setClass = window.setTimeout(() => {
    items[atual].classList.add('ativo');
  }, 2000);
}
