import { Link, useParams } from "react-router-dom";
import { FaShoppingCart, FaQuoteRight } from "react-icons/fa";


const products = [
  {
    id: 1,
    name: "A4 Printing Paper",
    category: "stationery",
    supplier: "Global Paper Supplier",
    image: "https://m.media-amazon.com/images/I/61eViSmJnHL.jpg",
    price: 500,
    unit: "ream",
    minOrder: 10,
    stock: 500,
    location: "China",
  },

  {
    id: 2,
    name: "Ballpoint Pens",
    category: "stationery",
    supplier: "Office Supplies Ltd",
    price: 450,
    unit: "box",
    minOrder: 20,
    stock: 1000,
    location: "India",
  },

  {
    id: 3,
    name: "HB Pencils",
    category: "stationery",
    supplier: "Global Stationery",
    price: 300,
    unit: "box",
    minOrder: 20,
    stock: 800,
    location : "India",
  },


   {
    id: 4,
    name: "ID Holders",
    category: "stationery",
    supplier: "Silaris Infosystem",
    price: 300,
    unit: "box",
    minOrder: 20,
    stock: 800,
    location: "Kenya",
  },
  {
    id: 5,
    name: "Laptop Computers",
    category: "electronics",
    supplier: "Tech Global",
    price: 45000,
    unit: "piece",
    minOrder: 5,
    stock: 100,
    location: "China",
  },

    {
    id: 6,
    name: "Iphones",
    category: "electronics",
    supplier: "Tech Global",
    price: 45000,
    unit: "piece",
    minOrder: 5,
    stock: 100,
    location: "Dubai",
  },


    {
    id: 7,
    name: "Desktop Computers",
    category: "electronics",
    supplier: "Tech Global",
    price: 45000,
    unit: "piece",
    minOrder: 5,
    stock: 100,
    location: "Kenya",
  },


    {
    id: 8,
    name: "Samsung phones",
    category: "electronics",
    supplier: "Tech Global",
    price: 45000,
    unit: "piece",
    minOrder: 5,
    stock: 100,
    location: "Japan",
  },


  {
    id: 9,
    name: "USB Keyboard",
    category: "computer-accessories",
    supplier: "Tech Accessories",
    price: 850,
    unit: "piece",
    minOrder: 10,
    stock: 400,
    location: "Kenya",
  },


  
  {
    id: 10,
    name: "Laptop Charger",
    category: "computer-accessories",
    supplier: "Tech Accessories",
    price: 850,
    unit: "piece",
    minOrder: 10,
    stock: 400,
    location: "Uganda",
  },

  
  {
    id: 11,
    name: "Hard Disk",
    category: "computer-accessories",
    supplier: "Tech Accessories",
    price: 850,
    unit: "piece",
    minOrder: 10,
    stock: 400,
    location: "UK",
  },


  
  {
    id: 12,
    name: "Laptop Battery",
    category: "computer-accessories",
    supplier: "Tech Accessories",
    price: 850,
    unit: "piece",
    minOrder: 10,
    stock: 400,
    location: "India",
  },


  
  {
    id: 13,
    name: "Wireless Mouse",
    category: "computer-accessories",
    supplier: "Tech Accessories",
    price: 850,
    unit: "piece",
    minOrder: 10,
    stock: 400,
    location: "UK",
  },

  {
    id: 14,
    name: "Wireless Keyboard",
    category: "computer-accessories",
    supplier: "Tech Accessories",
    price: 600,
    unit: "piece",
    minOrder: 10,
    stock: 500,
    location: "Dubai",
  },
 
  {
    id: 15,
    name: "Laser Printer",
    category: "office-equipment",
    supplier: "Office Tech Global",
    image: "/images/products/laser-printer.jpg",
    price: 18500,
    unit: "piece",
    minOrder: 5,
    stock: 100,
    location: "China",
  },
  {
    id: 16,
    name: "Inkjet Printer",
    category: "office-equipment",
    supplier: "Office Tech Global",
    image: "/images/products/inkjet-printer.jpg",
    price: 12500,
    unit: "piece",
    minOrder: 5,
    stock: 150,
    location: "India",
  },
  {
    id: 17,
    name: "Photocopier Machine",
    category: "office-equipment",
    supplier: "Business Machines Ltd",
    image: "/images/products/photocopier.jpg",
    price: 65000,
    unit: "piece",
    minOrder: 2,
    stock: 40,
    location: "Dubai",
  },
  {
    id: 18,
    name: "Document Scanner",
    category: "office-equipment",
    supplier: "ScanTech Supplies",
    image: "/images/products/document-scanner.jpg",
    price: 14500,
    unit: "piece",
    minOrder: 5,
    stock: 80,
    location: "China",
  },
  {
    id: 19,
    name: "Office Projector",
    category: "office-equipment",
    supplier: "Presentation Tech",
    image: "/images/products/office-projector.jpg",
    price: 28000,
    unit: "piece",
    minOrder: 3,
    stock: 50,
    location: "India",
  },
  {
    id: 20,
    name: "Paper Shredder",
    category: "office-equipment",
    supplier: "Office Security Solutions",
    image: "/images/products/paper-shredder.jpg",
    price: 8500,
    unit: "piece",
    minOrder: 5,
    stock: 120,
    location: "China",
  },
  {
    id: 21,
    name: "Laminating Machine",
    category: "office-equipment",
    supplier: "Office Supplies Ltd",
    image: "/images/products/laminating-machine.jpg",
    price: 6500,
    unit: "piece",
    minOrder: 5,
    stock: 100,
    location: "India",
  },
  {
    id: 22,
    name: "Binding Machine",
    category: "office-equipment",
    supplier: "Office Supplies Ltd",
    image: "/images/products/binding-machine.jpg",
    price: 7500,
    unit: "piece",
    minOrder: 5,
    stock: 90,
    location: "Kenya",
  },
  {
    id: 23,
    name: "Paper Cutting Machine",
    category: "office-equipment",
    supplier: "Professional Office Equipment",
    image: "/images/products/paper-cutter.jpg",
    price: 9500,
    unit: "piece",
    minOrder: 3,
    stock: 70,
    location: "China",
  },
  {
    id: 24,
    name: "Conference Speakerphone",
    category: "office-equipment",
    supplier: "Business Communication Tech",
    image: "/images/products/conference-speaker.jpg",
    price: 12000,
    unit: "piece",
    minOrder: 5,
    stock: 60,
    location: "Dubai",
  },
  {
    id: 25,
    name: "Conference Webcam",
    category: "office-equipment",
    supplier: "Business Communication Tech",
    image: "/images/products/conference-webcam.jpg",
    price: 8500,
    unit: "piece",
    minOrder: 5,
    stock: 100,
    location: "China",
  },
  {
    id: 26,
    name: "Digital Whiteboard",
    category: "office-equipment",
    supplier: "Smart Office Technologies",
    image: "/images/products/digital-whiteboard.jpg",
    price: 55000,
    unit: "piece",
    minOrder: 2,
    stock: 30,
    location: "China",
  },
  {
    id: 27,
    name: "UPS Backup System",
    category: "office-equipment",
    supplier: "PowerTech Solutions",
    image: "/images/products/office-ups.jpg",
    price: 18000,
    unit: "piece",
    minOrder: 5,
    stock: 100,
    location: "India",
  },
  {
    id: 28,
    name: "Paper Folding Machine",
    category: "office-equipment",
    supplier: "Professional Office Equipment",
    image: "/images/products/paper-folding-machine.jpg",
    price: 35000,
    unit: "piece",
    minOrder: 2,
    stock: 25,
    location: "Dubai",
  },
  {
    id: 29,
    name: "Label Printer",
    category: "office-equipment",
    supplier: "Office Tech Global",
    image: "/images/products/label-printer.jpg",
    price: 7500,
    unit: "piece",
    minOrder: 5,
    stock: 100,
    location: "China",
  },

  {
    id: 30,
    name: "USB-C Fast Charger",
    category: "mobile-accessories",
    supplier: "Tech Accessories Global",
    image: "/images/products/usb-c-fast-charger.jpg",
    price: 650,
    unit: "piece",
    minOrder: 20,
    stock: 1000,
    location: "China",
  },
  {
    id: 31,
    name: "Lightning Fast Charger",
    category: "mobile-accessories",
    supplier: "Mobile Tech Supplies",
    image: "/images/products/lightning-charger.jpg",
    price: 700,
    unit: "piece",
    minOrder: 20,
    stock: 800,
    location: "China",
  },
  {
    id: 32,
    name: "USB-C Charging Cable",
    category: "mobile-accessories",
    supplier: "CableTech Manufacturing",
    image: "/images/products/usb-c-cable.jpg",
    price: 250,
    unit: "piece",
    minOrder: 50,
    stock: 3000,
    location: "China",
  },
  {
    id: 33,
    name: "Lightning Charging Cable",
    category: "mobile-accessories",
    supplier: "CableTech Manufacturing",
    image: "/images/products/lightning-cable.jpg",
    price: 300,
    unit: "piece",
    minOrder: 50,
    stock: 2500,
    location: "China",
  },
  {
    id: 34,
    name: "Wireless Charger",
    category: "mobile-accessories",
    supplier: "SmartTech Supplies",
    image: "/images/products/wireless-charger.jpg",
    price: 900,
    unit: "piece",
    minOrder: 20,
    stock: 1000,
    location: "China",
  },
  {
    id: 35,
    name: "Power Bank 10000mAh",
    category: "mobile-accessories",
    supplier: "PowerTech Global",
    image: "/images/products/power-bank-10000.jpg",
    price: 1100,
    unit: "piece",
    minOrder: 20,
    stock: 800,
    location: "China",
  },
  {
    id: 36,
    name: "Power Bank 20000mAh",
    category: "mobile-accessories",
    supplier: "PowerTech Global",
    image: "/images/products/power-bank-20000.jpg",
    price: 1800,
    unit: "piece",
    minOrder: 20,
    stock: 600,
    location: "China",
  },
  {
    id: 37,
    name: "Bluetooth Earbuds",
    category: "mobile-accessories",
    supplier: "AudioTech Electronics",
    image: "/images/products/bluetooth-earbuds.jpg",
    price: 1200,
    unit: "piece",
    minOrder: 20,
    stock: 700,
    location: "China",
  },
  {
    id: 38,
    name: "Wireless Bluetooth Headphones",
    category: "mobile-accessories",
    supplier: "AudioTech Electronics",
    image: "/images/products/bluetooth-headphones.jpg",
    price: 1800,
    unit: "piece",
    minOrder: 10,
    stock: 500,
    location: "China",
  },
  {
    id: 39,
    name: "Phone Screen Protector",
    category: "mobile-accessories",
    supplier: "Mobile Protection Supplies",
    image: "/images/products/screen-protector.jpg",
    price: 120,
    unit: "piece",
    minOrder: 100,
    stock: 5000,
    location: "China",
  },
  {
    id: 40,
    name: "Tempered Glass Screen Protector",
    category: "mobile-accessories",
    supplier: "Mobile Protection Supplies",
    image: "/images/products/tempered-glass.jpg",
    price: 100,
    unit: "piece",
    minOrder: 100,
    stock: 5000,
    location: "China",
  },
  {
    id: 41,
    name: "Silicone Phone Case",
    category: "mobile-accessories",
    supplier: "Mobile Cases Wholesale",
    image: "/images/products/silicone-phone-case.jpg",
    price: 180,
    unit: "piece",
    minOrder: 50,
    stock: 3000,
    location: "China",
  },
  {
    id: 42,
    name: "Leather Phone Case",
    category: "mobile-accessories",
    supplier: "Premium Mobile Cases",
    image: "/images/products/leather-phone-case.jpg",
    price: 350,
    unit: "piece",
    minOrder: 30,
    stock: 1500,
    location: "India",
  },
  {
    id: 43,
    name: "Car Phone Holder",
    category: "mobile-accessories",
    supplier: "AutoTech Accessories",
    image: "/images/products/car-phone-holder.jpg",
    price: 450,
    unit: "piece",
    minOrder: 30,
    stock: 1200,
    location: "China",
  },
  {
    id: 44,
    name: "Desktop Phone Stand",
    category: "mobile-accessories",
    supplier: "Mobile Accessories Ltd",
    image: "/images/products/desktop-phone-stand.jpg",
    price: 300,
    unit: "piece",
    minOrder: 30,
    stock: 1500,
    location: "India",
  },
  {
    id: 45,
    name: "Magnetic Phone Holder",
    category: "mobile-accessories",
    supplier: "Mobile Accessories Ltd",
    image: "/images/products/magnetic-phone-holder.jpg",
    price: 350,
    unit: "piece",
    minOrder: 30,
    stock: 1200,
    location: "China",
  },
  {
    id: 46,
    name: "USB-C to HDMI Adapter",
    category: "mobile-accessories",
    supplier: "Tech Accessories Global",
    image: "/images/products/usb-c-hdmi-adapter.jpg",
    price: 850,
    unit: "piece",
    minOrder: 20,
    stock: 700,
    location: "China",
  },
  {
    id: 47,
    name: "OTG USB Adapter",
    category: "mobile-accessories",
    supplier: "Tech Accessories Global",
    image: "/images/products/otg-adapter.jpg",
    price: 250,
    unit: "piece",
    minOrder: 50,
    stock: 2500,
    location: "China",
  },
  {
    id: 48,
    name: "Multi-Port Charging Hub",
    category: "mobile-accessories",
    supplier: "SmartTech Supplies",
    image: "/images/products/multi-port-charger.jpg",
    price: 1500,
    unit: "piece",
    minOrder: 10,
    stock: 500,
    location: "Dubai",
  },
  {
    id: 49,
    name: "Smartphone Ring Holder",
    category: "mobile-accessories",
    supplier: "Mobile Accessories Ltd",
    image: "/images/products/phone-ring-holder.jpg",
    price: 100,
    unit: "piece",
    minOrder: 100,
    stock: 5000,
    location: "China",
  },

 
  {
    id: 50,
    name: "Men's Cotton T-Shirts",
    category: "clothing",
    supplier: "Global Garments Wholesale",
    image: "/images/products/mens-cotton-tshirts.jpg",
    price: 450,
    unit: "piece",
    minOrder: 50,
    stock: 3000,
    location: "India",
  },
  {
    id: 51,
    name: "Men's Polo Shirts",
    category: "clothing",
    supplier: "Premium Garments Ltd",
    image: "/images/products/mens-polo-shirts.jpg",
    price: 650,
    unit: "piece",
    minOrder: 30,
    stock: 2000,
    location: "India",
  },
  {
    id: 52,
    name: "Men's Formal Shirts",
    category: "clothing",
    supplier: "Business Wear Suppliers",
    image: "/images/products/mens-formal-shirts.jpg",
    price: 850,
    unit: "piece",
    minOrder: 30,
    stock: 1500,
    location: "India",
  },
  {
    id: 53,
    name: "Men's Jeans",
    category: "clothing",
    supplier: "Denim World Wholesale",
    image: "/images/products/mens-jeans.jpg",
    price: 1100,
    unit: "piece",
    minOrder: 30,
    stock: 1800,
    location: "India",
  },
  {
    id: 54,
    name: "Men's Hoodies",
    category: "clothing",
    supplier: "Urban Clothing Wholesale",
    image: "/images/products/mens-hoodies.jpg",
    price: 950,
    unit: "piece",
    minOrder: 30,
    stock: 1200,
    location: "China",
  },
  {
    id: 55,
    name: "Men's Jackets",
    category: "clothing",
    supplier: "Fashion Garments Global",
    image: "/images/products/mens-jackets.jpg",
    price: 1600,
    unit: "piece",
    minOrder: 20,
    stock: 800,
    location: "China",
  },
  {
    id: 56,
    name: "Women's Cotton T-Shirts",
    category: "clothing",
    supplier: "Global Garments Wholesale",
    image: "/images/products/womens-cotton-tshirts.jpg",
    price: 420,
    unit: "piece",
    minOrder: 50,
    stock: 3000,
    location: "India",
  },
  {
    id: 57,
    name: "Women's Dresses",
    category: "clothing",
    supplier: "Fashion House Wholesale",
    image: "/images/products/womens-dresses.jpg",
    price: 950,
    unit: "piece",
    minOrder: 30,
    stock: 1500,
    location: "India",
  },
  {
    id: 58,
    name: "Women's Jeans",
    category: "clothing",
    supplier: "Denim World Wholesale",
    image: "/images/products/womens-jeans.jpg",
    price: 1050,
    unit: "piece",
    minOrder: 30,
    stock: 1800,
    location: "India",
  },
  {
    id: 59,
    name: "Women's Hoodies",
    category: "clothing",
    supplier: "Urban Clothing Wholesale",
    image: "/images/products/womens-hoodies.jpg",
    price: 900,
    unit: "piece",
    minOrder: 30,
    stock: 1200,
    location: "China",
  },
  {
    id: 60,
    name: "Children's T-Shirts",
    category: "clothing",
    supplier: "Kids Fashion Wholesale",
    image: "/images/products/kids-tshirts.jpg",
    price: 300,
    unit: "piece",
    minOrder: 50,
    stock: 3000,
    location: "India",
  },
  {
    id: 61,
    name: "Children's Jeans",
    category: "clothing",
    supplier: "Kids Fashion Wholesale",
    image: "/images/products/kids-jeans.jpg",
    price: 650,
    unit: "piece",
    minOrder: 30,
    stock: 1800,
    location: "India",
  },
  {
    id: 62,
    name: "School Uniform Shirts",
    category: "clothing",
    supplier: "School Wear Suppliers",
    image: "/images/products/school-uniform-shirts.jpg",
    price: 350,
    unit: "piece",
    minOrder: 100,
    stock: 5000,
    location: "India",
  },
  {
    id: 63,
    name: "School Uniform Trousers",
    category: "clothing",
    supplier: "School Wear Suppliers",
    image: "/images/products/school-uniform-trousers.jpg",
    price: 450,
    unit: "piece",
    minOrder: 100,
    stock: 4500,
    location: "India",
  },
  {
    id: 64,
    name: "Workwear Uniforms",
    category: "clothing",
    supplier: "Industrial Workwear Ltd",
    image: "/images/products/workwear-uniforms.jpg",
    price: 850,
    unit: "set",
    minOrder: 50,
    stock: 2000,
    location: "China",
  },
  {
    id: 65,
    name: "Medical Scrubs",
    category: "clothing",
    supplier: "Medical Garments Wholesale",
    image: "/images/products/medical-scrubs.jpg",
    price: 750,
    unit: "set",
    minOrder: 50,
    stock: 1500,
    location: "India",
  },
  {
    id: 66,
    name: "Reflective Safety Vests",
    category: "clothing",
    supplier: "Safety Wear Global",
    image: "/images/products/safety-vests.jpg",
    price: 350,
    unit: "piece",
    minOrder: 100,
    stock: 4000,
    location: "China",
  },
  {
    id: 67,
    name: "Rain Jackets",
    category: "clothing",
    supplier: "Outdoor Wear Wholesale",
    image: "/images/products/rain-jackets.jpg",
    price: 750,
    unit: "piece",
    minOrder: 30,
    stock: 1500,
    location: "China",
  },
  {
    id: 68,
    name: "Sports Jerseys",
    category: "clothing",
    supplier: "Sportswear Global",
    image: "/images/products/sports-jerseys.jpg",
    price: 550,
    unit: "piece",
    minOrder: 50,
    stock: 2500,
    location: "China",
  },
  {
    id: 69,
    name: "Sports Shorts",
    category: "clothing",
    supplier: "Sportswear Global",
    image: "/images/products/sports-shorts.jpg",
    price: 400,
    unit: "piece",
    minOrder: 50,
    stock: 2500,
    location: "China",
  },
  {
    id: 70,
    name: "Baseball Caps",
    category: "clothing",
    supplier: "Fashion Accessories Wholesale",
    image: "/images/products/baseball-caps.jpg",
    price: 180,
    unit: "piece",
    minOrder: 100,
    stock: 5000,
    location: "China",
  },
  {
    id: 71,
    name: "Winter Sweaters",
    category: "clothing",
    supplier: "Winter Wear Wholesale",
    image: "/images/products/winter-sweaters.jpg",
    price: 850,
    unit: "piece",
    minOrder: 30,
    stock: 1200,
    location: "China",
  },
  {
    id: 72,
    name: "Traditional Clothing",
    category: "clothing",
    supplier: "African Fashion Wholesale",
    image: "/images/products/traditional-clothing.jpg",
    price: 1200,
    unit: "piece",
    minOrder: 20,
    stock: 800,
    location: "Kenya",
  },


  {
    id: 73,
    name: "Plastic Storage Boxes",
    category: "home-living",
    supplier: "Home Essentials Wholesale",
    image: "/images/products/plastic-storage-boxes.jpg",
    price: 650,
    unit: "piece",
    minOrder: 20,
    stock: 1000,
    location: "China",
  },
  {
    id: 74,
    name: "Kitchen Storage Containers",
    category: "home-living",
    supplier: "Kitchen World Supplies",
    image: "/images/products/kitchen-storage-containers.jpg",
    price: 450,
    unit: "set",
    minOrder: 30,
    stock: 1500,
    location: "India",
  },
  {
    id: 75,
    name: "Stainless Steel Water Bottles",
    category: "home-living",
    supplier: "Home Essentials Wholesale",
    image: "/images/products/stainless-water-bottles.jpg",
    price: 550,
    unit: "piece",
    minOrder: 50,
    stock: 2500,
    location: "India",
  },
  {
    id: 76,
    name: "Electric Kettle",
    category: "home-living",
    supplier: "Smart Home Appliances",
    image: "/images/products/electric-kettle.jpg",
    price: 1200,
    unit: "piece",
    minOrder: 10,
    stock: 500,
    location: "China",
  },
  {
    id: 77,
    name: "Rice Cooker",
    category: "home-living",
    supplier: "Smart Home Appliances",
    image: "/images/products/rice-cooker.jpg",
    price: 2200,
    unit: "piece",
    minOrder: 10,
    stock: 400,
    location: "China",
  },
  {
    id: 78,
    name: "Electric Blender",
    category: "home-living",
    supplier: "Kitchen Appliance Global",
    image: "/images/products/electric-blender.jpg",
    price: 2500,
    unit: "piece",
    minOrder: 10,
    stock: 350,
    location: "China",
  },
  {
    id: 79,
    name: "Non-Stick Cookware Set",
    category: "home-living",
    supplier: "Kitchen World Supplies",
    image: "/images/products/non-stick-cookware-set.jpg",
    price: 3500,
    unit: "set",
    minOrder: 5,
    stock: 300,
    location: "India",
  },
  {
    id: 80,
    name: "Stainless Steel Cooking Pots",
    category: "home-living",
    supplier: "Kitchen World Supplies",
    image: "/images/products/stainless-cooking-pots.jpg",
    price: 2800,
    unit: "set",
    minOrder: 10,
    stock: 500,
    location: "India",
  },
  {
    id: 81,
    name: "Dinner Plate Set",
    category: "home-living",
    supplier: "Household Products Ltd",
    image: "/images/products/dinner-plate-set.jpg",
    price: 950,
    unit: "set",
    minOrder: 20,
    stock: 1000,
    location: "India",
  },
  {
    id: 82,
    name: "Drinking Glass Set",
    category: "home-living",
    supplier: "Household Products Ltd",
    image: "/images/products/drinking-glass-set.jpg",
    price: 750,
    unit: "set",
    minOrder: 20,
    stock: 1200,
    location: "India",
  },
  {
    id: 83,
    name: "Cutlery Set",
    category: "home-living",
    supplier: "Kitchen World Supplies",
    image: "/images/products/cutlery-set.jpg",
    price: 850,
    unit: "set",
    minOrder: 20,
    stock: 1500,
    location: "China",
  },
  {
    id: 84,
    name: "Plastic Chairs",
    category: "home-living",
    supplier: "Furniture Wholesale Global",
    image: "/images/products/plastic-chairs.jpg",
    price: 850,
    unit: "piece",
    minOrder: 20,
    stock: 800,
    location: "India",
  },
  {
    id: 85,
    name: "Folding Tables",
    category: "home-living",
    supplier: "Furniture Wholesale Global",
    image: "/images/products/folding-tables.jpg",
    price: 2500,
    unit: "piece",
    minOrder: 10,
    stock: 300,
    location: "China",
  },
  {
    id: 86,
    name: "Office Storage Cabinets",
    category: "home-living",
    supplier: "Furniture Wholesale Global",
    image: "/images/products/storage-cabinets.jpg",
    price: 6500,
    unit: "piece",
    minOrder: 5,
    stock: 150,
    location: "India",
  },
  {
    id: 87,
    name: "Curtains",
    category: "home-living",
    supplier: "Home Decor Wholesale",
    image: "/images/products/curtains.jpg",
    price: 750,
    unit: "pair",
    minOrder: 30,
    stock: 1500,
    location: "India",
  },
  {
    id: 88,
    name: "Bed Sheets",
    category: "home-living",
    supplier: "Home Textile Suppliers",
    image: "/images/products/bed-sheets.jpg",
    price: 850,
    unit: "set",
    minOrder: 30,
    stock: 2000,
    location: "India",
  },
  {
    id: 89,
    name: "Blankets",
    category: "home-living",
    supplier: "Home Textile Suppliers",
    image: "/images/products/blankets.jpg",
    price: 1200,
    unit: "piece",
    minOrder: 20,
    stock: 1000,
    location: "China",
  },
  {
    id: 90,
    name: "Pillows",
    category: "home-living",
    supplier: "Home Textile Suppliers",
    image: "/images/products/pillows.jpg",
    price: 450,
    unit: "piece",
    minOrder: 30,
    stock: 2000,
    location: "India",
  },
  {
    id: 91,
    name: "Bath Towels",
    category: "home-living",
    supplier: "Home Textile Suppliers",
    image: "/images/products/bath-towels.jpg",
    price: 550,
    unit: "piece",
    minOrder: 50,
    stock: 3000,
    location: "India",
  },
  {
    id: 92,
    name: "Floor Mats",
    category: "home-living",
    supplier: "Home Decor Wholesale",
    image: "/images/products/floor-mats.jpg",
    price: 450,
    unit: "piece",
    minOrder: 30,
    stock: 1500,
    location: "China",
  },
  {
    id: 93,
    name: "Wall Clocks",
    category: "home-living",
    supplier: "Home Decor Wholesale",
    image: "/images/products/wall-clocks.jpg",
    price: 650,
    unit: "piece",
    minOrder: 20,
    stock: 800,
    location: "China",
  },
  {
    id: 94,
    name: "LED Table Lamps",
    category: "home-living",
    supplier: "Lighting Solutions Global",
    image: "/images/products/led-table-lamps.jpg",
    price: 850,
    unit: "piece",
    minOrder: 20,
    stock: 1000,
    location: "China",
  },
  {
    id: 95,
    name: "LED Ceiling Lights",
    category: "home-living",
    supplier: "Lighting Solutions Global",
    image: "/images/products/led-ceiling-lights.jpg",
    price: 1100,
    unit: "piece",
    minOrder: 20,
    stock: 800,
    location: "China",
  },
  {
    id: 96,
    name: "Solar Garden Lights",
    category: "home-living",
    supplier: "Solar Home Products",
    image: "/images/products/solar-garden-lights.jpg",
    price: 750,
    unit: "set",
    minOrder: 20,
    stock: 700,
    location: "China",
  },
  {
    id: 97,
    name: "Cleaning Mop Set",
    category: "home-living",
    supplier: "Household Cleaning Supplies",
    image: "/images/products/cleaning-mop-set.jpg",
    price: 550,
    unit: "set",
    minOrder: 30,
    stock: 1500,
    location: "India",
  },
  {
    id: 98,
    name: "Broom and Dustpan Set",
    category: "home-living",
    supplier: "Household Cleaning Supplies",
    image: "/images/products/broom-dustpan-set.jpg",
    price: 350,
    unit: "set",
    minOrder: 50,
    stock: 2500,
    location: "India",
  },
  {
    id: 99,
    name: "Laundry Baskets",
    category: "home-living",
    supplier: "Home Essentials Wholesale",
    image: "/images/products/laundry-baskets.jpg",
    price: 500,
    unit: "piece",
    minOrder: 30,
    stock: 1200,
    location: "China",
  },
  {
    id: 100,
    name: "Garbage Bins",
    category: "home-living",
    supplier: "Household Products Ltd",
    image: "/images/products/garbage-bins.jpg",
    price: 650,
    unit: "piece",
    minOrder: 30,
    stock: 1000,
    location: "India",
  },

  {
    id: 101,
    name: "Portland Cement",
    category: "construction-materials",
    supplier: "Global Building Materials",
    image: "/images/products/portland-cement.jpg",
    price: 8.50,
    unit: "bag",
    minOrder: 50,
    stock: 5000,
    location: "India",
  },
  {
    id: 102,
    name: "Ready Mix Cement",
    category: "construction-materials",
    supplier: "BuildPro Supplies",
    image: "/images/products/ready-mix-cement.jpg",
    price: 9.50,
    unit: "bag",
    minOrder: 50,
    stock: 4000,
    location: "Kenya",
  },
  {
    id: 103,
    name: "Construction Sand",
    category: "construction-materials",
    supplier: "BuildPro Aggregates",
    image: "/images/products/construction-sand.jpg",
    price: 35,
    unit: "ton",
    minOrder: 10,
    stock: 1000,
    location: "Kenya",
  },
  {
    id: 104,
    name: "River Sand",
    category: "construction-materials",
    supplier: "East Africa Aggregates",
    image: "/images/products/river-sand.jpg",
    price: 40,
    unit: "ton",
    minOrder: 10,
    stock: 800,
    location: "Uganda",
  },
  {
    id: 105,
    name: "Crushed Stone",
    category: "construction-materials",
    supplier: "Global Aggregates Ltd",
    image: "/images/products/crushed-stone.jpg",
    price: 45,
    unit: "ton",
    minOrder: 10,
    stock: 1500,
    location: "Kenya",
  },
  {
    id: 106,
    name: "Concrete Blocks",
    category: "construction-materials",
    supplier: "BuildPro Blocks",
    image: "/images/products/concrete-blocks.jpg",
    price: 0.80,
    unit: "piece",
    minOrder: 500,
    stock: 50000,
    location: "Uganda",
  },
  {
    id: 107,
    name: "Concrete Bricks",
    category: "construction-materials",
    supplier: "BuildPro Blocks",
    image: "/images/products/concrete-bricks.jpg",
    price: 0.60,
    unit: "piece",
    minOrder: 500,
    stock: 75000,
    location: "Kenya",
  },
  {
    id: 108,
    name: "Clay Bricks",
    category: "construction-materials",
    supplier: "African Brick Suppliers",
    image: "/images/products/clay-bricks.jpg",
    price: 0.50,
    unit: "piece",
    minOrder: 1000,
    stock: 100000,
    location: "Uganda",
  },
  {
    id: 109,
    name: "Reinforcement Steel Bars",
    category: "construction-materials",
    supplier: "SteelWorks Global",
    image: "/images/products/steel-bars.jpg",
    price: 850,
    unit: "ton",
    minOrder: 5,
    stock: 500,
    location: "China",
  },
  {
    id: 110,
    name: "Steel Roofing Sheets",
    category: "construction-materials",
    supplier: "Roofing Solutions Ltd",
    image: "/images/products/steel-roofing-sheets.jpg",
    price: 12,
    unit: "sheet",
    minOrder: 100,
    stock: 10000,
    location: "Kenya",
  },
  {
    id: 111,
    name: "Galvanized Roofing Sheets",
    category: "construction-materials",
    supplier: "Roofing Solutions Ltd",
    image: "/images/products/galvanized-roofing-sheets.jpg",
    price: 15,
    unit: "sheet",
    minOrder: 100,
    stock: 8000,
    location: "India",
  },
  {
    id: 112,
    name: "Roofing Tiles",
    category: "construction-materials",
    supplier: "RoofTech Global",
    image: "/images/products/roofing-tiles.jpg",
    price: 1.50,
    unit: "piece",
    minOrder: 500,
    stock: 30000,
    location: "India",
  },
  {
    id: 113,
    name: "PVC Pipes",
    category: "construction-materials",
    supplier: "PipeTech Industries",
    image: "/images/products/pvc-pipes.jpg",
    price: 8,
    unit: "piece",
    minOrder: 50,
    stock: 5000,
    location: "India",
  },
  {
    id: 114,
    name: "HDPE Water Pipes",
    category: "construction-materials",
    supplier: "PipeTech Industries",
    image: "/images/products/hdpe-water-pipes.jpg",
    price: 15,
    unit: "meter",
    minOrder: 100,
    stock: 10000,
    location: "China",
  },
  {
    id: 115,
    name: "Electrical Conduit Pipes",
    category: "construction-materials",
    supplier: "Electrical Building Supplies",
    image: "/images/products/electrical-conduit-pipes.jpg",
    price: 5,
    unit: "piece",
    minOrder: 100,
    stock: 8000,
    location: "India",
  },
  {
    id: 116,
    name: "Ceramic Floor Tiles",
    category: "construction-materials",
    supplier: "TileWorld Wholesale",
    image: "/images/products/ceramic-floor-tiles.jpg",
    price: 7.50,
    unit: "square meter",
    minOrder: 100,
    stock: 10000,
    location: "India",
  },
  {
    id: 117,
    name: "Wall Tiles",
    category: "construction-materials",
    supplier: "TileWorld Wholesale",
    image: "/images/products/wall-tiles.jpg",
    price: 6.50,
    unit: "square meter",
    minOrder: 100,
    stock: 12000,
    location: "India",
  },
  {
    id: 118,
    name: "Granite Slabs",
    category: "construction-materials",
    supplier: "StoneWorld Suppliers",
    image: "/images/products/granite-slabs.jpg",
    price: 35,
    unit: "square meter",
    minOrder: 20,
    stock: 1000,
    location: "India",
  },
  {
    id: 119,
    name: "Marble Slabs",
    category: "construction-materials",
    supplier: "StoneWorld Suppliers",
    image: "/images/products/marble-slabs.jpg",
    price: 45,
    unit: "square meter",
    minOrder: 20,
    stock: 800,
    location: "India",
  },
  {
    id: 120,
    name: "Plywood Sheets",
    category: "construction-materials",
    supplier: "WoodBuild Materials",
    image: "/images/products/plywood-sheets.jpg",
    price: 25,
    unit: "sheet",
    minOrder: 50,
    stock: 3000,
    location: "India",
  },
  {
    id: 121,
    name: "MDF Boards",
    category: "construction-materials",
    supplier: "WoodBuild Materials",
    image: "/images/products/mdf-boards.jpg",
    price: 22,
    unit: "sheet",
    minOrder: 50,
    stock: 2500,
    location: "India",
  },
  {
    id: 122,
    name: "Timber Wood",
    category: "construction-materials",
    supplier: "African Timber Suppliers",
    image: "/images/products/timber-wood.jpg",
    price: 450,
    unit: "cubic meter",
    minOrder: 5,
    stock: 300,
    location: "Uganda",
  },
  {
    id: 123,
    name: "Construction Nails",
    category: "construction-materials",
    supplier: "Hardware Global",
    image: "/images/products/construction-nails.jpg",
    price: 3.50,
    unit: "kg",
    minOrder: 50,
    stock: 5000,
    location: "China",
  },
  {
    id: 124,
    name: "Steel Screws",
    category: "construction-materials",
    supplier: "Hardware Global",
    image: "/images/products/steel-screws.jpg",
    price: 5,
    unit: "box",
    minOrder: 50,
    stock: 3000,
    location: "China",
  },
  {
    id: 125,
    name: "Door Locks",
    category: "construction-materials",
    supplier: "Building Hardware Ltd",
    image: "/images/products/door-locks.jpg",
    price: 8,
    unit: "piece",
    minOrder: 30,
    stock: 2000,
    location: "China",
  },
  {
    id: 126,
    name: "Door Hinges",
    category: "construction-materials",
    supplier: "Building Hardware Ltd",
    image: "/images/products/door-hinges.jpg",
    price: 2.50,
    unit: "pair",
    minOrder: 50,
    stock: 5000,
    location: "China",
  },
  {
    id: 127,
    name: "Aluminium Windows",
    category: "construction-materials",
    supplier: "AluBuild Systems",
    image: "/images/products/aluminium-windows.jpg",
    price: 120,
    unit: "piece",
    minOrder: 10,
    stock: 500,
    location: "India",
  },
  {
    id: 128,
    name: "Aluminium Doors",
    category: "construction-materials",
    supplier: "AluBuild Systems",
    image: "/images/products/aluminium-doors.jpg",
    price: 180,
    unit: "piece",
    minOrder: 10,
    stock: 300,
    location: "India",
  },
  {
    id: 129,
    name: "Glass Panels",
    category: "construction-materials",
    supplier: "GlassTech Global",
    image: "/images/products/glass-panels.jpg",
    price: 30,
    unit: "square meter",
    minOrder: 20,
    stock: 1500,
    location: "China",
  },
  {
    id: 130,
    name: "Insulation Boards",
    category: "construction-materials",
    supplier: "Building Insulation Solutions",
    image: "/images/products/insulation-boards.jpg",
    price: 18,
    unit: "sheet",
    minOrder: 50,
    stock: 2000,
    location: "China",
  },
  {
    id: 131,
    name: "Waterproofing Membrane",
    category: "construction-materials",
    supplier: "BuildSeal Solutions",
    image: "/images/products/waterproofing-membrane.jpg",
    price: 35,
    unit: "roll",
    minOrder: 20,
    stock: 1000,
    location: "India",
  },
  {
    id: 132,
    name: "Construction Adhesive",
    category: "construction-materials",
    supplier: "BuildChem Supplies",
    image: "/images/products/construction-adhesive.jpg",
    price: 6.50,
    unit: "tube",
    minOrder: 50,
    stock: 3000,
    location: "China",
  },
  {
    id: 133,
    name: "Wall Putty",
    category: "construction-materials",
    supplier: "BuildChem Supplies",
    image: "/images/products/wall-putty.jpg",
    price: 12,
    unit: "bag",
    minOrder: 50,
    stock: 4000,
    location: "India",
  },
  {
    id: 134,
    name: "Interior Wall Paint",
    category: "construction-materials",
    supplier: "ColorBuild Paints",
    image: "/images/products/interior-wall-paint.jpg",
    price: 28,
    unit: "bucket",
    minOrder: 20,
    stock: 1000,
    location: "India",
  },
  {
    id: 135,
    name: "Exterior Wall Paint",
    category: "construction-materials",
    supplier: "ColorBuild Paints",
    image: "/images/products/exterior-wall-paint.jpg",
    price: 32,
    unit: "bucket",
    minOrder: 20,
    stock: 900,
    location: "India",
  },



];

