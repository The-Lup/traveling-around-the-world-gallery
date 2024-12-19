'use strict';

var datos = {
  fotos: {
    america: [
      {
        id: 1,
        nombre: 'America 1',
        descripcion:
          'America 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/1.jpg',
      },
      {
        id: 2,
        nombre: 'America 2',
        descripcion:
          'America 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/2.jpg',
      },
      {
        id: 3,
        nombre: 'America 3',
        descripcion:
          'America 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/3.jpg',
      },
      {
        id: 4,
        nombre: 'America 4',
        descripcion:
          'America 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/4.jpg',
      },
      {
        id: 5,
        nombre: 'America 5',
        descripcion:
          'America 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/5.jpg',
      },
      {
        id: 6,
        nombre: 'America 6',
        descripcion:
          'America 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/6.jpg',
      },
      {
        id: 7,
        nombre: 'America 7',
        descripcion:
          'America 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/7.jpg',
      },
      {
        id: 8,
        nombre: 'America 8',
        descripcion:
          'America 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/8.jpg',
      },
      {
        id: 9,
        nombre: 'America 9',
        descripcion:
          'America 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/9.jpg',
      },
      {
        id: 10,
        nombre: 'America 10',
        descripcion:
          'America 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/10.jpg',
      },
    ],
    europa: [
      {
        id: 11,
        nombre: 'Europa 1',
        descripcion:
          'Europa 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/1.jpg',
      },
      {
        id: 12,
        nombre: 'Europa 2',
        descripcion:
          'Europa 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/2.jpg',
      },
      {
        id: 13,
        nombre: 'Europa 3',
        descripcion:
          'Europa 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/3.jpg',
      },
      {
        id: 14,
        nombre: 'Europa 4',
        descripcion:
          'Europa 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/4.jpg',
      },
      {
        id: 15,
        nombre: 'Europa 5',
        descripcion:
          'Europa 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/5.jpg',
      },
      {
        id: 16,
        nombre: 'Europa 6',
        descripcion:
          'Europa 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/6.jpg',
      },
      {
        id: 17,
        nombre: 'Europa 7',
        descripcion:
          'Europa 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/7.jpg',
      },
      {
        id: 18,
        nombre: 'Europa 8',
        descripcion:
          'Europa 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/8.jpg',
      },
      {
        id: 19,
        nombre: 'Europa 9',
        descripcion:
          'Europa 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/9.jpg',
      },
      {
        id: 20,
        nombre: 'Europa 10',
        descripcion:
          'Europa 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/10.jpg',
      },
    ],

    africa: [
      {
        id: 21,
        nombre: 'África 1',
        descripcion:
          'África 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/1.jpg',
      },
      {
        id: 22,
        nombre: 'África 2',
        descripcion:
          'África 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/2.jpg',
      },
      {
        id: 23,
        nombre: 'África 3',
        descripcion:
          'África 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/3.jpg',
      },
      {
        id: 24,
        nombre: 'África 4',
        descripcion:
          'África 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/4.jpg',
      },
      {
        id: 25,
        nombre: 'África 5',
        descripcion:
          'África 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/5.jpg',
      },
      {
        id: 26,
        nombre: 'África 6',
        descripcion:
          'África 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/6.jpg',
      },
      {
        id: 27,
        nombre: 'África 7',
        descripcion:
          'África 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/7.jpg',
      },
      {
        id: 28,
        nombre: 'África 8',
        descripcion:
          'África 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/8.jpg',
      },
      {
        id: 29,
        nombre: 'África 9',
        descripcion:
          'África 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/9.jpg',
      },
      {
        id: 30,
        nombre: 'África 10',
        descripcion:
          'África 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/10.jpg',
      },
    ],
    asia: [
      {
        id: 31,
        nombre: 'Asia 1',
        descripcion:
          'Asia 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/1.jpg',
      },
      {
        id: 32,
        nombre: 'Asia 2',
        descripcion:
          'Asia 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/2.jpg',
      },
      {
        id: 33,
        nombre: 'Asia 3',
        descripcion:
          'Asia 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/3.jpg',
      },
      {
        id: 34,
        nombre: 'Asia 4',
        descripcion:
          'Asia 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/4.jpg',
      },
      {
        id: 35,
        nombre: 'Asia 5',
        descripcion:
          'Asia 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/5.jpg',
      },
      {
        id: 36,
        nombre: 'Asia 6',
        descripcion:
          'Asia 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/6.jpg',
      },
      {
        id: 37,
        nombre: 'Asia 7',
        descripcion:
          'Asia 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/7.jpg',
      },
      {
        id: 38,
        nombre: 'Asia 8',
        descripcion:
          'Asia 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/8.jpg',
      },
      {
        id: 39,
        nombre: 'Asia 9',
        descripcion:
          'Asia 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/9.jpg',
      },
      {
        id: 40,
        nombre: 'Asia 10',
        descripcion:
          'Asia 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/10.jpg',
      },
    ],
    oceania: [
      {
        id: 41,
        nombre: 'Oceania 1',
        descripcion:
          'Oceania 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/1.jpg',
      },
      {
        id: 42,
        nombre: 'Oceania 2',
        descripcion:
          'Oceania 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/2.jpg',
      },
      {
        id: 43,
        nombre: 'Oceania 3',
        descripcion:
          'Oceania 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/3.jpg',
      },
      {
        id: 44,
        nombre: 'Oceania 4',
        descripcion:
          'Oceania 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/4.jpg',
      },
      {
        id: 45,
        nombre: 'Oceania 5',
        descripcion:
          'Oceania 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/5.jpg',
      },
      {
        id: 46,
        nombre: 'Oceania 6',
        descripcion:
          'Oceania 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/6.jpg',
      },
      {
        id: 47,
        nombre: 'Oceania 7',
        descripcion:
          'Oceania 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/7.jpg',
      },
      {
        id: 48,
        nombre: 'Oceania 8',
        descripcion:
          'Oceania 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/8.jpg',
      },
      {
        id: 49,
        nombre: 'Oceania 9',
        descripcion:
          'Oceania 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/9.jpg',
      },
      {
        id: 50,
        nombre: 'Oceania 10',
        descripcion:
          'Oceania 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/10.jpg',
      },
    ],
    antartida: [
      {
        id: 51,
        nombre: 'Antártida 1',
        descripcion:
          'Antártida 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/1.jpg',
      },
      {
        id: 52,
        nombre: 'Antártida 2',
        descripcion:
          'Antártida 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/2.jpg',
      },
      {
        id: 53,
        nombre: 'Antártida 3',
        descripcion:
          'Antártida 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/3.jpg',
      },
      {
        id: 54,
        nombre: 'Antártida 4',
        descripcion:
          'Antártida 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/4.jpg',
      },
      {
        id: 55,
        nombre: 'Antártida 5',
        descripcion:
          'Antártida 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/5.jpg',
      },
      {
        id: 56,
        nombre: 'Antártida 6',
        descripcion:
          'Antártida 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/6.jpg',
      },
      {
        id: 57,
        nombre: 'Antártida 7',
        descripcion:
          'Antártida 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/7.jpg',
      },
      {
        id: 58,
        nombre: 'Antártida 8',
        descripcion:
          'Antártida 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/8.jpg',
      },
      {
        id: 59,
        nombre: 'Antártida 9',
        descripcion:
          'Antártida 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/9.jpg',
      },
    ],
  },
};

