import "./globals.css";

export const metadata = {
  title: "Plains",
  description: "Select your best option",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-titillium bg-gray-50">{children}</body>
    </html>
  );
}
