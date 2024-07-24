function groupAnagrams(words) {
  const anagrams = {};

  function sortWord(word) {
    const chars = [];
    for (let i = 0; i < word.length; i++) {
      chars.push(word[i]);
    }

    for (let i = 0; i < chars.length - 1; i++) {
      for (let j = i + 1; j < chars.length; j++) {
        if (chars[i] > chars[j]) {
          const temp = chars[i];
          chars[i] = chars[j];
          chars[j] = temp;
        }
      }
    }

    let sortedWord = "";
    for (let i = 0; i < chars.length; i++) {
      sortedWord += chars[i];
    }

    return sortedWord;
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const sortedWord = sortWord(word);

    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }

  const result = [];
  for (const key in anagrams) {
    if (anagrams.hasOwnProperty(key)) {
      result.push(anagrams[key]);
    }
  }

  return result;
}

const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];
const groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams);
