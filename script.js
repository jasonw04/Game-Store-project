// script.js - basic features for the single-page store

const TAX = 0.13;

// 8 games
const games = [
  { id: 1, name: "Sky Battle", category: "action", platform: "pc", price: 49.99, rating: 4.6, release: "2025-09-12" },
  { id: 2, name: "Dungeon Quest", category: "rpg", platform: "ps5", price: 69.99, rating: 4.8, release: "2024-11-20" },
  { id: 3, name: "Street Hoops", category: "sports", platform: "xbox", price: 39.99, rating: 4.1, release: "2023-06-01" },
  { id: 4, name: "Galaxy Tactics", category: "strategy", platform: "pc", price: 29.99, rating: 4.3, release: "2022-03-15" },
  { id: 5, name: "Neon Runner", category: "action", platform: "switch", price: 19.99, rating: 4.0, release: "2021-08-10" },
  { id: 6, name: "Kingdom Stories", category: "rpg", platform: "pc", price: 59.99, rating: 4.7, release: "2025-01-30" },
  { id: 7, name: "Pro League Soccer", category: "sports", platform: "ps5", price: 79.99, rating: 4.2, release: "2024-09-05" },
  { id: 8, name: "Island Empire", category: "strategy", platform: "switch", price: 24.99, rating: 4.4, release: "2023-12-18" }
];

// 4 recommended
const recommended = [2, 6, 1, 8];

let cart = [];     // [{id, qty}]
let wishlist = []; // [id]
let viewMode = "grid";
let carouselIndex = 0;
let carouselTimer = null;
let detailId = null;

function byId(id) {
  return document.getElementById(id);
}

function fmt(n) {
  return Number(n).toFixed(2);
}

function findGame(id) {
  for (let i = 0; i < games.length; i++) {
    if (games[i].id === id) return games[i];
  }
  return null;
}

/* ---------- storage ---------- */
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

/* ---------- page switching ---------- */
function show(pageId) {
  const pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.add("hidden");
  }
  byId(pageId).classList.remove("hidden");
}

/* ---------- badges ---------- */
function updateCounts() {
  let count = 0;
  for (let i = 0; i < cart.length; i++) {
    count += cart[i].qty;
  }
  byId("cart_count").innerHTML = String(count);
  byId("wishlist_count").innerHTML = String(wishlist.length);
}

/* ---------- home carousel ---------- */
function showCarousel() {
  const id = recommended[carouselIndex];
  const g = findGame(id);
  if (!g) return;

  byId("carousel_game_title").innerHTML = g.name;
  byId("carousel_game_desc").innerHTML =
    "Price: $" + fmt(g.price) + " | Rating: " + g.rating + " | " +
    g.category.toUpperCase() + " / " + g.platform.toUpperCase();
}

/* ---------- recommended cards ---------- */
function renderRecommended() {
  const wrap = byId("recommended_list");
  let html = "";

  for (let i = 0; i < recommended.length; i++) {
    const g = findGame(recommended[i]);
    if (!g) continue;

    html += '<div class="game_card">';
    html += "<h4>" + g.name + "</h4>";
    html += "<p>$" + fmt(g.price) + " | Rating: " + g.rating + "</p>";
    html += '<button type="button" class="btn_view_details" data-id="' + g.id + '">View Details</button>';
    html += "</div>";
  }

  wrap.innerHTML = html;

  const btns = wrap.getElementsByClassName("btn_view_details");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      const id = Number(this.getAttribute("data-id"));
      openDetail(id);
    });
  }
}

/* ---------- games list ---------- */
function filteredGames() {
  const search = byId("search_name").value.toLowerCase();
  const cat = byId("filter_category").value;
  const plat = byId("filter_platform").value;
  const price = byId("filter_price").value;

  const out = [];

  for (let i = 0; i < games.length; i++) {
    const g = games[i];

    if (search && g.name.toLowerCase().indexOf(search) === -1) continue;
    if (cat && g.category !== cat) continue;
    if (plat && g.platform !== plat) continue;

    if (price) {
      if (price === "0-20" && !(g.price >= 0 && g.price <= 20)) continue;
      if (price === "20-40" && !(g.price > 20 && g.price <= 40)) continue;
      if (price === "40-60" && !(g.price > 40 && g.price <= 60)) continue;
      if (price === "60+" && !(g.price > 60)) continue;
    }

    out.push(g);
  }

  return out;
}

function sortGames(list) {
  const sort = byId("sort_by").value;

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      let swap = false;

      if (sort === "name_asc" && list[j].name > list[j + 1].name) swap = true;
      if (sort === "name_desc" && list[j].name < list[j + 1].name) swap = true;
      if (sort === "price_asc" && list[j].price > list[j + 1].price) swap = true;
      if (sort === "price_desc" && list[j].price < list[j + 1].price) swap = true;
      if (sort === "rating_desc" && list[j].rating < list[j + 1].rating) swap = true;

      if (swap) {
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }

  return list;
}

