// Complete product data array with website URLs added
const products = [
    {
        "Product Name": "Tommy Hilfiger T-Shirt",
        "Brand": "Tommy Hilfiger",
        "Category": "T-Shirt",
        "Gender": "Men",
        "Material": "Wool",
        "Size Options": "L, M, XXL, XL, S",
        "Color Options": "Pink, Grey, Black, Blue",
        "Price (INR)": 1947,
        "Discounted Price (INR)": 1620,
        "Stock Availability": "In Stock",
        "Image URL": "https://images.pexels.com/photos/9558699/pexels-photo-9558699.jpeg?auto=compress&cs=tinysrgb&w=600",
        "Website URL": "https://www.tommyhilfiger.com"
    },
    {
        "Product Name": "Versace Hoodie",
        "Brand": "Versace",
        "Category": "Hoodie",
        "Gender": "Women",
        "Material": "Leather",
        "Size Options": "S, XXL",
        "Color Options": "White, Grey, Blue",
        "Price (INR)": 2776,
        "Discounted Price (INR)": 2776,
        "Stock Availability": "In Stock",
        "Image URL": "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
        "Website URL": "https://www.versace.com"
    },
    {
        "Product Name": "Tommy Hilfiger Hoodie",
        "Brand": "Tommy Hilfiger",
        "Category": "Hoodie",
        "Gender": "Women",
        "Material": "Wool",
        "Size Options": "XL, M, S, L",
        "Color Options": "Yellow, Black, White",
        "Price (INR)": 864,
        "Discounted Price (INR)": 707,
        "Stock Availability": "Out of Stock",
        "Image URL": "https://images.pexels.com/photos/6634370/pexels-photo-6634370.jpeg?auto=compress&cs=tinysrgb&w=600",
        "Website URL": "https://www.tommyhilfiger.com"
    },
    {
        "Product Name": "Versace Sweater",
        "Brand": "Versace",
        "Category": "Sweater",
        "Gender": "Men",
        "Material": "Silk",
        "Size Options": "M, XXL",
        "Color Options": "Purple, Brown",
        "Price (INR)": 1206,
        "Discounted Price (INR)": 1139,
        "Stock Availability": "Out of Stock",
        "Image URL": "https://images.pexels.com/photos/1021293/pexels-photo-1021293.jpeg?auto=compress&cs=tinysrgb&w=600",
        "Website URL": "https://www.versace.com"
    },
    {
        "Product Name": "H&M Dress",
        "Brand": "H&M",
        "Category": "Dress",
        "Gender": "Women",
        "Material": "Polyester",
        "Size Options": "L, XL",
        "Color Options": "Brown, Purple",
        "Price (INR)": 4842,
        "Discounted Price (INR)": 4842,
        "Stock Availability": "Out of Stock",
        "Image URL": "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=600",
        "Website URL": "https://www2.hm.com"
    },
    {
        "Product Name": "Levi's Dress",
        "Brand": "Levi's",
        "Category": "Dress",
        "Gender": "Women",
        "Material": "Blended",
        "Size Options": "M, S",
        "Color Options": "Yellow, Purple, Grey",
        "Price (INR)": 1450,
        "Discounted Price (INR)": 1344,
        "Stock Availability": "In Stock",
        "Image URL": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
        "Website URL": "https://www.levi.com"
    },
    {
        "Product Name": "H&M Sweater",
        "Brand": "H&M",
        "Category": "Sweater",
        "Gender": "Men",
        "Material": "Silk",
        "Size Options": "XL, XXL, S",
        "Color Options": "Purple, Blue, Brown, Black",
        "Price (INR)": 1821,
        "Discounted Price (INR)": 1821,
        "Stock Availability": "In Stock",
        "Image URL": "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600",
        "Website URL": "https://www2.hm.com"
    },
    {
        "Product Name": "Nike Kurta",
        "Brand": "Nike",
        "Category": "Kurta",
        "Gender": "Women",
        "Material": "Polyester",
        "Size Options": "XL, S",
        "Color Options": "Yellow, Blue, White",
        "Price (INR)": 1063,
        "Discounted Price (INR)": 1063,
        "Stock Availability": "Out of Stock",
        "Image URL": "https://images.pexels.com/photos/1187954/pexels-photo-1187954.jpeg?auto=compress&cs=tinysrgb&w=600",
        "Website URL": "https://www.nike.com"
    },
    {
        "Product Name": "Adidas Saree",
        "Brand": "Adidas",
        "Category": "Saree",
        "Gender": "Men",
        "Material": "Rayon",
        "Size Options": "XL, S, L, M, XXL",
        "Color Options": "Yellow, Pink, Brown",
        "Price (INR)": 1385,
        "Discounted Price (INR)": 1224,
        "Stock Availability": "Out of Stock",
        "Image URL": "https://images.pexels.com/photos/916005/pexels-photo-916005.jpeg?auto=compress&cs=tinysrgb&w=600",
        "Website URL": "https://www.adidas.com"
    },
    {
        "Product Name": "UCB Jeans",
        "Brand": "UCB",
        "Category": "Jeans",
        "Gender": "Men",
        "Material": "Silk",
        "Size Options": "XXL, M, XL, S",
        "Color Options": "Red, Brown, Purple",
        "Price (INR)": 2300,
        "Discounted Price (INR)": 2034,
        "Stock Availability": "Out of Stock",
        "Image URL": "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600",
        "Website URL": "https://www.ucb.com"
    }
];

