const express = require('express');
const app = express();

// Import the sitemap route
const sitemapRoute = require('./routes/sitemap');

// Use the sitemap route
app.use('/', sitemapRoute);

// ✅ Default route for base URL
app.get('/', (req, res) => {
  res.send('Server is running! Go to /sitemap to view the sitemap.');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
