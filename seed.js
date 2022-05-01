const mongoose = require("mongoose");
const Product = require("./models/product");

const products = [
  {
    name: "iPhone",
    img:
      "https://images.unsplash.com/photo-1589880686090-6d5bb10b0b49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDUzNDE4N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    price: 100000,
    desc:
      "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
  },
  {
    name: "iPad",
    img:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    price: 200000,
    desc:
      "iPad is a line of tablet computers designed, developed and marketed by Apple Inc., which run the iOS and iPadOS mobile operating systems. The first iPad was released on April 3, 2010; the most recent iPad models are the eighth-generation iPad, released on September 18, 2020; the fifth-generation iPad mini, released on March 18, 2019; the fourth-generation iPad Air, released on October 23, 2020; and the third-generation 11-inch (280 mm) and fifth-generation 12.9-inch (330 mm) iPad Pro, to be released in May 2021 (different models and generations listed in the sidebar)",
  },
  {
    name: "macBook",
    img:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hY2Jvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    price: 300000,
    desc: `The MacBook is a brand of Macintosh laptop computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006. It replaced the iBook brand during the Mac transition to Intel processors, announced in 2005. The current lineup consists of the MacBook Air (2008–present) and the MacBook Pro (2006–present). Two different lines simply named "MacBook" existed from 2006 to 2012 and 2015 to 2019.`,
  },
  {
    name: "iWatch",
    img:
      "https://images.unsplash.com/photo-1551940412-b3cf2d93f831?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGl3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    price: 150000,
    desc: `Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services.

The Apple Watch was released in April 2015[30][31] and quickly became the best-selling wearable device: 4.2 million were sold in the second quarter of fiscal 2015,[32][33] and more than 100 million people were estimated to use an Apple Watch as of December 2020.[34] Apple has introduced new generations of the Apple Watch with improved internal components each September[35][36][37][38]—each labeled by Apple a 'Series', with certain exceptions.[a]`,
  },
  {
    name: "Headphone",
    img:
      "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxlJTIwaGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    price: 50000,
    desc: `Apple Inc. has produced and sold headphones since 2001, available for standalone purchase and bundled with iPhone (until 2020) and iPod products. Apple's current product line consists of EarPods, wired earbuds available with a 3.5mm headphone or Lightning connector, AirPods and AirPods Pro, wireless Bluetooth earbuds, and AirPods Max, wireless Bluetooth over-ear headphones.`,
  },
];

const seedDb = async () => {
  await Product.insertMany(products)
    .then(() => {
      console.log("Db seeded successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = seedDb;
