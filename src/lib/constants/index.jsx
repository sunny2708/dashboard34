import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Transactions',
		label: 'Transactions',
		path: '/Transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'Schedules',
		label: 'Schedules',
		path: '/Schedules',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'User',
		label: 'User',
		path: '/User',
		icon: <HiOutlineUsers />
	},
	
	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
