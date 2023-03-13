import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Tabs } from "../interfaces/Tabs";

export const Header = ({ tabs }: { tabs: Tabs[] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex items-center justify-center"
        aria-label="Global"
      >
        {/* Web menu */}
        <div className="window w-full flex justify-center">
          <div className="window-body">
            <div className="flex lg:hidden">
              <button type="button" onClick={() => setMobileMenuOpen(true)}>
                <span className="sr-only">Open main menu</span>Menu
              </button>
            </div>

            <div className="lg:field-row hidden lg:flex">
              {tabs.map((tab) => (
                <button>
                  {" "}
                  <a href={tab.href}>{tab.name}</a>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="window h-screen">
            <div className="title-bar">
              <div className="title-bar-text">Welcome to my Portfolio</div>
              <div className="title-bar-controls">
                <button
                  aria-label="Close"
                  onClick={() => setMobileMenuOpen(false)}
                ></button>
              </div>
            </div>
            <div className="window-body m-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className=" block my-2 py-2 px-3 text-base leading-7 w-1/2"
                >
                  <a href={tab.href}>{tab.name}</a>
                </button>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
