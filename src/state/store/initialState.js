const initialState = {
  services: [],
  serviceSearchResults: {},
  query: "",
  appDataFeched: false,
  // appData: {
  //   testimonials: [
  //     {
  //       id: 1,
  //       name: "Maggie Black",
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //       photo: "https://freerangestock.com/sample/114840/a-caucasian-woman-posing-with-a-smile.jpg",
  //       alt: "Maggie Black smiling to the camera"
  //     },
  //     {
  //       id: 2,
  //       name: "Richard Erricson",
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  //       photo: "https://t3.ftcdn.net/jpg/01/15/46/70/360_F_115467073_9hWxkk2M8b4obn3Aq0JW3YDxtYt5nXqn.jpg",
  //       alt: "Richard Erricson smiling to the camera"
  //     }
  //   ],
  //   navigation: {
  //     main_tabs: [
  //       {
  //         label: "home",
  //         link: "/home"
  //       },
  //       {
  //         label: "services",
  //         link: "/services"
  //       },
  //       {
  //         label: "about",
  //         link: "/about/organization"
  //       },
  //       {
  //         label: "news & info",
  //         link: "/info/news"
  //       },
  //       {
  //         label: "contact",
  //         link: "/contact"
  //       }
  //     ],
  //     secondary_tabs: [
  //       {
  //         parent: "about",
  //         label: "organization",
  //         link: "/about/organization"
  //       },
  //       {
  //         parent: "about",
  //         label: "self care",
  //         link: "/about/self_care"
  //       },

  //       {
  //         parent: "news & info",
  //         label: "news",
  //         link: "/info/news"
  //       },
  //       {
  //         parent: "news & info",
  //         label: "information",
  //         link: "/info/information"
  //       }
  //     ]
  //   }
  // }
  appData: {
    testimonials: [],
    navigation: {
      main_tabs: [],
      secondary_tabs: []
    }
  }
}

export default initialState;
