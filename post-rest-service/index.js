const express = require('express');
const app = express();
const port = 5000;

const posts = [
    { id: 1, title: 'My first blog post', content: 'Hello there.\nThis is an example of a componentized blog post.' },
    { id: 2, title: 'My second blog post', content: 'Hello there.\nThis is another example.\nWa-hoo!' },
    { id: 3, title: 'The final blog post', content: 'C’est fin' }
];

app.get('/posts', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(posts);
});

app.listen(port, () => console.log(`App listening on port ${port}`));