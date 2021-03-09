export default function openMenu() {
  const menuHamb = document.querySelector('[data-menu="button"]');
  const menu = document.querySelector('[data-menu="menu"]');
  let ativo = false;

  if (!menuHamb || !menu) return null;

  menuHamb.addEventListener("click", e => {
    e.preventDefault();

    menu.classList.toggle("ativo");
    menuHamb.classList.toggle("ativo");

    ativo = !ativo;

    if (!!ativo) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      document.body.style.setProperty('overflow-y', 'hidden');
    } else {
      document.body.style.setProperty('overflow-y', 'scroll');
    }
  });
}
