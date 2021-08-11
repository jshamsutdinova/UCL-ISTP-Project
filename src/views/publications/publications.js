import PublicationInfo from '@/components/card/publication-info/publication-info.vue'

export default ({
  name: 'Results',

  components: {
    'publication-info': PublicationInfo
  },

  data: () => ({
    publications: [
      {
        id: 1,
        authors: 'Kupriyanova E.G. , Kolotkov D.Yu. , Kashapova L.K. , Kudryavtseva A.V. , Tan C.-M. , Reid H.A.S.',
        title: '"ON THE ORIGIN OF THE QPPs IN THE WEAK SOLAR FLARE ACCORDING TO THE OBSERVATION OF THE NEW GENERATION RADIOHELIOGRAPHS (O PRIRODE KPP V SLABOY SOLNECHNOY VSPYSHKE PO DANNYM RADIOGELIOGRAFOV NOVOGO POKOLENIYA)"',
        source: 'Abstract book of 16th annual meeting Plasma Physics in Solar System 8-12 Feb 2021, Space Research Institute, Moscow, Russia, p 54 ( in Russian)',
        url: 'https://plasma2021.cosmos.ru/docs/2021/PLASMA-2021-AbstractBook-0202.pdf'
      },
      {
        id: 2,
        authors: 'Kupriyanova E.G. , Kolotkov D.Yu. , Kashapova L.K. , Kudryavtseva A.V. , Tan C.-M. , Reid H.A.S.',
        title: '"ON THE ORIGIN OF THE QPPs IN THE WEAK SOLAR FLARE ACCORDING TO THE OBSERVATION OF THE NEW GENERATION RADIOHELIOGRAPHS (O PRIRODE KPP V SLABOY SOLNECHNOY VSPYSHKE PO DANNYM RADIOGELIOGRAFOV NOVOGO POKOLENIYA)"',
        source: 'Abstract book of 16th annual meeting Plasma Physics in Solar System 8-12 Feb 2021, Space Research Institute, Moscow, Russia, p 54 ( in Russian)',
        url: 'https://plasma2021.cosmos.ru/docs/2021/PLASMA-2021-AbstractBook-0202.pdf'
      }
    ]
  })
})
