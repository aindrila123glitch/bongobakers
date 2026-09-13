(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`bb-classic-1`,title:`Black Forest Cake`,category:`classic-cakes`,categoryName:`Classic Cakes`,price:550,rating:4.9,reviewsCount:38,desc:`Layered chocolate sponge infused with fresh cream, tart dark cherries, and crowned with hand-shaved Belgian dark chocolate curls.`,image:`https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-classic-2`,title:`Butterscotch Crunch Cake`,category:`classic-cakes`,categoryName:`Classic Cakes`,price:550,rating:4.8,reviewsCount:29,desc:`Caramelized brown sugar sponge layered with whipped butterscotch frosting, homemade golden praline nougat, and caramel drip.`,image:`https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-classic-3`,title:`Belgian Chocolate Truffle Cake`,category:`classic-cakes`,categoryName:`Classic Cakes`,price:650,rating:5,reviewsCount:64,desc:`Kolkata's favorite decadent dessert. Ultra-moist dark chocolate cake layered with silky Belgian chocolate ganache.`,image:`https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-classic-4`,title:`Kitkat & Gems Celebration Cake`,category:`classic-cakes`,categoryName:`Classic Cakes`,price:750,rating:4.9,reviewsCount:42,desc:`A showstopper encircled with crispy KitKat bars, tied with a vibrant celebration ribbon, and loaded with colourful chocolate candies.`,image:`https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-classic-5`,title:`Oreo Cream Delice Cake`,category:`classic-cakes`,categoryName:`Classic Cakes`,price:600,rating:4.8,reviewsCount:31,desc:`Decadent cookies-and-cream creation made with crushed Oreo biscuits, vanilla buttercream, and dark chocolate drizzle.`,image:`https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-classic-6`,title:`Pure Madagascar Vanilla Cake`,category:`classic-cakes`,categoryName:`Classic Cakes`,price:500,rating:4.7,reviewsCount:22,desc:`Delicate and airy sponge infused with natural Madagascar bourbon vanilla beans, topped with handcrafted pink sugar roses.`,image:`https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-classic-7`,title:`White Chocolate Silk Cake`,category:`classic-cakes`,categoryName:`Classic Cakes`,price:650,rating:4.9,reviewsCount:27,desc:`Melt-in-mouth Swiss white chocolate ganache over fluffy sponge cake, garnished with white chocolate shavings and fresh raspberries.`,image:`https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-fruit-1`,title:`Fresh Alphonso Mango Cake`,category:`seasonal-fruit`,categoryName:`Seasonal Fruit`,price:700,rating:5,reviewsCount:45,desc:`Seasonal delight prepared with authentic Alphonso mango pulp, light sponge, and crowned with hand-sliced ripe sweet mangoes.`,image:`https://images.unsplash.com/photo-1519869325930-281384150729?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-fruit-2`,title:`Exotic Mixed Fruit Cake`,category:`seasonal-fruit`,categoryName:`Seasonal Fruit`,price:750,rating:4.9,reviewsCount:36,desc:`Vibrant garden of fresh fruits including kiwi, strawberry, dragon fruit, and pineapple over light whipped cream.`,image:`https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-theme-1`,title:`Bengali Wedding Theme Cake`,category:`theme-cakes`,categoryName:`Theme & Celebration`,price:1800,rating:5,reviewsCount:52,desc:`Magnificent traditional wedding centerpiece adorned with auspicious Bengali 'Topor', 'Mukut', and red & gold artistic filigree.`,image:`https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-theme-2`,title:`Romantic Anniversary Rose Cake`,category:`theme-cakes`,categoryName:`Theme & Celebration`,price:1200,rating:4.9,reviewsCount:39,desc:`Velveteen crimson cake decorated with edible sugar roses, chocolate truffles, and golden anniversary personalized plaque.`,image:`https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-theme-3`,title:`2-Tier Grand Birthday Celebration Cake`,category:`theme-cakes`,categoryName:`Theme & Celebration`,price:2200,rating:5,reviewsCount:48,desc:`Dual tier statement cake with customized flavor per tier, cascade of macarons, fresh strawberries, and glittering celebration candles.`,image:`https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-theme-4`,title:`Superhero Avenger Theme Cake`,category:`theme-cakes`,categoryName:`Theme & Celebration`,price:1400,rating:4.9,reviewsCount:40,desc:`Custom comic character birthday cake featuring handcrafted fondant hero shields, cityscape fondant, and rich chocolate sponge.`,image:`https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-theme-5`,title:`Cricket Sports Celebration Cake`,category:`theme-cakes`,categoryName:`Theme & Celebration`,price:1350,rating:4.8,reviewsCount:26,desc:`For the cricket fanatics of Kolkata! Edible pitch, fondant cricket bat, red leather ball, and wicket stumps in rich chocolate flavor.`,image:`https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-theme-6`,title:`Frozen Elsa & Unicorn Magic Cake`,category:`theme-cakes`,categoryName:`Theme & Celebration`,price:1400,rating:5,reviewsCount:34,desc:`Enchanting pastel ombre buttercream swirls, edible silver snowflakes, and rainbow meringue peaks that kids adore.`,image:`https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-choco-1`,title:`Artisan Dark Chocolate Fudge`,category:`chocolates`,categoryName:`Chocolates`,price:280,rating:4.9,reviewsCount:19,desc:`Rich 70% dark cocoa fudge squares crafted with pure dairy butter and topped with roasted cashew chunks.`,image:`https://images.unsplash.com/photo-1548907040-4baa42d10919?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-choco-2`,title:`Premium Choco Fruit & Nut Bar`,category:`chocolates`,categoryName:`Chocolates`,price:240,rating:4.8,reviewsCount:22,desc:`Silky milk chocolate embedded with whole roasted almonds, Afghan raisins, and tart cranberries.`,image:`https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-choco-3`,title:`Handcrafted Belgian Chocolate Bar`,category:`chocolates`,categoryName:`Chocolates`,price:220,rating:4.9,reviewsCount:28,desc:`Classic smooth Belgian dark chocolate slab with subtle notes of vanilla and roasted cocoa.`,image:`https://images.unsplash.com/photo-1511381939415-e44015466834?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-choco-4`,title:`Alphonso Mango Infused Chocolate`,category:`chocolates`,categoryName:`Chocolates`,price:260,rating:4.8,reviewsCount:17,desc:`Unique fusion of creamy white chocolate with freeze-dried sweet mango crystals.`,image:`https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-cookie-1`,title:`Traditional Ajwain Savory Cookies`,category:`cookies-desserts`,categoryName:`Cookies & Desserts`,price:160,rating:4.9,reviewsCount:35,desc:`Crispy, melt-in-mouth savory tea-time cookies infused with fragrant roasted ajwain (carom seeds).`,image:`https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-cookie-2`,title:`Double Choco Chip Crunch Cookies`,category:`cookies-desserts`,categoryName:`Cookies & Desserts`,price:180,rating:5,reviewsCount:41,desc:`Buttery bakery-fresh cookies packed with gooey dark and milk chocolate morsels.`,image:`https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-cookie-3`,title:`Healthy Oats & Nuts Cookies`,category:`cookies-desserts`,categoryName:`Cookies & Desserts`,price:190,rating:4.7,reviewsCount:18,desc:`Wholesome rolled oats, pumpkin seeds, and Californian walnuts baked with pure organic honey.`,image:`https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-dessert-1`,title:`Signature Dark Chocolate Brownie`,category:`cookies-desserts`,categoryName:`Cookies & Desserts`,price:140,rating:5,reviewsCount:46,desc:`Intensely fudgy Belgian chocolate brownie with a crinkly paper-thin top crust and gooey interior.`,image:`https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0},{id:`bb-dessert-2`,title:`Fresh Berry Custard Tart`,category:`cookies-desserts`,categoryName:`Cookies & Desserts`,price:150,rating:4.9,reviewsCount:23,desc:`Crisp butter shortcrust shell generously filled with smooth Madagascar vanilla bean custard and fresh berries.`,image:`https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=700&auto=format&fit=crop&q=80`,isVeg:!0,isFresh:!0}],t=[{id:`feed-1`,platform:`instagram`,handle:`@bongobakerskolkata`,date:`Sep 10, 2026`,shareLink:`https://instagram.com/bongobakerskolkata`,caption:`A majestic 3-Tier Bengali Wedding theme cake delivered today in Salt Lake, Kolkata! Handcrafted motifs and royal red rose accents. 🎂✨`,image:`https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&auto=format&fit=crop&q=80`},{id:`feed-2`,platform:`facebook`,handle:`facebook.com/bongobakerskolkata`,date:`Sep 8, 2026`,shareLink:`https://facebook.com/bongobakerskolkata`,caption:`Freshly baked Belgian Chocolate Truffle and KitKat celebration cakes ready for pickup at our Raja Manindra Road outlet! WhatsApp 9330703521 to order.`,image:`https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80`},{id:`feed-3`,platform:`instagram`,handle:`@bongobakerskolkata`,date:`Sep 5, 2026`,shareLink:`https://instagram.com/bongobakerskolkata`,caption:`Behind the counter with our head pastry chef! Making fresh Alphonso mango tarts and delicate butter cookies this morning. 🥭🥐`,image:`https://images.unsplash.com/photo-1519869325930-281384150729?w=600&auto=format&fit=crop&q=80`}],n=[{id:`rev-1`,name:`Ananya Sen`,rating:5,text:`Bongo Bakers made our daughter's birthday truly magical! The Elsa theme cake looked breathtaking and the chocolate truffle flavor was so moist and rich.`,date:`Sep 9, 2026`,status:`approved`},{id:`rev-2`,name:`Debraj Ghosh`,rating:5,text:`Best bakery in North Kolkata! Ordered from Shyambazar via WhatsApp. Delivery was right on time and the Ajwain cookies were melt-in-mouth perfection.`,date:`Sep 7, 2026`,status:`approved`},{id:`rev-3`,name:`Priyanka Banerjee`,rating:5,text:`The Bengali Wedding Theme cake created for my brother's reception stole the entire show! Every guest asked where we got it from. 10/10!`,date:`Aug 29, 2026`,status:`approved`}];function r(e,t){try{let n=localStorage.getItem(e);if(!n)return localStorage.setItem(e,JSON.stringify(t)),t;let r=JSON.parse(n);return e===`bongobakers_products`&&Array.isArray(r)&&r.forEach(e=>{e.image&&e.image.includes(`photo-1535141192574`)&&(e.image=`https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=700&auto=format&fit=crop&q=80`)}),r}catch{return t}}function i(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(`Storage save failed`,e)}}var a=r(`bongobakers_products`,e),o=r(`bongobakers_social_feeds`,t),s=r(`bongobakers_reviews`,n),c=`all`,l=``,u=`default`,d=1,f=8,p=!1,m=document.getElementById(`home-view`),h=document.getElementById(`product-detail-view`),g=document.getElementById(`products-grid`),_=document.getElementById(`pagination-container`),v=document.querySelectorAll(`.filter-tab`),y=document.getElementById(`catalog-search-input`),b=document.getElementById(`catalog-sort-select`),x=document.getElementById(`social-feed-grid`),S=document.getElementById(`reviews-stream`),C=document.getElementById(`public-review-form`),w=document.getElementById(`admin-panel`),T=document.getElementById(`admin-login-box`),E=document.getElementById(`admin-dashboard-content`),ee=document.getElementById(`admin-login-form`),D=document.getElementById(`admin-login-error`),O=document.querySelectorAll(`.admin-nav-tab`),te=document.querySelectorAll(`.admin-tab-pane`),ne=document.getElementById(`close-admin-btn`),k=document.getElementById(`admin-products-list`),A=document.getElementById(`admin-social-list`),j=document.getElementById(`admin-moderation-list`),M=document.getElementById(`total-prod-count`),N=document.getElementById(`social-count-badge`),P=document.getElementById(`pending-reviews-badge`),F=document.getElementById(`mobile-toggle`),I=document.getElementById(`mobile-nav-overlay`),re=document.getElementById(`close-mobile-nav`);function L(){let e=window.location.hash||`#/`;if(e.startsWith(`#/product/`))ae(e.replace(`#/product/`,``)),w.classList.remove(`open`),document.body.style.overflow=``;else if(e===`#/admin`)w.classList.add(`open`),document.body.style.overflow=`hidden`,p?W():(T.classList.remove(`hidden`),E.classList.add(`hidden`));else if(ie(),w.classList.remove(`open`),document.body.style.overflow=``,e.startsWith(`#`)&&e!==`#/`&&!e.startsWith(`#/`)){let t=document.querySelector(e);t&&setTimeout(()=>t.scrollIntoView({behavior:`smooth`}),50)}}window.addEventListener(`hashchange`,L),window.addEventListener(`DOMContentLoaded`,()=>{ue(),L()});function ie(){m.classList.add(`active`),h.classList.remove(`active`),$(`home`)}function ae(e){let t=a.find(t=>t.id===e);if(!t){window.location.hash=`#/`;return}m.classList.remove(`active`),h.classList.add(`active`),ce(t),le(t),window.scrollTo({top:0,behavior:`smooth`})}function oe(){let e=[...a];if(c!==`all`&&(e=e.filter(e=>e.category===c)),l.trim()!==``){let t=l.toLowerCase();e=e.filter(e=>e.title.toLowerCase().includes(t)||e.desc.toLowerCase().includes(t)||e.categoryName.toLowerCase().includes(t))}return u===`price-low`?e.sort((e,t)=>e.price-t.price):u===`price-high`?e.sort((e,t)=>t.price-e.price):u===`name-az`&&e.sort((e,t)=>e.title.localeCompare(t.title)),e}function R(){let e=oe(),t=e.length,n=Math.ceil(t/f)||1;d>n&&(d=n);let r=(d-1)*f,i=e.slice(r,r+f);if(g.innerHTML=``,i.length===0){g.innerHTML=`
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No bakery treats match your search.</h3>
        <p style="color: var(--bb-text-muted);">Try a different keyword or category filter.</p>
        <button class="btn btn-red btn-sm" style="margin-top: 16px;" onclick="resetFilters()">View All Creations</button>
      </div>
    `,_.innerHTML=``;return}i.forEach(e=>{let t=document.createElement(`div`);t.className=`product-card`,t.dataset.id=e.id,t.innerHTML=`
      <div class="card-image-wrap">
        <img src="${e.image}" alt="${e.title}" class="card-img" loading="lazy" onerror="this.onerror=null;this.src='/hero-banner.jpg'">
        <div class="card-badges">
          <span class="badge-cat">${e.categoryName}</span>
          <span class="badge-veg" title="Pure Veg / Eggless Available"></span>
        </div>
      </div>
      <div class="card-details">
        <div class="card-meta">
          <span class="card-rating">★ ${e.rating}</span>
          <span class="card-reviews">(${e.reviewsCount} reviews)</span>
        </div>
        <h3 class="card-title">${e.title}</h3>
        <div class="card-action-bar">
          <div class="card-price-block">
            <span class="card-price-label">Starting at</span>
            <span class="card-price">₹${e.price.toFixed(0)}</span>
          </div>
          <span class="card-cta-btn">View Details →</span>
        </div>
      </div>
    `,t.addEventListener(`click`,()=>{window.location.hash=`#/product/${e.id}`}),g.appendChild(t)}),se(n)}function se(e){if(_.innerHTML=``,e<=1)return;let t=document.createElement(`button`);t.className=`page-btn`,t.innerHTML=`‹ Prev`,t.disabled=d===1,t.addEventListener(`click`,()=>{d>1&&(d--,R(),z())}),_.appendChild(t);for(let t=1;t<=e;t++){let e=document.createElement(`button`);e.className=`page-btn ${t===d?`active`:``}`,e.textContent=t,e.addEventListener(`click`,()=>{d=t,R(),z()}),_.appendChild(e)}let n=document.createElement(`button`);n.className=`page-btn`,n.innerHTML=`Next ›`,n.disabled=d===e,n.addEventListener(`click`,()=>{d<e&&(d++,R(),z())}),_.appendChild(n)}function z(){let e=document.getElementById(`products-section`);if(e){let t=e.getBoundingClientRect().top+window.pageYOffset+-90;window.scrollTo({top:t,behavior:`smooth`})}}window.resetFilters=function(){c=`all`,l=``,u=`default`,d=1,y.value=``,b.value=`default`,v.forEach(e=>e.classList.toggle(`active`,e.dataset.category===`all`)),R()},v.forEach(e=>{e.addEventListener(`click`,()=>{v.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),c=e.dataset.category,d=1,R()})}),y.addEventListener(`input`,e=>{l=e.target.value,d=1,R()}),b.addEventListener(`change`,e=>{u=e.target.value,d=1,R()});function ce(e){let t=document.getElementById(`detail-breadcrumbs`);t.innerHTML=`
    <a href="#/">Home</a> / 
    <a href="#products-section">${e.categoryName}</a> / 
    <span>${e.title}</span>
  `;let n=document.getElementById(`product-detail-card`),r=e.price,i=e.category.includes(`cake`),a=i?`1.0 kg`:`Standard Pack`,o=i?Math.round(r*1.85):r;if(n.innerHTML=`
    <!-- Image Gallery Side -->
    <div class="detail-image-gallery">
      <div class="detail-main-img-wrap">
        <img src="${e.image}" alt="${e.title}" class="detail-main-img" id="detail-active-img" onerror="this.onerror=null;this.src='/hero-banner.jpg'">
        <div class="detail-badges-overlay">
          <span class="badge-pill-fresh">✨ 100% Fresh Daily</span>
          <span class="badge-veg" title="Vegetarian / Eggless"></span>
        </div>
      </div>
    </div>

    <!-- Info & Ordering Side -->
    <div class="detail-info-side">
      <span class="detail-header-tag">${e.categoryName}</span>
      <h1 class="detail-title">${e.title}</h1>
      
      <div class="detail-rating-row">
        <span class="detail-stars">★★★★★</span>
        <strong>${e.rating} / 5.0</strong>
        <span style="color: var(--bb-text-muted);">(${e.reviewsCount} verified reviews)</span>
      </div>

      <div class="detail-price-box">
        <div class="detail-price-num" id="dynamic-price-display">₹${o}</div>
        <div class="detail-price-note">All taxes included. Same-day delivery across Kolkata available.</div>
      </div>

      <p class="detail-desc">${e.desc}</p>

      ${i?`
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
      `:``}

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
  `,i){let t=n.querySelectorAll(`.weight-btn`),i=document.getElementById(`dynamic-price-display`),s=document.getElementById(`cake-custom-msg`),c=document.getElementById(`order-whatsapp-btn`);function l(){let t=s?s.value.trim():``,n=`Hello Bongo Bakers! I would like to order:\n\n🍰 *${e.title}*\n⚖️ Weight: *${a}*\n💰 Price: *₹${o}*`;t&&(n+=`\n✍️ Message on Cake: "${t}"`),n+=`
📍 Delivery in Kolkata. Please confirm availability!`,c.href=`https://wa.me/919330703521?text=${encodeURIComponent(n)}`,c.target=`_blank`}t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),a=e.dataset.weight;let n=parseFloat(e.dataset.multiplier);o=Math.round(r*n),i.textContent=`₹${o}`,l()})}),s&&s.addEventListener(`input`,l),l()}else{let t=n.querySelector(`#order-whatsapp-btn`),i=`Hello Bongo Bakers! I would like to order:\n\n🍬 *${e.title}*\n💰 Price: *₹${r}*\n📍 Delivery in Kolkata. Please confirm availability!`;t.href=`https://wa.me/919330703521?text=${encodeURIComponent(i)}`,t.target=`_blank`}}function le(e){let t=document.getElementById(`related-products-track`);t.innerHTML=``;let n=a.filter(t=>t.id!==e.id&&t.category===e.category);if(n.length<4){let t=a.filter(t=>t.id!==e.id&&t.category!==e.category);n=[...n,...t]}n=n.slice(0,8),n.forEach(e=>{let n=document.createElement(`div`);n.className=`related-card`,n.innerHTML=`
      <img src="${e.image}" alt="${e.title}" class="related-card-img" loading="lazy" onerror="this.onerror=null;this.src='/hero-banner.jpg'">
      <div class="related-card-body">
        <h4 class="related-card-title">${e.title}</h4>
        <div class="related-card-price">₹${e.price.toFixed(0)}</div>
      </div>
    `,n.addEventListener(`click`,()=>{window.location.hash=`#/product/${e.id}`}),t.appendChild(n)});let r=document.getElementById(`related-prev-btn`),i=document.getElementById(`related-next-btn`);r.onclick=()=>{t.scrollBy({left:-280,behavior:`smooth`})},i.onclick=()=>{t.scrollBy({left:280,behavior:`smooth`})}}function B(){if(x.innerHTML=``,o.length===0){x.innerHTML=`
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
        <p style="color: var(--bb-text-muted);">No social media feeds shared yet.</p>
      </div>
    `;return}o.forEach(e=>{let t=document.createElement(`div`);t.className=`social-card`;let n=e.platform===`instagram`?`badge-instagram`:e.platform===`facebook`?`badge-facebook`:`badge-youtube`,r=e.platform.charAt(0).toUpperCase()+e.platform.slice(1);t.innerHTML=`
      <div class="social-card-thumb-wrap">
        <img src="${e.image||`/hero-banner.jpg`}" alt="Bongo Bakers Post" class="social-card-img" loading="lazy">
        <span class="social-platform-badge ${n}">${r}</span>
      </div>
      <div class="social-card-body">
        <div class="social-card-header">
          <span class="social-card-handle">${e.handle||`@bongobakerskolkata`}</span>
          <span class="social-card-date">${e.date||`Recent`}</span>
        </div>
        <p class="social-card-caption">${e.caption}</p>
        <div class="social-card-action">
          <a href="${e.shareLink}" target="_blank" rel="noopener" class="social-view-btn">
            View on ${r} ↗
          </a>
        </div>
      </div>
    `,x.appendChild(t)})}function V(){S.innerHTML=``;let e=s.filter(e=>e.status===`approved`);if(e.length===0){S.innerHTML=`
      <p style="text-align: center; color: var(--bb-text-muted); padding: 20px;">
        Be the first to share your experience with Bongo Bakers!
      </p>
    `;return}[...e].reverse().forEach(e=>{let t=document.createElement(`div`);t.className=`review-card-item`,t.innerHTML=`
      <div class="review-card-head">
        <span class="rc-name">${e.name}</span>
        <span class="rc-stars">${`★`.repeat(e.rating)}${`☆`.repeat(5-e.rating)}</span>
      </div>
      <p class="rc-text">"${e.text}"</p>
      <span class="rc-date">${e.date}</span>
    `,S.appendChild(t)})}var H=5,U=document.querySelectorAll(`#star-picker .star-item`);U.forEach(e=>{e.addEventListener(`click`,()=>{H=parseInt(e.dataset.val),U.forEach(e=>{e.classList.toggle(`selected`,parseInt(e.dataset.val)<=H)})})}),C.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`rev-user-name`).value.trim(),n=document.getElementById(`rev-user-comment`).value.trim();if(!t||!n)return;let r={id:`rev-`+Date.now(),name:t,rating:H,text:n,date:new Date().toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}),status:`pending`};s.push(r),i(`bongobakers_reviews`,s),C.reset(),H=5,U.forEach(e=>e.classList.add(`selected`)),alert(`🎂 Thank you! Your review has been submitted to Bongo Bakers. It will appear on our guestbook once approved by our chefs.`),G()}),ee.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`admin-user-input`).value.trim(),n=document.getElementById(`admin-pass-input`).value.trim();t===`admin`&&n===`bakingo-sweet-admin`||t===`admin`&&n===`bongobakers2026`?(p=!0,D.style.display=`none`,T.classList.add(`hidden`),E.classList.remove(`hidden`),W()):(D.textContent=`❌ Invalid credentials. Username: admin / Password: bakingo-sweet-admin`,D.style.display=`block`)}),O.forEach(e=>{e.addEventListener(`click`,()=>{O.forEach(e=>e.classList.remove(`active`)),te.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),document.getElementById(e.dataset.tab).classList.add(`active`)})}),ne.addEventListener(`click`,e=>{e.preventDefault(),window.location.hash=`#/`});function W(){K(),X(),Q(),G()}function G(){let e=s.filter(e=>e.status===`pending`).length;P.textContent=e,P.style.display=e>0?`inline-block`:`none`,N.textContent=o.length,M.textContent=a.length}function K(){k.innerHTML=``,a.forEach(e=>{let t=document.createElement(`div`);t.className=`admin-list-item`,t.innerHTML=`
      <div class="admin-item-preview">
        <img src="${e.image}" alt="" class="admin-item-thumb">
        <div>
          <div class="admin-item-title">${e.title}</div>
          <div class="admin-item-meta">${e.categoryName} • ₹${e.price.toFixed(0)}</div>
        </div>
      </div>
      <div class="admin-item-btns">
        <button class="btn-icon-del" data-id="${e.id}" title="Delete treat">✕</button>
      </div>
    `,t.querySelector(`.btn-icon-del`).addEventListener(`click`,()=>{confirm(`Remove "${e.title}" from the bakery catalog?`)&&(a=a.filter(t=>t.id!==e.id),i(`bongobakers_products`,a),K(),R(),G())}),k.appendChild(t)})}var q=document.getElementById(`admin-product-form`),J=document.getElementById(`new-prod-file`),Y=document.getElementById(`file-chosen-status`);J.addEventListener(`change`,()=>{J.files&&J.files[0]&&(Y.textContent=`Selected: ${J.files[0].name}`)}),q.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`new-prod-title`).value.trim(),n=parseFloat(document.getElementById(`new-prod-price`).value),r=document.getElementById(`new-prod-cat`).value,o=document.getElementById(`new-prod-desc`).value.trim(),s=J.files[0],c={"classic-cakes":`Classic Cakes`,"theme-cakes":`Theme & Celebration`,"seasonal-fruit":`Seasonal Fruit`,chocolates:`Chocolates`,"cookies-desserts":`Cookies & Desserts`},l=e=>{let s={id:`bb-custom-`+Date.now(),title:t,category:r,categoryName:c[r]||`Bakery Treats`,price:n,rating:5,reviewsCount:1,desc:o,image:e,isVeg:!0,isFresh:!0};a.unshift(s),i(`bongobakers_products`,a),q.reset(),Y.textContent=`Choose product image (Optional, Max 2MB)`,alert(`🧁 Added new treat to Bongo Bakers catalog successfully!`),K(),R(),G()};if(s){let e=new FileReader;e.onload=function(e){l(e.target.result)},e.readAsDataURL(s)}else l(`/hero-banner.jpg`)});function X(){A.innerHTML=``,o.forEach(e=>{let t=document.createElement(`div`);t.className=`admin-list-item`,t.innerHTML=`
      <div class="admin-item-preview">
        <img src="${e.image||`/bongo-logo.png`}" alt="" class="admin-item-thumb">
        <div>
          <div class="admin-item-title">${e.platform.toUpperCase()} Share</div>
          <div class="admin-item-meta" style="max-width: 280px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            ${e.caption}
          </div>
        </div>
      </div>
      <div class="admin-item-btns">
        <button class="btn-icon-del" data-id="${e.id}" title="Delete social post">✕</button>
      </div>
    `,t.querySelector(`.btn-icon-del`).addEventListener(`click`,()=>{confirm(`Remove this post from the homepage feed?`)&&(o=o.filter(t=>t.id!==e.id),i(`bongobakers_social_feeds`,o),X(),B(),G())}),A.appendChild(t)})}var Z=document.getElementById(`admin-social-form`);Z.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`social-platform`).value,n=document.getElementById(`social-date`).value.trim()||`Recent`,r=document.getElementById(`social-share-link`).value.trim(),a=document.getElementById(`social-caption`).value.trim(),s=document.getElementById(`social-img-url`).value.trim(),c={id:`feed-`+Date.now(),platform:t,handle:t===`instagram`?`@bongobakerskolkata`:`facebook.com/bongobakerskolkata`,date:n,shareLink:r,caption:a,image:s||`https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80`};o.unshift(c),i(`bongobakers_social_feeds`,o),Z.reset(),alert(`✨ Social media post published to the homepage feed!`),X(),B(),G()});function Q(){j.innerHTML=``;let e=s.filter(e=>e.status===`pending`);if(e.length===0){j.innerHTML=`
      <div style="text-align: center; padding: 30px; color: var(--bb-text-muted);">
        🌟 All caught up! No pending reviews to moderate.
      </div>
    `;return}e.forEach(e=>{let t=document.createElement(`div`);t.className=`mod-review-card`,t.innerHTML=`
      <div class="mod-review-details">
        <h5>${e.name} (${`★`.repeat(e.rating)}) • <small>${e.date}</small></h5>
        <p>"${e.text}"</p>
      </div>
      <div class="mod-review-actions">
        <button class="btn-approve" data-id="${e.id}">Approve</button>
        <button class="btn-reject" data-id="${e.id}">Reject</button>
      </div>
    `,t.querySelector(`.btn-approve`).addEventListener(`click`,()=>{e.status=`approved`,i(`bongobakers_reviews`,s),Q(),V(),G()}),t.querySelector(`.btn-reject`).addEventListener(`click`,()=>{confirm(`Reject and delete this review?`)&&(s=s.filter(t=>t.id!==e.id),i(`bongobakers_reviews`,s),Q(),G())}),j.appendChild(t)})}function $(e){document.querySelectorAll(`.nav-link`).forEach(t=>{t.classList.toggle(`active`,t.dataset.target===e)})}F.addEventListener(`click`,()=>{I.classList.add(`open`)}),re.addEventListener(`click`,()=>{I.classList.remove(`open`)}),document.querySelectorAll(`.mobile-nav-link`).forEach(e=>{e.addEventListener(`click`,()=>{I.classList.remove(`open`)})}),window.addEventListener(`scroll`,()=>{if(!m.classList.contains(`active`))return;let e=window.scrollY+120;[`hero`,`products-section`,`social-feed`,`reviews`,`contact`].forEach(t=>{let n=document.getElementById(t);n&&e>=n.offsetTop&&e<n.offsetTop+n.offsetHeight&&$(t===`hero`?`home`:t)})});function ue(){R(),B(),V(),G()}