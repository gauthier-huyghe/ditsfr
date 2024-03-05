<script>
export default {
  created() {
    if (process.env.NODE_ENV === 'production') {
      console.log('%c created by Gauthier Huyghe')
    }
  },

  render() {
    return null
  },
}
</script>
