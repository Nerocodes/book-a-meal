import express from 'express';
import bodyParser from 'body-parser';
import config from 'dotenv';

config.config()

// routes
import mealRoutes from './routes/meal.route';
import menuRoutes from './routes/menu.route';
import orderRoutes from './routes/order.route';
import authRoutes from './routes/auth.route';

const app = express();
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('The api is working');
});

// handle
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

export default app;