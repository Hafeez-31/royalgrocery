import Apple from "../assets/images/categories/apple.jpg";
import Banana from "../assets/images/categories/banana.jpg";
import Mango from "../assets/images/categories/mango.jpeg";
import Bakery from "../assets/images/categories/bakery.jpg";
import Tomato from "../assets/images/categories/tomato.png";
import Onion from "../assets/images/categories/onion.jpg";
import Green from "../assets/images/categories/aavingreen.png";
import Blue from "../assets/images/categories/aavinblue.jpg";
import Orange from "../assets/images/categories/aavinorange.jpg";
import Nice from "../assets/images/categories/aavinnice.jpg";
import whiteEgg from "../assets/images/categories/whiteegg.jpg";
import brownEgg from "../assets/images/categories/brownegg.jpg";
import arokyaStandard from "../assets/images/categories/arokyastandard.jpg";
import kaadaiEgg from "../assets/images/categories/kaadaiegg.jpg";
import Litchi from "../assets/images/categories/litchi.jpg";
import strawBerry from "../assets/images/categories/strawberry.jpg";
import orangeFruit from "../assets/images/categories/orange.jpg";
import Carrot from "../assets/images/categories/carrot.jpg";
import Kiwi from "../assets/images/categories/kiwi.jpg";
import Cabbage from "../assets/images/categories/cabbage.jpg";
import sandWich from "../assets/images/categories/sandwich.jpg";
import classicSweet from "../assets/images/categories/classicsweet.jpg";
import multiGrain from "../assets/images/categories/multigrain.jpg";
import brownBread from "../assets/images/categories/brownbread.jpg";
import aashirvaadWheat from "../assets/images/categories/aashirvaadwheat.jpg";
import farmvedaWheat from "../assets/images/categories/farmvedawheat.jpg";

let productId = 1;

const productsData = {
        "Fruits & Vegetables": [
            { id: productId++, name: "Apple", price: 250, rating: 4.5, image: Apple },
            { id: productId++, name: "Banana", price: 60, rating: 4.2, image: Banana },
            { id: productId++, name: "Mango", price: 150, rating: 4.8, image: Mango },
            { id: productId++, name: "Tomato", price: 70, rating: 3.8, image: Tomato },
            { id: productId++, name: "Onion", price: 50, rating: 3.5, image: Onion },
            { id: productId++, name: "Litchi", price: 500, rating: 5.0, image: Litchi },
            { id: productId++, name: "Strawberry", price: 70, rating: 4.8, image: strawBerry },
            { id: productId++, name: "Orange", price: 160, rating: 4.8, image: orangeFruit },
            { id: productId++, name: "Carrot", price: 30, rating: 4.8, image: Carrot },
            { id: productId++, name: "Kiwi", price: 85, rating: 4.8, image: Kiwi },
            { id: productId++, name: "Cabbage", price: 20, rating: 4.8, image: Cabbage },
        ],
        "Dairy & Eggs": [
            { id: productId++, name: "Aavin Green Milk", price: 30, rating: 4.3, image: Green },
            { id: productId++, name: "Aavin Delite Milk", price: 25, rating: 4.1, image: Blue },
            { id: productId++, name: "Aavin Premium Milk", price: 30, rating: 4.1, image: Orange },
            { id: productId++, name: "Aavin Nice Milk", price: 44, rating: 4.1, image: Nice },
            { id: productId++, name: "White Egg", price: 6, rating: 4.1, image: whiteEgg },
            { id: productId++, name: "Brown Egg", price: 15, rating: 4.9, image: brownEgg },
            { id: productId++, name: "Arokya Standard Milk", price: 28, rating: 4.6, image: arokyaStandard },
            { id: productId++, name: "Kaadai Egg", price: 20, rating: 5.0, image: kaadaiEgg },
        ],
        "Bakery & Breads": [
            { id: productId++, name: "Modern Sandwich Bread", price: 40, rating: 4.0, image: sandWich },
            { id: productId++, name: "Modern Classic Bread", price: 300, rating: 4.9, image: classicSweet },
            { id: productId++, name: "Modern Multigrain Bread", price: 300, rating: 4.9, image: multiGrain },
            { id: productId++, name: "Modern Brown Bread", price: 300, rating: 4.9, image: brownBread },
        ],
        "Rice, Atta & Grains": [
            { id: productId++, name: "Aashirvaad Wheat", price: 40, rating: 4.0, image: aashirvaadWheat },
            { id: productId++, name: "Farm Veda Wheat", price: 40, rating: 4.0, image: farmvedaWheat },
        ],
        "Dals & Pulses": [],
        "Oil & Ghee": [],
        "Dry Fruits & Nuts": [],
        "Sweets & Chocolates": [],
    };
export default productsData;