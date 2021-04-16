const images = document.querySelectorAll('img');

images.forEach(img => img.addEventListener('click', (event) => {
  console.log(event.target.getAttribute('src'));
}));