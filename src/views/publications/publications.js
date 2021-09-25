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
        authors: 'Hamish A.S. Reid, Larisa K. Kashapova, Elena G. Kupriyanova, Jinge Zhang',
        title: '"Possible microwave sources of type III storms on 10th April 2019"',
        source: 'Abstract Book',
        url: 'https://ras.ac.uk/nam-2021/hamish-reid'
      },
      {
        id: 3,
        authors: 'Altyntsev A.T., Zhdanov D.A., Meshalkina N.C., Myshyakov I.I., Reid H.A.S.',
        title: '"Relationship between microwave radiation and meter-type III bursts in weak transient events"',
        source: 'Abstract book of Russian Astronomical Conference "Astronomy in the era of multichannel research" 23-28 August 2021, SAI Moscow University, Moscow, Russia, p 341 (in Russian)',
        url: 'https://www.vak2021.ru/wp-content/uploads/2021/08/vak2021_abstracts.pdf'
      },
      {
        id: 4,
        authors: 'Elena Kupriyanova, Dmirtii Kolotkov, Larisa Kashapova, Anastasiya Kudryavtseva, Zhang J., Reid H.A.S.',
        title: '"Different properties of microwave and metric QPPs in a solar radio burst"',
        source: 'Abstract Book',
        url: 'https://indico.ict.inaf.it/event/794/contributions/9623/contribution.pdf'
      },
      {
        id: 5,
        authors: 'Kupriyanova E.G., Kashapova L.K., Reid H.A.S., Zhang J.',
        title: '"Microwave source of the type III radio bursts using SRH and LOFAR data"',
        source: 'Abstract Book (in Russian)',
        url: 'https://sun.crao.ru/images/conference/2021/report/Kuprianova1.pdf'
      },
      {
        id: 6,
        authors: 'Kupriyanova E.G., Kashapova L.K., Reid H.A.S., Zhang J.',
        title: '"To the microwave sources of the type III noise storms on 10th of April, 2019"',
        source: 'Abstract book of Russian Astronomical Conference "Astronomy in the era of multichannel research" 23-28 August 2021, SAI Moscow University, Moscow, Russia, p 359 (in Russian)',
        url: 'https://www.vak2021.ru/wp-content/uploads/2021/08/vak2021_abstracts.pdf'
      },
      {
        id: 7,
        authors: 'Altyntsev A.T., Lesovoy S.V., Meshalkina N.C., Globa M.V., Zhdanov D.A., Myshyakov I.I., Reid H.A.S.',
        title: '"Multiwave Radioheliograph: Weak Transient Phenomena in the Sun\'s Corona"',
        source: 'Abstact Book (in Russian)',
        url: 'https://sun.crao.ru/images/conference/2021/report/Altyncev.pdf'
      }
    ]
  })
})
