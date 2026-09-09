import portraitImg from '../assets/images/onifade.jpg';
import aboutImg from '../assets/images/onifade.jpg';

/**
 * Resolves profile and about images safely.
 * Returns the bundled onifade.jpg asset if customUrl references onifade,
 * contains legacy paths, or is empty/placeholder.
 */
export const resolveProfileImage = (customUrl?: string, fallback: string = portraitImg || '/onifade.jpg'): string => {
  if (!customUrl || typeof customUrl !== 'string' || !customUrl.trim()) {
    return fallback;
  }
  const clean = customUrl.trim();

  // If user configured onifade in any path format
  if (clean.includes('onifade')) {
    return fallback;
  }

  // Any legacy, placeholder, or previous asset paths resolve to onifade.jpg
  if (
    clean.includes('sulaiman') ||
    clean.includes('unsplash.com') ||
    clean.includes('placeholder') ||
    clean.includes('portrait') ||
    clean.includes('default') ||
    clean.startsWith('/assets') ||
    clean.startsWith('../assets')
  ) {
    return fallback;
  }

  // If it's a valid external remote URL or base64 data URL
  if (clean.startsWith('http://') || clean.startsWith('https://') || clean.startsWith('data:image/')) {
    return clean;
  }

  return fallback;
};

export const resolveAboutImage = (customUrl?: string, fallback: string = aboutImg || '/onifade.jpg'): string => {
  return resolveProfileImage(customUrl, fallback);
};
