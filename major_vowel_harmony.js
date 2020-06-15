const isHasMajorVowelHarmony = (word) => {
  // Match if one of [eüöi] is after one of [auoı] or vice versa.
  const regex = /^((.*)[auoı](.*)[eüöi](.*)|(.*)[eüöi](.*)[auoı](.*))$/g;
  return !regex.test(word)
}

export default isHasMajorVowelHarmony;
