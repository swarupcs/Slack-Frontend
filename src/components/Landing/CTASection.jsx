import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className='py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='relative overflow-hidden rounded-2xl border border-[#e9d5ff] bg-gradient-to-br from-[#f3e8ff] via-[#f9f6fc] to-white p-12 sm:p-16 text-center shadow-xl'>
          <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#5E2C5F]/15 to-transparent rounded-full blur-3xl -z-10' />

          <h2 className='text-4xl sm:text-5xl font-bold mb-4 text-balance text-foreground'>
            Ready to transform your team?
          </h2>
          <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance'>
            Join thousands of teams using Linkly to collaborate faster. Get
            started free today.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button
              size='lg'
              className='bg-[#5E2C5F] text-white hover:bg-[#481349] gap-2 shadow-lg'
            >
              Start Free Trial
              <ArrowRight className='w-4 h-4' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-[#e9d5ff] hover:bg-[#f3e8ff] text-primary'
            >
              Schedule Demo
            </Button>
          </div>
          <p className='text-sm text-muted-foreground mt-6'>
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};
