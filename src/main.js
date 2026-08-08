import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. STATE & STORAGE MANAGEMENT
// ==========================================

const INITIAL_ITEMS = [
  {
    id: "item-1",
    title: "Royal Strawberry Shortcake",
    price: 999.00,
    category: "cake",
    desc: "A majestic three-layer sponge filled with fresh organic strawberries, Chantilly cream, and coated in rich strawberry glaze.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: "item-2",
    title: "Choco Fudge Tower",
    price: 1199.00,
    category: "cake",
    desc: "Decadent dark chocolate layers filled with rich fudge ganache and topped with handcrafted chocolate truffles.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: "item-3",
    title: "Matcha Pistachio Delight",
    price: 949.00,
    category: "cake",
    desc: "Japanese organic matcha sponge layered with a smooth Sicilian pistachio cream and finished with crushed pistachios.",
    image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=600&auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: "item-4",
    title: "Velvet Red Croissant",
    price: 149.00,
    category: "pastry",
    desc: "Flaky, buttery croissant infused with wild raspberry syrup and dusted with pink sugar crystals.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: "item-5",
    title: "Cream Puff Dream",
    price: 179.00,
    category: "pastry",
    desc: "Choux pastry shells filled to the brim with smooth, rich vanilla bean custard and dusted with powdered sugar.",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=600&auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: "item-6",
    title: "Rainbow Macaron Set",
    price: 399.00,
    category: "macaron",
    desc: "A beautiful selection of six macarons: Strawberry, Lavender Blue, Salted Caramel, Mint, Lemon, and Vanilla Bean.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: "item-7",
    title: "Salted Caramel Donut",
    price: 119.00,
    category: "macaron",
    desc: "Brioche donut glazed with house-made salted caramel and topped with toasted pecans and sea salt flakes.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80",
    featured: false
  }
];

const INITIAL_REVIEWS = [
  {
    id: "rev-1",
    name: "Genevieve Dubois",
    rating: 5,
    text: "The Royal Strawberry Shortcake was the centerpiece of our birthday party! Not only was it stunning to look at, but it was also incredibly light, moist, and delicious.",
    date: "Aug 4, 2026",
    status: "approved"
  },
  {
    id: "rev-2",
    name: "Arthur Pendelton",
    rating: 5,
    text: "Bakingo has redefined what a premium bakery is. The chocolate fudge tower is rich but not overly sweet. It paired perfectly with an espresso.",
    date: "Aug 3, 2026",
    status: "approved"
  },
  {
    id: "rev-3",
    name: "Chloe Vance",
    rating: 4,
    text: "Their macarons are outstanding, especially the salted caramel. Will definitely order custom cupcakes for my next event.",
    date: "Jul 29, 2026",
    status: "approved"
  }
];

// Storage utilities
function loadStorage(key, defaults) {
  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, JSON.stringify(defaults));
    return defaults;
  }
  return JSON.parse(data);
}

function saveStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

let items = loadStorage('bakingo_items', INITIAL_ITEMS);
let reviews = loadStorage('bakingo_reviews', INITIAL_REVIEWS);
let isAdminLoggedIn = false;

// ==========================================
// 2. THREE.JS ENGINE SETUP (HD RENDERER)
// ==========================================

const canvas = document.getElementById('canvas-3d');
const loadingOverlay = document.getElementById('canvas-loading');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0.4, 8.5);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Enable premium soft shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// ==========================================
// 3. HD STUDIO LIGHTING SYSTEM
// ==========================================

// Ambient Light (Soft magenta-berry ambient)
const ambientLight = new THREE.AmbientLight(0x2d142c, 1.8);
scene.add(ambientLight);

