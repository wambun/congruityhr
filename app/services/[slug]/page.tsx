import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { services, getServiceBySlug } from '@/data/content/services';
import { CTASection } from '@/components/landing';
import { ArrowRight, Check, Users, FileText, Briefcase, Heart, Shield } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Users,
  FileText,
  Briefcase,
  Heart,
  Shield,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Users;

  // Get other services for the sidebar
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero Section with Image Banner */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container-main relative">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Services
            </Link>

            <div className="flex items-start gap-5 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-h1 text-white mb-4">{service.title}</h1>
                <p className="text-lg text-white/90 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-demo"
                className="btn bg-white text-primary hover:bg-cream"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="btn border-2 border-white/30 text-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Features */}
              <div className="mb-12">
                <h2 className="text-h3 text-primary mb-6">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-card p-6 shadow-soft"
                    >
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-h3 text-primary mb-6">Key Benefits</h2>
                <div className="bg-white rounded-card p-8 shadow-soft">
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-primary rounded-card p-8 text-white mb-8 sticky top-32">
                <h3 className="text-xl font-semibold mb-4">
                  Ready to get started?
                </h3>
                <p className="text-white/80 mb-6">
                  Let us help you find the right solution for your business.
                </p>
                <Link
                  href="/book-demo"
                  className="btn bg-white text-primary hover:bg-cream w-full justify-center mb-4"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/contact"
                  className="btn border-2 border-white/30 text-white hover:bg-white/10 w-full justify-center"
                >
                  Contact Us
                </Link>
              </div>

              {/* Other Services */}
              <div className="bg-white rounded-card p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-4">
                  Other Services
                </h3>
                <ul className="space-y-3">
                  {otherServices.map((s) => {
                    const ServiceIcon = iconMap[s.icon] || Users;
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <ServiceIcon className="w-4 h-4" />
                          {s.title}
                          <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Ready to transform your HR with ${service.title}?`}
        description="Take the first step toward building your dream team with Congruity HR."
      />
    </>
  );
}
