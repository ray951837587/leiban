import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = resolve => require(['@/components/Login'], resolve)
const Index = resolve => require(['@/components/Index'], resolve)
const VersionInfo = resolve => require(['@/components/VersionInfo'], resolve)

const Music = resolve => require(['@/components/Music/Music'], resolve)


const Movie = resolve => require(['@/components/Movie/Movie'], resolve)
const Mfp = resolve => require(['@/components/Movie/MFP'], resolve)
const Page = resolve => require(['@/components/Movie/Page'], resolve)

const Reader = resolve => require(['@/components/Reader/Reader'], resolve)
const Rpage = resolve => require(['@/components/Reader/Rpage'], resolve)
const NTOTlearn = resolve => require(['@/components/Reader/NTOTlearn'], resolve)
const NTOTread = resolve => require(['@/components/Reader/NTOTread'], resolve)
const Thinking = resolve => require(['@/components/Reader/Thinking'], resolve)
const BCYword = resolve => require(['@/components/Reader/BCYword'], resolve)
const AboutMe = resolve => require(['@/components/Reader/AboutMe'], resolve)

const LogInfo = resolve => require(['@/components/Log/LogInfo'], resolve)
const SearchLog = resolve => require(['@/components/Log/SearchLog'], resolve)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/Index',
      component: Index,
      children:[
      {
      	path: '/',
      	name: '首页',
      	component: VersionInfo
      },
      {
      	path: '/Index/Music',
      	name: '音乐',
      	component: Music
      },
      {
      	path: '/Index/Movie',
      	component: Movie,
      	children:[
      	{
      		path: '/',
      		name: '电影',
      		component: Mfp
      	},
      	{
      		path:'/Index/Movie/Page',
      		name: '电影页面',
      		component: Page
      	}
      	]
      },
      {
      	path: '/Index/Reader',
      	component: Reader,
				children:[
				{
					path: '/',
					name: '阅读',
					component: Rpage
				},
				{
					path: '/Index/Reader/learn',
					name: '学海无涯',
					component: NTOTlearn
				},
				{
					path: '/Index/Reader/book',
					name: '书山有路',
					component: NTOTread
				},
				{
					path: '/Index/Reader/think',
					name: '思辨',
					component: Thinking
				},
				{
					path: '/Index/Reader/word',
					name: '慎言',
					component: BCYword
				}
				]
      }
      ]
    },
    {
    	path: '/',
    	name: '登录',
    	component: Login
    },
    {
	  	path: '/LogInfo',
	  	name:'日志信息',
	  	component: LogInfo,
	  	children:[
		  	{
		  		path:"/SearchLog",
		  		component: SearchLog
		  	}
	  	]
	  },
		{
			path: '/me',
			name: '无所求',
			component: AboutMe
		}
  ]
})
