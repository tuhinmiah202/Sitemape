const express = require('express');
const router = express.Router();

const movies = [
  { slug: 'avengers-endgame', updatedAt: '2024-06-01' },
  { slug: 'dune-part-two', updatedAt: '2024-05-15' },
];

router.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  movies.forEach(movie => {
    xml += `
  <url>
    <loc>https://movieshub-bd-bzhg.onrender.com/movies/${movie.slug}</loc>
    <lastmod>${movie.updatedAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  xml += `\n</urlset>`;
  res.send(xml);
});

module.exports = router;
