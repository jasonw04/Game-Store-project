const TAX = 0.13;

const games = [
  {id: 1, name: "Sky Battle", category: "action", platform: "pc", price: 49.99, rating: 4.6, release: "2025-09-12", image: "https://picsum.photos/seed/action-main-1/800/450",
   description: "Quick arena fights in the air. It’s more about movement and timing than button mashing.",
   thumbnails: [
      "https://picsum.photos/seed/action-thumb-1a/200/120",
      "https://picsum.photos/seed/action-thumb-1b/200/120",
      "https://picsum.photos/seed/action-thumb-1c/200/120",
      "https://picsum.photos/seed/action-thumb-1d/200/120"

    ],
   screenshots: [
      "https://picsum.photos/seed/action-shot-1a/800/450",
      "https://picsum.photos/seed/action-shot-1b/800/450",
      "https://picsum.photos/seed/action-shot-1c/800/450",
      "https://picsum.photos/seed/action-shot-1d/800/450"
    ]
  },
  {id: 2, name: "Dungeon Quest", category: "rpg", platform: "ps5", price: 69.99, rating: 4.8, release: "2024-11-20", image: "https://picsum.photos/seed/rpg-main-2/800/450",
   description: "Classic party RPG. Explore, level up, and hunt for loot without it feeling overwhelming.",
   thumbnails: [
      "https://picsum.photos/seed/rpg-thumb-2a/200/120",
      "https://picsum.photos/seed/rpg-thumb-2b/200/120",
      "https://picsum.photos/seed/rpg-thumb-2c/200/120",
      "https://picsum.photos/seed/rpg-thumb-2d/200/120"
    ],
   screenshots: [
      "https://picsum.photos/seed/rpg-shot-2a/800/450",
      "https://picsum.photos/seed/rpg-shot-2b/800/450",
      "https://picsum.photos/seed/rpg-shot-2c/800/450",
      "https://picsum.photos/seed/rpg-shot-2d/800/450"
    ]
  },
  {id: 3, name: "Street Hoops", category: "sports", platform: "xbox", price: 39.99, rating: 4.1, release: "2023-06-01", image: "https://picsum.photos/seed/sports-main-3/800/450",
   description: "Arcade basketball with fast games. Easy to pick up, but you can still get competitive.",
   thumbnails: [
      "https://picsum.photos/seed/sports-thumb-3a/200/120",
      "https://picsum.photos/seed/sports-thumb-3b/200/120",
      "https://picsum.photos/seed/sports-thumb-3c/200/120",
      "https://picsum.photos/seed/sports-thumb-3d/200/120"
    ],
   screenshots: [
      "https://picsum.photos/seed/sports-shot-3a/800/450",
      "https://picsum.photos/seed/sports-shot-3b/800/450",
      "https://picsum.photos/seed/sports-shot-3c/800/450",
      "https://picsum.photos/seed/sports-shot-3d/800/450"
    ]
  },
  {id: 4, name: "Galaxy Tactics", category: "strategy", platform: "pc", price: 29.99, rating: 4.3, release: "2022-03-15", image: "https://picsum.photos/seed/strategy-main-4/800/450",
   description: "Strategy that rewards planning. You win more by thinking ahead than by rushing.",
   thumbnails: [
      "https://picsum.photos/seed/strategy-thumb-4a/200/120",
      "https://picsum.photos/seed/strategy-thumb-4b/200/120",
      "https://picsum.photos/seed/strategy-thumb-4c/200/120",
      "https://picsum.photos/seed/strategy-thumb-4d/200/120"
    ],
   screenshots: [
      "https://picsum.photos/seed/strategy-shot-4a/800/450",
      "https://picsum.photos/seed/strategy-shot-4b/800/450",
      "https://picsum.photos/seed/strategy-shot-4c/800/450",
      "https://picsum.photos/seed/strategy-shot-4d/800/450"
    ]
  },
  {id: 5, name: "Neon Runner", category: "action", platform: "switch", price: 19.99, rating: 4.0, release: "2021-08-10", image: "https://picsum.photos/seed/action-main-5/800/450",
   description: "A clean, fast runner. Short levels, quick restarts, and it doesn’t waste your time.",
   thumbnails: [
      "https://picsum.photos/seed/action-thumb-5a/200/120",
      "https://picsum.photos/seed/action-thumb-5b/200/120",
      "https://picsum.photos/seed/action-thumb-5c/200/120",
      "https://picsum.photos/seed/action-thumb-5d/200/120"
    ],
   screenshots: [
      "https://picsum.photos/seed/action-shot-5a/800/450",
      "https://picsum.photos/seed/action-shot-5b/800/450",
      "https://picsum.photos/seed/action-shot-5c/800/450",
      "https://picsum.photos/seed/action-shot-5d/800/450"
    ]
  },
  {id: 6, name: "Kingdom Stories", category: "rpg", platform: "pc", price: 59.99, rating: 4.7, release: "2025-01-30", image: "https://picsum.photos/seed/rpg-main-6/800/450",
   description: "Long story RPG with builds and choices. Good if you like exploring and finishing quests.",
   thumbnails: [
      "https://picsum.photos/seed/rpg-thumb-6a/200/120",
      "https://picsum.photos/seed/rpg-thumb-6b/200/120",
      "https://picsum.photos/seed/rpg-thumb-6c/200/120",
      "https://picsum.photos/seed/rpg-thumb-6d/200/120"
    ],
   screenshots: [
      "https://picsum.photos/seed/rpg-shot-6a/800/450",
      "https://picsum.photos/seed/rpg-shot-6b/800/450",
      "https://picsum.photos/seed/rpg-shot-6c/800/450",
      "https://picsum.photos/seed/rpg-shot-6d/800/450"
    ]
  },
  {id: 7, name: "Pro League Soccer", category: "sports", platform: "ps5", price: 79.99, rating: 4.2, release: "2024-09-05", image: "https://picsum.photos/seed/sports-main-7/800/450",
   description: "Modern soccer with quick controls. Feels smooth and competitive without being too complicated.",
   thumbnails: [
      "https://picsum.photos/seed/sports-thumb-7a/200/120",
      "https://picsum.photos/seed/sports-thumb-7b/200/120",
      "https://picsum.photos/seed/sports-thumb-7c/200/120",
      "https://picsum.photos/seed/sports-thumb-7d/200/120"
    ],
   screenshots: [
      "https://picsum.photos/seed/sports-shot-7a/800/450",
      "https://picsum.photos/seed/sports-shot-7b/800/450",
      "https://picsum.photos/seed/sports-shot-7c/800/450",
      "https://picsum.photos/seed/sports-shot-7d/800/450"
    ]
  },
  {id: 8, name: "Island Empire", category: "strategy", platform: "switch", price: 24.99, rating: 4.4, release: "2023-12-18", image: "https://picsum.photos/seed/strategy-main-8/800/450",
   description: "Build up an island, expand slowly, and keep things efficient. It’s chill but still strategic.",
   thumbnails: [
      "https://picsum.photos/seed/strategy-thumb-8a/200/120",
      "https://picsum.photos/seed/strategy-thumb-8b/200/120",
      "https://picsum.photos/seed/strategy-thumb-8c/200/120",
      "https://picsum.photos/seed/strategy-thumb-8d/200/120"
    ],
   screenshots: [
      "https://picsum.photos/seed/strategy-shot-8a/800/450",
      "https://picsum.photos/seed/strategy-shot-8b/800/450",
      "https://picsum.photos/seed/strategy-shot-8c/800/450",
      "https://picsum.photos/seed/strategy-shot-8d/800/450"
    ]
  }
];

