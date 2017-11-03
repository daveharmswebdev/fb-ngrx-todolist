export function parseFromUrl(url) {
  return +url.split('/').pop();
}
