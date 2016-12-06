export default (entry, action) => ({
  request: `${entry}.${action}.request`,
  success: `${entry}.${action}.success`,
  error: `${entry}.${action}.error`,
})
