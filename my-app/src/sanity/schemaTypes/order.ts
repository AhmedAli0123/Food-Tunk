export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'firstName',
        type: 'string',
        title: 'First Name',
      },
      {
        name: 'lastName',
        type: 'string',
        title: 'Last Name',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address',
      },
      {
        name: 'phoneNumber',
        type: 'string',
        title: 'Phone Number',
      },
      {
        name: 'city',
        type: 'string',
        title: 'City',
      },
      {
        name: 'zipCode',
        type: 'string',
        title: 'Zip Code',
      },
      {
        name: 'foods',
        title: 'Food Items',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'food' }] }], // Reference type fixed
      },
      {
        name: 'quantity',
        type: 'array',
        title: 'Quantity',
        of: [{ type: 'number' }],
      },
      {
        name: 'total',
        type: 'number',
        title: 'Total',
      },
      {
        name: 'paymentMethod',
        type: 'string',
        title: 'Payment Method',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Status',
        options: {
          list: ['pending', 'processing', 'shipped', 'completed'],
        },
        initialValue: 'pending',
        defaultValue: 'pending',
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Created At',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  