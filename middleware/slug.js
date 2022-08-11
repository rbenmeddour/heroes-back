const heroesList = require('../heroes.js');

const verifySlug = (req, res, next) => {
  const { slug } = req.params;
  const heroe = heroesList.find((heroe) => heroe.slug === slug);
  const heroeIndex = heroesList.findIndex((heroe) => heroe.slug === slug);

  if (!heroe) {
    res.status(404).json('Heroe not found');
  } else {
    req.heroe = heroe;
    req.index = heroeIndex;
    next();
  }
};

module.exports = { verifySlug: verifySlug };
