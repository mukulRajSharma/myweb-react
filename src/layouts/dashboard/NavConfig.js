// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'about me',
    path: '/dashboard/about',
    icon: getIcon('eva:person-fill'),
  },
  {
    title: 'education',
    path: '/dashboard/education',
    icon: getIcon('eva:book-open-fill'),
  },
  {
    title: 'work',
    path: '/dashboard/work',
    icon: getIcon('la:hammer'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon('la:pen'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  {
    title: 'Sandbox',
    path: '/dashboard/sandbox',
    icon: getIcon('bx:code-alt'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
