import {
  HiChartBar,
  HiOutlineDeviceMobile,
  HiGlobeAlt,
  HiOutlineServer,
} from "react-icons/hi";
import TitleSection from "../TitleSection";

import { HiOutlineRocketLaunch, HiOutlinePaintBrush } from "react-icons/hi2";

const cards = [
  {
    title: "UI Development",
    icon: <HiOutlinePaintBrush className="size-12 mx-auto" />,
    desc: "I design and develop modern user interfaces using React and Next.js, focusing on performance and seamless user experience.",
  },
  {
    title: "Dynamic Web Development",
    icon: <HiGlobeAlt className="size-12 mx-auto" />,
    desc: "I create interactive websites with real-time data support using Redux and Axios, ensuring smooth and fast performance.",
  },
  {
    title: "Web to Mobile App Conversion",
    icon: <HiOutlineDeviceMobile className="size-12 mx-auto" />,
    desc: "I convert web projects into mobile applications using Capacitor and Expo, with NativeWind support for a fully integrated mobile experience.",
  },
  {
    title: "Database Management",
    icon: <HiOutlineServer className="size-12 mx-auto" />,
    desc: "I design and manage flexible databases using MongoDB and Mongoose, ensuring high responsiveness and secure data storage.",
  },
  {
    title: "Performance & UX Optimization",
    icon: <HiOutlineRocketLaunch className="size-12 mx-auto" />,
    desc: "I improve website and application performance by applying best practices in code optimization, lazy loading, and enhancing UX/UI.",
  },
  {
    title: "Interactive Dashboard Development",
    icon: <HiChartBar className="size-12 mx-auto" />,
    desc: "I develop smart dashboards for data visualization and analytics using Ant Design and Chart.js, with support for drag-and-drop functionality for easy content management.",
  },
];

function Services() {
  return (
    <div className="space-y-8">
      <TitleSection title="The services i offer:" />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
        {cards.map((card, i) => (
          <div
            key={i}
            className="border-2 odd:border-primary even:border-white rounded-xl text-center flex flex-col gap-6 items-center justify-center group py-12 px-6"
          >
            <div className="space-y-2">
              {card.icon}
              <h3 className="font-semibold group-even:text-primary text-2xl">
                {card.title}
              </h3>
            </div>

            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
