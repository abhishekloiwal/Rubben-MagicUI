import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Rubben",
  description: "AI-Powered Investor Intelligence for IR Teams. Know who to contact, why now, and what to say.",
  cta: "Get Early Access",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Investor Relations",
    "IR Software",
    "Fundraising",
    "LP Management",
    "Alternative Assets",
    "Private Equity",
    "CRM",
    "AI",
  ],
  links: {
    email: "hello@rubben.ai",
    twitter: "https://twitter.com/rubben_ai",
    discord: "https://discord.gg/rubben",
    github: "https://github.com/rubben-ai",
    instagram: "https://instagram.com/rubben_ai",
  },
  nav: {
    links: [
      { id: 1, name: "Home", href: "#hero" },
      { id: 2, name: "How It Works", href: "#bento" },
      { id: 3, name: "Features", href: "#features" },
      { id: 4, name: "Pricing", href: "#pricing" },
    ],
  },
  hero: {
    badgeIcon: "",
    badge: "AI-Powered Investor Intelligence",
    title: "Revolutionizing Fundraising for Alternative Asset Managers",
    description:
      "AI agent for Investor Relations and Business Development teams to augment investment & fundraising processes. Know who to contact, why now, and what to say.",
    cta: {
      primary: {
        text: "Watch Video",
        href: "#",
      },
      secondary: {
        text: "Book Demo",
        href: "#",
      },
    },
  },
  companyShowcase: {
    sectionTitle: "Trusted by Leading Alternative Asset Managers",
    companyLogos: [
      {
        id: 1,
        name: "Schroders",
        logo: (
          <span className="text-2xl font-semibold tracking-tight dark:text-white text-black">
            Schroders
          </span>
        ),
      },
      {
        id: 2,
        name: "Blackstone",
        logo: (
          <span className="text-2xl font-semibold tracking-tight dark:text-white text-black">
            Blackstone
          </span>
        ),
      },
      {
        id: 3,
        name: "Brookfield",
        logo: (
          <span className="text-2xl font-semibold tracking-tight dark:text-white text-black">
            Brookfield
          </span>
        ),
      },
      {
        id: 4,
        name: "Apollo",
        logo: (
          <span className="text-2xl font-semibold tracking-tight dark:text-white text-black">
            Apollo
          </span>
        ),
      },
      {
        id: 5,
        name: "KKR",
        logo: (
          <span className="text-2xl font-semibold tracking-tight dark:text-white text-black">
            KKR
          </span>
        ),
      },
      {
        id: 6,
        name: "Carlyle",
        logo: (
          <span className="text-2xl font-semibold tracking-tight dark:text-white text-black">
            Carlyle
          </span>
        ),
      },
      {
        id: 7,
        name: "Preqin",
        logo: (
          <span className="text-xl font-normal italic tracking-tight dark:text-white text-black">
            Preqin Partner
          </span>
        ),
      },
      {
        id: 8,
        name: "Salesforce",
        logo: (
          <span className="text-xl font-normal italic tracking-tight dark:text-white text-black">
            Salesforce Partner
          </span>
        ),
      },
    ],
  },
  featureSection: {
    title: "From Data Chaos to Investor Intelligence",
    description:
      "See how Rubben transforms your scattered CRM notes, emails, and documents into actionable investor insights",
    items: [
      {
        id: 1,
        title: "Connect Your Data",
        content:
          "Securely sync with your CRM, upload meeting notes, pitch decks, or import Preqin exports",
        image:
          "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2032&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "AI Analysis",
        content:
          "Rubben extracts investor preferences, past interactions, and relationship context",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Smart Recommendations",
        content:
          "Get weekly LP suggestions, deal matches, and personalized talking points",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Track Success",
        content:
          "Monitor engagement rates, follow-up completion, and capital raised",
        image:
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
      },
    ],
  },
  bentoSection: {
    title: "Your AI-Powered IR Assistant",
    description:
      "Rubben analyzes your CRM, meeting notes, and pitch decks to deliver actionable investor intelligence in seconds. Extract insights from PDFs, emails, and documents automatically.",
    items: [
      {
        id: 1,
        content: <FirstBentoAnimation />,
        title: "Weekly LP Re-engagement",
        description:
          "Never miss a follow-up again. Every Monday, get a prioritized list of LPs to contact based on timing, past interest, and market activity.",
      },
      {
        id: 2,
        content: <SecondBentoAnimation />,
        title: "Document Intelligence & Deal Matching",
        description:
          "Upload pitch decks, meeting notes, or emails. Rubben extracts key insights and instantly matches deals with the most relevant LPs from your database.",
      },
      {
        id: 3,
        content: (
          <ThirdBentoAnimation
            data={[20, 30, 25, 45, 40, 55, 75]}
            toolTipValues={[
              1234, 1678, 2101, 2534, 2967, 3400, 3833, 4266, 4700, 5133,
            ]}
          />
        ),
        title: "Market Signal Alerts",
        description:
          "Real-time news monitoring matched to your LP database. Know when GIC commits to logistics so you can reach out to Emily Lin immediately.",
      },
      {
        id: 4,
        content: <FourthBentoAnimation once={false} />,
        title: "Pre-Meeting Intelligence",
        description:
          "Get comprehensive briefings before every LP meeting. Past conversations, preferences, objections - all summarized in seconds.",
      },
    ],
  },
  benefits: [
    {
      id: 1,
      text: "Save hours each week with AI-optimized scheduling.",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Reduce scheduling conflicts and double-bookings.",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Improve work-life balance with smart time allocation.",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Increase productivity with AI-driven time management insights.",
      image: "/Device-1.png",
    },
  ],
  growthSection: {
    title: "Enterprise-Grade Security for Sensitive LP Data",
    description:
      "Your investor relationships are confidential. We protect them with bank-level security and complete data isolation.",
    items: [
      {
        id: 1,
        content: (
          <div
            className="relative flex size-full items-center justify-center overflow-hidden transition-all duration-300 hover:[mask-image:none] hover:[webkit-mask-image:none]"
            style={{
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              maskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          >
            <div className="absolute top-[55%] md:top-[58%] left-[55%] md:left-[57%] -translate-x-1/2 -translate-y-1/2  size-full z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="227"
                height="244"
                viewBox="0 0 227 244"
                fill="none"
                className="size-[90%] md:size-[85%] object-contain fill-background"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M104.06 3.61671C106.656 1.28763 110.017 0 113.5 0C116.983 0 120.344 1.28763 122.94 3.61671C148.459 26.5711 180.325 41.2118 214.322 45.6008C217.66 46.0312 220.736 47.6398 222.999 50.1383C225.262 52.6369 226.563 55.862 226.67 59.2357C227.947 96.7468 218.612 133.854 199.744 166.267C180.877 198.68 153.248 225.074 120.052 242.398C118.028 243.454 115.779 244.003 113.498 244C111.216 243.997 108.969 243.441 106.948 242.379C73.7524 225.055 46.1231 198.661 27.2556 166.248C8.38807 133.835 -0.947042 96.7279 0.329744 59.2168C0.441295 55.8464 1.74484 52.6258 4.00715 50.1311C6.26946 47.6365 9.34293 46.0306 12.6777 45.6008C46.6725 41.2171 78.5389 26.5832 104.06 3.63565V3.61671Z"
                />
              </svg>
            </div>
            <div className="absolute top-[58%] md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2  size-full z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="245"
                height="282"
                viewBox="0 0 245 282"
                className="size-full object-contain fill-accent"
              >
                <g filter="url(#filter0_dddd_2_33)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M113.664 7.33065C116.025 5.21236 119.082 4.04126 122.25 4.04126C125.418 4.04126 128.475 5.21236 130.836 7.33065C154.045 28.2076 183.028 41.5233 213.948 45.5151C216.984 45.9065 219.781 47.3695 221.839 49.6419C223.897 51.9144 225.081 54.8476 225.178 57.916C226.339 92.0322 217.849 125.781 200.689 155.261C183.529 184.74 158.4 208.746 128.209 224.501C126.368 225.462 124.323 225.962 122.248 225.959C120.173 225.956 118.13 225.45 116.291 224.484C86.0997 208.728 60.971 184.723 43.811 155.244C26.6511 125.764 18.1608 92.015 19.322 57.8988C19.4235 54.8334 20.6091 51.9043 22.6666 49.6354C24.7242 47.3665 27.5195 45.906 30.5524 45.5151C61.4706 41.5281 90.4531 28.2186 113.664 7.34787V7.33065Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dddd_2_33"
                    x="0.217041"
                    y="0.0412598"
                    width="244.066"
                    height="292.917"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="12" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_2_33"
                      result="effect2_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="27" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_dropShadow_2_33"
                      result="effect3_dropShadow_2_33"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="48" />
                    <feGaussianBlur stdDeviation="9.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_dropShadow_2_33"
                      result="effect4_dropShadow_2_33"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect4_dropShadow_2_33"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="80"
                viewBox="0 0 81 80"
                className="fill-background"
              >
                <g filter="url(#filter0_iiii_2_34)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5 36V28C20.5 22.6957 22.6071 17.6086 26.3579 13.8579C30.1086 10.1071 35.1957 8 40.5 8C45.8043 8 50.8914 10.1071 54.6421 13.8579C58.3929 17.6086 60.5 22.6957 60.5 28V36C62.6217 36 64.6566 36.8429 66.1569 38.3431C67.6571 39.8434 68.5 41.8783 68.5 44V64C68.5 66.1217 67.6571 68.1566 66.1569 69.6569C64.6566 71.1571 62.6217 72 60.5 72H20.5C18.3783 72 16.3434 71.1571 14.8431 69.6569C13.3429 68.1566 12.5 66.1217 12.5 64V44C12.5 41.8783 13.3429 39.8434 14.8431 38.3431C16.3434 36.8429 18.3783 36 20.5 36ZM52.5 28V36H28.5V28C28.5 24.8174 29.7643 21.7652 32.0147 19.5147C34.2652 17.2643 37.3174 16 40.5 16C43.6826 16 46.7348 17.2643 48.9853 19.5147C51.2357 21.7652 52.5 24.8174 52.5 28Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_iiii_2_34"
                    x="12.5"
                    y="8"
                    width="56"
                    height="70"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_innerShadow_2_34"
                      result="effect2_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_innerShadow_2_34"
                      result="effect3_innerShadow_2_34"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect3_innerShadow_2_34"
                      result="effect4_innerShadow_2_34"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <FlickeringGrid
              className="size-full"
              gridGap={4}
              squareSize={2}
              maxOpacity={0.5}
            />
          </div>
        ),

        title: "SOC 2 Compliant Infrastructure",
        description:
          "End-to-end encryption, isolated data environments, and regular security audits. Deploy on-premise or in your private cloud.",
      },
      {
        id: 2,
        content: (
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_50%)] -translate-y-20">
            <Globe className="top-28" />
          </div>
        ),

        title: "Complete Data Control",
        description:
          "Your data never trains our models. Full audit logs, role-based access, and instant data deletion on request.",
      },
    ],
  },
  quoteSection: {
    quote:
      "We re-engaged 3 dormant LPs in our first month using Rubben's recommendations. One committed $50M to our new fund.",
    author: {
      name: "Michael Torres",
      role: "Capital Formation at Infrastructure Fund",
      image: "https://randomuser.me/api/portraits/men/91.jpg",
    },
  },
  pricing: {
    title: "Simple Pricing for IR Teams",
    description:
      "Start free. Scale as you grow. No hidden fees.",
    pricingItems: [
      {
        name: "Pilot",
        href: "#",
        price: "$0",
        period: "month",
        yearlyPrice: "$0",
        features: [
          "1 user",
          "100 investor profiles",
          "Basic CRM sync",
          "Weekly recommendations",
        ],
        description: "For small teams testing Rubben",
        buttonText: "Start Free",
        buttonColor: "bg-accent text-primary",
        isPopular: false,
      },
      {
        name: "Team",
        href: "#",
        price: "$299",
        period: "user/month",
        yearlyPrice: "$2,390",
        features: [
          "Unlimited investors",
          "Full CRM integration",
          "Document intelligence",
          "Market signals",
          "Meeting prep",
          "Priority support",
        ],
        description: "For active fundraising teams",
        buttonText: "Start Trial",
        buttonColor: "bg-secondary text-white",
        isPopular: true,
      },
      {
        name: "Enterprise",
        href: "#",
        price: "Custom",
        period: "pricing",
        yearlyPrice: "Custom",
        features: [
          "Everything in Team +",
          "On-premise deployment",
          "Custom integrations",
          "Dedicated success manager",
          "SLA guarantees",
        ],
        description: "For large IR departments",
        buttonText: "Contact Sales",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: false,
      },
    ],
  },
  testimonials: [
    {
      id: "1",
      name: "Henry Martin",
      role: "Principal at Fuel Ventures",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQEp9YBt6xPaIw/profile-displayphoto-shrink_800_800/B4EZdo_DK6H0Ak-/0/1749813048856?e=1756339200&v=beta&t=AiqXFzgocOJq2J3f71pktFZsltL3wHLr0imLED7VOPc",
      linkedin: "https://www.linkedin.com/in/henry--martin/",
      description: (
        <p>
          Managing LP relationships across multiple funds is increasingly complex, and we often miss opportunities due to fragmented data.
          <Highlight>
            Rubben&apos;s AI-powered approach to investor intelligence could transform how we identify and engage with the right LPs at the right time.
          </Highlight>
          The ability to automatically surface relevant market signals and generate personalized outreach would save our team hours each week while improving our fundraising success rate.
        </p>
      ),
    },
    {
      id: "2",
      name: "Joel Liew",
      role: "Investment Associate at RAX Finance",
      img: "https://www.raxfinance.nl/uploads/joel-website.png",
      linkedin: "https://www.linkedin.com/in/joel-l-aa2556a4/",
      description: (
        <p>
          As a real estate debt fund manager, we constantly struggle with investor outreach cycles and fragmented CRM data that makes it difficult to maintain meaningful LP relationships.
          <Highlight>
            Rubben&apos;s promise to automate investor re-engagement and provide intelligent document summarization addresses our most pressing operational challenges.
          </Highlight>
          Having a tool that can instantly prepare meeting briefs and surface relevant investor insights would dramatically improve our fundraising efficiency.
        </p>
      ),
    },
    {
      id: "3",
      name: "Roderick Verspagen",
      role: "Investment Manager at EDGE",
      img: "https://www.hec.edu/sites/default/files/styles/profile/public/2024-10/Roderick%20Verspagen-min_0.JPG?itok=rxmsHXnf",
      linkedin: "https://www.linkedin.com/in/roderick-verspagen-95944a101/",
      description: (
        <p>
          We manage complex investor relationships across multiple jurisdictions, and keeping track of touchpoints, preferences, and engagement history is becoming increasingly challenging.
          <Highlight>
            Rubben&apos;s AI capabilities for intelligent relationship management and automated follow-ups could significantly enhance how we nurture our LP network.
          </Highlight>
          The platform&apos;s ability to analyze documents and extract actionable insights would help us make more informed decisions about which investors to prioritize and how to approach them.
        </p>
      ),
    },
    {
      id: "4",
      name: "Josep Bellmunt",
      role: "Private Equity Director at Rockfield Real Estate",
      img: "https://www.rockfieldrealestate.com/wp-content/uploads/2024/09/Josep-final-3933-2048x2048.jpeg",
      linkedin: "https://www.linkedin.com/in/josep-franch-bellmunt-01604931/",
      description: (
        <p>
          With over €2 billion in AUM and an extensive investor base across Europe, our IR team spends countless hours on manual tasks like meeting preparation and investor research.
          <Highlight>
            Rubben&apos;s capabilities in automated call preparation, investor matching, and intelligent re-engagement could revolutionize how we manage capital formation.
          </Highlight>
          The potential to instantly access consolidated investor intelligence and receive AI-powered recommendations on which LPs to approach for specific strategies would be game-changing for our fundraising efforts.
        </p>
      ),
    },
    {
      id: "5",
      name: "Mohamed Koubini",
      role: "Managing Partner at Cornerstone Capital Solutions",
      img: "https://cornerstone-csg.com/wp-content/uploads/2020/07/Foto-Mohamed-Koubini-Skype.jpg",
      linkedin: "https://www.linkedin.com/in/mohamed-koubini-999b323/",
      description: (
        <p>
          As a placement agent supporting fund managers across PE, Private Debt, Infrastructure, and Real Estate, we coordinate hundreds of LP meetings and manage complex fundraising campaigns with dispersed materials.
          <Highlight>
            Rubben&apos;s AI-powered platform could transform how we organize roadshows, prepare fund managers for meetings, and track follow-up actions across multiple campaigns.
          </Highlight>
          The ability to instantly generate investor-specific talking points and maintain a comprehensive view of all touchpoints would make us significantly more effective in helping our clients raise capital.
        </p>
      ),
    },
  ],
  faqSection: {
    title: "Frequently Asked Questions",
    description:
      "Everything you need to know about Rubben and how it transforms investor relations.",
    faQitems: [
      {
        id: 1,
        question: "How does Rubben integrate with our CRM?",
        answer:
          "Rubben offers direct Salesforce API integration for seamless two-way sync. We also support imports from Excel/CSV files and manual entry. Our integration takes less than 15 minutes to set up and automatically maps your custom fields.",
      },
      {
        id: 2,
        question: "Is our LP data secure?",
        answer:
          "Yes. We're SOC 2 compliant with end-to-end encryption for all data in transit and at rest. Each client has isolated data environments, and we never use your data to train our models. We're also GDPR compliant and offer on-premise deployment options for maximum security.",
      },
      {
        id: 3,
        question: "What file types can Rubben analyze?",
        answer:
          "Rubben can process PDFs, Word documents, Excel spreadsheets, PowerPoint presentations, emails (.msg, .eml), and CRM exports. We extract investor preferences, past interactions, and relevant context from all these sources automatically.",
      },
      {
        id: 4,
        question: "How accurate are the LP recommendations?",
        answer:
          "Our data shows that 85% of LPs recommended by Rubben show active interest when contacted. The AI learns from your feedback and improves recommendations over time, typically reaching 90%+ accuracy after 3 months of use.",
      },
      {
        id: 5,
        question: "Can we customize for our investment strategy?",
        answer:
          "Absolutely. During onboarding, Rubben learns your specific investment criteria, LP preferences, and communication style. You can also set custom parameters for different fund strategies and adjust recommendations based on your current fundraising priorities.",
      },
      {
        id: 6,
        question: "What if we don't have clean CRM data?",
        answer:
          "That's exactly why teams love Rubben. Our AI excels at working with messy, incomplete data. It automatically deduplicates records, fills in missing information from documents and emails, and helps clean your database over time. Most teams see 70% data quality improvement within the first month.",
      },
    ],
  },
  ctaSection: {
    id: "cta",
    title: "Stop Missing Capital. Start Raising Smarter.",
    backgroundImage: "/agent-cta-background.png",
    button: {
      text: "Contact Sales",
      href: "#",
    },
    subtext: "Join leading funds getting early access to AI-powered investor intelligence.",
  },
  footerLinks: [
    {
      title: "Company",
      links: [
        { id: 1, title: "About", url: "#" },
        { id: 2, title: "Careers", url: "#" },
        { id: 3, title: "Privacy", url: "#" },
        { id: 4, title: "Security", url: "#" },
        { id: 5, title: "Terms", url: "#" },
      ],
    },
    {
      title: "Product",
      links: [
        { id: 6, title: "Features", url: "#" },
        { id: 7, title: "Integrations", url: "#" },
        { id: 8, title: "Pricing", url: "#" },
        { id: 9, title: "Roadmap", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 10, title: "Blog", url: "#" },
        { id: 11, title: "Help Center", url: "#" },
        { id: 12, title: "API Docs", url: "#" },
        { id: 13, title: "Status", url: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { id: 14, title: "Contact Sales", url: "#" },
        { id: 15, title: "Support", url: "#" },
        { id: 16, title: "Partners", url: "#" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;