export default {
  name: 'sponsoren',
  title: 'Sponsoren',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Bedrijfsnaam',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Bedrijfswebsite',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
      media: 'logo',
    }
  }
}