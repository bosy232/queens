import { useState, useEffect, type FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://lh3.googleusercontent.com/p/AF1QipMeUpZnC-EK8Zc8lWPYG8kb7QyOJLuGIcM6JKew=s1360-w1360-h1020",
    title: "Advanced Medical Care",
    description: "State-of-the-art facilities and expert healthcare professionals"
  },
  {
    image: "https://lh3.googleusercontent.com/p/AF1QipP8Wrz731hVn25mC0uTZIOvtYHrE9_q9wY5xJD9=s1360-w1360-h1020",
    title: "Compassionate Staff",
    description: "Dedicated team committed to your well-being"
  },
  {
    image: "https://lh3.googleusercontent.com/p/AF1QipOEuac9sFH-UwJAxSAFEgboahdZd4DSCWy04NX5=s1360-w1360-h1020",
    title: "Modern Technology",
    description: "Latest medical technology for precise diagnostics and treatment"
  }
];

const Slideshow: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[500px] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 text-white">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl">{slide.description}</p>
          </div>
        </div>
      ))}

      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-4' : 'bg-white bg-opacity-50'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