const recommended = [2, 6, 1, 8];

let cart = [];
let wishlist = [];
let viewMode = "grid";

let carouselIndex = 0;
let carouselTimer = null;

let detailId = null;

function byId(id) { return document.getElementById(id); }
function fmt(n) { return Number(n).toFixed(2); }

function findGame(id) {
  return games.find(function (g) { return g.id === id; }) || null;
}

function loadData() {
  const c = localStorage.getItem("cart");
  const w = localStorage.getItem("wishlist");
  cart = c ? JSON.parse(c) : [];
  wishlist = w ? JSON.parse(w) : [];
}

function saveData() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function show(pageId) {
  const pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) pages[i].classList.add("hidden");
  byId(pageId).classList.remove("hidden");
}

function updateCounts() {
  const count = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
  byId("cart_count").innerHTML = String(count);
  byId("wishlist_count").innerHTML = String(wishlist.length);
}

function showCarousel() {
  const id = recommended[carouselIndex];
  const g = findGame(id);
  if (!g) return;

  byId("carousel_game_title").innerHTML = g.name;
  byId("carousel_game_desc").innerHTML =
    "Price: $" + fmt(g.price) + " | Rating: " + g.rating + " | " +
    g.category.toUpperCase() + " / " + g.platform.toUpperCase();

  byId("carousel_game_img").src = g.image;
}

