import Link from 'next/link';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline';

function NavItem({ href, icon: Icon, centralIcon, customIcon }) {
  return (
    <li className={`text-center ${centralIcon ? '' : 'flex-grow'}`}>
      <Link href={href}>
        <div
          className={` flex items-center justify-center ${
            !centralIcon
              ? 'h-6 w-6 mx-auto'
              : 'h-24 w-24 bg-accentcolor3 rounded-full p-2'
          }`}
        >
          {customIcon ? (
            <svg
              width='60'
              height='60'
              viewBox='0 0 60 60'
              className='text-accentcolor2 flex items-center text-3xl font-sans'
            >
              <image href={customIcon} width='60' height='60' />
            </svg>
          ) : (
            <Icon
              className={`text-accentcolor4 ${
                !centralIcon ? 'h-full w-full' : 'h-12 w-12'
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
  const accountType = 'business';

  return (
    <nav className='fixed bottom-0 w-full bg-accentcolor2 border-t'>
      <ul className='flex justify-between items-center h-16 px-4'>
        {!isBusinessPage ? (
          <>
            <NavItem href='/' icon={HomeIcon} data-cy='home' />
            <NavItem
              href='/'
              customIcon={'/question_icon.svg'}
              data-cy='help'
            />
            <NavItem
              href='/find-food'
              icon={MagnifyingGlassIcon}
              centralIcon={centralIcon}
              data-cy='search'
            />
            <NavItem
              href='/reservations-page'
              icon={BookmarkIcon}
              data-cy='bookmark'
            />
            <NavItem href='/sign-out-user' icon={UserIcon} data-cy='profile' />
          </>
        ) : (
          <>
            <NavItem href='/' icon={HomeIcon} />
            <NavItem
              href='/available-food'
              customIcon={'/bowl_icon.svg'}
              centralIcon={centralIcon}
              data-cy='bowl-icon'
            />
            <NavItem href='/vendor-account' icon={UserIcon} />
          </>
        )}
      </ul>
    </nav>
  );
}
