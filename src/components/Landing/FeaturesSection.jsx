import {
  Lock,
  MessageSquare,
  Search,
  Settings,
  Users,
  Zap,
} from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Instant Messaging',
      description:
        'Real-time conversations with rich formatting, threads, and reactions for seamless team communication.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Create channels, manage permissions, and collaborate across projects with built-in file sharing.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description:
        'Optimized infrastructure ensures sub-second message delivery and zero latency collaboration.',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description:
        'End-to-end encryption, SSO integration, and compliance with SOC 2, GDPR, and HIPAA standards.',
    },
    {
      icon: Search,
      title: 'Smart Search',
      description:
        'Powerful search with filters to find conversations, files, and context across your entire workspace.',
    },
    {
      icon: Settings,
      title: 'Integrations Hub',
      description:
        'Connect with 2000+ apps including GitHub, Jira, Salesforce, and custom webhooks.',
    },
  ];

  return (
    <section
      id='features'
      className='py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#f3e8ff]/20 to-transparent'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4 text-balance text-foreground'>
            Everything your team needs
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-balance'>
            Powerful features designed to make teamwork effortless and
            productive.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className='p-6 rounded-xl border border-border bg-card hover:border-[#c084fc] hover:shadow-lg hover:shadow-[#5E2C5F]/10 transition-all duration-300 group'
              >
                <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] flex items-center justify-center mb-4 group-hover:from-[#5E2C5F] group-hover:to-[#481349] transition-all duration-300'>
                  <Icon className='w-6 h-6 text-[#5E2C5F] group-hover:text-white transition-colors' />
                </div>
                <h3 className='text-lg font-semibold mb-2 text-foreground'>
                  {feature.title}
                </h3>
                <p className='text-sm text-muted-foreground'>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
