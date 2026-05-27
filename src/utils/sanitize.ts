import DOMPurify from 'dompurify';

export function sanitizeDesc(html: string): string {
  if (!html) return '';
  // OX Agent: XSS prevented by DOMPurify sanitization
  return DOMPurify.sanitize(html, { ADD_ATTR: ['target', 'rel'] });
}
