import { bgPrimary } from "@/lib/utils/const";
import { headerAuth, headerMenu } from "./const";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Header = () => {
  return (
    <header
      className={
        "fixed top-7 left-1/2 -translate-x-1/2 inset-x-0 z-50 " + bgPrimary
      }
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Infinity Wave</div>
        <nav className="hidden md:flex space-x-8">
          {headerMenu.map((item) => (
            <a key={item.title} href={item.href} className={item.className}>
              {item.title}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          {headerAuth.map((item) => (
            <a key={item.title} href={item.href} className={item.className}>
              {item.title}
            </a>
          ))}
        </div>
        <div className="md:hidden flex">
          <Popover>
            <PopoverTrigger>
              <GiHamburgerMenu size={32} color="black" />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-y-2">
              <nav className="flex flex-col gap-y-2">
                {headerMenu.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className={item.className}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-y-2">
                {headerAuth.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className={item.className}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};
