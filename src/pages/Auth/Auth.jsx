import { SignupCard } from '@/components/organisms/Auth/SignupCard';

export const Auth = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center bg-[var(--slack-color)]'>
      <div className='md:h-auto md:w-[420px]'>
        <SignupCard />
      </div>
    </div>
  );
};
