const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const sitemapRoute = require('./routes/sitemape');
app.use('/', sitemapRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
