import { Header } from "./components/Header";
import { Tabs } from "./interfaces/Tabs";
import { Home } from './components/Home';
import { About } from './components/About';

const tabs: Tabs[] = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about" },
  { name: "My work", href: "#work" },
  { name: "Contact me", href: "#contact" },
];

function App() {
  return (
    <>
      <Header tabs={tabs} />
      <Home />
      <About />
    </>
  );
}

export default App;
