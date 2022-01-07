const jwtKey = require('fs')
  .readFileSync(`${__dirname}/../../jwt.evaluation.key`, { encoding: 'utf-8' })
  .trim();

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const organizeProdArray = (saleObj, saleId) => {
  const { prodArray } = saleObj;
  return prodArray.map(({ product_id, quantity }) => ({
    sale_id: saleId,
    product_id,
    quantity,
  }));
};

module.exports = {
  jwtKey,
  jwtConfig,
  organizeProdArray,
};
