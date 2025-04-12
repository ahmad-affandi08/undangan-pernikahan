import "./globals.css";

export const metadata = {
  title: "Undangan Pernikahan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
