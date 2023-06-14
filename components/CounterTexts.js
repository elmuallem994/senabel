import { useEffect, useState } from 'react';

const CounterTexts = ({ target, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) {
      setCount(0);
      return;
    }

    const interval = setInterval(() => {
      if (count < target) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [count, target, startCounting]);

  return (
    <div className="inline-flex items-center pr-3">
      <span className="pr-1 text-xl sm:text-2xl md:text-3xl ">+</span>
      <span className=" text-3xl sm:text-3xl lg:text-4xl">{count}</span>
    </div>
  );
};

export default CounterTexts;
