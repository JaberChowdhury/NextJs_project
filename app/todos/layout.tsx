export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" container mx-auto py-8">{children}</body>
    </html>
  );
}