// Key Directional Light (Crisp, shadow-casting white key light)
const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
keyLight.position.set(6, 10, 6);
keyLight.castShadow = true;
keyLight.shadow.mapSize.width = 2048;
keyLight.shadow.mapSize.height = 2048;
keyLight.shadow.camera.near = 0.5;
keyLight.shadow.camera.far = 25;
keyLight.shadow.camera.left = -6;
keyLight.shadow.camera.right = 6;
keyLight.shadow.camera.top = 6;
keyLight.shadow.camera.bottom = -6;
keyLight.shadow.bias = -0.0003;
scene.add(keyLight);

// Rim Light (Cyan environment simulation)
const rimLight = new THREE.DirectionalLight(0x00E5FF, 1.8);
rimLight.position.set(-8, 4, -6);
scene.add(rimLight);

// Fill Light (Warm golden/orange simulation)
const fillLight = new THREE.DirectionalLight(0xFF8A00, 1.5);
fillLight.position.set(-6, -2, 6);
scene.add(fillLight);

// Point Light for center glaze shine
const glowLight = new THREE.PointLight(0xFF2E63, 2.0, 15);
glowLight.position.set(0, 2, 4);
scene.add(glowLight);

// ==========================================
// 4. MODELING HD 3D CAKE & PASTRIES
// ==========================================

const cakeGroup = new THREE.Group();
scene.add(cakeGroup);

// Shadow Receiving Ground Plane
const groundGeo = new THREE.PlaneGeometry(30, 30);
const groundMat = new THREE.ShadowMaterial({ opacity: 0.38 });
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -2.25;
ground.receiveShadow = true;
scene.add(ground);

// BOTTOM LAYER (Chocolate Velvet)
const layerBottomGroup = new THREE.Group();

const bottomGeo = new THREE.CylinderGeometry(2.3, 2.5, 1.1, 32);
const bottomMat = new THREE.MeshPhysicalMaterial({
  color: 0x2A1215, // Dark chocolate-red glaze
  roughness: 0.15,
  metalness: 0.05,
  clearcoat: 1.0,
  clearcoatRoughness: 0.05,
  reflectivity: 0.8
});
const bottomMesh = new THREE.Mesh(bottomGeo, bottomMat);
bottomMesh.castShadow = true;
bottomMesh.receiveShadow = true;
layerBottomGroup.add(bottomMesh);

// Cream drops around bottom layer rim
for (let i = 0; i < 22; i++) {
  const angle = (i / 22) * Math.PI * 2;
  const pipeGeo = new THREE.SphereGeometry(0.12, 16, 16);
  const pipeMat = new THREE.MeshPhysicalMaterial({ 
    color: 0xFFFDD0, // Custard cream
    roughness: 0.1,
    clearcoat: 0.8
  });
  const pipeMesh = new THREE.Mesh(pipeGeo, pipeMat);
  pipeMesh.position.set(Math.cos(angle) * 2.35, 0.55, Math.sin(angle) * 2.35);
  pipeMesh.castShadow = true;
  layerBottomGroup.add(pipeMesh);
}
layerBottomGroup.position.y = -1.15;
cakeGroup.add(layerBottomGroup);

// MIDDLE LAYER (Creamy Pistachio / Velvet filling)
const layerMiddleGroup = new THREE.Group();

const middleGeo = new THREE.CylinderGeometry(1.9, 2.1, 1.0, 32);
const middleMat = new THREE.MeshPhysicalMaterial({
  color: 0x00E676, // Mint Frosting
  roughness: 0.2,
  metalness: 0.1,
  clearcoat: 0.9,
  clearcoatRoughness: 0.1
});
const middleMesh = new THREE.Mesh(middleGeo, middleMat);
middleMesh.castShadow = true;
middleMesh.receiveShadow = true;
layerMiddleGroup.add(middleMesh);

// Dark berry jam separator layer
const jamGeo = new THREE.CylinderGeometry(1.92, 2.12, 0.25, 32);
const jamMat = new THREE.MeshPhysicalMaterial({
  color: 0xFF2E63, // neon strawberry glaze jam
  roughness: 0.05,
  transmission: 0.3, // slightly semi-transparent glaze!
  thickness: 0.2
});
const jamMesh = new THREE.Mesh(jamGeo, jamMat);
jamMesh.position.y = 0.08;
jamMesh.castShadow = true;
layerMiddleGroup.add(jamMesh);

