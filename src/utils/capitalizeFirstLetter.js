const capitalizeFirstLetter = (string) => {
  if (string) {
    const splitString = string.split(/[_' ']/);
    return splitString.map((word) => {
      return word.replace(/^./, word[0].toUpperCase());
    }).join(' ');
  }
  return null;
};

export default capitalizeFirstLetter;
