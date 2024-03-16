const express = require('express');
const app = express();
const router = express.Router();
const sequelize = require('./Postgres/postgres')
const PORT = 3000;
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to Node Server");
});
app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
// Setting single route
router.all('/user', function (req, res) {
    console.log("User Page Called");
    res.send("Welcome to User");
    res.end();
})
// Test the database connection

async function startServer() {
    try {
      await sequelize.authenticate(); // Test the database connection
      console.log('Database connection has been established successfully.');
  
      await sequelize.sync(); // Sync models with the database
      console.log('Models synchronized with the database.');
  
      // Start your server or perform other application logic
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  startServer();
app.use(router);
