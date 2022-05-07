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
    title: 'gorilla',
    path: '/dashboard/gorilla',
    icon: <Iconify icon="noto:gorilla" width={22} height={22} color="white" hFlip={true} />,
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
