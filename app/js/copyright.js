export default function copyright () {
  const copyrightField = document.querySelector('.copyright-year');

  if (!copyrightField) return null;

  const year = new Date().getFullYear();

  copyrightField.innerText = year;
}