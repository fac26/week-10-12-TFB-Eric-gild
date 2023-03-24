import Link from "next/link";
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
  UserIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";

function NavItem({ href, icon: Icon }) {
  return (
    <li className="w-1/5 text-center">
      <Link href={href}>
        <Icon className="h-6 w-6" />
      </Link>
    </li>
  );
}

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 w-full bg-cream border-t border-cream">
      <ul className="flex justify-center items-center h-16">
        <NavItem href="/" icon={HomeIcon} />
        <NavItem href="/" icon={QuestionMarkCircleIcon} />
        <NavItem href="/" icon={MagnifyingGlassIcon} />
        <NavItem href="/" icon={BookmarkIcon} />
        <NavItem href="/" icon={UserIcon} />
      </ul>
    </nav>
  );
}
