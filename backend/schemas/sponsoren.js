export default {
  name: 'sponsoren',
  title: 'Sponsoren',
  type: 'document',
  fields: [
    {
      name: 'bedrijfsnaam',
      title: 'Bedrijfsnaam',
      type: 'string',
    },
    {
      name: 'bedrijfswebsite',
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
}