const express = require('express');
const app = express();
const heroesList = require('../heroes.js');
const { verifySlug } = require('../middleware/slug');

app.get('/', (req, res) => {
  res.json(heroesList);
});

app.get('/:slug', verifySlug, (req, res) => {
  const { slug } = req.params;
  const heroe = heroesList.find((heroe) => heroe.slug === slug);
  res.json(heroe.slug);
});

app.get('/:slug/powers', verifySlug, (req, res) => {
  const { slug } = req.params;
  const heroe = heroesList.find((heroe) => heroe.slug === slug);
  res.json(heroe.power);
});

app.post('/', (req, res) => {
  const { slug, name, power, color, isAlive, age, image } = req.body;
  const newHero = {
    slug: '',
    name: 'Heroman',
    power: '',
    color: '',
    isAlive: '',
    age: '',
    image: '',
  };
  heroesList.push(newHero);
  res.status(201).send(newHero);
  console.log(newHero.slug);
});

// app.put('/:slug/powers', (req, res) => {
//   const { slug, power } = req.body;
//   const putPower = {
//     power: '',
//   };
//   req.json(req.heroesList.power);
//   res.send('good');
// });

module.exports = app;