const { fotos } = datos;

var dataCategorias = {
  categorias: [
    {
      id: 'america',
      nombre: 'America',
      numeroFotos: fotos['america'].length,
      imagenPortada: './img/america.jpg',
    },
    {
      id: 'europa',
      nombre: 'Europa',
      numeroFotos: fotos['europa'].length,
      imagenPortada: './img/europa.jpg',
    },
    {
      id: 'africa',
      nombre: 'África',
      numeroFotos: fotos['africa'].length,
      imagenPortada: './img/africa.jpg',
    },
    {
      id: 'asia',
      nombre: 'Asia',
      numeroFotos: fotos['asia'].length,
      imagenPortada: './img/asia.jpg',
    },
    {
      id: 'oceania',
      nombre: 'Oceania',
      numeroFotos: fotos['oceania'].length,
      imagenPortada: './img/oceania.jpg',
    },
    {
      id: 'antartida',
      nombre: 'Antártida',
      numeroFotos: fotos['antartida'].length,
      imagenPortada: './img/antartida.jpg',
    },
  ],
};

const { categorias } = dataCategorias;
const contenedorCategorias$1 = document.getElementById('categorias');

categorias.forEach((categoria) => {
  const nuevaCategoria = document.createElement('a');
  const plantilla = `
            <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
            <div class="categoria__datos">
              <p class="categoria__nombre">${categoria.nombre}</p>
              <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
            </div>`;

  nuevaCategoria.innerHTML = plantilla;
  nuevaCategoria.classList.add('categoria');
  nuevaCategoria.href = '#';
  nuevaCategoria.dataset.categoria = categoria.id;

  contenedorCategorias$1.append(nuevaCategoria);
});

const galeria$4 = document.getElementById('galeria');
const cargarImagen = (id, nombre, ruta, descripcion) => {
  // Cambiamos la ruta, id, nombre y descripcion de la imagen activa.
  galeria$4.querySelector('.galeria__imagen').src = ruta;
  galeria$4.querySelector('.galeria__imagen').dataset.idImagen = id;
  galeria$4.querySelector('.galeria__titulo').innerText = nombre;
  galeria$4.querySelector('.galeria__descripcion-imagen-activa').innerText =
    descripcion;

  const categoriaActual = galeria$4.dataset.categoria;
  const fotos = datos.fotos[categoriaActual];

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === id) {
      indexImagenActual = index;
    }
  });

  //Marca la foto activa del carousel
  if (galeria$4.querySelector('.galeria__carousel-slide')) {
    //Elimina/agrega la clase activa del carousel
    galeria$4
      .querySelector('.galeria__carousel-slide--active')
      .classList.remove('galeria__carousel-slide--active');
    galeria$4
      .querySelectorAll('.galeria__carousel-slide')
      [indexImagenActual].classList.add('galeria__carousel-slide--active');
  }
};

