export default function gallery() {
  const galleryImg = document.querySelector('.projeto-gallery-img');
  const galleryImgArray = document.querySelectorAll('.projeto-gallery-img-item');
  const galleryTextArray = document.querySelectorAll('.projeto-gallery-txt-item');
  const galleryGridArray = document.querySelectorAll('.projeto-gallery-grid-item');
  const galleryGrid = document.querySelector('.projeto-gallery-grid');
  const galleryCounter = document.querySelector('.projeto-gallery-page');
  const buttonLeft = document.querySelector('.projeto-gallery-left');
  const buttonRight = document.querySelector('.projeto-gallery-right');
  const buttonGrid = document.querySelector('.projeto-gallery-button-grid');
  const buttonFullscreen = document.querySelector('.projeto-gallery-button-full');
  const buttonGridClose = document.querySelector('.projeto-gallery-grid-close');
  let atual = 0;

  if (galleryImgArray.length === 0) return null;

  const counter = document.createElement('span');
  counter.innerText = `${atual + 1}/${galleryImgArray.length}`;
  galleryCounter.appendChild(counter);

  galleryImgArray[atual].classList.add('ativo');
  galleryTextArray[atual].classList.add('ativo');

  buttonLeft.addEventListener('click', e => {
    e.preventDefault();

    if (atual === 0)
      atual = galleryImgArray.length - 1;
    else
      atual--;

    setClass(galleryImgArray, atual);
    setClass(galleryTextArray, atual);
    counter.innerText = `${atual + 1}/${galleryImgArray.length}`;
  });

  buttonRight.addEventListener('click', e => {
    e.preventDefault();

    if (atual === galleryImgArray.length - 1)
      atual = 0;
    else
      atual++;

    setClass(galleryImgArray, atual);
    setClass(galleryTextArray, atual);
    counter.innerText = `${atual + 1}/${galleryImgArray.length}`;
  });

  buttonGrid.addEventListener('click', e => {
    e.preventDefault();

    galleryGrid.classList.add('ativo');
  });

  buttonGridClose.addEventListener('click', e => {
    e.preventDefault();

    galleryGrid.classList.remove('ativo');
  });

  galleryGridArray.forEach((item, index) => {
    item.addEventListener('click', e => {
      e.preventDefault();

      galleryGrid.classList.remove('ativo');

      atual = index;
      
      setClass(galleryImgArray, atual);
      setClass(galleryTextArray, atual);
      counter.innerText = `${atual + 1}/${galleryImgArray.length}`;
    });
  });

  buttonFullscreen.addEventListener('click', e => {
    e.preventDefault();

    galleryImg.requestFullscreen();
  });

  galleryImg.addEventListener('mouseenter', e => {
    galleryImg.classList.add('ativo');
  });

  galleryImg.addEventListener('mouseleave', e => {
    galleryImg.classList.remove('ativo');
  });

  galleryImg.addEventListener('click', e => {
    e.preventDefault();

    if (e.offsetX / galleryImg.clientWidth < 0.1) {
      if (atual === 0)
        atual = galleryImgArray.length - 1;
      else
        atual--;

      setClass(galleryImgArray, atual);
      setClass(galleryTextArray, atual);
      counter.innerText = `${atual + 1}/${galleryImgArray.length}`;
    }
    
    if (e.offsetX / galleryImg.clientWidth > 0.9) {
      if (atual === galleryImgArray.length - 1)
        atual = 0;
      else
        atual++;  

      setClass(galleryImgArray, atual);
      setClass(galleryTextArray, atual);
      counter.innerText = `${atual + 1}/${galleryImgArray.length}`;
    }
  });
}

function setClass(items, atual) {
  items.forEach(item => {
    item.classList.remove('ativo');
  });

  items[atual].classList.add('ativo');
}
