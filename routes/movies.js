const express = require('express');
const router = express.Router();

// Sample movie data (same as in sitemap)
const movies = [
  {
    title: 'Mission: Impossible – Dead Reckoning',
    slug: 'mission-impossible-dead-reckoning',
    description: 'Some description...',
  },
  {
    title: 'Transformers: Rise of the Beasts',
    slug: 'transformers-rise-of-the-beasts',
    description: 'Some description...',
  },
  // Add more movies here as needed
];

router.get('/:slug', (req, res) => {
  const movie = movies.find(m => m.slug === req.params.slug);
  
  if (!movie) {
    return res.status(404).send('Movie not found');
  }

  res.send(`
    <h1>${movie.title}</h1>
    <p>${movie.description}</p>
  `);
});

module.exports = router;
