// Helper function to safely handle product image display with fallback
function createProductImage(product, size = 'regular') {
    const container = document.createElement('div');
    const className = size === 'detail' ? 'product-detail-image' : 'product-image';
    container.className = className;
    
    if (product.image) {
        const img = document.createElement('img');
        // Sanitize by using setAttribute instead of direct HTML
        img.setAttribute('src', product.image);
        img.setAttribute('alt', product.name);
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = size === 'detail' ? 'contain' : 'cover';
        if (size === 'detail') {
            img.style.background = '#f5f5f5';
        }
        
        // Create fallback element
        const fallback = document.createElement('div');
        const fallbackClass = size === 'detail' ? 'product-detail-image-fallback' : 'product-image-fallback';
        fallback.className = fallbackClass;
        fallback.style.display = 'none';
        fallback.textContent = product.icon;
        
        // Handle image load error
        img.addEventListener('error', function() {
            this.style.display = 'none';
            fallback.style.display = 'flex';
        });
        
        container.appendChild(img);
        container.appendChild(fallback);
    } else {
        // No image provided, use icon directly
        const iconDiv = document.createElement('div');
        const iconClass = size === 'detail' ? 'product-detail-image-icon' : 'product-image-icon';
        iconDiv.className = iconClass;
        iconDiv.textContent = product.icon;
        container.appendChild(iconDiv);
    }
    
    return container;
}

// Helper function to safely escape HTML for use in attributes
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
