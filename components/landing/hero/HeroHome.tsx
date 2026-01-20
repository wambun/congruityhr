'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useRef } from 'react';

const features = [
  'Full-service PEO & ASO solutions',
  'Award-winning technology platform',
  'Dedicated support team',
];

export function HeroHome() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms for decorative elements
  const blob1Y = useTransform(scrollY, [0, 500], [0, 150]);
  const blob2Y = useTransform(scrollY, [0, 500], [0, -100]);
  const blob1Opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background decorative elements with parallax */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: blob1Y, opacity: blob1Opacity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          style={{ y: blob2Y }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"
        />
        {/* Additional subtle geometric accent */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/10 rounded-full hidden lg:block" />
      </div>

      <div className="container-main py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge with shimmer effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-primary mb-6 relative overflow-hidden"
            >
              {/* Shimmer overlay */}
              <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
              <span className="relative flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
                Trusted by 500+ companies nationwide
              </span>
            </motion.div>

            {/* Headline with gradient text */}
            <h1 className="text-4xl sm:text-5xl lg:text-display font-semibold tracking-headline text-primary mb-6 leading-tight">
              You focus on{' '}
              <span className="relative text-gradient-primary">
                your business
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                    d="M2 10C50 4 150 2 298 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-accent/60"
                  />
                </motion.svg>
              </span>
              .
              <br />
              <span className="text-primary/70">Let us focus on your team.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              From payroll and benefits to risk management and compliance, Congruity HR
              is your go-to resource for delivering an exceptional employee experience.
            </p>

            {/* Features list */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  {feature}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/book-demo"
                className="btn btn-primary text-base px-8 py-4 group"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="btn btn-secondary text-base px-8 py-4 group"
              >
                <Play className="w-4 h-4" />
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <Image
                src="/static/images/hero/team-collaboration.jpg"
                alt="Team collaborating in modern office"
                width={1200}
                height={800}
                className="w-full h-[400px] lg:h-[500px] object-cover"
                priority
              />
            </div>

            {/* Stats below image */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="text-center bg-white rounded-xl p-4 shadow-soft">
                <div className="text-2xl lg:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground mt-1">Companies</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 shadow-soft">
                <div className="text-2xl lg:text-3xl font-bold text-primary">50K+</div>
                <div className="text-xs text-muted-foreground mt-1">Employees</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 shadow-soft">
                <div className="text-2xl lg:text-3xl font-bold text-primary">99%</div>
                <div className="text-xs text-muted-foreground mt-1">Retention</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 shadow-soft">
                <div className="text-2xl lg:text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground mt-1">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
