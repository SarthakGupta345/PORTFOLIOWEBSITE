import { ThemeProvider } from '@/components/theme-provider';
import { META_THEME_COLORS, siteConfig } from '@/config/site';
import { LenisProvider } from '@/components/providers/lenis-provider';
import 'lenis/dist/lenis.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';

import { fontSans, fontMono } from '@/lib/fonts';
import { Toaster } from '@/components/ui/sonner';

import { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import { SideNav } from '@/components/side-nav';
import { SiteFooter } from '@/components/site-footer';
import { docsConfig } from '@/config/docs';

import { setViewsServerAction } from './actions/getAndSetViewsServerAction';
import { getLoveCountServerAction } from './actions/getAndSetLoveCountServerAction';

import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: siteConfig.keywords,
  authors: [
    {
      name: 'Sarthak Gupta',
      url: 'https://chandansarthakgupta456.vercel.app',
    },
  ],
  creator: 'Sarthak Gupta',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@chandansarthakgupta456',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

// Side-effect helper function executed cleanly outside the primary render path
async function loadStats() {
  try {
    await setViewsServerAction();
    await getLoveCountServerAction();
  } catch (error) {
    console.error('Failed to load stats:', error);
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Fire data fetching asynchronously 
  loadStats();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
              }
            } catch (_) {}
          `,
          }}
        />
      </head>
      <body
        className={cn(
          'min-h-svh bg-background font-sans antialiased selection:bg-neutral-200 dark:selection:bg-neutral-800',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <LenisProvider>
            <div vaul-drawer-wrapper="">
              <div className="relative flex flex-col min-h-svh bg-background">
                <div data-wrapper="" className="flex flex-col flex-1">

                  {/* Fixed Global Navbar Header */}
                  <SiteHeader />

                  {/* MAIN SYSTEM CONTAINER WRAPPER */}
                  <main className="flex-1 flex flex-col">
                    <div className="w-full flex-1 flex flex-col md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">

                      {/* Left Side Navigation Pane - Kept Sticky & Intact */}
                      <aside className="fixed top-14 left-0 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r border-dashed border-neutral-200 dark:border-neutral-800 md:sticky md:block bg-background">
                        <div className="h-full">
                          <SideNav config={docsConfig} />
                        </div>
                      </aside>

                      {/* Right Side Working Canvas Window */}
                      {/* Removed standard max-width "container" restriction classes to support edge-to-edge background rendering */}
                      <div className="relative flex flex-col flex-1 min-w-0 bg-transparent">
                        <div className="flex-1">
                          {children}
                        </div>
                        <SiteFooter />
                      </div>

                    </div>
                  </main>

                </div>
              </div>
            </div>
          </LenisProvider>
        </ThemeProvider>

        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}