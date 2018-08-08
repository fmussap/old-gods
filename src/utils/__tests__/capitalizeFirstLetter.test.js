import capitalizeFirstLetter from '../capitalizeFirstLetter'

test('Put capital letter on the first word of every word', () => {
  const word1 = 'john'
  const capitalWord1 = 'John'
  const word2 = 'john smith'
  const capitalWord2 = 'John Smith'
  expect(capitalizeFirstLetter(word1)).toEqual(capitalWord1)
  expect(capitalizeFirstLetter(word2)).toEqual(capitalWord2)
})
