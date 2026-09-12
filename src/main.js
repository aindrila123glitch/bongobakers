// ==========================================================================
// BONGO BAKERS KOLKATA - CLIENT ENGINE & ROUTING
// Lightweight, Fast-loading, Red/Black/White Theme, Paginated Grid & Social Feeds
// ==========================================================================

// 1. INITIAL REPOSITORY DATA (AUTHENTIC BONGO BAKERS CATALOG)
const INITIAL_PRODUCTS = [
  // Classic Cakes
  {
    id: "bb-classic-1",
    title: "Black Forest Cake",
    category: "classic-cakes",
    categoryName: "Classic Cakes",
    price: 550.00,
    rating: 4.9,
    reviewsCount: 38,
    desc: "Layered chocolate sponge infused with fresh cream, tart dark cherries, and crowned with hand-shaved Belgian dark chocolate curls.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-classic-2",
    title: "Butterscotch Crunch Cake",
    category: "classic-cakes",
    categoryName: "Classic Cakes",
    price: 550.00,
    rating: 4.8,
    reviewsCount: 29,
    desc: "Caramelized brown sugar sponge layered with whipped butterscotch frosting, homemade golden praline nougat, and caramel drip.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-classic-3",
    title: "Belgian Chocolate Truffle Cake",
    category: "classic-cakes",
    categoryName: "Classic Cakes",
    price: 650.00,
    rating: 5.0,
    reviewsCount: 64,
    desc: "Kolkata's favorite decadent dessert. Ultra-moist dark chocolate cake layered with silky Belgian chocolate ganache.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-classic-4",
    title: "Kitkat & Gems Celebration Cake",
    category: "classic-cakes",
    categoryName: "Classic Cakes",
    price: 750.00,
    rating: 4.9,
    reviewsCount: 42,
    desc: "A showstopper encircled with crispy KitKat bars, tied with a vibrant celebration ribbon, and loaded with colourful chocolate candies.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-classic-5",
    title: "Oreo Cream Delice Cake",
    category: "classic-cakes",
    categoryName: "Classic Cakes",
    price: 600.00,
    rating: 4.8,
    reviewsCount: 31,
    desc: "Decadent cookies-and-cream creation made with crushed Oreo biscuits, vanilla buttercream, and dark chocolate drizzle.",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-classic-6",
    title: "Pure Madagascar Vanilla Cake",
    category: "classic-cakes",
    categoryName: "Classic Cakes",
    price: 500.00,
    rating: 4.7,
    reviewsCount: 22,
    desc: "Delicate and airy sponge infused with natural Madagascar bourbon vanilla beans, topped with handcrafted pink sugar roses.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-classic-7",
    title: "White Chocolate Silk Cake",
    category: "classic-cakes",
    categoryName: "Classic Cakes",
    price: 650.00,
    rating: 4.9,
    reviewsCount: 27,
    desc: "Melt-in-mouth Swiss white chocolate ganache over fluffy sponge cake, garnished with white chocolate shavings and fresh raspberries.",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },

  // Seasonal Fruit Cakes
  {
    id: "bb-fruit-1",
    title: "Fresh Alphonso Mango Cake",
    category: "seasonal-fruit",
    categoryName: "Seasonal Fruit",
    price: 700.00,
    rating: 5.0,
    reviewsCount: 45,
    desc: "Seasonal delight prepared with authentic Alphonso mango pulp, light sponge, and crowned with hand-sliced ripe sweet mangoes.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-fruit-2",
    title: "Exotic Mixed Fruit Cake",
    category: "seasonal-fruit",
    categoryName: "Seasonal Fruit",
    price: 750.00,
    rating: 4.9,
    reviewsCount: 36,
    desc: "Vibrant garden of fresh fruits including kiwi, strawberry, dragon fruit, and pineapple over light whipped cream.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },

  // Theme & Celebration Cakes
  {
    id: "bb-theme-1",
    title: "Bengali Wedding Theme Cake",
    category: "theme-cakes",
    categoryName: "Theme & Celebration",
    price: 1800.00,
    rating: 5.0,
    reviewsCount: 52,
    desc: "Magnificent traditional wedding centerpiece adorned with auspicious Bengali 'Topor', 'Mukut', and red & gold artistic filigree.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-theme-2",
    title: "Romantic Anniversary Rose Cake",
    category: "theme-cakes",
    categoryName: "Theme & Celebration",
    price: 1200.00,
    rating: 4.9,
    reviewsCount: 39,
    desc: "Velveteen crimson cake decorated with edible sugar roses, chocolate truffles, and golden anniversary personalized plaque.",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-theme-3",
    title: "2-Tier Grand Birthday Celebration Cake",
    category: "theme-cakes",
    categoryName: "Theme & Celebration",
    price: 2200.00,
    rating: 5.0,
    reviewsCount: 48,
    desc: "Dual tier statement cake with customized flavor per tier, cascade of macarons, fresh strawberries, and glittering celebration candles.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-theme-4",
    title: "Superhero Avenger Theme Cake",
    category: "theme-cakes",
    categoryName: "Theme & Celebration",
    price: 1400.00,
    rating: 4.9,
    reviewsCount: 40,
    desc: "Custom comic character birthday cake featuring handcrafted fondant hero shields, cityscape fondant, and rich chocolate sponge.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-theme-5",
    title: "Cricket Sports Celebration Cake",
    category: "theme-cakes",
    categoryName: "Theme & Celebration",
    price: 1350.00,
    rating: 4.8,
    reviewsCount: 26,
    desc: "For the cricket fanatics of Kolkata! Edible pitch, fondant cricket bat, red leather ball, and wicket stumps in rich chocolate flavor.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-theme-6",
    title: "Frozen Elsa & Unicorn Magic Cake",
    category: "theme-cakes",
    categoryName: "Theme & Celebration",
    price: 1400.00,
    rating: 5.0,
    reviewsCount: 34,
    desc: "Enchanting pastel ombre buttercream swirls, edible silver snowflakes, and rainbow meringue peaks that kids adore.",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },

  // Handcrafted Chocolates
  {
    id: "bb-choco-1",
    title: "Artisan Dark Chocolate Fudge",
    category: "chocolates",
    categoryName: "Chocolates",
    price: 280.00,
    rating: 4.9,
    reviewsCount: 19,
    desc: "Rich 70% dark cocoa fudge squares crafted with pure dairy butter and topped with roasted cashew chunks.",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-choco-2",
    title: "Premium Choco Fruit & Nut Bar",
    category: "chocolates",
    categoryName: "Chocolates",
    price: 240.00,
    rating: 4.8,
    reviewsCount: 22,
    desc: "Silky milk chocolate embedded with whole roasted almonds, Afghan raisins, and tart cranberries.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-choco-3",
    title: "Handcrafted Belgian Chocolate Bar",
    category: "chocolates",
    categoryName: "Chocolates",
    price: 220.00,
    rating: 4.9,
    reviewsCount: 28,
    desc: "Classic smooth Belgian dark chocolate slab with subtle notes of vanilla and roasted cocoa.",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-choco-4",
    title: "Alphonso Mango Infused Chocolate",
    category: "chocolates",
    categoryName: "Chocolates",
    price: 260.00,
    rating: 4.8,
    reviewsCount: 17,
    desc: "Unique fusion of creamy white chocolate with freeze-dried sweet mango crystals.",
    image: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },

  // Cookies & Desserts
  {
    id: "bb-cookie-1",
    title: "Traditional Ajwain Savory Cookies",
    category: "cookies-desserts",
    categoryName: "Cookies & Desserts",
    price: 160.00,
    rating: 4.9,
    reviewsCount: 35,
    desc: "Crispy, melt-in-mouth savory tea-time cookies infused with fragrant roasted ajwain (carom seeds).",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-cookie-2",
    title: "Double Choco Chip Crunch Cookies",
    category: "cookies-desserts",
    categoryName: "Cookies & Desserts",
    price: 180.00,
    rating: 5.0,
    reviewsCount: 41,
    desc: "Buttery bakery-fresh cookies packed with gooey dark and milk chocolate morsels.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-cookie-3",
    title: "Healthy Oats & Nuts Cookies",
    category: "cookies-desserts",
    categoryName: "Cookies & Desserts",
    price: 190.00,
    rating: 4.7,
    reviewsCount: 18,
    desc: "Wholesome rolled oats, pumpkin seeds, and Californian walnuts baked with pure organic honey.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-dessert-1",
    title: "Signature Dark Chocolate Brownie",
    category: "cookies-desserts",
    categoryName: "Cookies & Desserts",
    price: 140.00,
    rating: 5.0,
    reviewsCount: 46,
    desc: "Intensely fudgy Belgian chocolate brownie with a crinkly paper-thin top crust and gooey interior.",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  },
  {
    id: "bb-dessert-2",
    title: "Fresh Berry Custard Tart",
    category: "cookies-desserts",
    categoryName: "Cookies & Desserts",
    price: 150.00,
    rating: 4.9,
    reviewsCount: 23,
    desc: "Crisp butter shortcrust shell generously filled with smooth Madagascar vanilla bean custard and fresh berries.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=700&auto=format&fit=crop&q=80",
    isVeg: true,
    isFresh: true
  }
];

// 2. SOCIAL MEDIA FEEDS DATA (ADMIN MANAGED VIA SHARE LINKS)
const INITIAL_SOCIAL_FEEDS = [
  {
    id: "feed-1",
    platform: "instagram",
    handle: "@bongobakerskolkata",
    date: "Sep 10, 2026",
    shareLink: "https://instagram.com/bongobakerskolkata",
    caption: "A majestic 3-Tier Bengali Wedding theme cake delivered today in Salt Lake, Kolkata! Handcrafted motifs and royal red rose accents. 🎂✨",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "feed-2",
    platform: "facebook",
    handle: "facebook.com/bongobakerskolkata",
    date: "Sep 8, 2026",
    shareLink: "https://facebook.com/bongobakerskolkata",
    caption: "Freshly baked Belgian Chocolate Truffle and KitKat celebration cakes ready for pickup at our Raja Manindra Road outlet! WhatsApp 9330703521 to order.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "feed-3",
    platform: "instagram",
    handle: "@bongobakerskolkata",
    date: "Sep 5, 2026",
    shareLink: "https://instagram.com/bongobakerskolkata",
    caption: "Behind the counter with our head pastry chef! Making fresh Alphonso mango tarts and delicate butter cookies this morning. 🥭🥐",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=600&auto=format&fit=crop&q=80"
  }
];

// 3. REVIEWS & GUESTBOOK DATA
const INITIAL_REVIEWS = [
  {
    id: "rev-1",
    name: "Ananya Sen",
    rating: 5,
    text: "Bongo Bakers made our daughter's birthday truly magical! The Elsa theme cake looked breathtaking and the chocolate truffle flavor was so moist and rich.",
    date: "Sep 9, 2026",
    status: "approved"
  },
  {
    id: "rev-2",
    name: "Debraj Ghosh",
    rating: 5,
    text: "Best bakery in North Kolkata! Ordered from Shyambazar via WhatsApp. Delivery was right on time and the Ajwain cookies were melt-in-mouth perfection.",
    date: "Sep 7, 2026",
    status: "approved"
  },
  {
    id: "rev-3",
    name: "Priyanka Banerjee",
    rating: 5,
    text: "The Bengali Wedding Theme cake created for my brother's reception stole the entire show! Every guest asked where we got it from. 10/10!",
    date: "Aug 29, 2026",
    status: "approved"
  }
];

// LocalStorage Helper
function getStorage(key, defaults) {
  try {
    const data = localStorage.getItem(key);
    if (!data) {
      localStorage.setItem(key, JSON.stringify(defaults));
      return defaults;
    }
    const parsed = JSON.parse(data);
    // Sanitize any broken unsplash URLs from previous sessions
    if (key === 'bongobakers_products' && Array.isArray(parsed)) {
      parsed.forEach(p => {
        if (p.image && p.image.includes('photo-1535141192574')) {
          p.image = 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=700&auto=format&fit=crop&q=80';
        }
      });
    }
    return parsed;
  } catch (e) {
    return defaults;
  }
}

function setStorage(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.error("Storage save failed", e);
  }
}

