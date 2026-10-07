import { ThemeProvider as DesignSystemProvider, createTheme } from '@/design-system';
import { ThemeProvider } from '@/app/theme-context';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ThemeWrapper from '@/app/theme-wrapper';

export const metadata = {
  title: 'Riyashika Nedunchezhian',
  description: 'Founding Engineer @ OBLIQ.in · CS Undergrad',
  authors: [{ name: 'Riyashika Nedunchezhian', url: 'https://linkedin.com/in/riyashika-nedunchezhian-a17227390' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <DesignSystemProvider theme={createTheme({})}>
          <ThemeProvider>
            <ThemeWrapper>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </ThemeWrapper>
          </ThemeProvider>
        </DesignSystemProvider>
      </body>
    </html>
  );
}