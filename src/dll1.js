console.log('dll1.js');
require('./offset.js'); // so that module.id's overlap in /build/dll1.js and /build/app.js
require('./dll1.css');