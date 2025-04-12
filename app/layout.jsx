import "./globals.css";

export const metadata = {
  title: "Undangan Pernikahan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </head>
      <body className="scroll-smooth antialiased">{children}</body>
    </html>
  );
}
