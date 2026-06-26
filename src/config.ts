/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "示例分类1",
    sites: [
      {
        title: "如形の主页",
        description: "如形的个人主页，提供美观的网页，如博客、文档和各种工具。",
        url: "http://www.rusin7.com/",
        icon: "/favicon.ico",
        color: "#0171CD",
      },
      {
        title: "❄️智能 AI",
        description:
          "❄️ 你好，我是雪域智狐，你的专业 AI 助手。深度思考，简洁回答。有什么可以帮你的？",
        url: "/ai.html",
        icon: "",
      },
      {
        title: "毒鸡汤",
        description: "",
        url: "/dujitang.html",
        icon: "",
      },
      {
        title: "追击",
        description: "弱智的鼠标小游戏",
        url: "/pages/click",
        icon: "",
      },
      {
        title: "代码下载",
        description: "下载我的 C++ 模板代码",
        url: "/pages/code",
        icon: "",
      },
      {
        title: "收藏夹",
        description: "",
        url: "/pages/web",
        icon: "",
      },
    ],
  },
  {
    title: "示例分类2",
  },
  {
    title: "示例分类3",
  },
  {
    title: "示例分类4",
  },
  {
    title: "示例分类5",
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "example",
        description: "",
        url: "https://example.com",
        icon: "https://example.com/favicon.ico",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "如形の小站",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://rusin7.com",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: "/favicon.ico",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/ruying-suixing",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://tab.rusin7.com/images/background2.jpg",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "萌 ICP 备 20268884 号",
  ICP_URL: "https://icp.gov.moe/?keyword=20268884",
  FOOTER_INFO: false,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "如形の项目",
    keywords: "博客, 个人博客, 如形の博客，如形の项目",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
