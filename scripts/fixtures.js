const faker = require('faker');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

const sample = new Array(20).fill(null).map(() => ({
  id: uuid.v4(),
  date: faker.date.past(),
  visibility: ['public', 'private'][Math.floor(Math.random() * 2)],
  body: faker.lorem.paragraph(),
}));

fs.writeFileSync(
  path.join(__dirname, '..', 'db.json'),
  // eslint-disable-next-line
  JSON.stringify(sample, null, 2)
);
