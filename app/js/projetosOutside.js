export default function projetosOutside() {
  const projetosArray = document.querySelectorAll('.projeto-card');
  const projetosDadosArray = document.querySelectorAll('.projeto-card-dados');

  if (window.innerWidth < 768) {
    window.addEventListener('scroll', showCardGradual);
  }

  window.addEventListener('resize', e => {
    if (window.innerWidth > 768) {
      window.removeEventListener('scroll', showCardGradual);
    } else {
      window.addEventListener('scroll', showCardGradual);
    }
  });

  function showCardGradual() {
    projetosArray.forEach((projeto, index) => {
      const objectDistance = projeto.getBoundingClientRect().top + projeto.getBoundingClientRect().height / 2;
      const opacityValue = (objectDistance - (window.innerHeight / 2)) / (window.innerHeight / 2);
    
      projetosDadosArray[index].style.setProperty('opacity', opacityValue > 0 ? 1 - opacityValue : 1 - -opacityValue);
    });
  }
}