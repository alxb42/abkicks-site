# AB KICKS LLC - LEGO® E-Commerce Website

A professional e-commerce website for AB KICKS LLC, specializing in factory-sealed LEGO® sets.

## Overview

AB KICKS LLC is a small business based in North Haven, CT, offering premium sealed LEGO® sets to collectors, builders, and enthusiasts. This website provides a complete product catalog, business information, and all necessary policies for a legitimate online business.

## Features

### Pages
- **Home Page** - Welcome page featuring the business name, tagline, and key selling points
- **Product Catalog** - Grid display of 25 LEGO® products with pricing, condition, and SKU information
- **Product Details** - Individual pages for each product with full descriptions
- **About Page** - Information about the business, mission, and what makes us different
- **Contact Page** - Business contact information, location, and contact form
- **Policies Page** - Overview of shipping and returns policies
- **Shipping Policy** - Detailed shipping information
- **Returns Policy** - Complete returns and refunds policy
- **Terms of Service** - Legal terms and conditions
- **Privacy Policy** - Privacy and data protection information

### Product Catalog

The website features 25 authentic LEGO® sets including:
- Minecraft sets
- Star Wars BrickHeadz
- Disney sets
- LEGO Ideas collections
- Animal Crossing sets
- Seasonal and limited edition sets

Each product includes:
- Product name and SKU
- Original retail price and current price
- Condition (New/Sealed)
- Clickable links to detailed product pages
- Custom descriptions for each set

### Design Features

- **Modern, Professional Design** - Clean layout with purple gradient hero sections
- **Responsive Layout** - Mobile-friendly design that works on all devices
- **Easy Navigation** - Consistent header and footer on all pages
- **Clear Call-to-Actions** - Prominent buttons and contact information
- **Professional Styling** - Branded color scheme (dark headers, purple accents, green CTAs)

## Technical Details

- **Technology Stack**: HTML5, CSS3, JavaScript
- **No Dependencies**: Pure vanilla HTML/CSS/JS - no frameworks required
- **Hosting**: Can be hosted on any static web hosting service (GitHub Pages, Netlify, Vercel, etc.)
- **Contact Form**: Opens default email client with pre-filled information

## Product Data

All product information is stored in `products.js` for easy management and updates. The file includes:
- Product IDs
- Product names
- SKU numbers
- Sale prices
- Icons for visual representation (used as fallback)
- Image paths for product photos
- Automated description generation

## Business Information

- **Business Name**: AB KICKS LLC
- **Location**: North Haven, CT
- **Email**: abkicksllc@gmail.com
- **Specialization**: Factory-sealed LEGO® sets

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser to view the website locally
3. To deploy: Upload all files to your web hosting service
4. No build process or compilation required

## File Structure

```
/
├── index.html              # Home page
├── catalog.html            # Product catalog
├── product.html            # Product detail page (dynamic)
├── about.html              # About us page
├── contact.html            # Contact page
├── policies.html           # Policies overview
├── shipping-policy.html    # Shipping policy
├── returns-policy.html     # Returns policy
├── terms.html              # Terms of service
├── privacy.html            # Privacy policy
├── styles.css              # Main stylesheet
├── products.js             # Product data and logic
└── README.md              # This file
```

## Customization

### Adding New Products

Edit `products.js` and add new product objects to the `products` array:

```javascript
{
    id: 26,
    name: "LEGO Product Name",
    sku: "AB-LGO-XXXXX-N",
    condition: "New/Sealed",
    salePrice: 149.99,
    icon: "🎨",
    image: "images/products/product-26.jpg"
}
```

### Adding Product Photos

Each product can have an actual photo displayed on the site:

1. Take a clear photo of your LEGO® set box (recommended size: 800x800px)
2. Save it as `product-X.jpg` where X is the product ID (e.g., `product-1.jpg`)
3. Place the image in the `images/products/` directory
4. The website will automatically display it!

**Image Guidelines:**
- Use `.jpg`, `.png`, or `.webp` formats
- Recommended size: 800x800px to 1200x1200px
- Keep file sizes under 500KB for fast loading
- Use clear, well-lit photos with the product centered
- If no image is found, the emoji icon will be displayed as a fallback

For more details, see `images/products/README.md`.

### Updating Business Information

Update contact details in:
- Footer section (appears on all pages)
- `contact.html` - Contact information section
- Policy pages - Update business name and location as needed

### Styling Changes

Edit `styles.css` to customize:
- Colors and branding
- Fonts and typography
- Layout and spacing
- Responsive breakpoints

## Legal Notice

LEGO® is a trademark of the LEGO Group. AB KICKS LLC is an independent reseller and is not affiliated with, endorsed by, or sponsored by the LEGO Group.

## License

This website was created for AB KICKS LLC. All content and code are proprietary to AB KICKS LLC.

---

© 2026 AB KICKS LLC. All rights reserved.
