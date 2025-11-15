import { ArrowRight, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className='relative overflow-hidden pt-20 pb-24 px-4 sm:px-6 lg:px-8'>
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#5E2C5F]/20 to-transparent rounded-full blur-3xl -z-10' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#481349]/15 to-transparent rounded-full blur-3xl -z-10' />

      <div className='max-w-4xl mx-auto text-center'>
        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f3e8ff] border border-[#e9d5ff] mb-6'>
          <Sparkles className='w-4 h-4 text-[#5E2C5F]' />
          <span className='text-sm text-[#5E2C5F] font-medium'>
            Introducing Connection Reimagined
          </span>
        </div>

        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance'>
          Link Your Team,
          <span className='bg-gradient-to-r from-[#5E2C5F] via-[#481349] to-[#7c3aed] bg-clip-text text-transparent'>
            {' '}
            Amplify Impact
          </span>
        </h1>

        <p className='text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance'>
          Connect effortlessly, communicate clearly, and keep your team aligned.
          Build incredible things together with Linkly.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <Button
            size='lg'
            className='bg-[#5E2C5F] text-white hover:bg-[#481349] gap-2 shadow-lg'
          >
            Get Started Free
            <ArrowRight className='w-4 h-4' />
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='border-[#e9d5ff] hover:bg-[#f3e8ff] text-primary'
          >
            See Demo
          </Button>
        </div>

        <div className='mt-12 pt-12 border-t border-border'>
          <p className='text-sm text-muted-foreground mb-4'>
            Trusted by teams at leading companies
          </p>
          <div className='flex flex-wrap items-center justify-center gap-8 opacity-60'>
            <span className='font-semibold text-primary'>Acme</span>
            <span className='font-semibold text-primary'>Stellar</span>
            <span className='font-semibold text-primary'>Quantum</span>
            <span className='font-semibold text-primary'>Nexus</span>
          </div>
        </div>
      </div>
    </section>
  );
};
