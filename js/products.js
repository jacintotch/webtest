// Example product data
const products = [
    {
        id: 'fire-extinguisher',
        name: 'Fire Extinguisher',
        description: 'Reliable fire extinguishers for every type of fire risk.',
        price: '$49.99',
        image: '../media/IMAGES/fire_extinguisher.jpg',
        rating: '⭐⭐⭐⭐☆',
        reviews: 124
    },
    {
        id: 'fire-alarm',
        name: 'Fire Alarm System',
        description: 'Stay alert with our advanced fire alarm systems.',
        price: '$89.99',
        image: '../media/IMAGES/fire_alarm.jpg',
        rating: '⭐⭐⭐⭐⭐',
        reviews: 256
    },
    // Add more product objects here...
];

let currentPage = 1;
const productsPerPage = 10;

// Function to display products on the page
function displayProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    currentProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${product.price}</p>
                <div class="product-rating">
                    <span>${product.rating}</span>
                    <span>(${product.reviews} Reviews)</span>
                </div>
                <button class="product-button" onclick="addToCart('${product.id}')">Add to Cart</button>
                <button class="product-details-button" onclick="showProductDetails('${product.id}')">View Details</button>
            </div>
        `;

        productGrid.appendChild(productElement);
    });
}

// Handle pagination
function nextPage() {
    if (currentPage * productsPerPage < products.length) {
        currentPage++;
        displayProducts();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
    }
}

// Handle product filtering by search
function filterProducts() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    );

    displayFilteredProducts(filteredProducts);
}

// Display filtered products
function displayFilteredProducts(filteredProducts) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${product.price}</p>
                <div class="product-rating">
                    <span>${product.rating}</span>
                    <span>(${product.reviews} Reviews)</span>
                </div>
                <button class="product-button" onclick="addToCart('${product.id}')">Add to Cart</button>
                <button class="product-details-button" onclick="showProductDetails('${product.id}')">View Details</button>
            </div>
        `;

        productGrid.appendChild(productElement);
    });
}

// Initialize the display of products
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});

// Example placeholder functions for cart and details
function addToCart(productId) {
    alert('Added to cart: ' + productId);
}

function showProductDetails(productId) {
    alert('Showing details for: ' + productId);
}
