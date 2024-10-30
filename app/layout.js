import "./globals.css";
import { getMarkdownContent } from "./lib/queries";

import { HeaderNav } from "./components/HeaderNav";
import { FooterSection } from "./components/FooterSection";

export async function generateMetadata({ params }, parent) {
  const config = await getMarkdownContent("config.md");

  return {
    title: `${config.frontMatter.title} — ${config.frontMatter.subtitle}`,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default async function RootLayout({ children }) {
  const config = await getMarkdownContent("config.md");

  return (
    <html lang="en">
      <body className="min-h-[100svh] flex flex-col justify-between w-[100svw] relative" id="observer-root">
        <div className="w-[100svw] mx-auto flex justify-center container">
        <HeaderNav homepage={config.frontMatter?.homepage} nav={config.frontMatter?.nav} />
        </div>
        <div className="h-full mt-[var(--header-height)]">{children}</div>
        <FooterSection footerData={config.frontMatter?.footer} />
      </body>
    </html>
  );
}
