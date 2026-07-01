export const brand = {
  name: 'Česká dopravní stavba',
  fullName: 'Česká dopravní stavba & technologie',
  description:
    'Celostátní soutěž oceňující nejlepší české dopravní stavby, technologie a inovace v oboru.',
  logo: {
    url: '/brand/logo.png',
    alt: 'Česká dopravní stavba',
    sourceUrl: 'https://ceskadopravnistavba.cz/wp-content/uploads/2024/06/2.png',
    width: 1755,
    height: 520
  },
  favicon: {
    url: '/brand/favicon-192.png',
    sourceUrl: 'https://ceskadopravnistavba.cz/wp-content/uploads/2024/07/cropped-favi-192x192.png',
    width: 192,
    height: 192
  },
  colors: {
    primary: '#494444',
    secondary: '#BE6A15',
    neutral: '#A5A4A2',
    heading: '#191B1E',
    text: '#54595F',
    muted: '#7A7A7A',
    iconGrey: '#6B6C6E',
    line: '#E7E9EE',
    soft: '#F8F8F8',
    dark: '#03080B',
    white: '#FFFFFF'
  },
  source: {
    website: 'https://ceskadopravnistavba.cz/',
    css: [
      'https://ceskadopravnistavba.cz/wp-content/uploads/elementor/css/post-8.css?ver=1745253434',
      'https://ceskadopravnistavba.cz/wp-content/uploads/elementor/css/post-1417.css?ver=1782715999',
      'https://ceskadopravnistavba.cz/wp-content/themes/seargin/assets/css/main.css?ver=1.0.0'
    ],
    notes: [
      'Elementor kit definuje brand barvy #BE6A15, #494444 a #A5A4A2.',
      'Inline CSS šablony Seargin definuje --color-primary: #494444 a --color-secondary: #be6a15.',
      'Další šedé a tmavé odstíny vycházejí z aktuálních theme stylesheetů.'
    ]
  }
} as const;
