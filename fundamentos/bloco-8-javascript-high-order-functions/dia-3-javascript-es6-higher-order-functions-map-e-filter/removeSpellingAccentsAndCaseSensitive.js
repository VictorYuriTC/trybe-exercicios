const removeSpellingAccentsAndCaseSensitive = (randomString) => {
  return randomString.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

module.exports = removeSpellingAccentsAndCaseSensitive;