// Vanilla white cream piping drops
for (let i = 0; i < 18; i++) {
  const angle = (i / 18) * Math.PI * 2;
  const pipeGeo = new THREE.SphereGeometry(0.1, 16, 16);
  const pipeMat = new THREE.MeshPhysicalMaterial({ color: 0xFFFFFF, roughness: 0.2 });
  const pipeMesh = new THREE.Mesh(pipeGeo, pipeMat);
  pipeMesh.position.set(Math.cos(angle) * 1.96, 0.5, Math.sin(angle) * 1.96);
  pipeMesh.castShadow = true;
  layerMiddleGroup.add(pipeMesh);
}
layerMiddleGroup.position.y = -0.1;
cakeGroup.add(layerMiddleGroup);

// TOP LAYER (Glossy Neon Strawberry Glaze)
const layerTopGroup = new THREE.Group();

const topGeo = new THREE.CylinderGeometry(1.5, 1.7, 0.9, 32);
const topMat = new THREE.MeshPhysicalMaterial({
  color: 0xFF2E63, // Neon Strawberry glaze
  roughness: 0.08,
  metalness: 0.05,
  clearcoat: 1.0,
  clearcoatRoughness: 0.02,
  reflectivity: 0.9
});
const topMesh = new THREE.Mesh(topGeo, topMat);
topMesh.castShadow = true;
topMesh.receiveShadow = true;
layerTopGroup.add(topMesh);

// Top layer strawberry slices
for (let i = 0; i < 8; i++) {
  const angle = (i / 8) * Math.PI * 2;
  const strawberryGeo = new THREE.ConeGeometry(0.16, 0.35, 16);
  const strawberryMat = new THREE.MeshPhysicalMaterial({
    color: 0xD50000, 
    roughness: 0.3,
    clearcoat: 0.5
  });
  const strawberryMesh = new THREE.Mesh(strawberryGeo, strawberryMat);
  strawberryMesh.position.set(Math.cos(angle) * 1.1, 0.48, Math.sin(angle) * 1.1);
  strawberryMesh.rotation.x = 0.2;
  strawberryMesh.rotation.z = -angle + Math.PI / 2;
  strawberryMesh.castShadow = true;
  layerTopGroup.add(strawberryMesh);
}

// Center topper strawberry
const topperGeo = new THREE.ConeGeometry(0.25, 0.5, 16);
const topperMat = new THREE.MeshPhysicalMaterial({ color: 0xFF2E63, roughness: 0.25, clearcoat: 0.8 });
const topperMesh = new THREE.Mesh(topperGeo, topperMat);
topperMesh.position.y = 0.55;
topperMesh.castShadow = true;
layerTopGroup.add(topperMesh);

// Mango yellow sprinkles details
for (let i = 0; i < 24; i++) {
  const sprinkleGeo = new THREE.BoxGeometry(0.04, 0.12, 0.04);
  const sprinkleMat = new THREE.MeshPhysicalMaterial({
    color: 0xFF9F1C, // Mango
    roughness: 0.1,
    metalness: 0.7
  });
  const sprinkle = new THREE.Mesh(sprinkleGeo, sprinkleMat);
  const angle = Math.random() * Math.PI * 2;
  const radius = Math.random() * 0.85;
  sprinkle.position.set(Math.cos(angle) * radius, 0.46, Math.sin(angle) * radius);
  sprinkle.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
  sprinkle.castShadow = true;
  layerTopGroup.add(sprinkle);
}
layerTopGroup.position.y = 0.85;
cakeGroup.add(layerTopGroup);

// Floating Pastries with premium materials
const floaters = [];

