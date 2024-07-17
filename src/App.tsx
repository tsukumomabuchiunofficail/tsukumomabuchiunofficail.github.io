import { Component } from "react";
import { Provider } from 'react-redux';
import "./App.css";
import Footer from "./components/footer";
import MesseageBoard from "./components/message-board";
import store from './store';
import { HelmetProvider } from 'react-helmet-async';
import Sakura from "./components/sakura";

class App extends Component {
  componentDidMount() {
    document.documentElement.setAttribute('data-theme', 'wireframe');
  }


  render() {
    return (
      <Provider store={store}>
        <HelmetProvider>
        <div className="relative min-h-screen flex flex-col">
          <div className="background-overlay"></div>
          <main className="relative z-10 flex-grow p-4">
            <Sakura/>
          <MesseageBoard />
          </main>
          <Footer />
        </div>
        </HelmetProvider>
      </Provider>
    );
  }
}

export default App;