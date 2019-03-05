import models from '../models/index';

const OrderController = {

    fetchAllOrders(req, res){
        models.Order.findAll().then(orders => {
            return res.json({
                status: 'success',
                data: orders
            }).status(200);
        })
        .catch(err => console.log(err));
    },

    addAnOrder(req, res){
        /*
            Expect json of format
            {
                total: number
            }
         */

         const newOrder = req.body;
         models.Order.create({
            total: newOrder.total
        }).then(orders => {
           return res.json({
               status: 'success',
               data: orders
            }).status(201);
        }).catch(err => console.log(err));
    },

    getSingleOrder(req, res){
        const id = req.params.id;
        models.Order.findById(id).then(orders => {
            return res.json({
                status: 'success',
                data: orders
             }).status(200);
        }).catch(err => console.log(err));
    },

    updateAnOrder(req, res){
        const id = req.params.id;
        const newOrder = req.body;
        models.Order.findById(id).then(orders => {
            orders.update({
                total: newOrder.total
            }).then(order => {
                return res.json({
                    status: 'success',
                    data: order
                 }).status(201);
            });
        }).catch(err => console.log(err));
    }

}

export default OrderController;