function createPhysicalMacaron(color) {
  const group = new THREE.Group();
  const shellMat = new THREE.MeshPhysicalMaterial({ color, roughness: 0.5, clearcoat: 0.5 });
  const creamMat = new THREE.MeshPhysicalMaterial({ color: 0xFFFFFF, roughness: 0.2 });
  
  const shellGeo = new THREE.SphereGeometry(0.35, 16, 16);
  const topShell = new THREE.Mesh(shellGeo, shellMat);
  topShell.scale.set(1, 0.5, 1);
  topShell.position.y = 0.12;
  topShell.castShadow = true;
  group.add(topShell);
  
  const bottomShell = topShell.clone();
  bottomShell.position.y = -0.12;
  bottomShell.rotation.x = Math.PI;
  bottomShell.castShadow = true;
  group.add(bottomShell);
  
  const creamGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.12, 16);
  const cream = new THREE.Mesh(creamGeo, creamMat);
  cream.castShadow = true;
  group.add(cream);
  
  return group;
}

function createPhysicalDonut() {
  const group = new THREE.Group();
  const doughGeo = new THREE.TorusGeometry(0.35, 0.12, 16, 32);
  const doughMat = new THREE.MeshPhysicalMaterial({ color: 0xE5A65D, roughness: 0.8 });
  const dough = new THREE.Mesh(doughGeo, doughMat);
  dough.castShadow = true;
  group.add(dough);
  
  const icingGeo = new THREE.TorusGeometry(0.35, 0.08, 16, 32);
  const icingMat = new THREE.MeshPhysicalMaterial({
    color: 0xFF2E63, // Neon Strawberry icing
    roughness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05
  });
  const icing = new THREE.Mesh(icingGeo, icingMat);
  icing.scale.set(1.02, 1.02, 1.35);
  icing.position.z = 0.04;
  icing.castShadow = true;
  group.add(icing);
  
  return group;
}

const floaterColors = [0x00E676, 0xFF9F1C, 0xFF2E63, 0x00E5FF];
for (let i = 0; i < 9; i++) {
  let p;
  if (i % 2 === 0) {
    const col = floaterColors[Math.floor(Math.random() * floaterColors.length)];
    p = createPhysicalMacaron(col);
  } else {
    p = createPhysicalDonut();
  }
  
  const scale = 0.55 + Math.random() * 0.45;
  p.scale.set(scale, scale, scale);
  p.position.set(
    (Math.random() - 0.5) * 15,
    (Math.random() - 0.5) * 8 + 0.5,
    (Math.random() - 0.5) * 5 - 2
  );
  
  p.userData = {
    rotXSpeed: (Math.random() - 0.5) * 0.015,
    rotYSpeed: (Math.random() - 0.5) * 0.015,
    floatOffset: Math.random() * Math.PI * 2,
    floatSpeed: 0.001 + Math.random() * 0.002
  };
  
  scene.add(p);
  floaters.push(p);
}

// Fade out loading screen
setTimeout(() => {
  loadingOverlay.classList.add('fade-out');
}, 800);

// ==========================================
// 5. RESPONSIVE POSITIONING & FOV
// ==========================================

function layout3DScene() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  camera.aspect = width / height;
  
  // Dynamic camera Field of View to prevent model clipping on narrow windows
  if (width < 768) {
    camera.fov = 55; // wider field of view on mobile
    cakeGroup.position.set(0, -0.3, 0); // center cake and slide down slightly
    cakeGroup.scale.set(0.85, 0.85, 0.85); // scale down
    ground.position.y = -2.0;
  } else if (width < 992) {
    camera.fov = 48;
    cakeGroup.position.set(0, 0, 0);
    cakeGroup.scale.set(0.95, 0.95, 0.95);
    ground.position.y = -2.25;
  } else {
    camera.fov = 40;
    // Strict Split Screen: Push 3D cake to right side (55% width area)
    cakeGroup.position.set(1.9, 0, 0);
    cakeGroup.scale.set(1.0, 1.0, 1.0);
    ground.position.y = -2.25;
  }
  
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

layout3DScene();
window.addEventListener('resize', layout3DScene);

