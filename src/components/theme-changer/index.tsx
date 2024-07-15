/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component } from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { capitalizeFirstLetter} from '../../shared/helpers/utilties'

const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
    'procyon']

class ThemeChanger extends Component<unknown,{theme:string}> {
  constructor(props:unknown) {
    super(props);
    this.state = {
      theme: 'wireframe', // default theme
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
  }

  handleThemeChange(e: { target: { value: any; }; }) {
    const newTheme = e.target.value;
    document.documentElement.setAttribute('data-theme', newTheme);
    this.setState({ theme: newTheme });
  }

  renderThemes() {
    const res = []
    for(let i=0; i<themes.length; i++) {
        const theme = themes[i];
        res.push( 
            <li>
            <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={capitalizeFirstLetter(theme)}
                value={theme} />
            </li>)
    }

    return res;
  }

  render() {
    return (
        <div className="dropdown mb-72">
        <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
        </div>
        <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
            {this.renderThemes()}
        </ul>
        </div>
    );
  }
}

export default ThemeChanger;