function renderRecommended() {
  const wrap = byId("recommended_list");

  wrap.innerHTML = recommended.map(function (rid) {
    const g = findGame(rid);
    if (!g) return "";
    return (
      '<div class="game_card">' +
        '<img class="rec_img" src="' + g.image + '" alt="Game image" />' +
        "<h4>" + g.name + "</h4>" +
        "<p>$" + fmt(g.price) + " | Rating: " + g.rating + "</p>" +
        '<button type="button" class="btn_view_details" data-id="' + g.id + '">View Details</button>' +
      "</div>"
    );
  }).join("");

  const btns = wrap.getElementsByClassName("btn_view_details");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      openDetail(Number(this.getAttribute("data-id")));
    });
  }
}

function filteredGames() {
  const search = byId("search_name").value.toLowerCase();
  const cat = byId("filter_category").value;
  const plat = byId("filter_platform").value;
  const price = byId("filter_price").value;

  return games.filter(function (g) {
    if (search && g.name.toLowerCase().indexOf(search) === -1) return false;
    if (cat && g.category !== cat) return false;
    if (plat && g.platform !== plat) return false;

    if (price) {
      if (price === "0-20" && !(g.price >= 0 && g.price <= 20)) return false;
      if (price === "20-40" && !(g.price > 20 && g.price <= 40)) return false;
      if (price === "40-60" && !(g.price > 40 && g.price <= 60)) return false;
      if (price === "60+" && !(g.price > 60)) return false;
    }

    return true;
  });
}

function sortGames(list) {
  const sort = byId("sort_by").value;
  const copy = list.slice();

  copy.sort(function (a, b) {
    if (sort === "name_asc") return a.name.localeCompare(b.name);
    if (sort === "name_desc") return b.name.localeCompare(a.name);
    if (sort === "price_asc") return a.price - b.price;
    if (sort === "price_desc") return b.price - a.price;
    if (sort === "rating_desc") return b.rating - a.rating;
    return 0;
  });

  return copy;
}

function renderGames() {
  let list = sortGames(filteredGames());
  const wrap = byId("games_list");

  if (viewMode === "grid") {
    wrap.classList.add("grid_view");
    wrap.classList.remove("list_view");
  } else {
    wrap.classList.add("list_view");
    wrap.classList.remove("grid_view");
  }

  wrap.innerHTML = list.map(function (g) {
    return (
      '<div class="game_card">' +
        '<img class="card_img" src="' + g.image + '" alt="Game image" />' +
        "<h4>" + g.name + "</h4>" +
        "<p>Category: " + g.category.toUpperCase() + "</p>" +
        "<p>Platform: " + g.platform.toUpperCase() + "</p>" +
        "<p>Price: $" + fmt(g.price) + "</p>" +
        "<p>Rating: " + g.rating + "</p>" +
        '<button type="button" class="btn_view_details" data-id="' + g.id + '">View Details</button> ' +
        '<button type="button" class="btn_add_cart" data-id="' + g.id + '">Add to Cart</button> ' +
        '<button type="button" class="btn_add_wishlist" data-id="' + g.id + '">Add to Wishlist</button>' +
      "</div>"
    );
  }).join("");

  const details = wrap.getElementsByClassName("btn_view_details");
  for (let i = 0; i < details.length; i++) {
    details[i].addEventListener("click", function () {
      openDetail(Number(this.getAttribute("data-id")));
    });
  }

  const addCart = wrap.getElementsByClassName("btn_add_cart");
  for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener("click", function () {
      addToCart(Number(this.getAttribute("data-id")), 1);
    });
  }

  const addWish = wrap.getElementsByClassName("btn_add_wishlist");
  for (let i = 0; i < addWish.length; i++) {
    addWish[i].addEventListener("click", function () {
      addToWishlist(Number(this.getAttribute("data-id")));
    });
  }
}

