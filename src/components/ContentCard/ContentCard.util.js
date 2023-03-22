export function getDateFormat(publishedDate) {
  const timestamp = Date.now() - publishedDate.getTime();
  const hours = getHours(timestamp);
  return hours < 24
    ? `${Math.round(hours)} hours ago`
    : `${Math.round(hours / 24)} days ago`;
}

function getHours(timestamp) {
  return timestamp / 1000 / 60 / 60;
}
