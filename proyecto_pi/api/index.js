const server = require('./src/app.js');
const { conn } = require('./src/db.js');


// Syncing all the models at once.
conn.sync({ force:true}).then(() => {
  const PORT=process.env.PORT
  server.listen(3001, () => {
    // console.log('%s listening at 3001'); 
    console.log("Alicacion corriendo en el puerto "+ PORT ); 
  });
});
