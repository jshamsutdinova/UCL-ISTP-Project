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
        title: '"About relationship between microwave emission and the type III radio bursts in weak transient events"',
        source: 'Abstract book of Russian Astronomical Meeting "Astronomy in the era of multichannel research" 23-28 August 2021, SAI Moscow University, Moscow, Russia, p 341 (in Russian)',
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
        title: '"Microwave source of the type III radio bursts according SRH and LOFAR data"',
        source: 'Abstract Book (in Russian)',
        url: 'https://sun.crao.ru/images/conference/2021/report/Kuprianova1.pdf'
      },
      {
        id: 6,
        authors: 'Kupriyanova E.G., Kashapova L.K., Reid H.A.S., Zhang J.',
        title: '"On the microwave sources of the type III noise storms on 10th of April, 2019"',
        source: 'Abstract book of Russian Astronomical Meeting "Astronomy in the era of multichannel research" 23-28 August 2021, SAI Moscow University, Moscow, Russia, p 359 (in Russian)',
        url: 'https://www.vak2021.ru/wp-content/uploads/2021/08/vak2021_abstracts.pdf'
      },
      {
        id: 7,
        authors: 'Altyntsev A.T., Lesovoy S.V., Meshalkina N.C., Globa M.V., Zhdanov D.A., Myshyakov I.I., Reid H.A.S.',
        title: '"Multiwave Radioheliograph: Weak Transient Phenomena in the Solar Corona"',
        source: 'Abstact Book (in Russian)',
        url: 'https://sun.crao.ru/images/conference/2021/report/Altyncev.pdf'
      },
      {
        id: 8,
        authors: 'Kashapova L.K., Kupriyanova E.G., Kolotkov D.Yu., Reid H.A.S., Kudryavtseva A.V., Tan C.-M., Zhang J.',
        title: '"Relationship between microwave sources in Solar flares and the Solar bursts in the decimeter and meter radio range"',
        source: 'Abstract Book of XXV Russian annual meeting "Solar and solar-terrestrial physics" 4-8 October 2021, Pulkovo Observatory, Saint Petersburg, Russia, p 44 (in Russian)',
        url: 'http://www.gaoran.ru/russian/solphys/2021/gao2021.pdf'
      },
      {
        id: 9,
        authors: 'Larisa Kashapova, Dmitrii Kolotkov, Elena Kupriyanova, Anastasiia Kudriavtseva, Chengming Tan, Hamish Reid',
        title: '"COMMON ORIGIN OF QUASI-PERIODIC PULSATIONS IN MICROWAVE AND DECIMETRIC SOLAR RADIO BURSTS"',
        source: 'Solar Physics DOI 10.1007/s11207-021-01934-x ',
        url: 'https://ui.adsabs.harvard.edu/abs/2021SoPh..296..185K/abstract'
      }
    ]
  }), // end data

  mounted () {
    this.publications.sort((a, b) => b.id - a.id)
  }
})
