import { faker } from '@faker-js/faker';

function generateProductData(requestParams, ctx, ee, next) {
  ctx.vars['nome'] = faker.name.firstName();
  ctx.vars['valor'] = faker.random.numeric(5);
  ctx.vars['descrição'] = faker.lorem.word(10);
  return next();
}

module.exports = {
  generateProductData,
};
