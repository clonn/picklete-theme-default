import { translate } from 'react-i18next'

module.exports = (namespace, options) => translate(namespace, {
  wait: true,
  translateFuncName: 'lang',
  ...options
});