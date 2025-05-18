import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="bg-white border-t py-10 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-2">LOGO</h3>
          <div className="flex space-x-3 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaInstagram className="cursor-pointer hover:text-pink-600" />
            <FaYoutube className="cursor-pointer hover:text-red-600" />
            <FaLinkedin className="cursor-pointer hover:text-blue-800" />
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Use cases</h4>
          <ul className="space-y-1">
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-1">
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
            <li>Color wheel</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource library</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
