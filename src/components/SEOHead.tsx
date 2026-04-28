import { Helmet } from 'react-helmet-async';

type SEOHeadProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  keywords?: string;
};

const SITE_URL = 'https://www.clinicaperfeita.com.br';
const SITE_NAME = 'Clínica Perfeita';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export function SEOHead({
  title = 'Clínica de Estética em Curitiba | Clínica Perfeita',
  description = 'Clínica de estética em Curitiba especializada em harmonização facial, botox, preenchimento, rejuvenescimento e estética facial. Atendimento premium na Avenida Visconde de Guarapuava.',
  canonical = SITE_URL,
  image = DEFAULT_IMAGE,
  type = 'website',
  noIndex = false,
  keywords = 'clínica estética Curitiba, harmonização facial Curitiba, botox Curitiba, preenchimento Curitiba, estética facial Curitiba'
}: SEOHeadProps) {
  const fullTitle = title.includes('Clínica Perfeita')
    ? title
    : `${title} | Clínica Perfeita`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="theme-color" content="#0F0F0F" />

      <link rel="canonical" href={canonical} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}