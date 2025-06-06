
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-digital-gray-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media Bill of Rights</h3>
            <p className="text-gray-400">
              Building a movement for digital rights in social media.
              <br /><br />
              This site is produced by <a href="https://www.verse-pbc.org/rabble" target="_blank" rel="noopener noreferrer" className="text-digital-purple-light hover:underline">@rabble</a> and the <a href="https://www.verse-pbc.org" target="_blank" rel="noopener noreferrer" className="text-digital-purple-light hover:underline">Verse Public Benefit Corporation</a>
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
              <li><a href="https://nos.social" target="_blank" rel="noopener noreferrer" className="hover:text-digital-purple-light transition-colors">nos.social (Nostr)</a></li>
              <li><a href="https://nostr.com" target="_blank" rel="noopener noreferrer" className="hover:text-digital-purple-light transition-colors">Nostr</a></li>
              <li><a href="https://bsky.app" target="_blank" rel="noopener noreferrer" className="hover:text-digital-purple-light transition-colors">BlueSky</a></li>
              <li><a href="https://signal.org" target="_blank" rel="noopener noreferrer" className="hover:text-digital-purple-light transition-colors">Signal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <Button
              className="bg-digital-purple-light hover:bg-digital-purple-light/90"
              asChild
            >
              <a href="https://dashboard.mailerlite.com/forms/1225308/150286925399328477/share" target="_blank" rel="noopener noreferrer">
                Join Our Newsletter
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Social Media Bill of Rights. All content licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer" className="text-digital-purple-light hover:underline">CC0 1.0 Universal (CC0 1.0) Public Domain Dedication</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
