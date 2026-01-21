import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/content/services';
import { CTASection } from '@/components/landing';
import { ArrowRight, Users, FileText, Briefcase, Heart, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive HR solutions including PEO, ASO, HR consulting, employee benefits, and compliance services.',
};

const iconMap: Record<string, React.ElementType> = {
  Users,
  FileText,
  Briefcase,
  Heart,
  Shield,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 hidden lg:block" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-success/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 hidden lg:block" />

        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge badge-primary mb-4">Our Services</span>
            <h1 className="text-h1 text-primary mb-6">
              Comprehensive HR Solutions for Your Business
            </h1>
            <p className="text-lg text-muted-foreground">
              From payroll and benefits to risk management and compliance, Congruity HR
              provides world-class HR services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Users;
              const colors = ['primary', 'success', 'accent'];
              const color = colors[index % colors.length];
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                    color === 'success' ? 'bg-success/10 group-hover:bg-success' :
                    color === 'accent' ? 'bg-accent/10 group-hover:bg-accent' : 'bg-primary/10 group-hover:bg-primary'
                  }`}>
                    <Icon className={`w-7 h-7 transition-colors group-hover:text-white ${
                      color === 'success' ? 'text-success' :
                      color === 'accent' ? 'text-accent' : 'text-primary'
                    }`} />
                  </div>
                  <h2 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {service.shortDescription}
                  </p>
                  <div className={`flex items-center gap-2 font-medium text-sm group-hover:gap-3 transition-all ${
                    color === 'success' ? 'text-success' :
                    color === 'accent' ? 'text-accent' : 'text-primary'
                  }`}>
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="light"
        title="Not sure which service is right for you?"
        description="Our experts can help you find the perfect HR solution for your business needs."
        primaryCTA={{ text: 'Schedule a Consultation', href: '/book-demo' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