//---->CARGAR IMAGEN - ANTERIOR/SIGUIENTE<----
const loadNextPrevImg = (direccion) => {
  const categoriaActual = galeria$4.dataset.categoria;
  const fotos = datos.fotos[categoriaActual];
  const idActualImg = parseInt(
    galeria$4.querySelector('.galeria__imagen').dataset.idImagen
  );

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === idActualImg) {
      indexImagenActual = index;
    }
  });

  if (direccion === 'siguiente') {
    if (fotos[indexImagenActual + 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  } else if (direccion === 'anterior') {
    if (fotos[indexImagenActual - 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  }
};

const contenedorCategorias = document.getElementById('categorias');
const galeria$3 = document.getElementById('galeria');

contenedorCategorias.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.closest('a')) {
    galeria$3.classList.add('galeria--active');
    document.body.style.overflow = 'hidden';

    const categoriaActiva = e.target.closest('a').dataset.categoria;
    galeria$3.dataset.categoria = categoriaActiva;

    const fotos = datos.fotos[categoriaActiva];
    const carousel = galeria$3.querySelector('.galeria__carousel-slides');

    const { id, nombre, ruta, descripcion } = fotos[0];
    cargarImagen(id, nombre, ruta, descripcion);

    carousel.innerHTML = '';

    fotos.forEach((foto) => {
      const slide = `
      <a href="#" class="galeria__carousel-slide">
      <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt=""/>
      </a>
      `;
      galeria$3.querySelector('.galeria__carousel-slides').innerHTML += slide;
    });

    galeria$3
      .querySelector('.galeria__carousel-slide')
      .classList.add('galeria__carousel-slide--active');
  }
});

const galeria$2 = document.getElementById('galeria');
const cerrarGaleria = () => {
  galeria$2.classList.remove('galeria--active');
  document.body.style.overflow = '';
};

const slideClick = (e) => {
  let ruta, nombre, descripcion;

  //Obtension del id de la imagen que recibio el click.
  const id = parseInt(e.target.dataset.id);

  //Obtencion de la categoria activa.
  const galeria = document.getElementById('galeria');
  const categoriaActiva = galeria.dataset.categoria;

  //Recorre las fotos en busca de la foto que obtuvo el click.
  datos.fotos[categoriaActiva].forEach((foto) => {
    if (foto.id === id) {
      ruta = foto.ruta;
      nombre = foto.nombre;
      descripcion = foto.descripcion;
    }
  });

  //cargamos la imagen activa.
  cargarImagen(id, nombre, ruta, descripcion);
};

const galeria$1 = document.getElementById('galeria');

const carousel = (direccion) => {
  const opciones = {
    root: document.querySelector('.galeria__carousel'),
    rootMargin: '0px',
    threshold: 0.9,
  };

  const observer = new IntersectionObserver((entradas) => {
    const slidesVisibles = entradas.filter((entrada) => {
      if (entrada.isIntersecting === true) {
        return entrada;
      }
    });

    if (direccion === 'atras') {
      const firstVisibleSlide = slidesVisibles[0];
      const firstIndexVisSlide = entradas.indexOf(firstVisibleSlide);

      if (firstIndexVisSlide >= 1) {
        entradas[firstIndexVisSlide - 1].target.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
        });
      }
    } else if (direccion === 'adelante') {
      const lastVisSlide = slidesVisibles[slidesVisibles.length - 1];
      const lastIndexVisSlide = entradas.indexOf(lastVisSlide);

      if (entradas.length - 1 > lastIndexVisSlide) {
        entradas[lastIndexVisSlide + 1].target.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
        });
      }
    }

    const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) => {
      observer.unobserve(slide);
    });
  }, opciones);

  const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');
  slides.forEach((slide) => {
    observer.observe(slide);
  });
};

const galeria = document.getElementById('galeria');
galeria.addEventListener('click', (e) => {
  const boton = e.target.closest('button');

  //---->CLOSE GALLERY<----
  if (boton?.dataset?.accion === 'cerrar-galeria') {
    cerrarGaleria();
  }

  //---->CAROUSEL SLIDE CLICK<----
  if (e.target.dataset.id) {
    slideClick(e);
  }

  //---->NEXT IMG<----
  if (boton?.dataset?.accion === 'siguiente-imagen') {
    loadNextPrevImg('siguiente');
  }

  //---->PREVIOUS IMG<----
  if (boton?.dataset?.accion === 'anterior-imagen') {
    loadNextPrevImg('anterior');
  }

  //---->NEXT IMG CAROUSEL<----
  if (boton?.dataset?.accion === 'siguiente-slide') {
    carousel('adelante');
  }

  //---->PREVIOUS IMG CAROUSEL<----
  if (boton?.dataset?.accion === 'anterior-slide') {
    carousel('atras');
  }
});