const formatCategoryName = (category) => {
  if (!category) return "Bulk Products";

  return category
    .split("-")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
};




export default function BulkProducts() {
  const { category } = useParams();

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  const categoryName = formatCategoryName(category);

  return (
    <>
  

      <main className="min-h-screen bg-slate-50 px-6 py-10">

        {/* Page Header */}
        <div className="mx-auto max-w-7xl">

          <div className="mb-8">

            <Link
              to="/b2b/categories"
              className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
            >
              ← Back to Categories
            </Link>

            <h1 className="mt-4 text-4xl font-bold text-slate-900">
              {categoryName}
            </h1>

            <p className="mt-3 max-w-2xl text-slate-600">
              Browse products available for bulk and wholesale
              purchasing in the {categoryName.toLowerCase()} category.
            </p>

          </div>

          {/* Results information */}
          <div className="mb-6 flex items-center justify-between">

            <p className="text-sm text-slate-600">
              {categoryProducts.length} products available
            </p>

            <select
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm"
              defaultValue="relevance"
            >
              <option value="relevance">
                Sort by relevance
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>
            </select>

          </div>

          {/* Products */}
          {categoryProducts.length > 0 ? (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {categoryProducts.map((product) => (

                <div
                  key={product.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Product image placeholder */}
                 <div className="flex h-48 items-center justify-center overflow-hidden bg-slate-100">
                  {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                  className="h-full w-full object-contain"
                />
                      ) : (
                <div className="text-center text-slate-400">
               <div className="text-4xl">📦</div>
          <p className="mt-2 text-sm">No image available</p>
          </div>
            )}
            </div>
                  {/* Product information */}
                  <div className="p-5">

                    <h2 className="text-lg font-bold text-slate-900">
                      {product.name}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      Supplier: {product.supplier}
                    </p>

                    <div className="mt-4">

                      <p className="text-2xl font-bold text-cyan-600">
                        ${product.price.toLocaleString()}
                      </p>

                      <p className="text-sm text-slate-500">
                        per {product.unit}
                      </p>

                    </div>

                    {/* Minimum order */}
                    <div className="mt-4 rounded-lg bg-slate-50 p-3">

                      <p className="text-xs text-slate-500">
                        Minimum Order
                      </p>

                      <p className="font-semibold text-slate-800">
                        {product.minOrder} {product.unit}s
                      </p>

                    </div>

                    {/* Stock */}
                    <p className="mt-3 text-xs text-slate-500">
                      Available stock: {product.stock}
                    </p>

                    {/* Stock */}
                    <p className="mt-3 text-xs text-slate-500">
                      Product Country: {product.location}
                      </p>

                    {/* Buttons */}
                    <div className="mt-5 flex gap-2">

                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-600 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
                      >
                        <FaShoppingCart />
                        Add to Cart
                      </button>

                      <Link
                        to="/b2b/request-quote"
                        className="flex items-center justify-center rounded-lg border border-slate-300 px-3 py-2 text-slate-700 hover:bg-slate-50"
                        title="Request Quote"
                      >
                        <FaQuoteRight />
                      </Link>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">

              <h2 className="text-2xl font-bold text-slate-900">
                No products found
              </h2>

              <p className="mt-3 text-slate-600">
                There are currently no bulk products in this category.
              </p>

              <Link
                to="/b2b/categories"
                className="mt-6 inline-block rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-700"
              >
                Browse Categories
              </Link>

            </div>

          )}

        </div>

      </main>
    </>
  );
}