// State Variables
let products = getStorage('bongobakers_products', INITIAL_PRODUCTS);
let socialFeeds = getStorage('bongobakers_social_feeds', INITIAL_SOCIAL_FEEDS);
let reviews = getStorage('bongobakers_reviews', INITIAL_REVIEWS);

let activeCategory = 'all';
let searchQuery = '';
let sortOption = 'default';
let currentPage = 1;
const itemsPerPage = 8; // 8 items per page for clean 4x2 grid
let isAdminLoggedIn = false;

// DOM Elements
const homeView = document.getElementById('home-view');
const productDetailView = document.getElementById('product-detail-view');
const productsGrid = document.getElementById('products-grid');
const paginationContainer = document.getElementById('pagination-container');
const categoryTabs = document.querySelectorAll('.filter-tab');
const searchInput = document.getElementById('catalog-search-input');
const sortSelect = document.getElementById('catalog-sort-select');
const socialFeedGrid = document.getElementById('social-feed-grid');
const reviewsStream = document.getElementById('reviews-stream');
const publicReviewForm = document.getElementById('public-review-form');

// Admin Elements
const adminPanel = document.getElementById('admin-panel');
const adminLoginBox = document.getElementById('admin-login-box');
const adminDashboardContent = document.getElementById('admin-dashboard-content');
const adminLoginForm = document.getElementById('admin-login-form');
const adminLoginError = document.getElementById('admin-login-error');
const adminTabs = document.querySelectorAll('.admin-nav-tab');
const adminPanes = document.querySelectorAll('.admin-tab-pane');
const closeAdminBtn = document.getElementById('close-admin-btn');
const adminProductsList = document.getElementById('admin-products-list');
const adminSocialList = document.getElementById('admin-social-list');
const adminModerationList = document.getElementById('admin-moderation-list');
const totalProdCount = document.getElementById('total-prod-count');
const socialCountBadge = document.getElementById('social-count-badge');
const pendingReviewsBadge = document.getElementById('pending-reviews-badge');

