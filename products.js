const products = [
    {
        id: 1,
        name: "LEGO 21265 Minecraft The Crafting Table",
        sku: "AB-LGO-21265-N",
        condition: "New/Sealed",
        salePrice: 104.99,
        icon: "🧱",
        image: "images/products/product-1.png"
    },
    {
        id: 2,
        name: "LEGO 40799 Monkey D. Luffy Figure",
        sku: "AB-LGO-40799-N",
        condition: "New/Sealed",
        salePrice: 39.99,
        icon: "🎭",
        image: "images/products/product-2.png"
    },
    {
        id: 3,
        name: "LEGO 40800 Buggy the Clown Figure",
        sku: "AB-LGO-40800-N",
        condition: "New/Sealed",
        salePrice: 39.99,
        icon: "🤡",
        image: "images/products/product-3.png"
    },
    {
        id: 4,
        name: "LEGO 43252 Disney Moana's Flowerpot",
        sku: "AB-LGO-43252-N",
        condition: "New/Sealed",
        salePrice: 99.99,
        icon: "🌺",
        image: "images/products/product-4.png"
    },
    {
        id: 5,
        name: "LEGO 40796 BrickHeadz Star Wars Revenge of the Sith Heroes & Villains",
        sku: "AB-LGO-40796-N",
        condition: "New/Sealed",
        salePrice: 89.99,
        icon: "⭐",
        image: "images/products/product-5.png"
    },
    {
        id: 6,
        name: "LEGO 40793 BrickHeadz Tom & Jerry",
        sku: "AB-LGO-40793-N",
        condition: "New/Sealed",
        salePrice: 59.99,
        icon: "🐭",
        image: "images/products/product-6.png"
    },
    {
        id: 7,
        name: "LEGO 42656 Heartlake City Airport and Airplane",
        sku: "AB-LGO-42656-N",
        condition: "New/Sealed",
        salePrice: 199.99,
        icon: "✈️",
        image: "images/products/product-7.png"
    },
    {
        id: 8,
        name: "LEGO 40886 Valentine's Day Penguins in Love",
        sku: "AB-LGO-40886-N",
        condition: "New/Sealed",
        salePrice: 54.99,
        icon: "🐧",
        image: "images/products/product-8.png"
    },
    {
        id: 9,
        name: "LEGO 41838 Travel Moments",
        sku: "AB-LGO-41838-N",
        condition: "New/Sealed",
        salePrice: 139.99,
        icon: "🧳",
        image: "images/products/product-9.png"
    },
    {
        id: 10,
        name: "LEGO 21343 Viking Village (LEGO Ideas)",
        sku: "AB-LGO-21343-N",
        condition: "New/Sealed",
        salePrice: 274.99,
        icon: "⚔️",
        image: "images/products/product-10.png"
    },
    {
        id: 11,
        name: "LEGO 77072 Animal Crossing K.K.'s Concert Plaza",
        sku: "AB-LGO-77072-N",
        condition: "New/Sealed",
        salePrice: 149.99,
        icon: "🎸",
        image: "images/products/product-11.png"
    },
    {
        id: 12,
        name: "LEGO 21342 The Insect Collection (LEGO Ideas)",
        sku: "AB-LGO-21342-N",
        condition: "New/Sealed",
        salePrice: 129.99,
        icon: "🦋",
        image: "images/products/product-12.png"
    },
    {
        id: 13,
        name: "LEGO 21335 Motorized Lighthouse",
        sku: "AB-LGO-21335-N",
        condition: "New/Sealed",
        salePrice: 599.99,
        icon: "🏠",
        image: "images/products/product-13.png"
    },
    {
        id: 14,
        name: "LEGO 77052 Animal Crossing Nook's Cranny & Rosie's House",
        sku: "AB-LGO-77052-N",
        condition: "New/Sealed",
        salePrice: 169.99,
        icon: "🏡",
        image: "images/products/product-14.png"
    },
    {
        id: 15,
        name: "LEGO 40781 Sonic the Hedgehog Badnik Crabmeat",
        sku: "AB-LGO-40781-N",
        condition: "New/Sealed",
        salePrice: 55.99,
        icon: "🦔",
        image: "images/products/product-15.png"
    },
    {
        id: 16,
        name: "LEGO 10339 Icons Santa's Post Office",
        sku: "AB-LGO-10339-N",
        condition: "New/Sealed",
        salePrice: 224.99,
        icon: "🎅",
        image: "images/products/product-16.png"
    },
    {
        id: 17,
        name: "LEGO 40792 BrickHeadz Disney Dumbo",
        sku: "AB-LGO-40792-N",
        condition: "New/Sealed",
        salePrice: 42.99,
        icon: "🐘",
        image: "images/products/product-17.png"
    },
    {
        id: 18,
        name: "LEGO 10305 Lion Knights' Castle",
        sku: "AB-LGO-10305-N",
        condition: "New/Sealed",
        salePrice: 799.99,
        icon: "🏰",
        image: "images/products/product-18.png"
    },
    {
        id: 19,
        name: "LEGO 40915 Chinese Traditional Festivals Lion Dance",
        sku: "AB-LGO-40915-N",
        condition: "New/Sealed",
        salePrice: 69.99,
        icon: "🦁",
        image: "images/products/product-19.png"
    },
    {
        id: 20,
        name: "LEGO 40755 Star Wars Imperial Dropship vs. Rebel Scout Speeder",
        sku: "AB-LGO-40755-N",
        condition: "New/Sealed",
        salePrice: 99.99,
        icon: "🚀",
        image: "images/products/product-20.png"
    },
    {
        id: 21,
        name: "LEGO 40675 BrickHeadz Star Wars Clone Commander Cody",
        sku: "AB-LGO-40675-N",
        condition: "New/Sealed",
        salePrice: 29.99,
        icon: "👨‍🚀",
        image: "images/products/product-21.png"
    },
    {
        id: 22,
        name: "LEGO 40547 Obi-Wan Kenobi & Darth Vader BrickHeadz",
        sku: "AB-LGO-40547-N",
        condition: "New/Sealed",
        salePrice: 59.99,
        icon: "⚔️",
        image: "images/products/product-22.png"
    },
    {
        id: 23,
        name: "LEGO 41839 Message Board",
        sku: "AB-LGO-41839-N",
        condition: "New/Sealed",
        salePrice: 129.99,
        icon: "📝",
        image: "images/products/product-23.png"
    },
    {
        id: 24,
        name: "LEGO 40779 Year of the Horse",
        sku: "AB-LGO-40779-N",
        condition: "New/Sealed",
        salePrice: 59.99,
        icon: "🐴",
        image: "images/products/product-24.png"
    },
    {
        id: 25,
        name: "LEGO 40913 Vintage Parade Car",
        sku: "AB-LGO-40913-N",
        condition: "New/Sealed",
        salePrice: 65.99,
        icon: "🚗",
        image: "images/products/product-25.png"
    }
];

// Function to get product description
function getProductDescription(productName) {
    return `Factory-sealed LEGO® set "${productName}." Display-friendly build that's popular with adult fans. Ships securely packaged to help protect sealed box condition.`;
}
