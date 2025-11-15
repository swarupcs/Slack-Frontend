import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export const NavBar = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/auth/signup');
  };

  const handleSignin = () => {
    navigate('/auth/signin');
  };

  return (
    <nav className='sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-[#5E2C5F] to-[#481349] flex items-center justify-center shadow-lg'>
            <span className='text-white font-bold text-sm'>✦</span>
          </div>
          <span className='font-bold text-lg text-primary'>Linkly</span>
        </div>

        <div className='hidden md:flex items-center gap-8'>
          <a
            href='#features'
            className='text-sm text-muted-foreground hover:text-primary transition'
          >
            Features
          </a>
          <a
            href='#stats'
            className='text-sm text-muted-foreground hover:text-primary transition'
          >
            Why Us
          </a>
          <a
            href='#pricing'
            className='text-sm text-muted-foreground hover:text-primary transition'
          >
            Pricing
          </a>
        </div>

        <div className='flex items-center gap-3'>
          <Button
            variant='ghost'
            size='sm'
            className='text-primary hover:text-[#481349] hover:bg-[#5E2C5F]/10 font-medium transition'
            onClick={handleSignin}
          >
            Sign in
          </Button>
          <Button
            size='sm'
            className='bg-gradient-to-r from-[#5E2C5F] to-[#481349] text-white hover:from-[#481349] hover:to-[#3a0d38] shadow-md font-medium transition'
            onClick={handleSignup}
          >
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};
