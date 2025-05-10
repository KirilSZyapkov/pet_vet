import Navbar from "@/components/ux/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        <Navbar />
        {children}
      </main>
  );
}
