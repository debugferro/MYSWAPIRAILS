export const titleToSnakeCase = (title) => {
  return title.toLowerCase().split(' ').join('_');
}

export const snakeCaseToNormal = (string) => {
  let newstring = string.split('_');
  for (let i = 0; i < newstring.length; i++) {
    newstring[i] = newstring[i][0].toUpperCase() + newstring[i].substr(1);
  }
  return newstring.join(' ') ;
}
