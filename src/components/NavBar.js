import Link from "next/link";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";

function NavItem({ href, icon: Icon, centralIcon, textIcon }) {
  return (
    <li className={`text-center ${centralIcon ? "" : "flex-grow"}`}>
      <Link href={href}>
        <div
          className={` flex items-center justify-center ${
            !centralIcon
              ? "h-6 w-6 mx-auto"
              : "h-24 w-24 bg-cream rounded-full p-2"
          }`}
        >
          {textIcon ? (
            <span className="text-purple flex items-center text-3xl font-sans">
              {textIcon}
            </span>
          ) : (
            <Icon
              className={`text-purple ${
                !centralIcon ? "h-full w-full" : "h-12 w-12"
              }`}
            />
          )}
        </div>
      </Link>
    </li>
  );
}

export default function NavBar() {
  const centralIcon = true;
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t">
      <ul className="flex justify-between items-center h-16 px-4">
        <NavItem href="/" icon={HomeIcon} />
        <NavItem href="/" textIcon="?" />
        <NavItem
          href="/"
          icon={MagnifyingGlassIcon}
          centralIcon={centralIcon}
        />
        <NavItem href="/" icon={BookmarkIcon} />
        <NavItem href="/" icon={UserIcon} />
      </ul>
    </nav>
  );
}
