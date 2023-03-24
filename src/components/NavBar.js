import Link from "next/link";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

function NavItem({ href, icon: Icon, centralIcon, customIcon }) {
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
          {customIcon ? (
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              class="text-purple flex items-center text-3xl font-sans"
            >
              <image href={customIcon} width="60" height="60" />
            </svg>
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

export default function NavBar({ isBusinessPage }) {
  const centralIcon = true;
  const accountType = "business";

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t">
      <ul className="flex justify-between items-center h-16 px-4">
        {!isBusinessPage ? (
          <>
            <NavItem href="/" icon={HomeIcon} />
            <NavItem href="/" customIcon={"/question_icon.svg"} />
            <NavItem
              href="/"
              icon={MagnifyingGlassIcon}
              centralIcon={centralIcon}
            />
            <NavItem href="/" icon={BookmarkIcon} />
            <NavItem href="/" icon={UserIcon} />
          </>
        ) : (
          <>
            <NavItem href="/" icon={HomeIcon} />
            <NavItem
              href="/"
              customIcon={"/bowl_icon.svg"}
              centralIcon={centralIcon}
            />
            <NavItem href="/" icon={UserIcon} />
          </>
        )}
      </ul>
    </nav>
  );
}
