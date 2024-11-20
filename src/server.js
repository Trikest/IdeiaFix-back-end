const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => console.log(`Server running or port ${PORT}`));