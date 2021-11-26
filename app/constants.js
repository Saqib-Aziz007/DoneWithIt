export const colors = {
  primary: 'salmon',
  secondary: '#48D1CC',
  light: '#e6e6e6',
  danger: '#ff5252',
  darkgrey: 'darkgrey',
  lightgrey: '#7C7474',
};

export const icons = {
  bin: require('../app/assets/images/icons/bin-icon.png'),
  close: require('../app/assets/images/icons/close-icon.png'),
  email: require('../app/assets/images/icons/email.png'),
  list: require('../app/assets/images/icons/list.png'),
  logout: require('../app/assets/images/icons/logout.png'),
  category: require('./assets/images/icons/categories.png'),
  arrowdown: require('./assets/images/icons/arrow-down.png'),
  emailgrey: require('./assets/images/icons/email-grey.png'),
  lock: require('./assets/images/icons/padlock.png'),
  arrowRight: require('./assets/images/icons/chevron-right.png'),
  joystick: require('./assets/images/icons/joystick.png'),
  camera: require('./assets/images/icons/photo-camera-grey.png'),
  car: require('./assets/images/icons/sports-car.png'),
  lamp: require('./assets/images/icons/table-lamp.png'),
};
export const Images = {
  redlogo: require('../app/assets/images/logo-red.png'),
  jackerUrl: require('../app/assets/images/jacket.jpg'),
  couch: require('../app/assets/images/couch.jpg'),
  background: require('../app/assets/images/background.jpg'),
  chair: require('../app/assets/images/chair.jpg'),
};

export const users = [
  {
    userid: 1,
    username: 'Muhammad Saqib Aziz',
    email: 'saqib.aziz1000@gmail.com',
  },
];

export const menuItems = [
  {
    id: 1,
    title: 'My Listings',
    icon: {
      icon: icons.list,
      backgroundColor: colors.primary,
    },
  },
  {
    id: 2,
    title: 'My Messages',
    icon: {
      icon: icons.email,
      backgroundColor: colors.secondary,
    },
  },
];

export const inititalmessages = [
  {
    id: 1,
    title: 'Muhammad Saqib',
    description: 'Hey! Is this item still available?',
    image: require('../app/assets/images/logo-red.png'),
  },
  {
    id: 2,
    title: 'Muhammad Saqib',
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require('../app/assets/images/logo-red.png'),
  },
];

export const listings = [
  {
    id: 1,
    title: 'Red Jacket For Sale',
    price: 100,
    image: Images.jackerUrl,
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 200,
    image: Images.couch,
  },
];

export const categories = [
  {
    label: 'Furniture',
    value: 1,
    backgroundColor: 'red',
    icon: icons.lamp,
  },
  {
    label: 'Cars',
    value: 2,
    backgroundColor: 'orange',
    icon: icons.car,
  },
  {
    label: 'Cameras',
    value: 3,
    backgroundColor: 'gold',
    icon: icons.camera,
  },
  {
    label: 'Games',
    value: 4,
    backgroundColor: 'lightgreen',
    icon: icons.joystick,
  },
];
