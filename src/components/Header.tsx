import { useState } from "react";
import { Dialog } from "@headlessui/react";
import "98.css";
import { Tabs } from "../interfaces/Tabs";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const Header = ({ tabs }: { tabs: Tabs[] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex  items-center justify-center"
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

            <div className="field-row hidden lg:flex">
              {tabs.map((tab) => (
                <button>
                  {" "}
                  <span> {tab.name} </span>{" "}
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
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-red-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>X
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {tabs.map((tab, index) => (
                  <a
                    key={index}
                    href={tab.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {tab.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
