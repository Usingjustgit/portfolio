import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import Head from "next/head";

export const metadata = {
  title: {
    template:
      "Next.js Portfolio Created with Three.js and Tailwind CSS | %s | CodeBucks",
    default:
      "Next.js Portfolio Created with Three.js and Tailwind CSS by CodeBucks",
  },
  description:
    "A unique creative portfolio designed by CodeBucks with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand. Checkout CodeBucks on youtube.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={clsx("bg-background text-foreground font-inter")}>
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
