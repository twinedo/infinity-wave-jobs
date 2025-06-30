import { bgPrimary } from "@/lib/utils/const";
import { headerAuth, headerMenu } from "./const";

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
        <div className="flex items-center space-x-4">
          {headerAuth.map((item) => (
            <a key={item.title} href={item.href} className={item.className}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
