const toLowerKebabCase = (str) => {
  return str.toLowerCase().replace(' ', '-');
}

const toTitleCase = (str) => {
  return str.replace('-', ' ').replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});;
}

module.exports = {
  toLowerKebabCase,
  toTitleCase
}