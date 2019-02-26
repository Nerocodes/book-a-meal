import dummyData from '../utils/dummyData';
import Order from '../models/order.model';

const OrderService = {

    fetchAllOrders() {
        const validOrders = dummyData.orders.map((singleOrder) => {
            const newOrder = new Order();
            newOrder.id = singleOrder.id;
            newOrder.order = singleOrder.order;
            newOrder.total = singleOrder.total;
            return newOrder;
        });

        return validOrders;
    },

    addOrder(order){
        const orderLength = dummyData.orders.length;
        const lastId = dummyData.orders[orderLength - 1].id;
        const newId = lastId + 1;
        order.id = newId;

        dummyData.orders.push(order);

        return order;
    },

    getAnOrder(id){
        const order = dummyData.orders.find(order => order.id == id);
        return order || {};
    },

    updateOrder(newOrder, id){
        const updatedOrder = dummyData.orders.find(updatedOrder => updatedOrder.id == id);
        updatedOrder.name = newOrder.name;
        updatedOrder.order = newOrder.order;
        updatedOrder.total = newOrder.total;
        return updatedOrder;
    }

};

export default OrderService;