// DOM Elements and Initialization
document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('product-container');
    const categoryFilter = document.getElementById('category-filter');
    const genderFilter = document.getElementById('gender-filter');
    const brandFilter = document.getElementById('brand-filter');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    // Initialize pagination controls
    const paginationContainer = document.createElement('div');
    paginationContainer.id = 'pagination-controls';
    paginationContainer.className = 'pagination-container';
    document.querySelector('.product-grid').appendChild(paginationContainer);
    
    // Display all products initially
    displayProducts(products);
    
    // Filter event listeners
    categoryFilter.addEventListener('change', filterProducts);
    genderFilter.addEventListener('change', filterProducts);
    brandFilter.addEventListener('change', filterProducts);
    
    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

// Display products with pagination
let currentPage = 1;
const productsPerPage = 20;

function displayProducts(productsToDisplay, page = 1) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = productsToDisplay.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
        productContainer.innerHTML = '<div class="no-results">No products found matching your filters.</div>';
        document.getElementById('pagination-controls').style.display = 'none';
        return;
    }
    
    paginatedProducts.forEach(product => {
        const discountPercent = product['Price (INR)'] > 0 
            ? Math.round(((product['Price (INR)'] - product['Discounted Price (INR)']) / product['Price (INR)']) * 100)
            : 0;
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product['Image URL']}" alt="${product['Product Name']}" class="product-image" onerror="this.src='https://via.placeholder.com/300x400?text=Product+Image'">
            <div class="stock-status ${product['Stock Availability'].toLowerCase().includes('in stock') ? 'in-stock' : 'out-of-stock'}">
                ${product['Stock Availability']}
            </div>
            ${discountPercent > 0 ? `<div class="discount-badge">${discountPercent}% OFF</div>` : ''}
            <div class="product-info">
                <div class="product-brand">${product['Brand']}</div>
                <h3 class="product-name">${product['Product Name']}</h3>
                <div class="product-meta">
                    <span class="product-category">${product['Category']}</span>
                    <span class="product-gender">${product['Gender']}</span>
                </div>
                <div class="product-sizes">Sizes: ${product['Size Options']}</div>
                <div class="product-colors">Colors: ${product['Color Options']}</div>
                <div class="product-price">
                    <span class="current-price">₹${product['Discounted Price (INR)']}</span>
                    ${product['Discounted Price (INR)'] < product['Price (INR)'] ? 
                      `<span class="original-price">₹${product['Price (INR)']}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="view-btn" onclick="window.open('${product['Website URL']}', '_blank')">View</button>
                    <button class="cart-btn" onclick="handleBuyClick('${product['Website URL']}')">Buy</button>
                </div>
            </div>
        `;
        
        productContainer.appendChild(productCard);
    });
    
    updatePaginationControls(productsToDisplay.length, page);
}

// Handle Buy button click
function handleBuyClick(websiteUrl) {
    // You could add additional logic here like:
    // 1. Tracking the click
    // 2. Showing a confirmation dialog
    // 3. Checking stock availability before redirecting
    
    // For now, simply redirect to the product website
    window.open(websiteUrl, '_blank');
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// Update pagination controls
function updatePaginationControls(totalProducts, currentPage) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const paginationContainer = document.getElementById('pagination-controls');
    
    if (totalPages <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }
    
    paginationContainer.style.display = 'flex';
    paginationContainer.innerHTML = '';
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'pagination-btn';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            filterProducts();
        }
    });
    paginationContainer.appendChild(prevButton);
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        const firstPageButton = document.createElement('button');
        firstPageButton.className = 'pagination-btn';
        firstPageButton.textContent = '1';
        firstPageButton.addEventListener('click', () => {
            currentPage = 1;
            filterProducts();
        });
        paginationContainer.appendChild(firstPageButton);
        
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationContainer.appendChild(ellipsis);
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            filterProducts();
        });
        paginationContainer.appendChild(pageButton);
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationContainer.appendChild(ellipsis);
        }
        
        const lastPageButton = document.createElement('button');
        lastPageButton.className = 'pagination-btn';
        lastPageButton.textContent = totalPages;
        lastPageButton.addEventListener('click', () => {
            currentPage = totalPages;
            filterProducts();
        });
        paginationContainer.appendChild(lastPageButton);
    }
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.className = 'pagination-btn';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            filterProducts();
        }
    });
    paginationContainer.appendChild(nextButton);
}

// Filter products based on selections
function filterProducts() {
    const categoryFilter = document.getElementById('category-filter');
    const genderFilter = document.getElementById('gender-filter');
    const brandFilter = document.getElementById('brand-filter');
    const searchInput = document.getElementById('search-input');
    
    const selectedCategory = categoryFilter.value.toLowerCase();
    const selectedGender = genderFilter.value.toLowerCase();
    const selectedBrand = brandFilter.value.toLowerCase();
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    const filteredProducts = products.filter(product => {
        const productCategory = product.Category.toLowerCase();
        const productGender = product.Gender.toLowerCase();
        const productBrand = product.Brand.toLowerCase();
        const productName = product['Product Name'].toLowerCase();
        
        const matchesFilters = 
            (selectedCategory === 'all' || productCategory === selectedCategory) &&
            (selectedGender === 'all' || productGender === selectedGender) &&
            (selectedBrand === 'all' || productBrand === selectedBrand);
        
        const matchesSearch = searchTerm === '' || 
            productName.includes(searchTerm) ||
            productBrand.includes(searchTerm) ||
            productCategory.includes(searchTerm);
        
        return matchesFilters && matchesSearch;
    });
    
    currentPage = 1;
    displayProducts(filteredProducts, currentPage);
}

// Search functionality
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filterProducts(); // Show all products if search is empty
        return;
    }
    
    filterProducts(); // This will now handle search through the filterProducts function
}