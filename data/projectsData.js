import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: '搜索之道',
		url: 'google-health-platform',
		category: '聚合多引擎搜索与实时天气，支持自定义导航，打造高效搜索体验',
		img: '/images/search-way.png',
		ProjectHeader: {
			title: '搜索之道',
			publishDate: 'baozi 2025',
			tags: 'Web & Chrome',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: '搜索引擎',
				img: '/images/search-way.png',
			},
			{
				id: uuidv4(),
				title: '天气工具',
				img: '/images/weather-1.png',
			},
			{
				id: uuidv4(),
				title: '自定义图标组件',
				img: '/images/custom-icon-1.png',
			},
		],
		ProjectInfo: {
			ClientHeading: '简介',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: '名称',
					details: '搜索之道',
				},
				{
					id: uuidv4(),
					title: '服务',
					details: '搜索 / 组件 / 工具',
				},
			],
			ObjectivesHeading: '功能',
			ObjectivesDetails:
				'内置丰富的搜索引擎，包含网页、地图、技术等，提供极致的搜索服务；包含各种实用工具，如天气，可自定义图标导航。',
			// Technologies: [
			// 	{
			// 		title: 'Tools & Technologies',
			// 		techs: [
			// 			'HTML',
			// 			'CSS',
			// 			'JavaScript',
			// 			'Vue.js',
			// 			'TailwindCSS',
			// 			'AdobeXD',
			// 		],
			// 	},
			// ],
			ProjectDetailsHeading: '详情',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'多标签搜索引擎服务：提供在不同标签下匹配不同网站的搜索引擎，能够便捷迅速地查找检索信息，满足用户多样化的搜索需求。',
				},
				{
					id: uuidv4(),
					details:
						'天气查询与记录服务：通过搜索可快捷获取某地的天气展示，并能记录搜索历史，方便用户随时查看和回顾。',
				},
				{
					id: uuidv4(),
					details:
						'自定义功能图标服务：支持自定义功能图标，用户可记录图标链接、名称、颜色等定制化信息，打造个性化的使用体验。',
				},

			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/Yuanjing',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/Yuanjing',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/Yuanjing',
			// 	},
			// ],
		},
	},
	{
		id: 2,
		title: '命令速查',
		url: 'phoenix-digital-agency',
		category: '聚合主流开发技术栈的完整命令集，支持精准检索与高亮定位',
		img: '/images/about-oracle.png',
		ProjectHeader: {
			title: '命令速查',
			publishDate: 'baozi 2025',
			tags: 'Web & Chrome',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/about-oracle-1.png',
			},
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/about-oracle-2.png',
			},
		],
		ProjectInfo: {
			ClientHeading: '简介',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: '名称',
					details: '命令速查',
				},
				{
					id: uuidv4(),
					title: '服务',
					details: '技术/查找/工具',
				},
			],
			ObjectivesHeading: '功能',
			ObjectivesDetails:
				'技术栈命令行速查，智能模糊搜索，精准高亮匹配，一键滚动定位，节省时间，高效开发。',
			// Technologies: [
			// 	{
			// 		title: 'Tools & Technologies',
			// 		techs: [
			// 			'HTML',
			// 			'CSS',
			// 			'JavaScript',
			// 			'Vue.js',
			// 			'TailwindCSS',
			// 			'AdobeXD',
			// 		],
			// 	},
			// ],
			ProjectDetailsHeading: '详情',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'常见技术栈命令行速查表：提供Git、Docker、Python等常见技术栈的常用命令，方便开发者快速查询和使用，是开发过程中的实用参考。'
				},
				{
					id: uuidv4(),
					details:
						'便捷命令行工具：支持模糊查询、高光标识匹配命令、滚动定位命令等功能，可有效节省命令查询时间，提升操作时的便捷性和效率。'
				},
			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/Yuanjing',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/Yuanjing',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/Yuanjing',
			// 	},
			// ],
		},
	},
	{
		id: 3,
		title: '科院导航',
		url: 'project-management-ui',
		category: '提供精选AI资源、学习平台及在线工具等一站式快捷导航，优化学习与工作效率',
		img: '/images/school-navigation.png',
		ProjectHeader: {
			title: '科院导航',
			publishDate: 'baozi 2025',
			tags: 'Web & Chrome',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/school-navigation.png',
			},
		],
		ProjectInfo: {
			ClientHeading: '简介',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: '名称',
					details: '科院导航',
				},
				{
					id: uuidv4(),
					title: '服务',
					details: '学校/导航',
				},
			],
			ObjectivesHeading: '功能',
			ObjectivesDetails:
				'一个集中式的资源导航平台，以便学校的学生和教师能够高效地获取常用信息和工具。',
			// Technologies: [
			// 	{
			// 		title: 'Tools & Technologies',
			// 		techs: [
			// 			'HTML',
			// 			'CSS',
			// 			'JavaScript',
			// 			'Vue.js',
			// 			'TailwindCSS',
			// 			'AdobeXD',
			// 		],
			// 	},
			// ],
			ProjectDetailsHeading: '详情',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'更清晰地呈现学校集中常用的网页及功能，以便学校学生或教师能够方便快捷地使用，同时整合一系列AI工具便于提问回答。'
				},

			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/Yuanjing',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/Yuanjing',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/Yuanjing',
			// 	},
			// ],
		},
	},
	{
		id: 4,
		title: '分类教程',
		url: 'cloud-storage-platform',
		category: '汇聚全栈技术知识库，支持个性化收藏与智能检索，赋能开发者技术成长与职业进阶',
		img: '/images/classified-course.png',
		ProjectHeader: {
			title: '分类教程',
			publishDate: 'baozi 2025',
			tags: 'Web & Chrome',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: '分类教程',
				img: '/images/classified-course.png',
			},
		],
		ProjectInfo: {
			ClientHeading: '简介',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: '名称',
					details: '分类教程',
				},
				{
					id: uuidv4(),
					title: '服务',
					details: '技术/开发教程',
				},
			],
			ObjectivesHeading: '功能',
			ObjectivesDetails:
				'瀑布流展示常见技术栈开发文档',
			// Technologies: [
			// 	{
			// 		title: 'Tools & Technologies',
			// 		techs: [
			// 			'HTML',
			// 			'CSS',
			// 			'JavaScript',
			// 			'Vue.js',
			// 			'TailwindCSS',
			// 			'AdobeXD',
			// 		],
			// 	},
			// ],
			ProjectDetailsHeading: '详情',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'瀑布式布局：采用瀑布流形式呈现各类技术栈开发文档及介绍，页面从上至下依次排列，用户在浏览时能一目了然地获取关键内容，且视觉体验舒适自然。'
				},
				{
					id: uuidv4(),
					details:
						'快速访问：为每份文档提供直接访问链接，用户只需轻轻一点，即可瞬间跳转至目标文档页面，无需繁琐操作，大大节省查找时间，有效提升学习与工作效率。',
				},
				{
					id: uuidv4(),
					details:
						'收藏和分类展示：界面顶部设有清晰明确的 Tab 分类标签，一键即可添加至个人收藏夹，满足个性化学习与工作需求。',
				},
			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/Yuanjing',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/Yuanjing',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/Yuanjing',
			// 	},
			// ],
		},
	},
	{
		id: 5,
		title: '沉浸式页面',
		url: 'wetalk-social-app',
		category: '沉浸式动态时钟界面，描绘多彩励志诗篇，每秒都在书写当下',
		img: '/images/immersive-page.png',
		ProjectHeader: {
			title: '沉浸式页面',
			publishDate: 'baozi 2025',
			tags: 'Web & Chrome',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'WeTalk Social Application',
				img: '/images/immersive-page.png',
			},
		],
		ProjectInfo: {
			ClientHeading: '简介',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: '名称',
					details: '沉浸式页面',
				},
				{
					id: uuidv4(),
					title: '服务',
					details: '时钟/沉浸/文案',
				},
			],
			ObjectivesHeading: '功能',
			ObjectivesDetails:
				'精准展示时间和日期，附有每日一言激励启发我们的成长。',
			// Technologies: [
			// 	{
			// 		title: 'Tools & Technologies',
			// 		techs: [
			// 			'HTML',
			// 			'CSS',
			// 			'JavaScript',
			// 			'Vue.js',
			// 			'TailwindCSS',
			// 			'AdobeXD',
			// 		],
			// 	},
			// ],
			ProjectDetailsHeading: '详情',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'时钟：采用精美仿真设计，时钟样式随时间动态变化，精准显示每一刻的流逝。详细日期一目了然，年、月、日、星期尽在掌握。'
				},
				{
					id: uuidv4(),
					details:
						'每日一言：提供精心挑选的激励语句，为每一天注入正能量。支持便捷的更换与复制功能，方便用户获取灵感、记录感悟。'
				},
			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/Yuanjing',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/Yuanjing',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/Yuanjing',
			// 	},
			// ],
		},
	},
	{
		id: 6,
		title: '番茄钟',
		url: 'apple-new-design-system',
		category: '开启番茄钟，聆听沉浸式背景音乐，定时学习，让每一秒都为高效时光添彩',
		img: '/images/pomodoro.png',
		ProjectHeader: {
			title: '番茄钟',
			publishDate: 'shuobo 2025',
			tags: 'Web & Chrome',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: '番茄钟',
				img: '/images/pomodoro.png',
			},
			{
				id: uuidv4(),
				title: '番茄钟',
				img: '/images/pomodoro-2.png',
			},
		],
		ProjectInfo: {
			ClientHeading: '简介',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: '名称',
					details: '番茄钟',
				},
				{
					id: uuidv4(),
					title: '服务',
					details: '倒计时/专注/音乐',
				},
			],
			ObjectivesHeading: '功能',
			ObjectivesDetails:
				'设定专注或者休息时间，附有倒计时动画，同时背景播放可控专注式白噪音。',
			// Technologies: [
			// 	{
			// 		title: 'Tools & Technologies',
			// 		techs: [
			// 			'HTML',
			// 			'CSS',
			// 			'JavaScript',
			// 			'Vue.js',
			// 			'TailwindCSS',
			// 			'AdobeXD',
			// 		],
			// 	},
			// ],
			ProjectDetailsHeading: '详情',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'倒计时动画：采用动态视觉设计，随着时间流逝，动画同步推进，让时间流动可感可知，增强时间管理意识。',
				},
				{
					id: uuidv4(),
					details:
						'专注式白噪音：用户可自行调节音量、切换不同音效，实现真正意义上的个性化沉浸体验，提升专注度或放松效果。',
				},
			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/Yuanjing',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/Yuanjing',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/Yuanjing',
			// 	},
			// ],
		},
	},
];
