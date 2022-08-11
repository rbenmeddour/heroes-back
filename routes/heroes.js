const express = require('express');
const app = express();
const heroesList = require('../heroes.js');
const { verifySlug } = require('../middleware/slug');
const { verifyHeroe } = require('../middleware/heroesExist');

// Get heroes

app.get('/', (req, res) => {
  res.json(heroesList);
});

// Get a specific heroe

app.get('/:slug', verifySlug, (req, res) => {
  const { slug } = req.params;
  const heroe = heroesList.find((heroe) => heroe.slug === slug);
  res.json(heroe.slug);
});

//  Get powers

app.get('/:slug/powers', verifySlug, (req, res) => {
  const { slug } = req.params;
  const heroe = heroesList.find((heroe) => heroe.slug === slug);
  res.json(heroe.power);
});

// Increment a new heroe in heroes list

app.post('/', verifyHeroe, (req, res) => {
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

// Delete a specific heroe

app.delete('/:slug', verifyHeroe, (req, res) => {
  const { slug } = req.params;
  const heroe = heroesList.findIndex((heroe) => heroe.slug === slug);
  heroesList.splice(heroe, 1);
  res.json(`${slug}"effacé correctement"`);
});

// Delete a specific power

app.delete('/:slug/powers/:power', verifyHeroe, (req, res) => {
  const { slug, power } = req.params;
  const heroe = heroesList.find((heroe) => heroe.slug === slug);
  const powerUpdate = heroe.power.find((powerDelete) => powerDelete === power);
  heroe.power.splice(powerUpdate, 1);
  res.json(`${heroe.power}"good"`);
});

module.exports = app;
