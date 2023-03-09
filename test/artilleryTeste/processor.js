'use-strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker');

function generateProductData(ctx, ee, next) {
  ctx.vars['nome'] = faker.random.alphaNumeric(20);
  ctx.vars['valor'] = faker.random.numeric(5);
  ctx.vars['descrição'] = faker.lorem.word(5);
  return next();
}

module.exports = {
  generateProductData,
};
