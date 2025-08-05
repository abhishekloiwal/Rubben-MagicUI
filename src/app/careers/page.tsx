import Link from "next/link";
import Image from "next/image";

export default function CareersPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full py-20 px-6 border-b border-border relative overflow-hidden">
        {/* Diagonal stripe pattern on sides - same as growth section */}
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-gray-950/5 dark:text-gray-50/5" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(315deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 50%)',
               backgroundSize: '10px 10px' 
             }}>
        </div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-gray-950/5 dark:text-gray-50/5" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(315deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 50%)',
               backgroundSize: '10px 10px' 
             }}>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tighter">
            Careers at Rubben
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are not actively hiring at the moment, but we appreciate your interest in
            joining our team.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="w-full py-20 px-6 border-b border-border relative overflow-hidden">
        {/* Diagonal stripe pattern on sides - same as growth section */}
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-gray-950/5 dark:text-gray-50/5" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(315deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 50%)',
               backgroundSize: '10px 10px' 
             }}>
        </div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-gray-950/5 dark:text-gray-50/5" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(315deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 50%)',
               backgroundSize: '10px 10px' 
             }}>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-medium tracking-tighter">
                Why Work With Us
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Rubben, we&apos;re building the future of AI-powered investor intelligence. 
                  We are a team of passionate innovators dedicated to transforming how 
                  alternative asset managers engage with their investors and raise capital.
                </p>
                <p>
                  We offer a dynamic, inclusive work environment where ideas matter and 
                  growth is prioritized. Our team combines expertise across artificial 
                  intelligence, capital markets, and user experience to create solutions 
                  that revolutionize fundraising processes.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Rubben team collaboration"
                className="w-full h-[320px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Environment */}
      <section className="w-full py-20 px-6 border-b border-border relative overflow-hidden">
        {/* Diagonal stripe pattern on sides - same as growth section */}
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-gray-950/5 dark:text-gray-50/5" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(315deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 50%)',
               backgroundSize: '10px 10px' 
             }}>
        </div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-gray-950/5 dark:text-gray-50/5" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(315deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 50%)',
               backgroundSize: '10px 10px' 
             }}>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <h2 className="text-3xl font-medium tracking-tighter text-center">
            Our Team Environment
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Stay at the forefront of AI and fintech innovation with learning opportunities 
                and conference attendance.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Remote-First Culture</h3>
              <p className="text-muted-foreground">
                Work from anywhere while collaborating with a global team of talented 
                professionals.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Impact-Driven Work</h3>
              <p className="text-muted-foreground">
                Build products that transform how billions in capital are raised and 
                allocated globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="w-full py-20 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-medium tracking-tighter text-center">
            Current Openings
          </h2>
          <p className="text-lg text-muted-foreground text-center">
            There are currently no open positions. Please check back later.
          </p>
        </div>
      </section>

      {/* Connect With Us - CTA Section with blue gradient */}
      <section className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl bg-secondary relative z-20">
            <Image
              src="/agent-cta-background.png"
              alt="Careers CTA Background"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
              fill
              priority
            />
            <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl md:text-6xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">
                Connect With Us
              </h1>
              <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
                <Link
                  href="mailto:careers@rubben.ai"
                  className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md"
                >
                  Get in Touch
                </Link>
                <span className="text-white text-sm">Feel free to send us your resume for future consideration</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}