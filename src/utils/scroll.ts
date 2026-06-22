export function scrollToSection(id: string) {
  const el = document.getElementById(id.replace(/^#/, ''));
  if (!el) return;
  el.scrollIntoView({ behavior: 'instant', block: 'start' });
}

export function scrollToHash(href: string) {
  if (!href.startsWith('#')) return;
  scrollToSection(href.slice(1));
}
