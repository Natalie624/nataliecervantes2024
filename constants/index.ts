import { RxHome, RxPerson, RxDashboard, RxTimer } from "react-icons/rx";
//see https://react-icons.github.io/react-icons/icons/rx/ for all icons

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "GraphQL",
    Image: "/graphql.svg",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Netlify",
    Image: "/Netlify.svg",
    width: 80,
    height: 80,
  },
  {
    name: "PostgreSQL",
    Image: "/postgresql.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Contentful",
    Image: "/contentful.svg",
    width: 65,
    height: 65,
  },
  {
    name: "MySQL",
    Image: "/mysql.png",
    width: 80,
    height: 80,
  },
];

// featured blog post data (based on newest top 4)
export const Blogs = [
  {
    title: "Modern Nextjs Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/NextWebsite.png",
    slug: 1,
  },
  {
    title: "Space Themed Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/SpaceWebsite.png",
    slug: 2,
  },
  {
    title: "Matrix themed Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/Matrix.png",
    slug: 3,
  },
  {
    title: "Placeholder post",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/Matrix.png",
    slug: 4,
  }
];

export const Archive = [
  {
    title: "Archive Blog Placeholder One",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/NextWebsite.png",
    slug: 1,
  },
  {
    title: "Archive Blog Placeholder Two",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/SpaceWebsite.png",
    slug: 2,
  },
]

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/blogs",
    icon: RxDashboard,
    link: "/blogs",
  },
  {
    name: "/blogs/archive",
    icon: RxTimer,
    link: "/blogs/archive",
  },
];