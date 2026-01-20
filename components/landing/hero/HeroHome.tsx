'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HeroHome() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-cream overflow-hidden">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-6 sm:px-8 lg:px-12 xl:px-20 py-20 lg:py-0"
          >
            <div className="max-w-xl">
              {/* Headline - Large and light weight like the reference */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-light text-primary leading-[1.1] tracking-tight mb-6">
                Your complete
                <br />
                HR partner.
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
                From payroll and benefits to risk management and compliance,
                Congruity HR delivers the tools and expertise to help your
                business thrive and your employees succeed.
              </p>

              {/* Single prominent CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3.5 rounded-md hover:bg-accent/90 transition-colors"
                >
                  Get started today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <p className="text-sm text-muted-foreground mb-4">Trusted by 500+ companies nationwide</p>
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-2xl font-semibold text-primary">50K+</div>
                    <div className="text-xs text-muted-foreground">Employees supported</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-primary">99%</div>
                    <div className="text-xs text-muted-foreground">Client retention</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-primary">20+</div>
                    <div className="text-xs text-muted-foreground">Years experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image extending to edge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[85vh]"
          >
            <Image
              src="/static/images/hero/professional-working.jpg"
              alt="Professional working on laptop"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
