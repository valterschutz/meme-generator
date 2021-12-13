import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

export default function App() {
  return React.createElement(
    'div',
    { className: 'app' },
    React.createElement(Header, null),
    React.createElement(Main, null),
    React.createElement(Footer, null)
  );
}