// ==========================================
// 6. SPRING-LERPED CURSOR PARALLAX
// ==========================================

let mouseX = 0, mouseY = 0;
let lerpX = 0, lerpY = 0;
let scrollRotY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth) - 0.5;
  mouseY = (e.clientY / window.innerHeight) - 0.5;
});

// Mobile gyroscope / drag swipe fallbacks
let touchX = 0, touchY = 0;
window.addEventListener('touchstart', (e) => {
  touchX = e.touches[0].clientX;
  touchY = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchmove', (e) => {
  const dx = e.touches[0].clientX - touchX;
  const dy = e.touches[0].clientY - touchY;
  mouseX = (dx / window.innerWidth) * 1.5;
  mouseY = (dy / window.innerHeight) * 1.5;
}, { passive: true });

window.addEventListener('touchend', () => {
  gsap.to(this, { mouseX: 0, mouseY: 0, duration: 1.2, ease: 'power2.out' });
});

// Loop
function renderFrame(time) {
  requestAnimationFrame(renderFrame);
  
  // Lerping for organic spring-like physics
  lerpX += (mouseX - lerpX) * 0.08;
  lerpY += (mouseY - lerpY) * 0.08;
  
  // Rotate main cake (auto rotation + scroll spin + cursor tilt)
  cakeGroup.rotation.y = time * 0.00035 + scrollRotY + lerpX * 0.9;
  cakeGroup.rotation.x = lerpY * 0.4 + 0.15;
  
  // Animate background floater pastries
  floaters.forEach(f => {
    f.rotation.x += f.userData.rotXSpeed;
    f.rotation.y += f.userData.rotYSpeed;
    f.position.y += Math.sin(time * f.userData.floatSpeed + f.userData.floatOffset) * 0.0015;
    
    // Parallax rotate background objects
    f.rotation.z = lerpX * 0.2;
  });
  
  renderer.render(scene, camera);
}
requestAnimationFrame(renderFrame);

// ==========================================
// 7. LAYER-EXPLODE SCROLL TIMELINE
// ==========================================

const scrollTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '#deconstruct',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.2,
    onUpdate: (self) => {
      const p = self.progress;
      scrollRotY = p * Math.PI * 1.8; // spin cake 180+ degrees on scroll
      
      // Update active description steps
      if (p < 0.3) {
        setDeconstructActive(0);
      } else if (p >= 0.3 && p < 0.65) {
        setDeconstructActive(1);
      } else {
        setDeconstructActive(2);
      }
    }
  }
});

// Explode tiers vertically
scrollTimeline.to(layerTopGroup.position, { y: 3.2, ease: 'none' }, 0);
scrollTimeline.to(layerBottomGroup.position, { y: -3.6, ease: 'none' }, 0);

// Camera framing during explode animation
// On desktop, push center slightly left so it frames nicely between steps and cards
if (window.innerWidth > 992) {
  scrollTimeline.to(cakeGroup.position, { x: 0.9, ease: 'none' }, 0);
  scrollTimeline.to(camera.position, { z: 7.2, y: 0.9, ease: 'none' }, 0);
} else {
  scrollTimeline.to(camera.position, { z: 7.0, y: 0.8, ease: 'none' }, 0);
}

