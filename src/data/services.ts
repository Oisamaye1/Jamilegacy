import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    icons: [
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "We build visually stunning and user-friendly websites.",
    description:
      "We deliver stunning, user-friendly websites to establish your online presence. From simple sites to complex e-commerce platforms, I provide tailored solutions using the latest frameworks and technologies for a seamless, responsive, and SEO-friendly browsing experience. Enhance your online identity with quality.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    icons: [
      "/skills/dart.svg",
      "/skills/flutter.svg",
      "/skills/firebase.svg",
      "/skills/native.png",
    ],
    shortDescription:
      "We create engaging mobile applications for your audience.",
    description:
      "We create captivating mobile apps from concept to deployment for iOS and Android. Using cutting-edge technologies, I ensure seamless performance, intuitive interfaces, and robust functionality that align with your business goals. Enjoy a flawless user experience and outstanding results.",
  },
  
  {
    id: 3,
    title: "Backend Development",
    icons: [
      "/skills/django.png",
      "/skills/flask.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I enhance digital applications with robust, scalable backend infrastructures. I develop efficient database structures, APIs, and configure servers for optimal performance, security, and scalability, ensuring your applications handle high traffic and complex data management seamlessly. Rely on strong backend solutions.",
  },
  {
    id: 4,
    title: "Graphics Design",
    icons: [
      "/skills/illustrator.svg",
      "/skills/photoshop.svg",
      "/skills/canva.svg",
      "/skills/figma.svg",
    ],
    shortDescription:
      "We design beautiful and captivating graphics",
    description:
      "We bring your grapgics design fantasies to reality, ranging from social media posters, flyers, logos, banners and much more.",
  },
];

export default services;
