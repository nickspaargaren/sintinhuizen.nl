export default {
  name: 'fotos',
  title: 'Foto\'s',
  type: 'document',
  fields: [
    {
      name: 'afbeeldingen',
      title: 'Afbeeldingen',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      }
    }
  ],
}