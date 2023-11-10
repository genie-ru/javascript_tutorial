let book = {
    title: 'Javaポケットリファレンス',
    publisher: '技術評論社',
    price: 2680
};

let {title, publisher, price, other = 'dummy'} = book;
console.log(title);
console.log(publisher);