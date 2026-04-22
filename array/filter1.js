const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copa de Vidro", preco: 12.49, fragil: true },
  { nome: "Copa de Plástico", preco: 18.99, fragil: false },
];

const caro = (produto) => produto.preco >= 500;
const frageis = (produto) => produto.fragil;

console.log(
  produtos.filter(function (p) {
    return false;
  }),
);

console.log(produtos.filter(caro).filter(frageis));