// Mobile Nav
const mobileToggle = document.getElementById('mobile-toggle');
const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
const closeMobileNav = document.getElementById('close-mobile-nav');

// ==========================================================================
// 4. ROUTER: SWITCH BETWEEN HOME, PRODUCT DETAIL & ADMIN
// ==========================================================================

function handleRouting() {
  const hash = window.location.hash || '#/';
  
  if (hash.startsWith('#/product/')) {
    const prodId = hash.replace('#/product/', '');
    showProductDetailPage(prodId);
    adminPanel.classList.remove('open');
    document.body.style.overflow = '';
  } else if (hash === '#/admin') {
    adminPanel.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (isAdminLoggedIn) {
      renderAdminDashboard();
    } else {
      adminLoginBox.classList.remove('hidden');
      adminDashboardContent.classList.add('hidden');
    }
  } else {
    // Normal Homepage View
    showHomePage();
    adminPanel.classList.remove('open');
    document.body.style.overflow = '';

    // If anchor on home page
    if (hash.startsWith('#') && hash !== '#/' && !hash.startsWith('#/')) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    }
  }
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', () => {
  initApp();
  handleRouting();
});

function showHomePage() {
  homeView.classList.add('active');
  productDetailView.classList.remove('active');
  updateNavLinks('home');
}

