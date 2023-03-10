# PayBrokers - Technical Challenge

## About

The challenge is about to create two APIs focused on microservices.

The API-A has a POST route, that receive an product (name, description, value), save the product on a MongoDB collection, send this to API-B and return the created product.

The API-B receive the product via RabbitMQ, create the product on a MySQL database. API-B also has a get route.

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

2. Install dependencies

```bash
npm install
```

3. Clone the back-end repository on this [link](https://github.com/NilsonNetto/paybrokers-apiB)

4. Follow the instructions to run the back-end

5. Create an .env file following the .env.example variables (back-end URL)

6. Run the front-end with

```bash
npm start
```

6. Access the app in http://localhost:3000 on your favorite browser

## Developer

- [Nilson Netto](https://github.com/NilsonNetto)

<a href="mailto:eng.nilsonnetto@gmail.com" target="_blank">
  <img style='margin: 5px;' src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="gmail logo"  />
</a>
<a href="https://www.linkedin.com/in/nilson-netto/" target="_blank">
  <img style='margin: 5px;' src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"  />
</a>
