required to install:

Java 21
PostgresSQL
RabbitMQ
NodeJS (last lts)
Angular 19

1) Run postgres server (google it for windows)

for Mac: brew services start postgresql

2) create database using psql 

   - psql -U postgres

   - create database steamdb;

3) Run rabbitmq server (google it for windows)

for Mac: brew services start rabbitmq

4) Go to the default rabbitmq page http://localhost:15672/

  enter login and pass: guest

  there you can monitor your queues

5) Using Intellij IDEA in each part of java projects go to the 

   SteamData*Something*Application and click run button near class name
   (java creates database table and connection, also creates a queue for rabbitmq)

6) in angular app you have to run
   npm install
   ng serve