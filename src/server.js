import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is running on', port);
});
