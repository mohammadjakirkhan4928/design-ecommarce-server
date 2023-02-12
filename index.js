const express = require('express')
const path = require('path');
const app = express()
const cors = require('cors')
const port = 8000

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


app.use(cors())

let products = [
  {
  id: 1,
  title: 'T-shirt Design ',
  img: 'https://i.ibb.co/tC6cXkF/1.jpg',
  price: 15,
  description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
  },
  {
  id: 2,
  title: 'T-shirt Design ',
  img: 'https://i.ibb.co/417s3LV/2-2.jpg',
  price: 13 ,
  description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
  },
  {
  id: 3,
  title: 'T-shirt Design ',
  img: 'https://i.ibb.co/235zcDW/2.jpg',
  price: 14,
  description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
  },
  {
  id: 4,
  title: 'T-shirt Design ',
  img: 'https://i.ibb.co/vzBNHHt/2f.jpg',
  price: 50,
  description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
  },
  {
  id: 5,
  title: 'T-shirt Design ',
  img: 'https://i.ibb.co/dm55tnd/3-2.jpg',
  price: 40,
  description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
  },
  {
  id: 6,
  title: 'T-shirt Design ',
  img: 'https://i.ibb.co/rwdtNhQ/4.jpg',
  price: 12,
  description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
  },
  {
  id: 7,
  title: 'T-shirt Design ',
  img: 'https://i.ibb.co/4tR3C5m/4s.jpg',
  price: 15,
  description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
  },
  {
  id: 8,
  title: 'T-shirt Design ',
  img: 'https://i.ibb.co/c3F4BZ5/5-2.jpg',
  price: 14,
  description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
  },
  {
  id: 9,
  title: 'T-shirt Design ',
  img: 'https://i.ibb.co/0qgQ5Wy/5.jpg',
  price: 15 ,
  description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
  },
  {
  id: 10,
  title: 'T-shirt Design ',
  img: 'https://i.ibb.co/jymWrcb/6-2.jpg',
  price: 64,
  description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
  },
  {
  id: 11,
  title: 'T-shirt Design ',
  img: 'https://i.ibb.co/Y08PszF/7.jpg',
  price: 67 ,
  description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
  },
  {
  id: 12,
  title: 'T-shirt Design ',
  img: 'https://i.ibb.co/DWzJbRY/8.jpg',
  price: 47 ,
  description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
  },
  {
    id: 13,
    title: 'T-shirt Design ',
    img: 'https://i.ibb.co/wcNY40G/9.jpg',
    price: 10,
    description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
    },
    {
    id: 14,
    title: 'T-shirt Design',
    img: 'https://i.ibb.co/jHCKq18/10-3.jpg',
    price: 12,
    description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
    },
    {
    id: 15,
    title: 'T-shirt Design ',
    img: 'https://i.ibb.co/TMgPQdY/11-2.jpg',
    price: 23 ,
    description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
    },
    {
    id: 16,
    title: 'T-shirt Design ',
    img: 'https://i.ibb.co/d0S67mT/11.jpg',
    price: 60 ,
    description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
    },
    {
    id: 17,
    title: 'T-shirt Design ',
    img: 'https://i.ibb.co/BC3pJGX/12.jpg',
    price: 20 ,
    description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
    },
    {
    id: 18,
    title: 'T-shirt Design ',
    img: 'https://i.ibb.co/bFvfpYT/13.jpg',
    price: 40 ,
    description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
    },
    {
    id: 19,
    title: 'T-shirt Design ',
    img: 'https://i.ibb.co/bFvfpYT/13.jpg',
    price: 72 ,
    description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
    },
    {
    id: 20,
    title: 'T-shirt Design ',
    img: 'https://i.ibb.co/RCYcqdv/14.jpg',
    price: 17 ,
    description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
    },
    {
      id: 21,
      title: 'T-shirt Design ',
      img: 'https://i.ibb.co/3BMnw44/16.jpg',
      price: 72 ,
      description: 'Women handwoven rayon fully lined jacket with contrasting silk/rayon velvet notched collar and cuffs. Side seam pockets with 4-bone button closure and polyester lining. XS-XL. Made in the USA.',
      },

  // ...
  ];

app.use(express.json());

// Serve static files from the "img" directory
app.use('/img', express.static(path.join(__dirname, 'img')));

app.get('/products/:id', (req, res) => {
const product = products.find((p) => p.id === parseInt(req.params.id));
if (!product)
return res.status(404).send('The product with the given ID was not found.');

res.send(product);
});


app.get('/products', (req, res) => {
res.send(products);
});

app.post('/products', (req, res) => {
const product = {
id: products.length + 1,
title: req.body.title,
img: req.body.img,
price:req.body.price,
description: req.body.description,
};

products.push(product);
res.send(product);
});

// app.put('/products/:id', (req, res) => {
// const product = products.find((p) => p.id === parseInt(req.params.id));
// if (!product)
// return res.status(404).send('The product with the given ID was not found.');

// product.title = req.body.title;
// product.img = req.body.img;
// product.price = req.body.price
// product.description = req.body.description;

// res.send(product);
// });

// app.delete('/products/:id', (req, res) => {
// const product = products.find((p) => p.id === parseInt(req.params.id));
// if (!product)
// return res.status(404).send('The product with the given ID was not found.');

// const index = products.indexOf(product);
// products.splice(index, 1);

// res.send(product);
// });
// product side done    the payment gateway side


app.post('/create-payment-intent', async (req, res) => {
  const Product = req.body;
  // const price = producT.price;
  // const subtotal = price * 100;
  const price = Product.price;
  const amount = price * 100;

  const paymentIntent = await stripe.paymentIntents.create({
      currency: 'usd',
      amount: amount,
      "payment_method_types": [
          "card"
      ]
  });
  res.send({
      clientSecret: paymentIntent.client_secret,
  });
});


app.post('/payments', async (req, res) =>{
  const payment = req.body;
  const result = await paymentsCollection.insertOne(payment);
  const id = payment.bookingId
  const filter = {_id: ObjectId(id)}
  const updatedDoc = {
      $set: {
          paid: true,
          transactionId: payment.transactionId
      }
  }
  const updatedResult = await bookingsCollection.updateOne(filter, updatedDoc)
  res.send(result);
})



app.listen(port, () => {
    console.log(`Example app listening on port {port}`)
  })
