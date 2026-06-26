import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  h1: string;
}

export function useSEO({ title, description, h1 }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('twitter:title', title, true);
    setMeta('twitter:description', description, true);
  }, [title, description]);

  return h1;
}
