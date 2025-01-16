export function trimToWords(html: string, wordLimit: number) {
  // Remove HTML tags (e.g., <p>) and decode any HTML entities
  const plainText = html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();

  // Split the plain text into words and limit the result
  const words = plainText.split(/\s+/).slice(0, wordLimit).join(" ");

  return words;
}
