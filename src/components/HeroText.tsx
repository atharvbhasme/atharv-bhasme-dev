import { useEffect, useState } from 'react';

const HeroText = () => {
  const phrases = [
    'ATHARV BHASME',
    'Full Stack Developer',
    'Software Engineer',
  ];

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];
    let typeSpeed = isDeleting ? 50 : 100;

    const typing = setTimeout(() => {
      const updatedCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setText(currentPhrase.substring(0, updatedCharIndex));
      setCharIndex(updatedCharIndex);

      if (!isDeleting && updatedCharIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedCharIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typeSpeed);

    return () => clearTimeout(typing);
  }, [charIndex, isDeleting, index, phrases]);

  return (
    <div className="Hero-text-home-page">
      <h1 className="hero-heading">
        HI, I AM <span className="animated-text">{text}</span><span className="cursor">|</span>
      </h1>
    </div>
  );
};

export default HeroText;
