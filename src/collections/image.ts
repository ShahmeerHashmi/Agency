import type { CollectionConfig } from 'payload'

export const Image: CollectionConfig = {
  slug: 'image',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
    },
  ],
}
