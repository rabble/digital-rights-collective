
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-digital-gray-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media Bill of Rights</h3>
            <p className="text-gray-400">
              Building a movement for digital rights in social media.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-digital-purple-light transition-colors">Home</Link></li>
              <li><Link to="/bill-of-rights" className="hover:text-digital-purple-light transition-colors">Bill of Rights</Link></li>
              <li><Link to="/platform-comparison" className="hover:text-digital-purple-light transition-colors">Platform Comparison</Link></li>
              <li><Link to="/resources" className="hover:text-digital-purple-light transition-colors">Resources</Link></li>
              <li><Link to="/faq" className="hover:text-digital-purple-light transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="hover:text-digital-purple-light transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Open Protocols</h4>
            <ul className="space-y-2">
              <li><a href="https://joinmastodon.org" target="_blank" rel="noopener noreferrer" className="hover:text-digital-purple-light transition-colors">Mastodon/Fediverse</a></li>
              <li><a href="https://nostr.com" target="_blank" rel="noopener noreferrer" className="hover:text-digital-purple-light transition-colors">Nostr</a></li>
              <li><a href="https://bsky.app" target="_blank" rel="noopener noreferrer" className="hover:text-digital-purple-light transition-colors">BlueSky</a></li>
              <li><a href="https://signal.org" target="_blank" rel="noopener noreferrer" className="hover:text-digital-purple-light transition-colors">Signal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white hover:text-digital-purple-light transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-digital-purple-light transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-digital-purple-light transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <form className="space-y-2">
              <p className="text-sm text-gray-400">Subscribe to our newsletter</p>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 bg-digital-gray-medium text-white rounded focus:outline-none focus:ring-2 focus:ring-digital-purple"
              />
              <button 
                type="submit" 
                className="w-full bg-digital-purple hover:bg-digital-purple-dark transition-colors py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Social Media Bill of Rights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
