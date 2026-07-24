import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalPath?: string;
}

const BASE_URL = 'https://www.ready2gooverseas.com';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2000';

/**
 * Per-page SEO component.
 * Updates <title>, <meta>, <link canonical>, and Open Graph tags.
 * Place at the top of each page component.
 */
export function SeoHead({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_IMAGE,
  canonicalPath,
}: SeoProps) {
  const { pathname } = useLocation();
  const canonical = canonicalPath ?? pathname;
  const fullUrl = `${BASE_URL}${canonical}`;
  const fullOgTitle = ogTitle ?? title;
  const fullOgDesc = ogDescription ?? description;

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    setMeta('description', description);
    setMeta('robots', 'index,follow');
    setMeta('og:title', fullOgTitle, true);
    setMeta('og:description', fullOgDesc, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:url', fullUrl, true);
    setMeta('twitter:title', fullOgTitle, true);
    setMeta('twitter:description', fullOgDesc, true);
    setMeta('twitter:image', ogImage, true);
    setLink('canonical', fullUrl);

    // Structured data — per-page WebPage only (Org/WebSite live in index.html)
    const structured = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': fullUrl,
      url: fullUrl,
      name: title,
      description,
      isPartOf: { '@id': `${BASE_URL}/#website` },
    };

    let script = document.querySelector('#structured-data') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'structured-data';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structured);
  }, [title, description, fullOgTitle, fullOgDesc, ogImage, fullUrl]);

  return null;
}
