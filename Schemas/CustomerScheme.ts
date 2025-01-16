export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      { name: 'customerId', type: 'number', title: 'Customer ID' },
      { name: 'customerName', type: 'string', title: 'Customer Name' },
      { name: 'customerEmail', type: 'string', title: 'Customer Email' },
      { name: 'phoneNumber', type: 'string', title: 'Phone Number' },
      { name: 'address', type: 'string', title: 'Address' },
    ],
  };
  