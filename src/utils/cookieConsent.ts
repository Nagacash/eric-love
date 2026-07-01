const STORAGE_KEY = 'ericgray-cookie-consent';

export type CookieConsent = 'accepted' | 'essential';

export function allowsOptionalCookies(consent: CookieConsent | null): boolean {
  return consent === 'accepted';
}

export function getCookieConsent(): CookieConsent | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === 'accepted' || value === 'essential') return value;
    return null;
  } catch {
    return null;
  }
}

export function setCookieConsent(consent: CookieConsent): void {
  try {
    localStorage.setItem(STORAGE_KEY, consent);
  } catch {
    // Ignore storage failures (private browsing, quota, etc.)
  }
}
