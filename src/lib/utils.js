export function formatText(name) {
  const re = /-/g;
  return name.replace(re, ' ');
}

export function formatPhoneDisplay(num) {
  const areaCode = `(${num.slice(0, 3)})`
  const localNum = num.slice(4)
  return `${areaCode} ${localNum}`;
}
export function formatPhoneLink(num) {
  return `tel:+1-${num}`
}