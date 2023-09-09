import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sponsors',
  title: 'Sponsoren',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Bedrijfsnaam',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Bedrijfswebsite',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
      media: 'logo',
    }
  }
})