function setDeconstructActive(idx) {
  const steps = document.querySelectorAll('.deconstruct-step');
  steps.forEach((step, i) => {
    if (i === idx) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

// Instantiate and bind popout photos
function initScrollPopouts() {
  const container = document.getElementById('popouts-container');
  container.innerHTML = '';
  
  const featured = items.filter(it => it.featured);
  
  // Scattered positions for cards emerging from layers
  const positions = [
    { top: '15%', left: '8%', rotate: '-10deg' },
    { top: '48%', left: '18%', rotate: '12deg' },
    { top: '78%', left: '6%', rotate: '-6deg' }
  ];
  
  featured.forEach((item, idx) => {
    if (idx >= positions.length) return;
    const pos = positions[idx];
    
    const card = document.createElement('div');
    card.className = 'popout-card';
    card.dataset.rotate = pos.rotate;
    card.style.top = '50%';
    card.style.left = '50%';
    card.style.zIndex = idx + 2;
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="title">${item.title}</div>
      <div class="price">₹${item.price.toFixed(2)}</div>
    `;
    card.addEventListener('click', () => openDetailsModal(item));
    container.appendChild(card);
    
    // Scale up and slide card out from the middle deconstruction gap on scroll
    const triggerStart = 0.15 + idx * 0.25;
    
    scrollTimeline.to(card, {
      opacity: 1,
      scale: 1,
      top: pos.top,
      left: pos.left,
      rotation: pos.rotate,
      ease: 'back.out(1.4)',
      duration: 0.35
    }, triggerStart);
  });
}

// ==========================================
// 8. PUBLIC GALLERY, DETAILS & GUESTBOOK
// ==========================================

function renderPublicGallery(filter = 'all') {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';
  
  const filtered = filter === 'all' ? items : items.filter(it => it.category === filter);
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-items-placeholder w-full" style="grid-column: 1/-1;">No premium treats found here.</div>`;
    return;
  }
  
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.innerHTML = `
      <div class="card-img-container">
        <img src="${item.image}" alt="${item.title}">
        <span class="card-badge">${item.category}</span>
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">₹${item.price.toFixed(2)}</span>
          <span class="card-btn">→</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openDetailsModal(item));
    grid.appendChild(card);
  });
}

// Filters listeners
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPublicGallery(btn.dataset.filter);
  });
});

// Modal Details Panel
const detailsModal = document.getElementById('details-modal');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modalImg = document.getElementById('modal-img');
const modalBadge = document.getElementById('modal-badge');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');

function openDetailsModal(item) {
  modalImg.src = item.image;
  modalBadge.textContent = item.category;
  modalTitle.textContent = item.title;
  modalPrice.textContent = `₹${item.price.toFixed(2)}`;
  modalDesc.textContent = item.desc;
  detailsModal.classList.add('open');
}

closeModalBtn.addEventListener('click', () => detailsModal.classList.remove('open'));
detailsModal.addEventListener('click', (e) => {
  if (e.target === detailsModal) detailsModal.classList.remove('open');
});

// Guestbook Reviews
function renderPublicReviews() {
  const container = document.getElementById('reviews-feed');
  container.innerHTML = '';
  
  const approved = reviews.filter(rev => rev.status === 'approved');
  
  if (approved.length === 0) {
    container.innerHTML = `<p class="no-items-placeholder">Be the first to review our premium creations!</p>`;
    return;
  }
  
  const sorted = [...approved].reverse();
  sorted.forEach(rev => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-header">
        <span class="reviewer-name">${rev.name}</span>
        <span class="reviewer-rating">${'★'.repeat(rev.rating)}${'☆'.repeat(5 - rev.rating)}</span>
      </div>
      <p class="review-text">${rev.text}</p>
      <span class="review-date">${rev.date}</span>
    `;
    container.appendChild(card);
  });
}

// Rating Select Stars
let reviewRating = 5;
const stars = document.querySelectorAll('.star-btn');
stars.forEach(star => {
  star.addEventListener('click', () => {
    reviewRating = parseInt(star.dataset.val);
    stars.forEach(s => {
      if (parseInt(s.dataset.val) <= reviewRating) {
        s.classList.add('selected');
      } else {
        s.classList.remove('selected');
      }
    });
  });
});
stars.forEach(s => s.classList.add('selected')); // default select all

// Submit review form
const reviewForm = document.getElementById('review-form');
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('review-name').value;
  const text = document.getElementById('review-text').value;
  
  const newRev = {
    id: 'rev-' + Date.now(),
    name,
    rating: reviewRating,
    text,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'pending' // pending moderation state!
  };
  
  reviews.push(newRev);
  saveStorage('bakingo_reviews', reviews);
  
  reviewForm.reset();
  reviewRating = 5;
  stars.forEach(s => s.classList.add('selected'));
  
  alert("🧁 Chef Notification: Review submitted! It will appear publicly once approved by moderation.");
  updateAdminPendingBadge();
  renderAdminModerationFeed();
});

