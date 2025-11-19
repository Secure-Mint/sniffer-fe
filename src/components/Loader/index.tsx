const Loader = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center py-12'>
      <div className='relative w-28 h-28 flex items-center justify-center'>
        <svg viewBox='0 0 100 100' className='w-full h-full'>
          <polygon points='50,2 95,25 95,75 50,98 5,75 5,25' stroke='#9CA3AF' strokeWidth='4' fill='none' />
          <polygon
            points='50,2 95,25 95,75 50,98 5,75 5,25'
            stroke='#D1D5DB'
            strokeWidth='4'
            fill='none'
            strokeDasharray='300'
            strokeDashoffset='300'
            className='animate-hex-sweep'
          />
        </svg>
        <div className='absolute w-18 h-18 bg-gradient-to-br from-gray-200 to-gray-500 shadow-[0_0_25px_8px_rgba(160,160,160,0.5)] animate-pulse hexagon' />
      </div>
    </div>
  );
};

export default Loader;
