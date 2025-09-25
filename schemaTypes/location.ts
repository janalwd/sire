import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: 'Studio Location',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Full Address',
      description: 'e.g., Kleine Hoogstraat 1, 8911 HZ Leeuwarden',
      type: 'string',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps Embed URL',
      description: 'Get this from Google Maps > Share > Embed a map > Copy SRC URL',
      type: 'url',
    }),
  ],
})