// ==========================================
// 9. ADMIN PANEL ROUTER & CONTROL OPERATIONS
// ==========================================

const adminPanel = document.getElementById('admin-panel');
const adminLoginBox = document.getElementById('admin-login-box');
const adminDashboardContent = document.getElementById('admin-dashboard-content');
const adminLoginForm = document.getElementById('admin-login-form');
const loginErrorMsg = document.getElementById('login-error');
const adminTabs = document.querySelectorAll('.admin-tab-btn');
const closeAdminBtn = document.querySelector('.close-admin-btn');

function handleAdminRoutes() {
  const hash = window.location.hash;
  if (hash === '#/admin') {
    adminPanel.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (isAdminLoggedIn) {
      showDashboardPanel();
    } else {
      showLoginPanel();
    }
  } else {
    adminPanel.classList.remove('open');
    document.body.style.overflow = '';
  }
}
window.addEventListener('hashchange', handleAdminRoutes);
window.addEventListener('load', handleAdminRoutes);

closeAdminBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = '';
});

function showLoginPanel() {
  adminLoginBox.classList.remove('hidden');
  adminDashboardContent.classList.add('hidden');
}

function showDashboardPanel() {
  adminLoginBox.classList.add('hidden');
  adminDashboardContent.classList.remove('hidden');
  renderAdminCreationsList();
  renderAdminModerationFeed();
  updateAdminPendingBadge();
}

// Authentication submit
adminLoginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const u = document.getElementById('admin-username').value;
  const p = document.getElementById('admin-password').value;
  
  if (u === 'admin' && p === 'bakingo-sweet-admin') {
    isAdminLoggedIn = true;
    loginErrorMsg.style.display = 'none';
    showDashboardPanel();
    adminLoginForm.reset();
  } else {
    loginErrorMsg.textContent = '❌ Credentials incorrect. Hint: admin / bakingo-sweet-admin';
    loginErrorMsg.style.display = 'block';
  }
});

// Admin tabs selector
adminTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    adminTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

function updateAdminPendingBadge() {
  const count = reviews.filter(rev => rev.status === 'pending').length;
  const badge = document.getElementById('pending-count-badge');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-block' : 'none';
}

// Upload file zone
const fileInput = document.getElementById('photo-file');
const fileZoneText = document.getElementById('file-name-preview');

fileInput.addEventListener('change', () => {
  if (fileInput.files && fileInput.files[0]) {
    const f = fileInput.files[0];
    if (f.size > 2 * 1024 * 1024) {
      alert("⚠️ Image file is too large! Maximum limit is 2MB.");
      fileInput.value = '';
      fileZoneText.textContent = 'Max size 2MB';
    } else {
      fileZoneText.textContent = `File Selected: ${f.name}`;
    }
  }
});

const uploadForm = document.getElementById('photo-upload-form');
uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const title = document.getElementById('photo-title').value;
  const price = parseFloat(document.getElementById('photo-price').value);
  const category = document.getElementById('photo-category').value;
  const desc = document.getElementById('photo-desc').value;
  const file = fileInput.files[0];
  
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(event) {
    const newCreation = {
      id: 'item-' + Date.now(),
      title,
      price,
      category,
      desc,
      image: event.target.result,
      featured: false
    };
    
    items.push(newCreation);
    saveStorage('bakingo_items', items);
    
    uploadForm.reset();
    fileZoneText.textContent = 'Max size 2MB';
    
    alert("🧁 Added new treat to the bakery catalogue successfully!");
    renderAdminCreationsList();
    renderPublicGallery();
  };
  reader.readAsDataURL(file);
});

