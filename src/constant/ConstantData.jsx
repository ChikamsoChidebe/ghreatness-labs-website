
// Below code are the import icons from Lucide
import { Award, Globe, Users, Facebook,  Instagram, 
  Twitter,   Youtube
} from "lucide-react";
import mobileIllustration from "../assets/mobileIllustration.jpg";
import securityImg from "../assets/securityImg.jpg";
import webIllustration from "../assets/webIllustration.jpg";
import uiIllustration from "../assets/uiIllustration.png"
import athlegame from "../assets/athlegame.png";
import misplaceMe from "../assets/misplaceMe.png"
import univyx from "../assets/univyx.png";
import { Route } from "react-router-dom";
  



// Start of stats Object
export const stats = [
    {
      label: "Leading The Change In Tech Innovation",
      value: "",
      icon: Award,
      color: "text-blue-600",
    },
    {
      label: "million users worldwide",
      value: "10.5",
      icon: Globe,
      color: "text-emerald-600",
    },
    {
      label: "industry experts",
      value: "50",
      icon: Users,
      color: "text-purple-600",
    },
    {
      label: "years of experience",
      value: "2",
      icon: Award,
      color: "text-orange-600",
    },
];
// End of stats Object


// Start of Service Object
export const services = [
    {
      title: "UI/UX Design",
      description: "User experience is at the core of our design process. ",
      image: uiIllustration,
      bgColor: "bg-blue-50",
      href: <Route path="/services"  />,
    },
    {
      title: "Web Development",
      description: "We develop high-performance, secure, and scalable websites that serve as a strong digital foundation for businesses. ",
      image: webIllustration,
      bgColor: "bg-purple-50",
      href: <Route path="/services" />,
    },
    {
      title: "Security Solutions",
      description: "With the growing risks of cyber threats, we provide robust cybersecurity solutions to protect your digital assets",
      image: securityImg,
      bgColor: "bg-green-50",
      href: <Route path="/services"  />,
    },
    {
      title: "Mobile Development",
      description: "We specialize in designing visually appealing, responsive, and user-friendly websites",
      image: mobileIllustration,
      bgColor: "bg-orange-50",
      href: <Route path="/services"  />,
    },
];
// End of Service Object


// Start of Case Study Obeject

export const caseStudies = [
  {
    id: 1,
    title: "misplaceMe",
    logo: misplaceMe,
    description: "Innovative solutions for modern challenges",
    image: misplaceMe,
    category: "Mobile App",
    stats: { users: "50K+", rating: "4.8" },
  },
  {
    id: 2,
    title: "univyx",
    logo: univyx,
    description: "Transforming user experiences",
    image: univyx,
    category: "Web Platform",
    stats: { users: "100K+", rating: "4.9" },
  },
  {
    id: 3,
    title: "athlegame",
    logo: athlegame,
    description: "Building scalable solutions",
    image: athlegame,
    category: "Desktop App",
    stats: { users: "75K+", rating: "4.7" },
  },
];

// End of Case Study Obeject


// Start of OurService Object
export  const ourservices = [
  {
    title: "UI/UX DESIGN",
    description:
      "User experience is at the core of our design process. We create intuitive and engaging user interfaces (UI) that enhance the overall user experience (UX). Through research, wireframing, prototyping, and testing, we develop interfaces that are visually appealing, accessible, and easy to use..",
    image: uiIllustration,
  },
  {
    title: "FRONTEND DEVELOPMENT",
    description:
      "We specialize in designing visually appealing, responsive, and user-friendly websites that not only capture attention but also drive conversions. Our designs prioritize functionality, aesthetics, and seamless navigation to ensure an exceptional user experience..",
    image: webIllustration,
  },
  {
    title: "BACKEND DEVELOPMENT",
    description:
      "We build customized software solutions that align with the unique needs of businesses. Whether it's a web application, mobile app, or enterprise software, our development process focuses on functionality, scalability, and efficiency to improve business operations and productivity..",
    image: webIllustration,
  },
  {
    title: "CYBER SECURITY",
    description:
      "With the growing risks of cyber threats, we provide robust cybersecurity solutions to protect your digital assets. Our services include network security, data encryption, vulnerability assessments, and threat mitigation strategies to safeguard sensitive business and customer data..",
    image: securityImg,
  },
];
// End of OurService Object


// Start of Social Media Object
export const social = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/ghreatness",
  },
  {
    icon: Twitter,
    href:" https://x.com/ghreatnesslabs",
  },
  {
    icon: Youtube, 
    href: "https://youtube.com/@ghreatnesslaboratory?si=OjzZDdeZC6bVH8h7",
  },
  {
    icon: Instagram, 
    href: "https://www.instagram.com/ghreatnesslabs",
  },
];
// End of Social Media Object

 