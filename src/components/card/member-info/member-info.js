export default ({
  name: 'MemberInfo',

  props: {
    full_name: String,
    institute: String,
    description: String
  },

  data: () => ({
    show: false
  })
})
