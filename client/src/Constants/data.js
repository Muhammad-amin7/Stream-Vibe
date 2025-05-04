import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import category1 from '../assets/Category (1).png'
import category2 from '../assets/Category (2).png'
import category3 from '../assets/Category (3).png'
import category4 from '../assets/Category (4).png'
import category5 from '../assets/Category (5).png'

export const categoriesdata = [
      { id: 1, img: category1, name: "Horror" },
      { id: 2, img: category2, name: "Adventure" },
      { id: 3, img: category3, name: "Comedy" },
      { id: 4, img: category4, name: "Action" },
      { id: 5, img: category5, name: "Drama" },
      // clones
      { id: 31, img: category3, name: "Comedy" },
      { id: 21, img: category2, name: "Adventure" },
      { id: 51, img: category5, name: "Drama" },
      { id: 41, img: category4, name: "Action" },
      { id: 11, img: category1, name: "Horror" },

      { id: 22, img: category2, name: "Adventure" },
      { id: 12, img: category1, name: "Horror" },
      { id: 42, img: category4, name: "Action" },
      { id: 32, img: category3, name: "Comedy" },
      { id: 52, img: category5, name: "Drama" },

      { id: 320, img: category3, name: "Comedy" },
      { id: 220, img: category2, name: "Adventure" },
      { id: 420, img: category4, name: "Action" },
      { id: 520, img: category5, name: "Drama" },
      { id: 120, img: category1, name: "Horror" },
];

import { FaFacebookF } from "react-icons/fa";

export const footerMenues = [
      {
            id: 0,
            title: "Home",
            items: [
                  {
                        id: 0,
                        title: "Categories",
                        path: "/#categories"
                  },
                  {
                        id: 1,
                        title: "Devices",
                        path: "/#devices"
                  },
                  {
                        id: 2,
                        title: "Pricing",
                        path: "/#pricing"
                  },
                  {
                        id: 3,
                        title: "FAQ",
                        path: "/#faq"
                  },
            ]
      },
      {
            id: 1,
            title: "Movies",
            items: [
                  {
                        id: 0,
                        title: "Gernes",
                        path: "/movies#gernes"
                  },
                  {
                        id: 1,
                        title: "Trending",
                        path: "/movies#trending"
                  },
                  {
                        id: 2,
                        title: "New Release",
                        path: "/movies#newRelease"
                  },
                  {
                        id: 3,
                        title: "Popular",
                        path: "/movies#popular"
                  },
            ]
      },
      {
            id: 2,
            title: "Support",
            items: [
                  {
                        id: 0,
                        title: "Contact Us",
                        path: "/support#contact"
                  }
            ]
      },
      {
            id: 3,
            title: "Subscription",
            items: [
                  {
                        id: 0,
                        title: "Plans",
                        path: "/subscription#plans"
                  },
                  {
                        id: 1,
                        title: "Features",
                        path: "/subscription#trending"
                  }
            ]
      },
]

export const contacts = [
      { id: 0, title: "facebook", Icon: FaFacebookF },
      { id: 1, title: "Twitter", Icon: BsTwitter },
      { id: 2, title: "Linkedin", Icon: AiFillLinkedin },
]