function showProductDetailPage(prodId) {
  const product = products.find(p => p.id === prodId);
  if (!product) {
    window.location.hash = '#/';
    return;
  }

  homeView.classList.remove('active');
  productDetailView.classList.add('active');
  renderProductDetailContent(product);
  renderRelatedProducts(product);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// 5. PRODUCT CATALOG & PAGINATION LOGIC
// ==========================================================================

function getFilteredAndSortedProducts() {
  let list = [...products];

  // 1. Filter by category
  if (activeCategory !== 'all') {
    list = list.filter(item => item.category === activeCategory);
  }

  // 2. Filter by search query
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    list = list.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q)
    );
  }

  // 3. Sort
  if (sortOption === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'name-az') {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }

  return list;
}

function renderProductGrid() {
  const filtered = getFilteredAndSortedProducts();
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  productsGrid.innerHTML = '';

  if (pageItems.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No bakery treats match your search.</h3>
        <p style="color: var(--bb-text-muted);">Try a different keyword or category filter.</p>
        <button class="btn btn-red btn-sm" style="margin-top: 16px;" onclick="resetFilters()">View All Creations</button>
      </div>
    `;
    paginationContainer.innerHTML = '';
    return;
  }

  pageItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = item.id;
    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy" onerror="this.onerror=null;this.src='/hero-banner.jpg'">
        <div class="card-badges">
          <span class="badge-cat">${item.categoryName}</span>
          <span class="badge-veg" title="Pure Veg / Eggless Available"></span>
        </div>
      </div>
      <div class="card-details">
        <div class="card-meta">
          <span class="card-rating">★ ${item.rating}</span>
          <span class="card-reviews">(${item.reviewsCount} reviews)</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-action-bar">
          <div class="card-price-block">
            <span class="card-price-label">Starting at</span>
            <span class="card-price">₹${item.price.toFixed(0)}</span>
          </div>
          <span class="card-cta-btn">View Details →</span>
        </div>
      </div>
    `;

    // Click to view product in same window
    card.addEventListener('click', () => {
      window.location.hash = `#/product/${item.id}`;
    });

    productsGrid.appendChild(card);
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  paginationContainer.innerHTML = '';
  if (totalPages <= 1) return;

  // Previous button
  const prevBtn = document.createElement('button');
  prevBtn.className = 'page-btn';
  prevBtn.innerHTML = '‹ Prev';
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderProductGrid();
      scrollToGridTop();
    }
  });
  paginationContainer.appendChild(prevBtn);

  // Numbered buttons
  for (let i = 1; i <= totalPages; i++) {
    const numBtn = document.createElement('button');
    numBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
    numBtn.textContent = i;
    numBtn.addEventListener('click', () => {
      currentPage = i;
      renderProductGrid();
      scrollToGridTop();
    });
    paginationContainer.appendChild(numBtn);
  }

  // Next button
  const nextBtn = document.createElement('button');
  nextBtn.className = 'page-btn';
  nextBtn.innerHTML = 'Next ›';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderProductGrid();
      scrollToGridTop();
    }
  });
  paginationContainer.appendChild(nextBtn);
}

function scrollToGridTop() {
  const section = document.getElementById('products-section');
  if (section) {
    const yOffset = -90;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

window.resetFilters = function() {
  activeCategory = 'all';
  searchQuery = '';
  sortOption = 'default';
  currentPage = 1;
  searchInput.value = '';
  sortSelect.value = 'default';
  categoryTabs.forEach(t => t.classList.toggle('active', t.dataset.category === 'all'));
  renderProductGrid();
};

// Filter Tabs Listener
categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    categoryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCategory = tab.dataset.category;
    currentPage = 1;
    renderProductGrid();
  });
});

// Search Input Listener
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  currentPage = 1;
  renderProductGrid();
});

// Sort Select Listener
sortSelect.addEventListener('change', (e) => {
  sortOption = e.target.value;
  currentPage = 1;
  renderProductGrid();
});

// ==========================================================================
// 6. IN-WINDOW PRODUCT DETAIL PAGE RENDERER
// ==========================================================================