function openDetail(id) {
  const g = findGame(id);
  if (!g) return;

  detailId = id;

  byId("detail_title").innerHTML = g.name;

  let line = "Price: $" + fmt(g.price) + " | Rating: " + g.rating;
  if (g.description) line += "<br>" + g.description;
  byId("detail_description").innerHTML = line;

  byId("detail_main_img").src = g.image;

  byId("spec_type").innerHTML = g.category.toUpperCase();
  byId("spec_platform").innerHTML = g.platform.toUpperCase();
  byId("spec_release").innerHTML = g.release;
  byId("spec_rating").innerHTML = String(g.rating);

  const thumbList = byId("thumbnail_list");
  thumbList.innerHTML = "";
  for (let i = 0; i < g.thumbnails.length; i++) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = g.thumbnails[i];
    img.className = "thumb_img";
    img.addEventListener("click", function () {
      byId("detail_main_img").src = this.src;
    });
    li.appendChild(img);
    thumbList.appendChild(li);
  }

  const shotList = byId("screenshot_list");
  shotList.innerHTML = "";
  for (let i = 0; i < g.screenshots.length; i++) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = g.screenshots[i];
    img.className = "shot_img";
    li.appendChild(img);
    shotList.appendChild(li);
  }

  show("page_detail");
}

function addToWishlist(id) {
  if (wishlist.indexOf(id) !== -1) {
    updateCounts();
    renderWishlist();
    return;
  }
  wishlist.push(id);
  saveData();
  updateCounts();
  renderWishlist();
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter(function (x) { return x !== id; });
  saveData();
  updateCounts();
  renderWishlist();
}

function addToCart(id, qty) {
  const item = cart.find(function (x) { return x.id === id; });
  if (item) item.qty += qty;
  else cart.push({ id: id, qty: qty });

  saveData();
  updateCounts();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(function (x) { return x.id !== id; });
  saveData();
  updateCounts();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(function (x) { return x.id === id; });
  if (!item) return;

  item.qty += delta;
  if (item.qty < 1) item.qty = 1;

  saveData();
  updateCounts();
  renderCart();
}

function renderWishlist() {
  const tbody = byId("wishlist_rows");

  if (wishlist.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3">Wishlist is empty.</td></tr>';
    return;
  }

  tbody.innerHTML = wishlist.map(function (id) {
    const g = findGame(id);
    if (!g) return "";
    return (
      "<tr>" +
        "<td>" + g.name + "</td>" +
        "<td>$" + fmt(g.price) + "</td>" +
        '<td><button type="button" class="w_move" data-id="' + g.id + '">Move to Cart</button> ' +
        '<button type="button" class="w_remove" data-id="' + g.id + '">Remove</button></td>' +
      "</tr>"
    );
  }).join("");

  const moveBtns = tbody.getElementsByClassName("w_move");
  for (let i = 0; i < moveBtns.length; i++) {
    moveBtns[i].addEventListener("click", function () {
      const id = Number(this.getAttribute("data-id"));
      addToCart(id, 1);
      removeFromWishlist(id);
    });
  }

  const remBtns = tbody.getElementsByClassName("w_remove");
  for (let i = 0; i < remBtns.length; i++) {
    remBtns[i].addEventListener("click", function () {
      removeFromWishlist(Number(this.getAttribute("data-id")));
    });
  }
}

function renderCart() {
  const tbody = byId("cart_rows");

  if (cart.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5">Cart is empty.</td></tr>';
    updateTotals(0);
    return;
  }

  let subtotal = 0;

  tbody.innerHTML = cart.map(function (item) {
    const g = findGame(item.id);
    if (!g) return "";

    const line = g.price * item.qty;
    subtotal += line;

    return (
      "<tr>" +
        "<td>" + g.name + "</td>" +
        "<td>$" + fmt(g.price) + "</td>" +
        '<td><button type="button" class="c_minus" data-id="' + g.id + '">-</button> ' +
        '<span class="qty_value">' + item.qty + "</span> " +
        '<button type="button" class="c_plus" data-id="' + g.id + '">+</button></td>' +
        "<td>$" + fmt(line) + "</td>" +
        '<td><button type="button" class="c_remove" data-id="' + g.id + '">Remove</button></td>' +
      "</tr>"
    );
  }).join("");

  const minus = tbody.getElementsByClassName("c_minus");
  for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function () {
      changeQty(Number(this.getAttribute("data-id")), -1);
    });
  }

  const plus = tbody.getElementsByClassName("c_plus");
  for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
      changeQty(Number(this.getAttribute("data-id")), 1);
    });
  }

  const rem = tbody.getElementsByClassName("c_remove");
  for (let i = 0; i < rem.length; i++) {
    rem[i].addEventListener("click", function () {
      removeFromCart(Number(this.getAttribute("data-id")));
    });
  }

  updateTotals(subtotal);
}

