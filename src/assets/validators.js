export default {
  custom (value, pvm) {
    console.log(value, pvm)
    return Promise.resolve('xxx')
  }
}