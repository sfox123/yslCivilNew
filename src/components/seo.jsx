import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} || YSL Civils - Construction Company specialising in Groundworks & Reinforced Concrete Frames.`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Our team of professional support staff and management with wide experience in the industry, providing both the technical and practical capabilities to carry out a wide variety of works." />
      <meta name="keywords" content="Groundworks,Reinforced Concrete Frames,Civil Engineering,Builders Work" />
      <meta name="author" content="Shara Solutions" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;