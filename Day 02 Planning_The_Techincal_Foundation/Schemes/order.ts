export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      { name: 'orderId', type: 'number', title: 'Order ID' },
      { name: 'customerId', type: 'number', title: 'Customer ID' },
      { name: 'orderDate', type: 'datetime', title: 'Order Date' },
      { name: 'totalAmount', type: 'number', title: 'Total Amount' },
      { 
        name: 'orderStatus', 
        type: 'string', 
        title: 'Order Status', 
        options: { list: [{ title: 'Pending', value: 'pending' }, { title: 'Received', value: 'received' }] } 
      },
    ],
  };
  