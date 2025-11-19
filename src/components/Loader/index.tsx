const Loader = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center py-12'>
      {/* Loader Wrapper */}
      <div className='relative w-24 h-24 flex items-center justify-center'>
        {/* Outer Sweep Progress Ring */}
        <div className='absolute w-full h-full rounded-full border-4 border-gray-500/20'>
          <div className='absolute inset-0 rounded-full border-4 border-transparent border-t-gray-300 animate-sweep'></div>
        </div>

        {/* Reverse ghost ring */}
        <div className='absolute w-full h-full rounded-full border-[3px] border-gray-700/10 animate-spin-reverse-slower'></div>

        {/* Inner hologram core */}
        <div className='relative w-14 h-14 flex items-center justify-center'>
          <div className='absolute inset-0 rounded-full bg-gray-500/20 blur-xl'></div>

          <div className='w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-500 shadow-[0_0_25px_8px_rgba(160,160,160,0.5)] animate-pulse' />
        </div>
      </div>
    </div>
  );
};

export default Loader;
