export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { name: 'productId', type: 'number', title: 'Product ID' },
      { name: 'productName', type: 'string', title: 'Product Name' },
      { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'productName', maxLength: 96 } },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'stock', type: 'number', title: 'Stock' },
      { name: 'images', type: 'array', title: 'Images', of: [{ type: 'image' }] },
      { name: 'category', type: 'string', title: 'Category' },
    ],
  };
  