// Render Admin listing
function renderAdminCreationsList() {
  const container = document.getElementById('admin-items-list');
  container.innerHTML = '';
  
  if (items.length === 0) {
    container.innerHTML = `<p class="no-items-placeholder">Creations catalogue is empty.</p>`;
    return;
  }
  
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'admin-item-card';
    card.innerHTML = `
      <div class="admin-item-info">
        <img class="admin-item-img" src="${item.image}" alt="">
        <div class="admin-item-details">
          <div class="admin-item-title">${item.title}</div>
          <div class="admin-item-cat-price">${item.category} • ₹${item.price.toFixed(2)}</div>
        </div>
      </div>
      <div class="admin-item-actions">
        <button class="feature-toggle-btn ${item.featured ? 'featured' : ''}" data-id="${item.id}">
          ${item.featured ? '★ Featured' : '☆ Feature'}
        </button>
        <button class="btn-delete" data-id="${item.id}">&times;</button>
      </div>
    `;
    
    // Toggle feature status
    card.querySelector('.feature-toggle-btn').addEventListener('click', () => {
      const featuredCount = items.filter(it => it.featured).length;
      if (!item.featured && featuredCount >= 3) {
        alert("⚠️ Scroll timeline layout restriction: You can only feature up to 3 creations to pop out from cake tiers.");
        return;
      }
      
      item.featured = !item.featured;
      saveStorage('bakingo_items', items);
      renderAdminCreationsList();
      initScrollPopouts();
    });
    
    // Delete item
    card.querySelector('.btn-delete').addEventListener('click', () => {
      if (confirm(`Remove "${item.title}" from the catalog?`)) {
        items = items.filter(it => it.id !== item.id);
        saveStorage('bakingo_items', items);
        renderAdminCreationsList();
        renderPublicGallery();
        initScrollPopouts();
      }
    });
    
    container.appendChild(card);
  });
}

// Moderation Feed
function renderAdminModerationFeed() {
  const container = document.getElementById('moderation-list');
  container.innerHTML = '';
  
  const pending = reviews.filter(rev => rev.status === 'pending');
  
  if (pending.length === 0) {
    container.innerHTML = `<div class="no-items-placeholder">🌟 Moderation complete! All customer reviews checked.</div>`;
    return;
  }
  
  pending.forEach(rev => {
    const card = document.createElement('div');
    card.className = 'mod-card';
    card.innerHTML = `
      <div class="mod-content">
        <div class="mod-header">
          <span class="mod-author">${rev.name}</span>
          <span class="mod-rating">${'★'.repeat(rev.rating)}${'☆'.repeat(5 - rev.rating)}</span>
        </div>
        <p class="mod-text">"${rev.text}"</p>
      </div>
      <div class="mod-actions">
        <button class="btn-approve" data-id="${rev.id}">Approve</button>
        <button class="btn-reject" data-id="${rev.id}">Reject</button>
      </div>
    `;
    
    // Approve
    card.querySelector('.btn-approve').addEventListener('click', () => {
      rev.status = 'approved';
      saveStorage('bakingo_reviews', reviews);
      renderAdminModerationFeed();
      renderPublicReviews();
      updateAdminPendingBadge();
    });
    
    // Reject
    card.querySelector('.btn-reject').addEventListener('click', () => {
      if (confirm("Delete this pending review?")) {
        reviews = reviews.filter(r => r.id !== rev.id);
        saveStorage('bakingo_reviews', reviews);
        renderAdminModerationFeed();
        updateAdminPendingBadge();
      }
    });
    
    container.appendChild(card);
  });
}

// ==========================================
// 10. INITIALIZE PAGE COMPONENT
// ==========================================

renderPublicGallery();
renderPublicReviews();
initScrollPopouts();

// Smooth scrolling anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '#/admin') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
  mobileToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Active links highlighter
window.addEventListener('scroll', () => {
  const pos = window.scrollY + 150;
  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.nav-links a');
  
  sections.forEach(sec => {
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      links.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${sec.getAttribute('id')}`) {
          a.classList.add('active');
        }
      });
    }
  });
});
