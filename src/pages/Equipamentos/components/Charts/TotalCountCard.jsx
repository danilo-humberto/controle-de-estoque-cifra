import CountUp from 'react-countup';

export const TotalCountCard = ({ count }) => (
  <div className="w-full h-[274px] flex items-center justify-center">
    <div className="bg-blue-600 w-52 h-52 rounded-full flex items-center justify-center text-[var(--gray-300)] text-5xl font-bold">
      <div className="bg-[var(--gray-600)] z-10 w-40 h-40 rounded-full flex items-center justify-center">
        <CountUp 
          start={0}
          end={count}
          duration={2}
          separator=","
        />
      </div>
    </div>
  </div>
);