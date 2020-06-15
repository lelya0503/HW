const goods = [
    { title: 'Компьютер', price: 10000 },
    { title: 'Мышь', price: 500 },
    { title: 'Клавиатура', price: 1000 },
    { title: 'Монитор', price: 7000 },
];

const getGoodsItem = (title, price) => {
    return `<div class="goods-item"><h2>${title}</h2><p>${price}</p></div>`;
}

const renderGoodsList = (list) => {
    const goodsList = list.map(listItem => getGoodsItem(listItem.title, listItem.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join(''); //если добавить метод join, то ему можно задать разделитель между элементами, по умолчанию здесь запятая, но если указать пустые скобки, ничего выводиться не должно
}

renderGoodsList(goods);


//не понимаю как можно сократить этот код
