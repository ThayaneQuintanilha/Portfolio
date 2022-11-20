import images from '../assets/projects/projectsImg.js';
const { pixelarte, zoofunction, solarsistem, todolist, tryunfo, trybetunes, shoppingcart, frontonlinestore } = images;

const projects = [
  {
    image: tryunfo,
    title: 'Tryunfo',
    description: 'Projeto realizado em ReactJs, focado em um jogo de batalha com cartas.',
    link: 'https://github.com/ThayaneQuintanilha/Tryunfo',
  },
  {
    image: frontonlinestore,
    title: 'FrontEnd Online Store',
    description: 'Projeto realizado em ReactJs, foco foi criar uma nova aplicação para o mercadoLivre, agora com trabalho em equipe utilizando kanban.',
    link: 'https://github.com/ThayaneQuintanilha/ShoppingCart',
  },
  {
    image: trybetunes,
    title: 'Trybe Tunes',
    description: 'Projeto realizado em ReactJs, foco em criar uma aplicação de música, utilizando a api do itunes.',
    link: 'https://github.com/ThayaneQuintanilha/trybetunes',
  },
  {
    image: shoppingcart,
    title: 'Shopping Cart',
    description: 'Projeto realizado em ReactJs, foco em criar uma página de produtos e adiciona-los no carrinho com a api do MercadoLivre.',
    link: 'https://github.com/ThayaneQuintanilha/ShoppingCart',
  },
  {
    image: solarsistem,
    title: 'Sistema Solar',
    description: 'Projeto criado em ReactJs, para fixar os conhecimentos com props.',
    link: 'https://github.com/ThayaneQuintanilha/Sistema-Solar',
  },
  {
    image: zoofunction,
    title: 'Zoo Functions',
    description: 'Projeto focado em gerenciar um zoológico, utilizando as High Order Functions.',
    link: 'https://github.com/ThayaneQuintanilha/ZooFunctions',
  },
  {
    image: pixelarte,
    title: 'Pixel Arte',
    description: 'Projeto realizado com Javascript, Html e Css.',
    link: 'https://github.com/ThayaneQuintanilha/artecompixel',
  },
  {
    image: todolist,
    title: 'TodoList',
    description: 'Projeto realizado em Javascript puro, focado na criação de uma lista de tarefas.',
    link: 'https://github.com/ThayaneQuintanilha/ToDoListTRYBEa',
  },
];

export default projects;
