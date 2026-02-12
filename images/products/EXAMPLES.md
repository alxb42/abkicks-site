# Example: Adding Product Photos

This directory contains two example product images (product-1.jpg and product-2.jpg) that demonstrate how the image system works.

## What happens with these examples:

1. **Product #1** (LEGO 21265 Minecraft The Crafting Table) - Has a sample SVG placeholder
2. **Product #2** (LEGO 40799 Monkey D. Luffy Figure) - Has a sample SVG placeholder  
3. **Products #3-25** - Will display emoji icons as fallback (no images yet)

## To replace these examples with your actual photos:

1. Take high-quality photos of your LEGO® boxes
2. Edit/resize them to approximately 800x800px
3. Save them as JPG files named `product-1.jpg`, `product-2.jpg`, etc.
4. Replace the existing placeholder files in this directory

## Quick Test:

Open `catalog.html` or `product.html?id=1` in your browser to see:
- Products with images will display the actual photos
- Products without images will display the emoji fallback
- If an image fails to load, it automatically falls back to the emoji

## Image Optimization Tips:

- Use tools like TinyPNG or ImageOptim to compress images
- Target file size: under 200-500KB per image
- Format: JPG is best for photos, PNG for graphics with transparency
- Dimensions: 800x800 to 1200x1200 pixels recommended

The system is designed to be graceful - it works whether you have all images, some images, or no images at all!
