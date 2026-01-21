import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { leadershipTeam, boardMembers } from '@/data/content/team';
import { CTASection } from '@/components/landing';
import { ArrowLeft, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meet the Team',
  description:
    'Meet the leadership team at Congruity HR. Our experienced professionals bring decades of HR, payroll, and benefits expertise.',
};

export default function MeetTheTeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-10 right-0 w-[350px] h-[350px] bg-success/10 rounded-full blur-3xl transform translate-x-1/2 hidden lg:block" />
        <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] bg-accent/10 rounded-full blur-3xl hidden lg:block" />

        <div className="container-main relative">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
          <div className="max-w-3xl">
            <span className="badge badge-primary mb-4">Our Team</span>
            <h1 className="text-h1 text-primary mb-6">
              Meet the Leadership
            </h1>
            <p className="text-lg text-muted-foreground">
              Our experienced team brings decades of HR, payroll, and benefits expertise
              to help your business thrive. Get to know the people behind Congruity HR.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <h2 className="text-h2 text-primary mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-card overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-1">
                    {member.title}
                  </p>
                  {member.credentials && (
                    <p className="text-xs text-muted-foreground mb-3">
                      {member.credentials}
                    </p>
                  )}
                  <div className="pt-3 mt-3 border-t border-gray-100">
                    <p className="text-base text-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section bg-cream relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-success/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 hidden lg:block" />

        <div className="container-main relative">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-primary mb-4">Board of Directors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by industry veterans and strategic investors committed to our success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => {
              const colors = ['primary', 'success', 'accent'];
              const color = colors[index % colors.length];
              return (
                <div
                  key={member.name}
                  className="bg-white rounded-card p-6 text-center shadow-soft hover:shadow-card transition-all duration-300"
                >
                  {/* Initials avatar */}
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    color === 'success' ? 'bg-success/10' :
                    color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                  }`}>
                    <span className={`text-xl font-semibold ${
                      color === 'success' ? 'text-success' :
                      color === 'accent' ? 'text-accent' : 'text-primary'
                    }`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                  {member.company && (
                    <p className="text-sm text-accent mt-1">{member.company}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to work with our team?"
        description="Let's get a call on the calendar. We can't wait to meet you."
      />
    </>
  );
}
