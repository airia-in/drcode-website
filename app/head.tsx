const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://drcode.ai");

const title = "DrCode AI Venture Studio";
const description =
  "DrCode is an AI Venture Studio that builds scalable AI products from idea to production. We help startups and enterprises turn concepts into successful AI systems.";
const imageUrl = `${siteUrl}/og-image.png`;

export default function Head() {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DrCode" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="DrCode AI Venture Studio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
}
