export const StatsSection = () => {
  const stats = [
    {
      value: '500K+',
      label: 'Teams Using Linkly',
    },
    {
      value: '99.9%',
      label: 'Uptime SLA',
    },
    {
      value: '50M+',
      label: 'Messages Daily',
    },
    {
      value: '24/7',
      label: 'Priority Support',
    },
  ];

  return (
    <section
      id='stats'
      className='py-16 px-4 sm:px-6 lg:px-8 border-y border-border bg-gradient-to-r from-[#f3e8ff]/30 to-[#f9f6fc]'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map((stat, idx) => (
            <div key={idx} className='text-center'>
              <div className='text-3xl sm:text-4xl font-bold text-[#5E2C5F] mb-2'>
                {stat.value}
              </div>
              <p className='text-sm text-muted-foreground'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
