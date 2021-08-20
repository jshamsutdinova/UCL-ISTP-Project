import MemberInfo from '@/components/card/member-info/member-info.vue'

export default ({
  name: 'Members',

  components: {
    'member-info': MemberInfo
  },

  data: () => ({
    british_members: [
      {
        id: 1,
        name: 'Hamish Reid (PI)',
        institute: 'University College London',
        description: 'Research interests'
      },
      {
        id: 2,
        name: 'Sarah Matthews',
        institute: 'University College London',
        description: 'Research interests'
      },
      {
        id: 3,
        name: 'David Long',
        institute: 'University College London',
        description: 'Research interests'
      },
      {
        id: 4,
        name: 'Gherardo Varlori',
        institute: 'University College London',
        description: 'Research interests'
      },
      {
        id: 5,
        name: 'Ryan French',
        institute: 'University College London',
        description: 'Explosive energy release in solar flares, combining EUV/UV spectroscopy (e.g. Hinode-EIS and IRIS) with ground-based coronagraphs (CoMP and K-Cor)'
      },
      {
        id: 6,
        name: 'Jinge Zhang',
        institute: 'University College London',
        description: 'Research interests'
      },
      {
        id: 7,
        name: 'Camile Lorfing',
        institute: 'University College London',
        description: 'Research interests'
      }
    ],
    russian_members: [
      {
        id: 1,
        name: 'Alexander Altyntsev (PI)',
        shortNameInst: 'Inst. of Solar-Terrestrial Physics',
        institute: 'Institute of Solar-Terrestrial Physics',
        description: 'Solar radioastronomy, transient events, solar flares, electron acceleration'
      },
      {
        id: 2,
        name: 'Larisa Kashapova',
        institute: 'Institute of Solar-Terrestrial Physics',
        shortNameInst: 'Inst. of Solar-Terrestrial Physics',
        description: 'The energy release and transport processes in solar flares'
      },
      {
        id: 3,
        name: 'Nataliia Meshalkina',
        institute: 'Institute of Solar-Terrestrial Physics',
        shortNameInst: 'Inst. of Solar-Terrestrial Physics',
        description: 'Reconnection processes in solar flares, in particular, sources of fine-time-structured microwave emission in solar flares, properties and characteristics of flare sources in radio and HXR emission'
      },
      {
        id: 4,
        name: 'Elena Kupriyanova',
        institute: 'Pulkovo Observatory',
        shortNameInst: 'Pulkovo Observatory',
        description: 'Quasi-periodic pulsations in multi-wavelength emission of solar flares'
      },
      {
        id: 5,
        name: 'Dmitriy Zhdanov',
        institute: 'Institute of Solar-Terrestrial Physics',
        shortNameInst: 'Inst. of Solar-Terrestrial Physics',
        description: 'Microwave fine stuctures of solar flares and microwave dynamic spectra observed with Badary Broadband Microwave Spectropolarimeter (BBMS)'
      },
      {
        id: 6,
        name: 'Ivan Myshyakov',
        institute: 'Institute of Solar-Terrestrial Physics',
        shortNameInst: 'Inst. of Solar-Terrestrial Physics',
        description: 'Coronal magnetic field reconstruction'
      }
    ]
  }) // end data()

})
