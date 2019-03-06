module.exports = {
  'secret': 'supersecret',
  
  "development": {
    "username": "postgres",
    "password": "narutokun",
    "database": "postgres",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "narutokun",
    "database": "book-a-meal",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "dbname":"d5ql52guj010a1", 
    "host": "ec2-107-21-99-237.compute-1.amazonaws.com", 
    "protocol": "postgres",
    "port": "5432",
    "username": "cevexlskpfcljo",
    "password": "7fa69768a50f2c755393b681ba8841a10178b1d03c80352c6ac6af409f71533f", 
    "database": "postgres",
    "dialect": "postgres",
    "dialectOption": {
      "ssl": true,
      "native": true
    }
  }
};

  