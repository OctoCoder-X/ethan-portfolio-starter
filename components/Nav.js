// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router'

// ... (other imports)

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-2 md:px-8 xl-px-0 h-[80px] xl:h-max py-4 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full border-t-2 border-b-2 border-white">
        {navData.map((link, index) => (
          <Link key={index} href={link.path}>

            {/* tooltip */}
            <div className='absolute pr-14 right-0 hidden group-hover:flex'>
            <div className='bg-white relative flex text-primary items-center p-[6px]'>
            <div className='text-[12px]'>{link.name}</div>
              </div>
            </div>
            {/* icon */}
            <div className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}>
              {link.icon}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};



export default Nav;