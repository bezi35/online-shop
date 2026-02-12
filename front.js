
        // --- 1. DATASET: 30 PRODUCTS ---
        const products = [
            // ELECTRONICS
            { id: 1, name: "Wireless Noise Cancelling Headphones", category: "Electronics", price: 299.99, rating: 4.8, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
            { id: 2, name: "4K Ultra HD Action Camera", category: "Electronics", price: 149.50, rating: 4.5, img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400" },
            { id: 3, name: "Gaming Laptop 15-inch", category: "Electronics", price: 1200.00, rating: 4.9, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400" },
            { id: 4, name: "Smart Watch Series 7", category: "Electronics", price: 399.00, rating: 4.7, img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400" },
            { id: 5, name: "Smartphone 12 Pro", category: "Electronics", price: 999.00, rating: 4.8, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
            { id: 6, name: "Drone with 4K Camera", category: "Electronics", price: 750.00, rating: 4.6, img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400" },
            
            // FASHION
            { id: 7, name: "Men's Classic Blue Suit", category: "Fashion", price: 180.00, rating: 4.5, img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400" },
            { id: 8, name: "Denim Jacket Vintage", category: "Fashion", price: 65.00, rating: 4.3, img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400" },
            { id: 9, name: "wedding Dress", category: "Fashion", price: 45.99, rating: 4.6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNNnDqonWAbaQUHo63UjJLlDh_bA4W0GciA&s" },
            { id: 10, name: "Leather Handbag", category: "Fashion", price: 120.00, rating: 4.7, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400" },
            { id: 11, name: "Nike Air Running Shoes", category: "Fashion", price: 110.00, rating: 4.8, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
            { id: 12, name: "Luxury Gold Watch", category: "Fashion", price: 250.00, rating: 4.9, img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400" },
            { id: 13, name: "Aviator Sunglasses", category: "Fashion", price: 55.00, rating: 4.4, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400" },
            
            // HOME & KITCHEN
            { id: 14, name: "Modern Desk Lamp", category: "Home", price: 40.00, rating: 4.5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3XhQWy1Ib8eLAUhcClasCpUHSW3bc8uqMNg&s" },
            { id: 15, name: "Comfortable Office Chair", category: "Home", price: 150.00, rating: 4.6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkIoG7bh-tDK3HHXHLH-tFcTEkRFxPpC0cksP-jP1cQ&s" },
            { id: 16, name: "Espresso Coffee Machine", category: "Home", price: 220.00, rating: 4.8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqAgLNRBB47sN3qtKEv6_a3PC0gNxbVZQdA&s" },
            { id: 17, name: "Indoor Potted Plant", category: "Home", price: 25.00, rating: 4.7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKPIOa3-Ea8g4zCYTqwtLQ87mOhnUuvRPlA&s" },
            { id: 18, name: "fridge", category: "Home", price: 35.00, rating: 4.3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKccUgJ85svjhlNZF0w2ehxkjUeX5YwW2lg7cdyz-Lg&s" },
            { id: 19, name: "smart furniture Bed", category: "Home", price: 15.99, rating: 4.2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgn5E0-VkpdGKircivk8CEJtemcJdfRbJqsQ&s" },

            // SPORTS
            { id: 20, name: "Yoga Mat Non-Slip", category: "Sports", price: 29.99, rating: 4.5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXXedGoTYMV0B2_VDbBC75yF5PCX_H1hLLg&s" },
            { id: 21, name: "Dumbbell Set (10kg)", category: "Sports", price: 85.00, rating: 4.7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCgCTsehC6_-Dzn5INYlhVDXQaRC4a81MrQ&s" },
            { id: 22, name: "treadmil", category: "Sports", price: 30.00, rating: 4.6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFm3-oz4JMLRC2PHEfQLNf-7Jr0V51KYuW-Q&s" },
            { id: 23, name: "Mountain Bike", category: "Sports", price: 450.00, rating: 4.8, img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400" },
            
            // BEAUTY
            { id: 24, name: "Luxury Perfume Chanel", category: "Beauty", price: 110.00, rating: 4.9, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400" },
            { id: 25, name: "Organic Face Cream", category: "Beauty", price: 45.00, rating: 4.7, img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400" },
            { id: 26, name: "Matte Lipstick Red", category: "Beauty", price: 22.00, rating: 4.5, img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400" },
            { id: 27, name: "Hair Dryer Pro", category: "Beauty", price: 60.00, rating: 4.4, img: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=400" },
            
            // EXTRAS
            { id: 28, name: "Travel Backpack", category: "Fashion", price: 55.00, rating: 4.6, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" },
            { id: 29, name: "Mechanical mouse", category: "Electronics", price: 89.99, rating: 4.8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZshIS5Ku_HwSoMbktmIbBelUlsE6XkUQjXPIliOCRmw&s" },
            { id: 30, name: "Minimalist Wall Clock", category: "Home", price: 28.00, rating: 4.3, img: "https://images.unsplash.com/photo-1563861826100-9cb868c62138?w=400" }
           
        ];

        let cart = [];

        // --- 2. DISPLAY FUNCTION ---
        const grid = document.getElementById('productGrid');

        function displayProducts(data) {
            grid.innerHTML = data.map(item => `
                <div class="product-card">
                    <div class="prod-img-box">
                        <img src="${item.img}" alt="${item.name}" class="prod-img">
                    </div>
                    <div>
                        <div class="prod-title">${item.name}</div>
                        <div class="prod-rating">
                            ${getStars(item.rating)} <span>${item.rating}</span>
                        </div>
                        <div class="prod-price">
                            <span style="font-size:0.7rem; position:relative; top:-5px">$</span>
                            ${Math.floor(item.price)}<span style="font-size:0.8rem">${(item.price % 1).toFixed(2).substring(1)}</span>
                        </div>
                        <button class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
                    </div>
                </div>
            `).join('');
        }

        function getStars(rating) {
            let s = '';
            for(let i=0; i<5; i++) {
                if(i < Math.floor(rating)) s += '<i class="fas fa-star"></i>';
                else if(i < rating) s += '<i class="fas fa-star-half-alt"></i>';
                else s += '<i class="far fa-star"></i>';
            }
            return s;
        }

        displayProducts(products); // Initial Load

        // --- 3. FILTER & SEARCH ---
        function filterData(cat) {
            // Update UI active state
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            event.target.classList.add('active');

            if(cat === 'all') displayProducts(products);
            else displayProducts(products.filter(p => p.category === cat));
        }

        function searchProducts() {
            const val = document.getElementById('searchInput').value.toLowerCase();
            const filtered = products.filter(p => 
                p.name.toLowerCase().includes(val) || 
                p.category.toLowerCase().includes(val)
            );
            displayProducts(filtered);
        }

        // --- 4. CART LOGIC ---
        function toggleCart() {
            document.getElementById('cartSidebar').classList.toggle('open');
            document.getElementById('overlay').classList.toggle('active');
        }

        function addToCart(id) {
            const item = products.find(p => p.id === id);
            const exist = cart.find(c => c.id === id);
            
            if(exist) exist.qty++;
            else cart.push({...item, qty:1});

            updateCartHTML();
            showToast();
        }

        function updateCartHTML() {
            const count = document.getElementById('cartCount');
            const itemsDiv = document.getElementById('cartItems');
            const totalDiv = document.getElementById('cartTotal');

            // Count
            const totalQty = cart.reduce((acc, c) => acc + c.qty, 0);
            count.innerText = totalQty;
            count.style.display = totalQty > 0 ? 'flex' : 'none';

            // Items
            if(cart.length === 0) {
                itemsDiv.innerHTML = '<p style="text-align:center; margin-top:50px; color:#777">Cart is empty</p>';
                totalDiv.innerText = '$0.00';
            } else {
                let total = 0;
                itemsDiv.innerHTML = cart.map((c, i) => {
                    total += c.price * c.qty;
                    return `
                        <div class="cart-item">
                            <img src="${c.img}">
                            <div style="flex:1">
                                <div style="font-weight:500; font-size:0.9rem">${c.name}</div>
                                <div style="color:var(--primary); font-weight:bold">$${c.price} x ${c.qty}</div>
                            </div>
                            <div style="display:flex; flex-direction:column; justify-content:space-between; align-items:end">
                                <i class="fas fa-trash" style="color:#d11; cursor:pointer" onclick="removeItem(${i})"></i>
                            </div>
                        </div>
                    `;
                }).join('');
                totalDiv.innerText = '$' + total.toFixed(2);
            }
        }

        function removeItem(index) {
            cart.splice(index, 1);
            updateCartHTML();
        }

        function showToast() {
            const t = document.getElementById('toast');
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'), 2000);
        }

        function checkout() {
            if(cart.length > 0) alert('Proceeding to payment gateway...');
            else alert('Cart is empty!');
        }
    