# PayBrokers - Technical Challenge

## About

The challenge is about to creating two APIs focused on microservices communication.

The API-A has a POST route, that receives a product (name, description, value), verifies the existence of the product name on the MongoDB database, case exists returns a message warning that the product already exists, case not, saves the product on a MongoDB collection, send this to API-B, and returns the created product.

The API-B receives the product via RabbitMQ, verifies the existence of the product name on the MySQL database, case exists, the product is discarded, case not exists, creates the product on a MySQL database. API-B also has a get product list route, that returns an array of products, and a get product by name route, returning a product selected by his name.

## Technologies

The following tools and frameworks were used in the construction of the project:<br>

<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/rabbitmq-%23FF6600.svg?&style=for-the-badge&logo=rabbitmq&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white'>
</p>

The project also use Mongoose and TypeORM.

## How to run

1. Clone this repository

2. Clone the API-B repository on this [link](https://github.com/NilsonNetto/paybrokers-apiB)

3. From API-A folder, run the docker-compose with the MongoDB, MySQL and RabbitMQ images

```bash
docker-compose up --build
```

4. Install dependencies on API-A and API-B

```bash
npm install
```

5. With the docker-compose running, start the API-A and API-B

```bash
npm start
```

6. Acess the APIs routes

## Routes

### Api-A (localhost:4000)

- POST /product

```json
//Body
  "nome": "product name" //(string),
  "valor": value //(number),
  "descrição": "product description" //(string, optional)
```

### Api-B (localhost:4001)

- GET /products?page=1&limit=10

This route return an array of products.
You can add a query params for pages (default = 1) and limit products by page (default = 10)

- GET /products/:name

This route return the product by name if it exists.
Spaces in product name must by written with "%20" instead of spaces

## Developer

- [Nilson Netto](https://github.com/NilsonNetto)

<a href="mailto:eng.nilsonnetto@gmail.com" target="_blank">
  <img style='margin: 5px;' src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="gmail logo"  />
</a>
<a href="https://www.linkedin.com/in/nilson-netto/" target="_blank">
  <img style='margin: 5px;' src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"  />
</a>