function renderGames() {
  let list = filteredGames();
  list = sortGames(list);

  const wrap = byId("games_list");

  if (viewMode === "grid") {
    wrap.classList.add("grid_view");
    wrap.classList.remove("list_view");
  } else {
    wrap.classList.add("list_view");
    wrap.classList.remove("grid_view");
  }

  let html = "";
  for (let i = 0; i < list.length; i++) {
    const g = list[i];
    html += '<div class="game_card">';
    html += "<h4>" + g.name + "</h4>";
    html += "<p>Category: " + g.category.toUpperCase() + "</p>";
    html += "<p>Platform: " + g.platform.toUpperCase() + "</p>";
    html += "<p>Price: $" + fmt(g.price) + "</p>";
    html += "<p>Rating: " + g.rating + "</p>";
    html += '<button type="button" class="btn_view_details" data-id="' + g.id + '">View Details</button> ';
    html += '<button type="button" class="btn_add_cart" data-id="' + g.id + '">Add to Cart</button> ';
    html += '<button type="button" class="btn_add_wishlist" data-id="' + g.id + '">Add to Wishlist</button>';
    html += "</div>";
  }

  wrap.innerHTML = html;

  // events
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

/* ---------- detail ---------- */
function openDetail(id) {
  const g = findGame(id);
  if (!g) return;

  detailId = id;

  byId("detail_title").innerHTML = g.name;
  byId("detail_description").innerHTML = "Price: $" + fmt(g.price) + " | Rating: " + g.rating;

  byId("spec_type").innerHTML = g.category.toUpperCase();
  byId("spec_platform").innerHTML = g.platform.toUpperCase();
  byId("spec_release").innerHTML = g.release;
  byId("spec_rating").innerHTML = String(g.rating);

  show("page_detail");
}

/* ---------- wishlist/cart actions ---------- */
function addToWishlist(id) {
  for (let i = 0; i < wishlist.length; i++) {
    if (wishlist[i] === id) {
      updateCounts();
      renderWishlist();
      return;
    }
  }
  wishlist.push(id);
  saveData();
  updateCounts();
  renderWishlist();
}

function removeFromWishlist(id) {
  const temp = [];
  for (let i = 0; i < wishlist.length; i++) {
    if (wishlist[i] !== id) temp.push(wishlist[i]);
  }
  wishlist = temp;
  saveData();
  updateCounts();
  renderWishlist();
}

function addToCart(id, qty) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].qty += qty;
      saveData();
      updateCounts();
      renderCart();
      return;
    }
  }
  cart.push({ id: id, qty: qty });
  saveData();
  updateCounts();
  renderCart();
}

function removeFromCart(id) {
  const temp = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id !== id) temp.push(cart[i]);
  }
  cart = temp;
  saveData();
  updateCounts();
  renderCart();
}

function changeQty(id, delta) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].qty += delta;
      if (cart[i].qty < 1) cart[i].qty = 1;
      break;
    }
  }
  saveData();
  updateCounts();
  renderCart();
}

