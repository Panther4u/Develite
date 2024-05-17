// blog data
import Restaruant from "../assets/Images/Restaruant3.png"
import Furniture1 from "../assets/Images/Furniture1.png"
import Fitness1 from "../assets/Images/Fitness1.png"
import Ecommerce1 from "../assets/Images/Ecommerce1.png"
import Bakery2 from "../assets/Images/Bakery2.png"
import Electronics1 from "../assets/Images/Electronics1.png"




export const TemplateData = [
    {
        id:1,
        name:"E- Commerce",
        tags:["More"],
        // date:"13 May, 2021",
        img: Ecommerce1,
        to: "/ecommerce" 
    },
    {
        id:2,
        name:"Bakery",
        tags:["More"],
        // date:"5 July, 2021",
        img: Bakery2,
        to: "/restaurant" 
    },
    {
        id:3,
        name:"Fitness",
        tags:["More"],
        // date:"6 July, 2021",
        img: Fitness1,
        to: "/fitness" 
    },
    {
        id:4,
        name:"Electronics",
        tags:["More"],
        // date:"26 May, 2021",
        img: Electronics1,
        to: "/electronics" 
    },
    {
        id:5,
        name:"Travel",
        tags:["More"],
        // date:"3 Feb, 2021",
        img:"https://res.cloudinary.com/practicaldev/image/fetch/s--sBeV06Xc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2yrzy75q4dzibqz6rf82.png",
        to: "/restaurant" 
    },
    {
        id:6,
        name:"Construction",
        tags:["More"],
        // date:"5 Jan, 2021",
        img:"https://res.cloudinary.com/practicaldev/image/fetch/s--sBeV06Xc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2yrzy75q4dzibqz6rf82.png",
        to: "/restaurant" 

    },

    {
        id: 7,
        name: "Restaurant",
        tags: ["More"],
        // date: "16 May, 2021",
        img: Restaruant,
        to: "/restaurant"  // Assuming the route is defined in your routing setup
    },
    {
        id:8,
        name:"Furniture",
        tags:["More"],
        // date:"26 May, 2021",
        img: Furniture1,
        to: "/furniture" 
    },
    {
        id:8,
        name:"Medical",
        tags:["More"],
        // date:"26 May, 2021",
        img:"https://res.cloudinary.com/practicaldev/image/fetch/s--sBeV06Xc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2yrzy75q4dzibqz6rf82.png",
        to: "/restaurant" 
    },
    {
        id:8,
        name:"Coffee Shop",
        tags:["More"],
        // date:"26 May, 2021",
        img:"https://res.cloudinary.com/practicaldev/image/fetch/s--sBeV06Xc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2yrzy75q4dzibqz6rf82.png",
        to: "/restaurant" 
    },

] 


// Assuming you have blogData array imported or defined somewhere
export const PriceData = [
    { 
        id: 1, 
        title: 'Basic Package', 
        price: 'Rs.5000/-', 
        features: [
            { text: 'Single Page', available: true },
            { text: 'custom coded Template (HTML 5/ CSS3 / Bootstrap 5)', available: true },
            { text: 'Payment Gateway Integration', available: false },
            { text: 'Secure & Password protected Admin Panel', available: false },
            { text: '1 Enquiry or Contact form', available: false },
            { text: 'SSL Certificate', available: false },
            { text: 'Easy AccessPremium Web Hosting Package', available: false },
            { text: '100% Responsive Website', available: true },
            { text: '1st Year Domain free', available: false },
            { text: '1st Year Web Hosting free', available: false },
            { text: '1st Year - free site maintenance', available: false }
        ],
        icon: 'fa fa-paper-plane', // Font Awesome icon class for paper plane
        // to: 'https://codepen.io/anupkumar92'
    },
    { 
        id: 2, 
        title: 'Business Package', 
        price: 'Rs.15000/-', 
        features: [
            { text: '5 Page (Dynamic Website)', available: true },
            { text: 'custom coded Template (HTML 5/ CSS3 / Bootstrap 5)', available: true },
            { text: 'Payment Gateway Integration', available: false },
            { text: 'Secure & Password protected Admin Panel', available: false },
            { text: '1 Enquiry or Contact form', available: true },
            { text: 'SSL Certificate', available: false },
            { text: 'Easy AccessPremium Web Hosting Package', available: false },
            { text: '100% Responsive Website', available: true },
            { text: '1st Year Domain free', available: true },
            { text: '1st Year Web Hosting free', available: true },
            { text: '1st Year - free site maintenance', available: true }
        ],
        icon: 'fa fa-paper-plane', // Font Awesome icon class for paper plane
        // to: 'https://codepen.io/anupkumar92'
    },
    { 
        id: 3, 
        title: 'Advanced Package', 
        price: 'Rs.35000/-', 
        features: [
            { text: '10 Page (Dynamic Website)', available: true },
            { text: 'custom coded Template (HTML 5/ CSS3/ Bootstrap5/ React)', available: true },
            { text: 'Payment Gateway Integration', available: true },
            { text: 'Secure & Password protected Admin Panel', available: true },
            { text: 'Upto 3 Dynamic forms (Contact Us/ Enquiry/ Order form etc.)', available: true },
            { text: 'SSL Certificate', available: false },
            { text: 'Easy AccessPremium Web Hosting Package', available: true },
            { text: '100% Responsive Website', available: true },
            { text: '1st Year Domain free', available: true },
            { text: '1st Year Web Hosting free', available: true },
            { text: '1st Year - free site maintenance', available: true }
        ],
        icon: 'fas fa-gem', // Font Awesome icon class for gem
        // to: 'https://codepen.io/anupkumar92'
    },
    { 
        id: 4, 
        title: 'Custom Advanced Web Application', 
        price: 'Contact for Quote', 
        features: [
            { text: 'Unlimited Page (Dynamic Website)', available: true },
            { text: 'custom coded Template (HTML5/ CSS3/ Bootstrap5/ React)', available: true },
            { text: 'Payment Gateway Integration', available: true },
            { text: 'Secure & Password protected Admin Panel', available: true },
            { text: 'Unlimited Dynamic forms', available: true },
            { text: 'SSL Certificate', available: true },
            { text: 'Easy AccessPremium Web Hosting Package', available: true },
            { text: '100% Responsive Website', available: true },
            { text: '1st Year Domain free', available: true },
            { text: '1st Year Web Hosting free', available: true },
            { text: '1st Year - free site maintenance', available: true }
        ],
        icon: 'fas fa-rocket', // Font Awesome icon class for rocket
        // to: 'https://codepen.io/anupkumar92'
    }
];