function renderProductDetailContent(product) {
  // Breadcrumbs
  const breadcrumbEl = document.getElementById('detail-breadcrumbs');
  breadcrumbEl.innerHTML = `
    <a href="#/">Home</a> / 
    <a href="#products-section">${product.categoryName}</a> / 
    <span>${product.title}</span>
  `;

  const container = document.getElementById('product-detail-card');
  const basePrice = product.price;

  // Weight multipliers for cakes
  const isCakeCategory = product.category.includes('cake');
  let selectedWeight = isCakeCategory ? "1.0 kg" : "Standard Pack";
  let currentPrice = isCakeCategory ? Math.round(basePrice * 1.85) : basePrice;

  container.innerHTML = `
    <!-- Image Gallery Side -->
    <div class="detail-image-gallery">
      <div class="detail-main-img-wrap">
        <img src="${product.image}" alt="${product.title}" class="detail-main-img" id="detail-active-img" onerror="this.onerror=null;this.src='/hero-banner.jpg'">
        <div class="detail-badges-overlay">
          <span class="badge-pill-fresh">✨ 100% Fresh Daily</span>
          <span class="badge-veg" title="Vegetarian / Eggless"></span>
        </div>
      </div>
    </div>

    <!-- Info & Ordering Side -->
    <div class="detail-info-side">
      <span class="detail-header-tag">${product.categoryName}</span>
      <h1 class="detail-title">${product.title}</h1>
      
      <div class="detail-rating-row">
        <span class="detail-stars">★★★★★</span>
        <strong>${product.rating} / 5.0</strong>
        <span style="color: var(--bb-text-muted);">(${product.reviewsCount} verified reviews)</span>
      </div>

      <div class="detail-price-box">
        <div class="detail-price-num" id="dynamic-price-display">₹${currentPrice}</div>
        <div class="detail-price-note">All taxes included. Same-day delivery across Kolkata available.</div>
      </div>

      <p class="detail-desc">${product.desc}</p>

      ${isCakeCategory ? `
        <!-- Weight Selector for Cakes -->
        <div class="weight-selector-section">
          <div class="weight-selector-title">Select Weight / Size:</div>
          <div class="weight-options-grid" id="weight-options-container">
            <button class="weight-btn" data-weight="0.5 kg" data-multiplier="1.0">0.5 kg</button>
            <button class="weight-btn active" data-weight="1.0 kg" data-multiplier="1.85">1.0 kg</button>
            <button class="weight-btn" data-weight="1.5 kg" data-multiplier="2.7">1.5 kg</button>
            <button class="weight-btn" data-weight="2.0 kg" data-multiplier="3.5">2.0 kg</button>
          </div>
        </div>

        <!-- Custom Message Input -->
        <div class="cake-message-section">
          <label for="cake-custom-msg">Name / Message on Cake (Optional):</label>
          <input type="text" id="cake-custom-msg" placeholder="e.g. Happy Birthday Sourav!" maxlength="50">
        </div>
      ` : ''}

      <!-- Order Action Buttons -->
      <div class="detail-cta-stack">
        <a href="#" id="order-whatsapp-btn" class="btn btn-whatsapp-order w-full">
          <span class="icon">💬</span> Order Directly on WhatsApp (9330703521)
        </a>
        <a href="tel:9330703521" class="btn btn-outline-black w-full">
          <span>📞</span> Call Bakery to Order: 9330703521
        </a>
      </div>

      <!-- Trust Features -->
      <div class="detail-features-list">
        <div class="df-item"><span>🌱</span> 100% Eggless Option</div>
        <div class="df-item"><span>🚀</span> Timely Kolkata Delivery</div>
        <div class="df-item"><span>🎨</span> Custom Handcrafted Design</div>
        <div class="df-item"><span>📍</span> Pick-up: Raja Manindra Rd.</div>
      </div>
    </div>
  `;

  // Dynamic Weight Selector handler
  if (isCakeCategory) {
    const weightBtns = container.querySelectorAll('.weight-btn');
    const priceDisplay = document.getElementById('dynamic-price-display');
    const msgInput = document.getElementById('cake-custom-msg');
    const whatsappBtn = document.getElementById('order-whatsapp-btn');

    function updateWhatsAppLink() {
      const msg = msgInput ? msgInput.value.trim() : '';
      let text = `Hello Bongo Bakers! I would like to order:\n\n🍰 *${product.title}*\n⚖️ Weight: *${selectedWeight}*\n💰 Price: *₹${currentPrice}*`;
      if (msg) {
        text += `\n✍️ Message on Cake: "${msg}"`;
      }
      text += `\n📍 Delivery in Kolkata. Please confirm availability!`;

      whatsappBtn.href = `https://wa.me/919330703521?text=${encodeURIComponent(text)}`;
      whatsappBtn.target = "_blank";
    }

    weightBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        weightBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedWeight = btn.dataset.weight;
        const multiplier = parseFloat(btn.dataset.multiplier);
        currentPrice = Math.round(basePrice * multiplier);
        priceDisplay.textContent = `₹${currentPrice}`;
        updateWhatsAppLink();
      });
    });

    if (msgInput) {
      msgInput.addEventListener('input', updateWhatsAppLink);
    }
    updateWhatsAppLink();
  } else {
    // Non-cake items
    const whatsappBtn = container.querySelector('#order-whatsapp-btn');
    const text = `Hello Bongo Bakers! I would like to order:\n\n🍬 *${product.title}*\n💰 Price: *₹${basePrice}*\n📍 Delivery in Kolkata. Please confirm availability!`;
    whatsappBtn.href = `https://wa.me/919330703521?text=${encodeURIComponent(text)}`;
    whatsappBtn.target = "_blank";
  }
}

