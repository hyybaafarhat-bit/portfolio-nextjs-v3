export const metadata = { title: 'hyba farhat - Portfolio' };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ fontFamily: 'sans-serif', margin: 0 }}>{children}</body>
    </html>
  );
}
