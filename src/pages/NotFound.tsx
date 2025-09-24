import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import bubble1 from '@/assets/Bubble_1.png';
import bubble2 from '@/assets/Bubble_2.png';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="flex items-center justify-center gap-4">
          <img src={bubble1} alt="" className="w-8 h-8 animate-pulse opacity-80" />
          <h1 className="text-4xl font-bold font-sour-gummy mb-4">404</h1>
          <img src={bubble2} alt="" className="w-8 h-8 animate-pulse opacity-80" />
        </div>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