function updateTotals(subtotal) {
  const tax = subtotal * TAX;
  const total = subtotal + tax;

  byId("subtotal_value").innerHTML = fmt(subtotal);
  byId("tax_value").innerHTML = fmt(tax);
  byId("total_value").innerHTML = fmt(total);
}

function validEmail(e) {
  const at = e.indexOf("@");
  const dot = e.lastIndexOf(".");
  if (at < 1) return false;
  if (dot < at + 2) return false;
  if (dot === e.length - 1) return false;
  return true;
}

function setErr(id, msg) { byId(id).innerHTML = msg; }
function clearErr(id) { byId(id).innerHTML = ""; }

function newsletterSubmit() {
  const email = byId("newsletter_email").value.trim();
  if (!validEmail(email)) {
    setErr("err_newsletter_email", "Please enter a valid email.");
    return;
  }
  clearErr("err_newsletter_email");
  alert("Subscribed! (demo)");
  byId("newsletter_email").value = "";
}

function contactSubmit() {
  const email = byId("contact_email").value.trim();
  const msg = byId("contact_message").value.trim();

  let ok = true;

  if (!validEmail(email)) { setErr("err_contact_email", "Valid email required."); ok = false; }
  else clearErr("err_contact_email");

  if (msg === "") { setErr("err_contact_message", "Message required."); ok = false; }
  else clearErr("err_contact_message");

  if (ok) {
    alert("Message sent! (demo)");
    byId("contact_email").value = "";
    byId("contact_message").value = "";
  }
}

function orderNumber() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const rand = Math.floor(Math.random() * 9000) + 1000;
  return "ORD-" + y + m + day + "-" + rand;
}

function dateDDMMYYYY() {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, "0");
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const y = d.getFullYear();
  return day + "/" + m + "/" + y;
}

function checkoutValid() {
  let ok = true;

  const name = byId("pay_name").value.trim();
  const card = byId("pay_card").value.trim();
  const exp = byId("pay_exp").value.trim();
  const cvv = byId("pay_cvv").value.trim();
  const email = byId("pay_email").value.trim();

  if (name === "") { setErr("err_pay_name", "Required."); ok = false; }
  else clearErr("err_pay_name");

  if (card.length !== 16) { setErr("err_pay_card", "16 digits required."); ok = false; }
  else {
    for (let i = 0; i < card.length; i++) {
      if (card[i] < "0" || card[i] > "9") { setErr("err_pay_card", "Digits only."); ok = false; break; }
    }
    if (ok) clearErr("err_pay_card");
  }

  if (exp.length !== 5 || exp[2] !== "/") {
    setErr("err_pay_exp", "Use MM/YY.");
    ok = false;
  } else {
    const month = parseInt(exp.substring(0, 2));
    const year = parseInt(exp.substring(3, 5));

    if (isNaN(month) || month < 1 || month > 12) {
      setErr("err_pay_exp", "Invalid month.");
      ok = false;
    } else if (isNaN(year)) {
      setErr("err_pay_exp", "Invalid year.");
      ok = false;
    } else {
      const now = new Date();
      const currentMonth = now.getMonth() + 1;
      const currentYear = now.getFullYear() % 100;

      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        setErr("err_pay_exp", "Card has expired.");
        ok = false;
      } else {
        clearErr("err_pay_exp");
      }
    }
  }

  if (!(cvv.length === 3 || cvv.length === 4)) { setErr("err_pay_cvv", "3 or 4 digits."); ok = false; }
  else clearErr("err_pay_cvv");

  if (!validEmail(email)) { setErr("err_pay_email", "Valid email required."); ok = false; }
  else clearErr("err_pay_email");

  if (cart.length === 0) { alert("Your cart is empty."); ok = false; }

  return ok;
}

function buildReceipt(email) {
  byId("receipt_order_number").innerHTML = orderNumber();
  byId("receipt_order_date").innerHTML = dateDDMMYYYY();
  byId("receipt_email").innerHTML = email;

  let subtotal = 0;

  const html = cart.map(function (item) {
    const g = findGame(item.id);
    if (!g) return "";

    const line = g.price * item.qty;
    subtotal += line;

    return (
      "<tr>" +
        "<td>" + g.name + "</td>" +
        "<td>$" + fmt(g.price) + "</td>" +
        "<td>" + item.qty + "</td>" +
        "<td>$" + fmt(line) + "</td>" +
      "</tr>"
    );
  }).join("");

  byId("receipt_rows").innerHTML = html;

  const tax = subtotal * TAX;
  const total = subtotal + tax;

  byId("receipt_subtotal").innerHTML = fmt(subtotal);
  byId("receipt_tax").innerHTML = fmt(tax);
  byId("receipt_total").innerHTML = fmt(total);
}

