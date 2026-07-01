import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

const LAST_UPDATED = 'July 1, 2026';

function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-cream/5 pb-8 last:border-b-0 last:pb-0">
      <h2 className="font-serif text-xl sm:text-2xl font-semibold text-cream mb-3">{title}</h2>
      <div className="font-sans text-sm sm:text-base leading-relaxed text-cream/75 space-y-3">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-midnight text-cream selection:bg-amber-gold/30 selection:text-cream">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] blush-glow rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] golden-glow rounded-full blur-3xl opacity-30 pointer-events-none" />

      <header className="relative z-10 border-b border-cream/5 bg-midnight-deeper/85 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <a
            href="/"
            className="focus-ring inline-flex items-center gap-2 font-sans text-sm text-cream/70 hover:text-amber-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to site
          </a>
          <span className="font-serif text-sm sm:text-base font-semibold text-cream">Eric Gray</span>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 pb-28">
        <div className="mb-10">
          <span className="text-amber-gold font-sans uppercase tracking-[0.25em] text-xs font-semibold block mb-3">
            Legal
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-cream tracking-tight mb-3">
            Privacy &amp; Cookie Policy
          </h1>
          <p className="font-sans text-sm text-cream/55">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="rounded-sm border border-cream/5 bg-midnight-deeper/60 shadow-[var(--shadow-card)] p-6 sm:p-8 md:p-10 space-y-8">
          <PolicySection title="Overview">
            <p>
              This website promotes the music of Eric Gray (&ldquo;Love Is Here&rdquo; and related
              releases). We respect your privacy and aim to collect only what is needed to run
              this site and improve your experience.
            </p>
            <p>
              By using this website, you agree to this Privacy &amp; Cookie Policy. If you do not
              agree, please adjust your cookie preferences or stop using the site.
            </p>
          </PolicySection>

          <PolicySection title="Information We Collect">
            <p>
              We do not ask you to create an account on this site. We may collect limited
              information in the following ways:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-cream/90">Cookie preferences</strong> — stored in your
                browser&apos;s local storage when you choose Accept All or Essential Only.
              </li>
              <li>
                <strong className="text-cream/90">Technical data</strong> — such as browser type,
                device type, and general usage, which may be collected by third-party services
                embedded on this site (for example, YouTube).
              </li>
              <li>
                <strong className="text-cream/90">Contact information</strong> — only if you choose
                to email us directly using the contact details on this site.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="Cookies & Similar Technologies">
            <p>We use two categories of cookies and similar storage:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-cream/90">Essential</strong> — required for basic site
                functionality, including remembering your cookie choice.
              </li>
              <li>
                <strong className="text-cream/90">Optional</strong> — used when you select Accept
                All, including embedded YouTube videos that may set their own cookies for playback,
                analytics, and personalization.
              </li>
            </ul>
            <p>
              If you choose Essential Only, we do not load interactive embedded YouTube players in
              the music video section or modal viewer. The muted hero background clip may still
              play as part of the page design. Other video links may open on YouTube in a new tab
              instead, where YouTube&apos;s own policies apply.
            </p>
            <p>
              You can change your mind by clearing site data in your browser or deleting the
              stored preference key <code className="text-amber-sunset/90">ericgray-cookie-consent</code>{' '}
              from local storage, then refreshing the page to see the cookie banner again.
            </p>
          </PolicySection>

          <PolicySection title="Third-Party Services">
            <p>This site may link to or embed services operated by third parties, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-cream/90">YouTube</strong> — for music videos and visual
                content
              </li>
              <li>
                <strong className="text-cream/90">PayPal</strong> — for optional direct support
                payments
              </li>
              <li>
                <strong className="text-cream/90">Social platforms</strong> — such as Instagram,
                Facebook, and TikTok
              </li>
              <li>
                <strong className="text-cream/90">EricGrayMusician.com</strong> — official artist
                website
              </li>
            </ul>
            <p>
              These services have their own privacy policies and may collect information when you
              interact with them. We do not control how third parties handle your data.
            </p>
          </PolicySection>

          <PolicySection title="How We Use Information">
            <p>We use information only to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Operate and secure the website</li>
              <li>Remember your cookie preferences</li>
              <li>Provide embedded media when you have accepted optional cookies</li>
              <li>Respond to inquiries you send us directly</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </PolicySection>

          <PolicySection title="Your Choices">
            <p>
              When you first visit, you can choose Accept All or Essential Only in the cookie banner
              at the bottom of the site. You may also contact us with questions or requests
              regarding your information.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              For privacy-related questions, contact Eric Gray at{' '}
              <a
                href="mailto:ericiq@mac.com"
                className="focus-ring text-amber-gold hover:text-cream transition-colors"
              >
                ericiq@mac.com
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="Changes to This Policy">
            <p>
              We may update this policy from time to time. When we do, we will revise the
              &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the site
              after changes means you accept the updated policy.
            </p>
          </PolicySection>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
