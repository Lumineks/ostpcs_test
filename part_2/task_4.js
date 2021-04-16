// В задании указано что дан массив с товарами, хотя в коде задания вовсе не массив, а объект со сво-ми-объектами => исходя из условия я написал именно МАССИВ с товарами

const goods = [{
    name: 'Яблоки',
    cost: 13
  },
  {
    name: 'Груши',
    cost: 23
  },
  {
    name: 'Абрикосы',
    cost: 33
  },
  {
    name: 'Сливы',
    cost: 43
  },
  {
    name: 'Вишня',
    cost: 19
  }
];

const productsToShow = goods.filter(p => p.cost > 20).map((p) => {
  const div = document.createElement('div');
  div.innerText = `
    Product.name - ${p.name}
    Product.cost - ${p.cost}
  `;

  return div;
});

console.log(productsToShow);
productsToShow.forEach((product) => document.querySelector('#root').appendChild(product));