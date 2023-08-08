import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <nav>
      <div className="flex-between fixed top-0 z-30 w-full py-6">
        <div className="flex-between m-auto w-5/6">
          <div className="flex-between gap-16">
            {/* LEFT SIDE */}
            <img src={Logo} alt="Logo" />

            {/* RIGHT SIDE */}
            <div className="flex-between w-full gap-16">
              <div className="flex-between gap-8 text-sm">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex-between gap-8">
                <p>Sing In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