// ==========================================================================
// 7. RELATED PRODUCTS CAROUSEL / STATIC GRID
// ==========================================================================

function renderRelatedProducts(currentProduct) {
  const track = document.getElementById('related-products-track');
  track.innerHTML = '';

  // Get other products in the same category, or complementary items
  let related = products.filter(p => p.id !== currentProduct.id && p.category === currentProduct.category);
  if (related.length < 4) {
    const extra = products.filter(p => p.id !== currentProduct.id && p.category !== currentProduct.category);
    related = [...related, ...extra];
  }
  related = related.slice(0, 8); // top 8 related items

  related.forEach(item => {
    const card = document.createElement('div');
    card.className = 'related-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="related-card-img" loading="lazy" onerror="this.onerror=null;this.src='/hero-banner.jpg'">
      <div class="related-card-body">
        <h4 class="related-card-title">${item.title}</h4>
        <div class="related-card-price">₹${item.price.toFixed(0)}</div>
      </div>
    `;
    card.addEventListener('click', () => {
      window.location.hash = `#/product/${item.id}`;
    });
    track.appendChild(card);
  });

  // Carousel navigation
  const prevBtn = document.getElementById('related-prev-btn');
  const nextBtn = document.getElementById('related-next-btn');

  prevBtn.onclick = () => {
    track.scrollBy({ left: -280, behavior: 'smooth' });
  };
  nextBtn.onclick = () => {
    track.scrollBy({ left: 280, behavior: 'smooth' });
  };
}

// ==========================================================================
// 8. SOCIAL MEDIA FEEDS RENDERER
// ==========================================================================

