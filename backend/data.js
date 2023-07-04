import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Vanic',
      email: 'vanic@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Stephane',
      email: 'stephane@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Desktop azus 40"',
      slug: 'desktop azus 40"',
      category: 'Desktop',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Azus',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Desktop hp 30"',
      slug: 'desktop hp 30"',
      category: 'Desktop',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Hp',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Laptop Azus i5',
      slug: 'laptop Asus i5',
      category: 'Laptop',
      image: '/images/p3.jpg',
      price: 500,
      countInStock: 15,
      brand: 'Azus',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Laptop Asus i7',
      slug: 'laptop Asus i7',
      category: 'Laptop',
      image: '/images/p4.jpg',
      price: 650,
      countInStock: 5,
      brand: 'Azus',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
