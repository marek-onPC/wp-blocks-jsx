/**
 * Creating new DOM element from an HTML string.
 */
export default function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  
  return template.content.firstChild;
}