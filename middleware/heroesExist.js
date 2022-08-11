const heroesList = require('../heroes');
const app = require('../routes/heroes');

const verifyHeroe = (req, res, next) => {
  const postHeroe = req.body;
  const slug = req.body;
  const heroe = heroesList.find((heroe) => heroe.slug === slug);

  if (heroe) {
    res.status(409).json('Heroes exist');
  } else {
    req.heroe = postHeroe;
    next();
  }
};

module.exports = { verifyHeroe: verifyHeroe };
