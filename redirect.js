module.exports = (req, res) => {
  // Check if 'url' parameter is provided in the query string
  if (req.query.url) {
    // Get the value of 'url' parameter
    const redirectUrl = req.query.url;

    // Perform the redirection
    res.writeHead(302, { Location: redirectUrl });
    res.end();
  } else {
    // Handle case when 'url' parameter is not provided
    res.status(400).send('Invalid request');
  }
};
