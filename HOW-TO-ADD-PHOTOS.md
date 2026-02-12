# How to Add Photos to Your Products

This guide explains how to add actual product photos to your LEGO® sets on the website.

## Quick Start (3 Easy Steps)

1. **Take photos** of your LEGO® sets (preferably of the box)
2. **Name them** as `product-1.jpg`, `product-2.jpg`, etc. (matching the product ID)
3. **Place them** in the `images/products/` folder

That's it! The website will automatically display them.

## Example

We've included 2 example placeholder images to show you how it works:
- `images/products/product-1.svg` - Example for Product #1 (Minecraft Crafting Table)
- `images/products/product-2.svg` - Example for Product #2 (Monkey D. Luffy Figure)

Open your website and navigate to the catalog or product pages to see these examples in action!

## Detailed Instructions

### Step 1: Prepare Your Photos

**Best Practices:**
- Use clear, well-lit photos of the product box
- Show the front of the box prominently
- Ensure product name and set number are visible
- Use a clean, neutral background (white works best)
- Keep the box centered in the frame

**Image Specifications:**
- **Format**: JPG, PNG, WebP, or SVG
- **Recommended Size**: 800x800 to 1200x1200 pixels
- **File Size**: Keep under 500KB for fast loading
- **Aspect Ratio**: Square (1:1) or close to it works best

### Step 2: Name Your Image Files

Each product has a unique ID (1-25 currently). Name your image files to match:

```
Product ID 1  → product-1.jpg
Product ID 2  → product-2.jpg
Product ID 3  → product-3.jpg
...and so on
```

**Important Notes:**
- File names are case-sensitive on some servers
- Use lowercase for consistency
- The file extension should match your image format (.jpg, .png, etc.)

### Step 3: Upload to the Website

Place your images in the `images/products/` directory. You can do this by:
- Using FTP/SFTP to upload files to your web server
- Using your hosting provider's file manager
- Committing the files to your Git repository

### Step 4: Verify

1. Open your website in a browser
2. Navigate to the catalog page
3. You should see your product photos instead of emoji icons
4. Click on a product to see the detailed view with a larger image

## How It Works

The system has built-in fallback support:

1. **If image exists**: The photo is displayed
2. **If image fails to load**: The emoji icon is shown automatically
3. **If no image path**: The emoji icon is displayed

This means your website will always look good, even if some images are missing!

## Troubleshooting

### Image not showing up?

**Check these common issues:**

1. **File name mismatch**: Ensure the filename exactly matches `product-X.jpg` where X is the product ID
2. **Wrong directory**: Images must be in `images/products/` not just `images/`
3. **File extension**: The extension in `products.js` must match your actual file extension
4. **File permissions**: Ensure the web server can read the image files (644 permissions)
5. **Case sensitivity**: Some servers are case-sensitive, use lowercase filenames

### Image looks stretched or distorted?

The CSS is designed to handle various image sizes:
- **Catalog**: Images are cropped to fit (object-fit: cover)
- **Detail page**: Images are contained to fit (object-fit: contain)

For best results, use square images or images close to square aspect ratio.

### Images loading slowly?

**Optimization tips:**
- Compress images using tools like TinyPNG, ImageOptim, or Squoosh
- Convert to WebP format for better compression
- Resize images to max 1200x1200px (larger isn't necessary)
- Target file sizes under 200-300KB

## Updating Image Paths (Advanced)

If you want to use different image paths or filenames, edit `products.js`:

```javascript
{
    id: 1,
    name: "LEGO 21265 Minecraft The Crafting Table",
    sku: "AB-LGO-21265-N",
    condition: "New/Sealed",
    salePrice: 104.99,
    icon: "🧱",
    image: "images/products/your-custom-name.jpg"  // ← Change this
}
```

## Getting Help

If you're having trouble:
1. Check the browser console for error messages (F12 in most browsers)
2. Verify file paths are correct
3. Test with a simple image first (like the provided examples)
4. Make sure your web server is serving the files correctly

## Summary

✅ Take photos of your products
✅ Resize to ~800x800 pixels  
✅ Compress to <500KB
✅ Name as product-X.jpg
✅ Upload to images/products/
✅ Refresh your website!

The product photos will now appear on both the catalog and product detail pages, making your site look much more professional and appealing to customers!
