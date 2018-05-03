module.exports = function TrimPodcastTitle(title) {
  const maxCharLength = 15
  const splitToWords = title.split(' ')
  let newWord = splitToWords.shift()
  let trimmedTitle = newWord + ' '
  while (trimmedTitle.length < maxCharLength) {
    newWord = splitToWords.shift()
    trimmedTitle += newWord + ' '
  }
  return trimmedTitle
}
