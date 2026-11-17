const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

const MONGO_URI = 'mongodb+srv://dinethkaveesha133_db_user:Karunarathna133@cluster0.td4pf7u.mongodb.net/shopDB?retryWrites=true&w=majority';

const startServer = async () => {
  try {
    console.log('MongoDB වලට Connect වෙමින් පවතී...');
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Database එකට සාර්ථකව Connect වුණා!');

    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Backend Server එක Port ${PORT} හි සක්‍රියයි...`);
    });
  } catch (err) {
    console.error('Database Connection Error:', err.message);
  }
};

startServer();