function renderSocialFeeds() {
  socialFeedGrid.innerHTML = '';

  if (socialFeeds.length === 0) {
    socialFeedGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
        <p style="color: var(--bb-text-muted);">No social media feeds shared yet.</p>
      </div>
    `;
    return;
  }

  socialFeeds.forEach(feed => {
    const card = document.createElement('div');
    card.className = 'social-card';
    
    const badgeClass = feed.platform === 'instagram' ? 'badge-instagram' : 
                       feed.platform === 'facebook' ? 'badge-facebook' : 'badge-youtube';
    const platformLabel = feed.platform.charAt(0).toUpperCase() + feed.platform.slice(1);

    card.innerHTML = `
      <div class="social-card-thumb-wrap">
        <img src="${feed.image || '/hero-banner.jpg'}" alt="Bongo Bakers Post" class="social-card-img" loading="lazy">
        <span class="social-platform-badge ${badgeClass}">${platformLabel}</span>
      </div>
      <div class="social-card-body">
        <div class="social-card-header">
          <span class="social-card-handle">${feed.handle || '@bongobakerskolkata'}</span>
          <span class="social-card-date">${feed.date || 'Recent'}</span>
        </div>
        <p class="social-card-caption">${feed.caption}</p>
        <div class="social-card-action">
          <a href="${feed.shareLink}" target="_blank" rel="noopener" class="social-view-btn">
            View on ${platformLabel} ↗
          </a>
        </div>
      </div>
    `;
    socialFeedGrid.appendChild(card);
  });
}

// ==========================================================================
// 9. PUBLIC REVIEWS STREAM & SUBMISSION
// ==========================================================================

function renderPublicReviews() {
  reviewsStream.innerHTML = '';
  const approved = reviews.filter(r => r.status === 'approved');

  if (approved.length === 0) {
    reviewsStream.innerHTML = `
      <p style="text-align: center; color: var(--bb-text-muted); padding: 20px;">
        Be the first to share your experience with Bongo Bakers!
      </p>
    `;
    return;
  }

  [...approved].reverse().forEach(rev => {
    const item = document.createElement('div');
    item.className = 'review-card-item';
    item.innerHTML = `
      <div class="review-card-head">
        <span class="rc-name">${rev.name}</span>
        <span class="rc-stars">${'★'.repeat(rev.rating)}${'☆'.repeat(5 - rev.rating)}</span>
      </div>
      <p class="rc-text">"${rev.text}"</p>
      <span class="rc-date">${rev.date}</span>
    `;
    reviewsStream.appendChild(item);
  });
}

// Review Star Picker
let selectedRating = 5;
const starItems = document.querySelectorAll('#star-picker .star-item');
starItems.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.dataset.val);
    starItems.forEach(s => {
      s.classList.toggle('selected', parseInt(s.dataset.val) <= selectedRating);
    });
  });
});

publicReviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('rev-user-name').value.trim();
  const text = document.getElementById('rev-user-comment').value.trim();

  if (!name || !text) return;

  const newReview = {
    id: 'rev-' + Date.now(),
    name,
    rating: selectedRating,
    text,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'pending' // requires staff moderation
  };

  reviews.push(newReview);
  setStorage('bongobakers_reviews', reviews);
  publicReviewForm.reset();
  selectedRating = 5;
  starItems.forEach(s => s.classList.add('selected'));

  alert("🎂 Thank you! Your review has been submitted to Bongo Bakers. It will appear on our guestbook once approved by our chefs.");
  updateAdminBadges();
});

// ==========================================================================
// 10. ADMIN DASHBOARD (PRODUCTS, SOCIAL FEEDS & MODERATION)
// ==========================================================================

// Login Handler
adminLoginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const u = document.getElementById('admin-user-input').value.trim();
  const p = document.getElementById('admin-pass-input').value.trim();

  if ((u === 'admin' && p === 'bakingo-sweet-admin') || (u === 'admin' && p === 'bongobakers2026')) {
    isAdminLoggedIn = true;
    adminLoginError.style.display = 'none';
    adminLoginBox.classList.add('hidden');
    adminDashboardContent.classList.remove('hidden');
    renderAdminDashboard();
  } else {
    adminLoginError.textContent = '❌ Invalid credentials. Username: admin / Password: bakingo-sweet-admin';
    adminLoginError.style.display = 'block';
  }
});

// Admin Tabs
adminTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    adminTabs.forEach(t => t.classList.remove('active'));
    adminPanes.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

closeAdminBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = '#/';
});

function renderAdminDashboard() {
  renderAdminProducts();
  renderAdminSocial();
  renderAdminModeration();
  updateAdminBadges();
}

function updateAdminBadges() {
  const pendingCount = reviews.filter(r => r.status === 'pending').length;
  pendingReviewsBadge.textContent = pendingCount;
  pendingReviewsBadge.style.display = pendingCount > 0 ? 'inline-block' : 'none';

  socialCountBadge.textContent = socialFeeds.length;
  totalProdCount.textContent = products.length;
}

// 10A. Manage Products
function renderAdminProducts() {
  adminProductsList.innerHTML = '';
  products.forEach(p => {
    const item = document.createElement('div');
    item.className = 'admin-list-item';
    item.innerHTML = `
      <div class="admin-item-preview">
        <img src="${p.image}" alt="" class="admin-item-thumb">
        <div>
          <div class="admin-item-title">${p.title}</div>
          <div class="admin-item-meta">${p.categoryName} • ₹${p.price.toFixed(0)}</div>
        </div>
      </div>
      <div class="admin-item-btns">
        <button class="btn-icon-del" data-id="${p.id}" title="Delete treat">✕</button>
      </div>
    `;

    item.querySelector('.btn-icon-del').addEventListener('click', () => {
      if (confirm(`Remove "${p.title}" from the bakery catalog?`)) {
        products = products.filter(x => x.id !== p.id);
        setStorage('bongobakers_products', products);
        renderAdminProducts();
        renderProductGrid();
        updateAdminBadges();
      }
    });

    adminProductsList.appendChild(item);
  });
}

// Add New Product
const adminProductForm = document.getElementById('admin-product-form');
const prodFileInput = document.getElementById('new-prod-file');
const fileChosenStatus = document.getElementById('file-chosen-status');

prodFileInput.addEventListener('change', () => {
  if (prodFileInput.files && prodFileInput.files[0]) {
    fileChosenStatus.textContent = `Selected: ${prodFileInput.files[0].name}`;
  }
});

adminProductForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('new-prod-title').value.trim();
  const price = parseFloat(document.getElementById('new-prod-price').value);
  const cat = document.getElementById('new-prod-cat').value;
  const desc = document.getElementById('new-prod-desc').value.trim();
  const file = prodFileInput.files[0];

  const catNames = {
    'classic-cakes': 'Classic Cakes',
    'theme-cakes': 'Theme & Celebration',
    'seasonal-fruit': 'Seasonal Fruit',
    'chocolates': 'Chocolates',
    'cookies-desserts': 'Cookies & Desserts'
  };

  const saveProduct = (imgSrc) => {
    const newProd = {
      id: 'bb-custom-' + Date.now(),
      title,
      category: cat,
      categoryName: catNames[cat] || 'Bakery Treats',
      price,
      rating: 5.0,
      reviewsCount: 1,
      desc,
      image: imgSrc,
      isVeg: true,
      isFresh: true
    };

    products.unshift(newProd);
    setStorage('bongobakers_products', products);

    adminProductForm.reset();
    fileChosenStatus.textContent = "Choose product image (Optional, Max 2MB)";
    alert("🧁 Added new treat to Bongo Bakers catalog successfully!");
    renderAdminProducts();
    renderProductGrid();
    updateAdminBadges();
  };

  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      saveProduct(event.target.result);
    };
    reader.readAsDataURL(file);
  } else {
    saveProduct('/hero-banner.jpg');
  }
});

// 10B. Manage Social Feeds
function renderAdminSocial() {
  adminSocialList.innerHTML = '';
  socialFeeds.forEach(feed => {
    const item = document.createElement('div');
    item.className = 'admin-list-item';
    item.innerHTML = `
      <div class="admin-item-preview">
        <img src="${feed.image || '/bongo-logo.png'}" alt="" class="admin-item-thumb">
        <div>
          <div class="admin-item-title">${feed.platform.toUpperCase()} Share</div>
          <div class="admin-item-meta" style="max-width: 280px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            ${feed.caption}
          </div>
        </div>
      </div>
      <div class="admin-item-btns">
        <button class="btn-icon-del" data-id="${feed.id}" title="Delete social post">✕</button>
      </div>
    `;

    item.querySelector('.btn-icon-del').addEventListener('click', () => {
      if (confirm("Remove this post from the homepage feed?")) {
        socialFeeds = socialFeeds.filter(f => f.id !== feed.id);
        setStorage('bongobakers_social_feeds', socialFeeds);
        renderAdminSocial();
        renderSocialFeeds();
        updateAdminBadges();
      }
    });

    adminSocialList.appendChild(item);
  });
}

// Add New Social Post by Pasting Share Link
const adminSocialForm = document.getElementById('admin-social-form');
adminSocialForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const platform = document.getElementById('social-platform').value;
  const date = document.getElementById('social-date').value.trim() || 'Recent';
  const shareLink = document.getElementById('social-share-link').value.trim();
  const caption = document.getElementById('social-caption').value.trim();
  const imgUrl = document.getElementById('social-img-url').value.trim();

  const newFeed = {
    id: 'feed-' + Date.now(),
    platform,
    handle: platform === 'instagram' ? '@bongobakerskolkata' : 'facebook.com/bongobakerskolkata',
    date,
    shareLink,
    caption,
    image: imgUrl || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80'
  };

  socialFeeds.unshift(newFeed);
  setStorage('bongobakers_social_feeds', socialFeeds);

  adminSocialForm.reset();
  alert("✨ Social media post published to the homepage feed!");
  renderAdminSocial();
  renderSocialFeeds();
  updateAdminBadges();
});

// 10C. Moderate Customer Reviews
function renderAdminModeration() {
  adminModerationList.innerHTML = '';
  const pending = reviews.filter(r => r.status === 'pending');

  if (pending.length === 0) {
    adminModerationList.innerHTML = `
      <div style="text-align: center; padding: 30px; color: var(--bb-text-muted);">
        🌟 All caught up! No pending reviews to moderate.
      </div>
    `;
    return;
  }

  pending.forEach(rev => {
    const card = document.createElement('div');
    card.className = 'mod-review-card';
    card.innerHTML = `
      <div class="mod-review-details">
        <h5>${rev.name} (${'★'.repeat(rev.rating)}) • <small>${rev.date}</small></h5>
        <p>"${rev.text}"</p>
      </div>
      <div class="mod-review-actions">
        <button class="btn-approve" data-id="${rev.id}">Approve</button>
        <button class="btn-reject" data-id="${rev.id}">Reject</button>
      </div>
    `;

    card.querySelector('.btn-approve').addEventListener('click', () => {
      rev.status = 'approved';
      setStorage('bongobakers_reviews', reviews);
      renderAdminModeration();
      renderPublicReviews();
      updateAdminBadges();
    });

    card.querySelector('.btn-reject').addEventListener('click', () => {
      if (confirm("Reject and delete this review?")) {
        reviews = reviews.filter(r => r.id !== rev.id);
        setStorage('bongobakers_reviews', reviews);
        renderAdminModeration();
        updateAdminBadges();
      }
    });

    adminModerationList.appendChild(card);
  });
}

// ==========================================================================
// 11. NAVIGATION & INITIALIZATION
// ==========================================================================

function updateNavLinks(targetSection) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.target === targetSection);
  });
}

// Mobile Nav Toggle
mobileToggle.addEventListener('click', () => {
  mobileNavOverlay.classList.add('open');
});

closeMobileNav.addEventListener('click', () => {
  mobileNavOverlay.classList.remove('open');
});

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileNavOverlay.classList.remove('open');
  });
});

// Scroll spy for active navbar state
window.addEventListener('scroll', () => {
  if (!homeView.classList.contains('active')) return;
  const pos = window.scrollY + 120;
  const sections = ['hero', 'about', 'products-section', 'social-feed', 'reviews', 'contact'];

  sections.forEach(id => {
    const sec = document.getElementById(id);
    if (sec) {
      if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
        updateNavLinks(id === 'hero' ? 'home' : id);
      }
    }
  });
});

function initApp() {
  renderProductGrid();
  renderSocialFeeds();
  renderPublicReviews();
  updateAdminBadges();
}
