import OrderService from '../services/order.service';

const OrderController = {

    fetchAllOrders(req, res){
        const allOrders = OrderService.fetchAllOrders();
        return res.json({
            status: 'success',
            data: allOrders
        }).status(200);
    },

    addAnOrder(req, res){
        /*
            Expect json of format
            {
                order: [],
                total: number
            }
         */

         const newOrder = req.body;
         const createdOrder = OrderService.addOrder(newOrder);
         return res.json({
            status: 'success',
            data: createdOrder
         }).status(201);
    },

    getSingleOrder(req, res){
        const id = req.params.id;
        const foundOrder = OrderService.getAnOrder(id);
        return res.json({
            status: 'success',
            data: foundOrder
         }).status(200);
    },

    updateAnOrder(req, res){
        const id = req.params.id;
        const newOrder = req.body;
        const updatedOrder = OrderService.updateOrder(newOrder, id);
        return res.json({
            status: 'success',
            data: updatedOrder
         }).status(201);
    }

}

export default OrderController;