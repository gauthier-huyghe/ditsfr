<script>
export default {
  created() {
    if (process.env.NODE_ENV === 'production' && process.client) {
      console.log(
        '%c created by Gauthier Huyghe ',
        'color: white; background-color: orange; padding: 10px;'
      )
    }
  },

  render() {
    return null
  },
}
</script>
