//при нажатии кнопки купить выведите в консоль значение data-number товара

const btns = document.querySelectorAll('button');

btns.forEach(b => b.addEventListener('click', (event) => {
  console.log(event.target.dataset.num);
}));