function placeOrder() {
  if (!checkoutValid()) return;

  byId("processing_area").classList.remove("hidden");

  setTimeout(function () {
    byId("processing_area").classList.add("hidden");

    const email = byId("pay_email").value.trim();
    buildReceipt(email);

    cart = [];
    saveData();
    updateCounts();
    renderCart();

    show("page_receipt");
  }, 1000);
}

function setup() {
  loadData();
  updateCounts();

  byId("nav_home").addEventListener("click", function (e) { e.preventDefault(); show("page_home"); });
  byId("nav_games").addEventListener("click", function (e) { e.preventDefault(); show("page_games"); renderGames(); });
  byId("nav_about").addEventListener("click", function (e) { e.preventDefault(); show("page_about"); });
  byId("nav_wishlist").addEventListener("click", function (e) { e.preventDefault(); show("page_wishlist"); renderWishlist(); });
  byId("nav_cart").addEventListener("click", function (e) { e.preventDefault(); show("page_cart"); renderCart(); });

  function nextSlide() {
    carouselIndex++;
    if (carouselIndex >= recommended.length) carouselIndex = 0;
    showCarousel();
  }

  function prevSlide() {
    carouselIndex--;
    if (carouselIndex < 0) carouselIndex = recommended.length - 1;
    showCarousel();
  }

  function startCarouselAuto() {
    if (carouselTimer) clearInterval(carouselTimer);
    carouselTimer = setInterval(function () {
      nextSlide();
    }, 4000);
  }

  byId("btn_carousel_prev").addEventListener("click", function () {
    prevSlide();
    startCarouselAuto();
  });

  byId("btn_carousel_next").addEventListener("click", function () {
    nextSlide();
    startCarouselAuto();
  });

  byId("btn_carousel_view_details").addEventListener("click", function () {
    openDetail(recommended[carouselIndex]);
  });

  byId("btn_carousel_add_cart").addEventListener("click", function () {
    addToCart(recommended[carouselIndex], 1);
  });

  byId("btn_carousel_add_wishlist").addEventListener("click", function () {
    addToWishlist(recommended[carouselIndex]);
  });

  byId("btn_search").addEventListener("click", function () { renderGames(); });
  byId("btn_apply_sort").addEventListener("click", function () { renderGames(); });
  byId("filter_category").addEventListener("change", function () { renderGames(); });
  byId("filter_platform").addEventListener("change", function () { renderGames(); });
  byId("filter_price").addEventListener("change", function () { renderGames(); });

  byId("btn_view_grid").addEventListener("click", function () { viewMode = "grid"; renderGames(); });
  byId("btn_view_list").addEventListener("click", function () { viewMode = "list"; renderGames(); });

  byId("btn_clear_filters").addEventListener("click", function () {
    byId("search_name").value = "";
    byId("filter_category").value = "";
    byId("filter_platform").value = "";
    byId("filter_price").value = "";
    byId("sort_by").value = "name_asc";
    renderGames();
  });

  byId("btn_detail_add_cart").addEventListener("click", function () {
    if (detailId !== null) addToCart(detailId, 1);
  });

  byId("btn_detail_add_wishlist").addEventListener("click", function () {
    if (detailId !== null) addToWishlist(detailId);
  });

  byId("btn_back_to_games").addEventListener("click", function () {
    show("page_games");
    renderGames();
  });

  byId("btn_cart_to_checkout").addEventListener("click", function () {
    show("page_checkout");
  });

  byId("btn_continue_shopping").addEventListener("click", function () {
    show("page_home");
  });

  byId("btn_print_receipt").addEventListener("click", function () {
    window.print();
  });

  byId("btn_newsletter_subscribe").addEventListener("click", function () {
    newsletterSubmit();
  });

  byId("btn_send_message").addEventListener("click", function () {
    contactSubmit();
  });

  byId("btn_place_order").addEventListener("click", function () {
    placeOrder();
  });

  show("page_home");
  showCarousel();
  renderRecommended();
  renderWishlist();
  renderCart();
  startCarouselAuto();

  document.getElementById("filter_form").addEventListener("submit", function (event) {
    event.preventDefault();
    renderGames();
  });
}

document.addEventListener("DOMContentLoaded", setup);
