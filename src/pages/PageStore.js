import React from "react";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import WhyWeLoveYoga from "./WhyWeLoveYoga";
import JoinIn from "../pages/JoinIn";
import homeImg1 from "../images/home-1.jpg";
import homeImg1Small from "../images/home-1-small.jpg";
import landingImg2 from "../images/gladfest-02.jpg";
import landingImg3 from "../images/gladfest-03.jpg";
import landingImg5 from "../images/gladfest-05.jpg";
import landingImg2Small from "../images/gladfest-02-small.jpg";
import landingImg3Small from "../images/gladfest-03-small.jpg";
import landingImg5Small from "../images/gladfest-05-small.jpg";

const home = {
  component: <Home />,
  title: "Pyramid Adventures",
  subtitle: "Lucy Kingsley - Creative Catalyst",
  img: homeImg1,
  imgSmall: homeImg1Small,
  fullPage: true,
  feedbackTransparent: true,
  feedback: [
    {
      quote: "Lucy is a truly exceptional and inspirational yoga teacher.",
      author: "Primary school teacher",
    },
    {
      quote:
        "Lucy’s ability to capture the imagination of the children of many ages was quite staggering.",
      author: "Gladstone's Library on Gladfest",
    },
    {
      quote:
        "I never would have believed I would be dancing round a field with a baby until I met you!",
      author: "Mother from Invisible Thread project with Can't Sit Still Theatre Company",
    },
    {
      quote:
        "She has a fantastic ability to connect with the pupils who are often asking when she will return!",
      author: "Primary school teacher",
    },
    {
      quote:
        "Yoga storytelling for children from Pyramid Adventures is going online and Lucy is incredible!",
      author: "Carly from Project Happy Body",
    },
  ],
};

const pages = {
  "/about-us": {
    component: <AboutUs />,
    title: "Our Story",
    menuTitle: "Our Story",
    img: landingImg5,
    imgSmall: landingImg5Small,
    feedbackTransparent: false,
    feedback: [
      {
        quote: "Lucy is a truly exceptional and inspirational yoga teacher.",
        author: "Primary school teacher",
      },
      {
        quote:
          "Lucy’s ability to capture the imagination of the children of many ages was quite staggering.",
        author: "Gladstone's Library on Gladfest",
      },
      {
        quote:
        "I never would have believed I would be dancing round a field with a baby until I met you!",
      author: "Mother from Invisible Thread project with Can't Sit Still Theatre Company",
      },
      {
        quote:
          "She has a fantastic ability to connect with the pupils who are often asking when she will return!",
        author: "Primary school teacher",
      },
      {
        quote:
          "Yoga storytelling for children from Pyramid Adventures is going online and Lucy is incredible!",
        author: "Carly from Project Happy Body",
      },
    ],
  },
  "/why-we-love-yoga": {
    component: <WhyWeLoveYoga />,
    title: "Why We Love Yoga",
    subtitle: "",
    menuTitle: "Why We Love Yoga",
    img: landingImg2,
    imgSmall: landingImg2Small,
    feedbackTransparent: false,
    feedback: [
      {
        quote: "Lucy is a truly exceptional and inspirational yoga teacher.",
        author: "Primary school teacher",
      },
      {
        quote:
          "Lucy’s ability to capture the imagination of the children of many ages was quite staggering.",
        author: "Gladstone's Library on Gladfest",
      },
      {
        quote:
        "I never would have believed I would be dancing round a field with a baby until I met you!",
      author: "Mother from Invisible Thread project with Can't Sit Still Theatre Company",
      },
      {
        quote:
          "She has a fantastic ability to connect with the pupils who are often asking when she will return!",
        author: "Primary school teacher",
      },
      {
        quote:
          "Yoga storytelling for children from Pyramid Adventures is going online and Lucy is incredible!",
        author: "Carly from Project Happy Body",
      },
    ],
  },
  "/join-in": {
    component: <JoinIn />,
    title: "Join In",
    subtitle: "Get some yoga magic into your setting!",
    menuTitle: "Join In",
    img: landingImg3,
    imgSmall: landingImg3Small,
    feedbackTransparent: false,
    feedback: [
      {
        quote: "Lucy is a truly exceptional and inspirational yoga teacher.",
        author: "Primary school teacher",
      },
      {
        quote:
          "Lucy’s ability to capture the imagination of the children of many ages was quite staggering.",
        author: "Gladstone's Library on Gladfest",
      },
      {
        quote:
        "I never would have believed I would be dancing round a field with a baby until I met you!",
      author: "Mother from Invisible Thread project with Can't Sit Still Theatre Company",
      },
      {
        quote:
          "She has a fantastic ability to connect with the pupils who are often asking when she will return!",
        author: "Primary school teacher",
      },
      {
        quote:
          "Yoga storytelling for children from Pyramid Adventures is going online and Lucy is incredible!",
        author: "Carly from Project Happy Body",
      },
    ],
  },
  "/index.html": home,
  "/index": home,
  "/": home,
};

class PageStore {
  currentPage = null;
  update = (path) => {
    this.currentPage = pages[path];
    return this.currentPage.component;
  };
  getCurrentPage = () => {
    const page = this.currentPage || pages["/"];
    return page;
  };
  getPaths = () => {
    return Object.keys(pages);
  };
  getPage = (path) => {
    return pages[path];
  };
}

const store = new PageStore();

export default store;
