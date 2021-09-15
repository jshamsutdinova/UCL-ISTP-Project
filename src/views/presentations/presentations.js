import pdfInfo from '@/components/card/pdf-info/pdf-info.vue'

export default ({
  name: 'Presentation',

  components: {
    'pdf-info-card': pdfInfo
  },

  data: () => ({
    files: [
      {
        id: 1,
        type: 'Type of report',
        title: 'Title',
        mainAuthor: 'Speaker',
        authors: 'Co-authors'
      },
      {
        id: 2,
        type: 'Oral report',
        title: 'The Microwave source of type III radio burst according to SRH and LOFAR data',
        mainAuthor: 'Kupriyanova E.G.',
        authors: 'Kashapova L.K., Reid H.A.S.'
      }
    ]
  })
})
