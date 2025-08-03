"use client";

import { motion } from "motion/react";
import { AssetCard } from "@/components/ui/cards-demo-2";

const assetTypes = [
  {
    id: 1,
    name: "Private Equity",
    description: "Identify co-investors for mid-market software deals",
    useCase: "Rubben analyzes past investment patterns, commitment data, and public records to match you with the perfect co-investors for your next software acquisition.",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80", // Corporate skyscrapers
  },
  {
    id: 2,
    name: "Real Estate",
    description: "Find partners for JVs in high-value projects",
    useCase: "Let Rubben scan through thousands of real estate investors to find the ideal partners for your next office tower, multifamily development, or industrial project.",
    backgroundImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80", // Modern office buildings
  },
  {
    id: 3,
    name: "Venture Capital",
    description: "Re-engage dormant relationships to close funding rounds faster",
    useCase: "Rubben identifies promising LP relationships that have gone cold and suggests personalized outreach strategies to rekindle conversations.",
    backgroundImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80", // Tech startup office
  },
  {
    id: 4,
    name: "Fund of Funds",
    description: "Manage complex LP relationships across multiple strategies",
    useCase: "Track and nurture relationships with allocators across your diverse portfolio, ensuring consistent communication and timely updates.",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80", // Financial charts and data
  },
];

export function AssetManagersSection() {
  return (
    <section id="asset-managers" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">
            Built for Alternative Asset Managers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rubben understands the unique fundraising challenges across different asset classes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {assetTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AssetCard
                title={type.name}
                description={type.description}
                backgroundImage={type.backgroundImage}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}