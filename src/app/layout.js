import "./globals.css";

export const metadata = {
  title: "Opti Car",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-gris w-[100dvw] h-[100dvh]">
        {children}
      </body>
    </html>
  );
}
