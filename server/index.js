import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import skillRoutes from './routes/skills.js';

const app = express();
dotenv.config();

//configuraciones
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/admin', skillRoutes);

//definicion del puerto
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true, //previene warnings
    useUnifiedTopology: true, //previene warnings
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);
