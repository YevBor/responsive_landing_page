import { useState, useEffect } from 'react';
type WriterProps = {
    text: string;
  }



const Typewriter = ({ text}:WriterProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev < text.length ? prev + 1 : prev));
    }, 150); 
    return () => clearTimeout(timer);
  }, [text, index]);

  return <h1  className=' max-w-sm font-bold  md:mt-20 text-5xl mt-6 p-3 leading-10 h-32 mb-5 self-start sm:self-center  md:h-24'>{text.substring(0, index)}</h1>;
};

export default Typewriter;

