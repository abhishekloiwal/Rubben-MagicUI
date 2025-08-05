import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "ai-in-finance-transforming-investor-relations",
    title: "AI in Finance: How Intelligent Automation Is Transforming Investor Relations and Business Growth",
    excerpt: "AI adoption in finance has jumped from 45% to 85% in three years, driving 70% of firms to report direct revenue gains and attracting $45 billion in investment.",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    slug: "our-mission-turning-data-into-relationships",
    title: "Our Mission: Turning Disconnected Data into Deeper Investor Relationships",
    excerpt: "How we're bridging the gap between scattered information and meaningful investor connections through intelligent data unification.",
    date: "January 12, 2025",
    readTime: "6 min read",
    category: "Company Mission",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    slug: "hidden-cost-information-silos",
    title: "The Hidden Cost of Information Silos: How IR Teams Lose $2.3M Annually",
    excerpt: "Discover the true financial impact of scattered information systems and how unified knowledge graphs can save millions in missed opportunities.",
    date: "January 8, 2025",
    readTime: "10 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    slug: "from-6-hours-to-6-minutes",
    title: "From 6 Hours to 6 Minutes: AI-Powered Knowledge Graphs Slash Investor Query Time",
    excerpt: "See how intelligent systems transform complex investor queries from day-long research projects into instant, comprehensive responses.",
    date: "January 5, 2025",
    readTime: "7 min read",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
  },
  {
    slug: "beyond-spreadsheets-knowledge-graphs",
    title: "Beyond Spreadsheets: 5 Ways Knowledge Graphs Revolutionize Financial Document Management",
    excerpt: "Learn how knowledge graphs transform static documents into dynamic, connected intelligence that powers smarter investment decisions.",
    date: "January 2, 2025",
    readTime: "9 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop"
  },
  {
    slug: "future-of-investor-relations",
    title: "The Future of Investor Relations: How AI Eliminates the 'Black Hole' of Meeting Follow-ups",
    excerpt: "Explore how AI transforms reactive follow-up management into proactive relationship intelligence, ensuring no opportunity falls through the cracks.",
    date: "December 28, 2024",
    readTime: "8 min read",
    category: "Future Trends",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full py-20 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tighter">
              Insights & Resources
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover best practices, industry insights, and the latest updates in AI-powered investor relations and fundraising.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block space-y-4">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-background/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full border border-border">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-medium tracking-tight line-clamp-2 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-secondary text-sm font-medium">
                      Read more
                      <svg
                        className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full py-20 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-medium tracking-tighter">
            Stay Updated
          </h2>
          <p className="text-muted-foreground">
            Get the latest insights on AI-powered investor relations delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-10 px-4 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
            <button className="w-full sm:w-auto bg-secondary h-10 px-6 rounded-full text-sm font-medium text-primary-foreground dark:text-secondary-foreground hover:bg-secondary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}