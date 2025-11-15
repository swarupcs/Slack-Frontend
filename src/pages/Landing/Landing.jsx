import { ArrowRight, Shield, Sparkles, Zap } from 'lucide-react';
import React from 'react';

import { CTASection } from '@/components/Landing/CTASection';
import { FeaturesSection } from '@/components/Landing/FeaturesSection';
import { HeroSection } from '@/components/Landing/HeroSection';
import { NavBar } from '@/components/Landing/NavBar';
import { StatsSection } from '@/components/Landing/StatsSection';
import { Button } from '@/components/ui/button';

export const Landing = () => {

  return (
    <div className='min-h-screen bg-background'>
      <NavBar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};
