export const products = {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'image',
      type: 'array',
      title: 'Image',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'text',
              title: 'Alternative text',
            },
          ],
        },
      ],
    },
    {
      name: 'productTypes',
      type: 'array',
      title: 'ProductType',
      of: [{ type: 'string' }],
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'size',
      type: 'array',
      title: 'Sizes',
      of: [{ type: 'string' }],
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
    },
  ],
};