/* ---------- wishlist table ---------- */
function renderWishlist() {
  const tbody = byId("wishlist_rows");
  if (wishlist.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3">Wishlist is empty.</td></tr>';
    return;
  }

  let html = "";
  for (let i = 0; i < wishlist.length; i++) {
    const g = findGame(wishlist[i]);
    if (!g) continue;

    html += "<tr>";
    html += "<td>" + g.name + "</td>";
    html += "<td>$" + fmt(g.price) + "</td>";
    html += '<td><button type="button" class="w_move" data-id="' + g.id + '">Move to Cart</button> ';
    html += '<button type="button" class="w_remove" data-id="' + g.id + '">Remove</button></td>';
    html += "</tr>";
  }

  tbody.innerHTML = html;

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

/* ---------- cart table + totals ---------- */
function renderCart() {
  const tbody = byId("cart_rows");
  if (cart.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5">Cart is empty.</td></tr>';
    updateTotals(0);
    return;
  }

  let subtotal = 0;
  let html = "";

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const g = findGame(item.id);
    if (!g) continue;

    const line = g.price * item.qty;
    subtotal += line;

    html += "<tr>";
    html += "<td>" + g.name + "</td>";
    html += "<td>$" + fmt(g.price) + "</td>";
    html += '<td><button type="button" class="c_minus" data-id="' + g.id + '">-</button> ';
    html += '<span class="qty_value">' + item.qty + "</span> ";
    html += '<button type="button" class="c_plus" data-id="' + g.id + '">+</button></td>';
    html += "<td>$" + fmt(line) + "</td>";
    html += '<td><button type="button" class="c_remove" data-id="' + g.id + '">Remove</button></td>';
    html += "</tr>";
  }

  tbody.innerHTML = html;

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

/* ---------- simple validation ---------- */
function validEmail(e) {
  const at = e.indexOf("@");
  const dot = e.lastIndexOf(".");
  if (at < 1) return false;
  if (dot < at + 2) return false;
  if (dot === e.length - 1) return false;
  return true;
}

function setErr(id, msg) {
  byId(id).innerHTML = msg;
}

function clearErr(id) {
  byId(id).innerHTML = "";
}

/* newsletter */
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

/* contact */
function contactSubmit() {
  const email = byId("contact_email").value.trim();
  const msg = byId("contact_message").value.trim();

  let ok = true;

  if (!validEmail(email)) { setErr("err_contact_email", "Valid email required."); ok = false; }
  else { clearErr("err_contact_email"); }

  if (msg === "") { setErr("err_contact_message", "Message required."); ok = false; }
  else { clearErr("err_contact_message"); }

  if (ok) {
    alert("Message sent! (demo)");
    byId("contact_email").value = "";
    byId("contact_message").value = "";
  }
}

/* checkout + receipt */
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

  if (name === "") { setErr("err_pay_name", "Required."); ok = false; } else clearErr("err_pay_name");

  if (card.length !== 16) { setErr("err_pay_card", "16 digits required."); ok = false; }
  else {
    for (let i = 0; i < card.length; i++) {
      if (card[i] < "0" || card[i] > "9") { setErr("err_pay_card", "Digits only."); ok = false; break; }
    }
    if (ok) clearErr("err_pay_card");
  }

  if (exp.length !== 5 || exp[2] !== "/") { setErr("err_pay_exp", "Use MM/YY."); ok = false; }
  else clearErr("err_pay_exp");

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
  let html = "";

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const g = findGame(item.id);
    if (!g) continue;

    const line = g.price * item.qty;
    subtotal += line;

    html += "<tr>";
    html += "<td>" + g.name + "</td>";
    html += "<td>$" + fmt(g.price) + "</td>";
    html += "<td>" + item.qty + "</td>";
    html += "<td>$" + fmt(line) + "</td>";
    html += "</tr>";
  }

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

    // clear cart after purchase
    cart = [];
    saveData();
    updateCounts();
    renderCart();

    show("page_receipt");
  }, 1000);
}

/* ---------- wiring ---------- */
function setup() {
  loadData();
  updateCounts();

  // nav
  byId("nav_home").addEventListener("click", function (e) { e.preventDefault(); show("page_home"); });
  byId("nav_games").addEventListener("click", function (e) { e.preventDefault(); show("page_games"); renderGames(); });
  byId("nav_about").addEventListener("click", function (e) { e.preventDefault(); show("page_about"); });
  byId("nav_wishlist").addEventListener("click", function (e) { e.preventDefault(); show("page_wishlist"); renderWishlist(); });
  byId("nav_cart").addEventListener("click", function (e) { e.preventDefault(); show("page_cart"); renderCart(); });
  byId("nav_checkout").addEventListener("click", function (e) { e.preventDefault(); show("page_checkout"); });

  // carousel
  function nextSlide() {
    carouselIndex++;
    if (carouselIndex >= recommended.length) {
      carouselIndex = 0;
    }
    showCarousel();
  }

  function prevSlide() {
    carouselIndex--;
    if (carouselIndex < 0) {
      carouselIndex = recommended.length - 1;
    }
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
    startCarouselAuto(); // reset timer
  });

  byId("btn_carousel_next").addEventListener("click", function () {
    nextSlide();
    startCarouselAuto(); // reset timer
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

  // games controls
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

  // detail buttons
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

  // cart -> checkout
  byId("btn_cart_to_checkout").addEventListener("click", function () {
    show("page_checkout");
  });

  // receipt buttons
  byId("btn_continue_shopping").addEventListener("click", function () {
    show("page_home");
  });

  byId("btn_print_receipt").addEventListener("click", function () {
    window.print();
  });

  // forms
  byId("btn_newsletter_subscribe").addEventListener("click", function () {
    newsletterSubmit();
  });

  byId("btn_send_message").addEventListener("click", function () {
    contactSubmit();
  });

  byId("btn_place_order").addEventListener("click", function () {
    placeOrder();
  });

  // first load
  show("page_home");
  showCarousel();
  renderRecommended();
  renderWishlist();
  renderCart();
  startCarouselAuto();
}

document.getElementById("filter_form").addEventListener("submit", function(event) {
  event.preventDefault();
  runSearch();  // call your existing search function
});

document.addEventListener("DOMContentLoaded", setup);
