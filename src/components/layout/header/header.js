export default ({
  name: 'Header',

  data: () => ({
    drawer: false,
    group: null,
    buttons: [
      { name: 'Home', link: '/', icon: 'mdi mdi-home' },
      { name: 'Members', link: '/members', icon: 'mdi mdi-human-male-female' },
      { name: 'Publications', link: '/publications', icon: 'mdi mdi-book-open-variant' },
      { name: 'Presentations', link: '/presentations', icon: 'mdi mdi-presentation' },
      { name: 'Highlights', link: '/highlights', icon: 'mdi mdi-format-color-highlight' }
    ]
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }

})
