# Product Images

This directory contains product photos for the LEGO® sets in the catalog.

## Adding Product Photos

To add photos for your products:

1. **Image Naming Convention**: Name your image files to match the product IDs:
   - `product-1.jpg` for product ID 1
   - `product-2.jpg` for product ID 2
   - And so on...

2. **Image Format**: Recommended formats are:
   - `.jpg` or `.jpeg` for photos
   - `.png` for images with transparency
   - `.webp` for modern, optimized images

3. **Image Size Recommendations**:
   - **Catalog thumbnails**: Images display at 200px height
   - **Product detail pages**: Images display at 400px height
   - **Recommended source size**: 800x800px to 1200x1200px for best quality
   - Keep file sizes under 500KB for faster loading

4. **Image Guidelines**:
   - Use clear, well-lit photos of the actual LEGO® box
   - Show the front of the box prominently
   - Ensure the product name and set number are visible
   - Use a clean background (white or neutral colors work best)
   - Take photos in good lighting conditions
   - Keep the box in frame without too much empty space

## Fallback Behavior

If an image file is not found, the website will automatically fall back to displaying the emoji icon for that product. This ensures the site always displays properly even if some images are missing.

## Example Product Entries

In `products.js`, each product has an `image` field:

```javascript
{
    id: 1,
    name: "LEGO 21265 Minecraft The Crafting Table",
    sku: "AB-LGO-21265-N",
    condition: "New/Sealed",
    salePrice: 104.99,
    icon: "🧱",
    image: "images/products/product-1.jpg"
}
```

## Quick Start

1. Take photos of your LEGO® sets
2. Resize/optimize the images to around 800x800px
3. Name them according to the product ID (product-1.jpg, product-2.jpg, etc.)
4. Place them in this directory (`images/products/`)
5. The website will automatically display them!

## Need Help?

- Make sure image filenames match exactly (case-sensitive on some servers)
- Test your images locally by opening `catalog.html` in a browser
- Check browser console for any image loading errors
- Ensure image file sizes are reasonable for web use
