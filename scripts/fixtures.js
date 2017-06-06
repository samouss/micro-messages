const faker = require('faker');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
const { orderBy } = require('lodash');

const messages = new Array(20).fill(null).map(() => ({
  id: uuid.v4(),
  date: faker.date.past(),
  visibility: ['public', 'private'][Math.floor(Math.random() * 2)],
  body: faker.lorem.paragraphs(),
}));

const messagesOrderByDate = orderBy(messages, x => x.date, ['desc']);

fs.writeFileSync(
  path.join(__dirname, '..', 'db.json'),
  // eslint-disable-next-line
  JSON.stringify(messagesOrderByDate, null, 2)
);
