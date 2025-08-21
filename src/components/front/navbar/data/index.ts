export type NavbarItem = {
  title: string;
  path: string;
  children?: NavbarItem[];
};


export const navbarData : NavbarItem[] = [
  {
    title: "Adsqoo",
    path: "#",
    children: [
      {
        title: "About Us",
        path: "/about-us",
      },
      {
        title: "Contact Us",
        path: "/contact-us",
      },
      {
        title: "FAQ & Help",
        path: "/frequently-asked-questions",
      },
    ],
  },
  {
    title: "Product",
    path: "#",
    children: [
     
      {
        title: "Messaging Services",
        path: "#",
        children: [
          {
            title: "SMS Advertising",
            path: "/sms-advertising",
          },
          {
            title: "Whatsapp Business Platform",
            path: "/whatsapp-business",
          },
          {
            title: "Whatsapp Blast Tertarget",
            path: "/whatsapp-blast-tertarget",
          },
        ],
      },
      {
        title: "Online Services",
        // path: "/online-advertising",
        path: "#",
        children: [
          {
            title: "Online Advertising (Meta,Tiktok,GoogleAds)",
            path: "/online-advertising",
          },
          {
            title: "Programmatic AdXelerate",
            path: "/programmatic-adxelerate",
          },
          {
            title: "Push Notification",
            path: "/push-notification",
          },
        ],
      },
      {
        title: "Outdoor Advertising",
        path: "/outdoor-advertising",
      },
      
      // {
      //   title: "Programmatic Ads (Contact Us)",
      //   path: "/contact-us",
      // },
    ],
  },
  {
    title: "Solution",
    path: "#",
    children: [
      
      {
        title: "Performance Marketing",
        path: "#",
        children: [
          {
            title: "Lead Generation",
            path: "/performance-marketing/lead-generation",
          },
          {
            title: "Social Media Management",
            path: "/performance-marketing/social-media-management",
          },
        ],
      },
    ],
  },
  { title: "Blog", path: "/blog" },
  // {
  //   title: "Promo",
  //   path: "#",
  //   children: [{ title: "Promo Merdeka", path: "/promo-merdeka" }],
  // },
  { title: "Affiliate", path: "/affiliate" },
  { title: "Tutorial", path: "/tutorial" },
];
