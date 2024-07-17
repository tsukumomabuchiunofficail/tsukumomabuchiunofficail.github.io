import { Component } from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { FaDiscord } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
        <footer className="relative z-10 p-4 bg-black bg-opacity-60 text-white">
          <div className="text-center">
            <div className="mt-2">
            <a href="#" className="btn btn-primary mx-2"><FaDiscord />真淵家的貨架</a>
          <div className="mt-2">
          <p>© 2024 TsukumoMabuchi, Unoffical club and Creator `PKC`. All rights reserved.</p>
          </div>
            </div>
          </div>
        </footer>
        
    );
  }
}

export default Footer;