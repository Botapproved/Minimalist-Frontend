import logo from "./logo.png"
import searchIcon from "./search_icon.png"
import profileIcon from "./profile_icon.png"
import cartIcon from "./cart_icon.png"
import menuIcon from "./menu_icon.png"
import dropDownIcon from "./dropdown_icon.png"
import heroCouch from "./heroCouch.png"
import SittingRoom from "./SittingRoom.png"
import Accessories from "./Accessories.png"
import Kitchen from "./Kitchen.png"
import Bedroom from "./Bedroom.png"
import SittingRoomSmall from "./SittingRoomSmall.png"
import BedroomSmall from "./BedroomSmall.png"
import Product1 from "./p1.png"
import Product2 from "./p2.png"
import Product3 from "./p3.png"
import Product4 from "./p4.png"
import Product5 from "./p5.png"
import Product6 from "./p6.png"
import Product7 from "./p7.png"
import Product8 from "./p8.png"
import Close from "./close.png"
import Plant from "./plant.png"
import NightStand from "./nightStand.png"

export const assets = {
    logo,
    searchIcon,
    profileIcon,
    cartIcon,
    menuIcon,
    dropDownIcon,
    heroCouch,
    SittingRoom,
    Accessories,
    Kitchen,
    Bedroom,
    BedroomSmall,
    SittingRoomSmall,
    Product1,
    Product2,
    Product3,
    Product4,
    Product5,
    Product6,
    Product7,
    Product8,
    Plant,
    NightStand,
    Close
}

export const products = [
    {
        id: "product1-id",
        name: "Round Terra Marble Table",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A classic piece that adds elegance to any sitting room.",
        price: Math.floor(Math.random() * (900 - 100 + 1)) + 100,
        image: [Product1],
        category: "Sitting Room",
        date: Date.now(),
        bestseller: true
    },
    {
        id: "product2-id",
        name: "Ceramic Rustic Vase",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perfect for adding a touch of rustic charm to your accessories.",
        price: Math.floor(Math.random() * (900 - 100 + 1)) + 100,
        image: [Product2],
        category: "Accessories",
        date: Date.now(),
        bestseller: false
    },
    {
        id: "product3-id",
        name: "Metro Luxe Duo Sofa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A stylish and comfortable sofa for your modern living space.",
        price: Math.floor(Math.random() * (900 - 100 + 1)) + 100,
        image: [Product3],
        category: "Sitting Room",
        date: Date.now(),
        bestseller: true
    },
    {
        id: "product4-id",
        name: "Kitchen Bar Stool",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sleek and functional, this bar stool is a kitchen essential.",
        price: Math.floor(Math.random() * (900 - 100 + 1)) + 100,
        image: [Product4], 
        category: "Kitchen",
        date: Date.now(),
        bestseller: false
    },
    {
        id: "product5-id",
        name: "Luxe Modern Armchair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This armchair combines comfort and style for any bedroom.",
        price: Math.floor(Math.random() * (900 - 100 + 1)) + 100,
        image: [Product5],
        category: "Bedroom",
        date: Date.now(),
        bestseller: true
    },
    {
        id: "product6-id",
        name: "Round Fluted Accent Table",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A versatile accent table that enhances your living area.",
        price: Math.floor(Math.random() * (900 - 100 + 1)) + 100,
        image: [Product6],
        category: "Sitting Room",
        date: Date.now(),
        bestseller: false
    },
    {
        id: "product7-id",
        name: "Round Terra Marble Side Table",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A chic side table that complements any decor style.",
        price: Math.floor(Math.random() * (900 - 100 + 1)) + 100,
        image: [Product7], 
        category: "Sitting Room",
        date: Date.now(),
        bestseller: true
    },
    {
        id: "product8-id",
        name: "Luna Modern Round Ottoman",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stylish and functional, perfect for your bedroom or living area.",
        price: Math.floor(Math.random() * (900 - 100 + 1)) + 100,
        image: [Product8], 
        category: "Bedroom",
        date: Date.now(),
        bestseller: false
    }
];

