import { Header } from "./components/Header";
import { Tabs } from "./interfaces/Tabs";

const tabs: Tabs[] = [
  { name: "Home", href: "#" },
  { name: "About me", href: "#" },
  { name: "My work", href: "#" },
  { name: "Contact me", href: "#" },
];

function App() {
  return (
    <>
      <Header tabs={tabs} />
    </>
  );
}

export default App;
