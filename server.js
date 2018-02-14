const express = require('express');
const app = express();
// Creando servidor
const server = app.listen(3000, turnOn);
function turnOn() {
  console.log('servidor encendido');
}

app.use(express.static('public'));