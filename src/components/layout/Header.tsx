
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-digital-gray-dark text-white py-4">
      <div className="container flex justify-between items-center">
        <Link to="/" className="font-bold text-xl md:text-2xl mr-6">
          {isMobile ? (
            <>
              <span className="whitespace-nowrap">Social Media</span>
              <br />
              <span className="whitespace-nowrap">Bill of Rights</span>
            </>
          ) : (
            <span className="whitespace-nowrap">Social Media Bill of Rights</span>
          )}
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/bill-of-rights" className="hover:text-digital-purple-light transition-colors">
            The Bill of Rights
          </Link>
          <Link to="/platform-comparison" className="hover:text-digital-purple-light transition-colors">
            Platform Comparison
          </Link>
          <Link to="/take-action" className="hover:text-digital-purple-light transition-colors">
            Take Action
          </Link>
          <Link to="/resources" className="hover:text-digital-purple-light transition-colors">
            Resources
          </Link>
          <Link to="/faq" className="hover:text-digital-purple-light transition-colors">
            FAQ
          </Link>
          <Link to="/about" className="hover:text-digital-purple-light transition-colors">
            About
          </Link>
          <Button className="bg-digital-coral hover:bg-digital-coral/90 text-white" asChild>
            <Link to="/endorse">Endorse</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-digital-gray-dark z-50 md:hidden">
            <nav className="flex flex-col space-y-4 p-6">
              <Link 
                to="/bill-of-rights" 
                className="hover:text-digital-purple-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                The Bill of Rights
              </Link>
              <Link 
                to="/platform-comparison" 
                className="hover:text-digital-purple-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Platform Comparison
              </Link>
              <Link 
                to="/take-action" 
                className="hover:text-digital-purple-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Take Action
              </Link>
              <Link 
                to="/resources" 
                className="hover:text-digital-purple-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/faq" 
                className="hover:text-digital-purple-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/about" 
                className="hover:text-digital-purple-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Button 
                className="bg-digital-coral hover:bg-digital-coral/90 text-white w-full"
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <Link to="/endorse">Endorse</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
