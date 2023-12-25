
// taskdata.js
const taskData = [
    // Male Products
    {
      id: 1,
      name: 'Mens Running Shoes',
      category: 'Male',
      price: 59.99,
      description: 'Description for Male Product 1',
      imgSrc:'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/samples/shoe.jpg',
      option: 'shoes'
    },
    {
        id: 2,
        name: 'Men Product 2',
        category: 'Male',
        price: 59.90,
        description: 'Description for Male Product 1',
        imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/saad/u9vosjkeqfaevabxflkk.jpg',
        option:'jackets'
      },
      {
        id: 3,
        name: 'Men Product 3',
        category: 'Male',
        price: 69.99,
        description: 'Description for Male Product 1',
        imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/saad/htqbc6hscftjidja5saw.jpg',
        option:'jackets'
      },
      {
        id: 4,
        name: 'Mens Sneakers',
        category: 'Male',
        price: 58.99,
        description: 'Description for Male Product 1',
        imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/cld-sample-5.jpg',
      option:'shoes'
      },
    {
      id: 5,
      name: 'Men Product 5',
      category: 'Male',
      price: 72.99,
      description: 'Description for Male Product 2',
      imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/saad/f97tpus5j9a68rmcmymr.jpg',
      option:'shirts'
    },
    // Add 18 more male products...
  
    // Female Products
    {
      id: 21,
      name: 'Female Product 1',
      category: 'Female',
      price: 49.19,
      description: 'Description for Female Product 1',
      imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/Female%20Product/gumrmbs1wpnhbjejiose.jpg',
      option:'Breslate'
    },
    {
      id: 22,
      name: 'Female Product 2',
      category: 'Female',
      price: 19.99,
      description: 'Description for Female Product 2',
      imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/Female%20Product/hi9mtnwrmvzdbypyjbym.jpg',
      option:'shoes'
    },
    {
      id: 23,
      name: 'Female Product 3',
      category: 'Female',
      price: 21.59,
      description: 'Description for Female Product 2',
      imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/Female%20Product/isysjufspbhm5pffykk2.jpg',
      option:'shoes'
    },
    {
      id: 24,
      name: 'Female Product 4',
      category: 'Female',
      price: 91.99,
      description: 'Description for Female Product 2',
      imgSrc:'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/Female%20Product/ile2f4boeilfdfhecxh6.jpg',
      option:'jacket'
    },
    {
      id: 25,
      name: 'Female Product 5',
      category: 'Female',
      price: 101.99,
      description: 'Description for Female Product 2',
      imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/Female%20Product/tg3ycwkru5t7l3mvmxs9.jpg',
      option:'jacket'
    },
    {
      id: 26,
      name: 'Female Product 6',
      category: 'Female',
      price: 123.99,
      description: 'Description for Female Product 2',
      imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/Female%20Product/nplgttm6hzksqbia7y4j.jpg',
    option:'watches'
    },
    // Add 18 more female products...
  
    // Kids Products
    {
      id: 41,
      name: 'Kid\'s Product 1',
      category: 'Kids',
      price: 22.29,
      description: 'Description for Kid\'s Product 1',
      imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/kids/onrupnx2xzbotdjfnxjv.jpg',
    option:'shoes'
    },
    {
      id: 42,
      name: 'Kid\'s Product 2',
      category: 'Kids',
      price: 19.19,
      description: 'Description for Kid\'s Product 2',
      imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/kids/jx5ehkafjftldwza7hrh.jpg',
      option:'shoes'
    },
    {
      id: 43,
      name: 'Kid\'s Product 3',
      category: 'Kids',
      price: 71.99,
      description: 'Description for Kid\'s Product 2',
      imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/kids/x6iapjjy8lsb1yqugiyi.jpg',
      option:'Toys'
    },
    {
      id: 44,
      name: 'Kid\'s Product 4',
      category: 'Kids',
      price: 14.99,
      description: 'Description for Kid\'s Product 2',
      imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/kids/lxjggwscn3l1uvoeheek.jpg',
      option:'Toys'
    },
    {
      id: 45,
      name: 'Kid\'s Product 5',
      category: 'Kids',
      price: 10.99,
      description: 'Description for Kid\'s Product 2',
      imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/kids/hgs6f1qkoym6d0xtbnsc.jpg',
      option:'Dress'
    },
    {
      id: 46,
      name: 'Kid\'s Product 6',
      category: 'Kids',
      price: 69.99,
      description: 'Description for Kid\'s Product 2',
      imgSrc: 'https://res.cloudinary.com/dojyztjtr/image/upload/c_fill,h_300,w_500/kids/sutkev0pq1eqmlvxrxgg.jpg',
      option:'Dress'
    },
    // Add 8 more kids' products...
  
    // Continue adding the remaining products for each category...
  ];
  
  export default taskData; 