document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = hamburger.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      const icon = hamburger.querySelector("i");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    });
  });

  // Tab Switching
  const tabButtons = document.querySelectorAll(".tab-btn");
  const furnitureTab = document.getElementById("furniture-tab");
  const mobilesTab = document.getElementById("mobiles-tab");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active from all
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      if (btn.dataset.tab === "furniture") {
        furnitureTab.classList.add("active");
        mobilesTab.classList.remove("active");
      } else {
        furnitureTab.classList.remove("active");
        mobilesTab.classList.add("active");
      }
    });
  });

  // Product Data & Dynamic Cards
  const furnitureData = [
    {
      id: 1015,
      name: "Premium Leather Sofa",
      price: "₹58,999",
      img: "https://picsum.photos/id/1015/400/300",
    },
    {
      id: 160,
      name: "King Size Wooden Bed",
      price: "₹32,499",
      img: "https://picsum.photos/id/160/400/300",
    },
    {
      id: 201,
      name: "6-Seater Dining Table",
      price: "₹24,999",
      img: "https://picsum.photos/id/201/400/300",
    },
    {
      id: 251,
      name: "Ergonomic Office Chair",
      price: "₹12,999",
      img: "https://picsum.photos/id/251/400/300",
    },
    {
      id: 29,
      name: "4-Door Wardrobe",
      price: "₹45,000",
      img: "https://picsum.photos/id/29/400/300",
    },
  ];

  const mobilesData = [
    {
      id: 160,
      name: "iPhone 15 Pro 256GB",
      price: "₹1,29,999",
      img: "https://picsum.photos/id/160/400/300",
    },
    {
      id: 201,
      name: "Samsung Galaxy S24 Ultra",
      price: "₹1,09,999",
      img: "https://picsum.photos/id/201/400/300",
    },
    {
      id: 251,
      name: "OnePlus 12 5G",
      price: "₹64,999",
      img: "https://picsum.photos/id/251/400/300",
    },
    {
      id: 29,
      name: "Redmi Note 13 Pro",
      price: "₹24,999",
      img: "https://picsum.photos/id/29/400/300",
    },
    {
      id: 1015,
      name: "Sony WH-1000XM5 Earbuds",
      price: "₹24,999",
      img: "https://picsum.photos/id/1015/400/300",
    },
  ];

  function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
            <img src="\( {product.img}" alt=" \){product.name}" loading="lazy">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button class="btn btn-primary add-to-cart" data-name="${product.name}">Add to Cart</button>
            </div>
        `;
    return card;
  }

  // Populate Furniture
  const furnitureGrid = document.getElementById("furniture-grid");
  furnitureData.forEach((product) => {
    furnitureGrid.appendChild(createProductCard(product));
  });

  // Populate Mobiles
  const mobilesGrid = document.getElementById("mobiles-grid");
  mobilesData.forEach((product) => {
    mobilesGrid.appendChild(createProductCard(product));
  });

  // Cart Functionality
  let cartCount = 0;
  const cartCountEl = document.getElementById("cart-count");
  const cartBtn = document.getElementById("cart-btn");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      cartCount++;
      cartCountEl.textContent = cartCount;

      // Simple feedback animation
      cartBtn.style.transform = "scale(1.4)";
      setTimeout(() => {
        cartBtn.style.transform = "scale(1)";
      }, 300);

      // Toast notification
      showToast(`${e.target.dataset.name} added to cart`);
    }
  });

  function showToast(message) {
    const toast = document.createElement("div");
    toast.style.cssText = `
            position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
            background: var(--accent); color: white; padding: 14px 24px;
            border-radius: 50px; font-weight: 500; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 9999; opacity: 0; transition: all 0.4s ease;
        `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => (toast.style.opacity = "1"), 10);
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 400);
    }, 2800);
  }

  // Contact Form
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulate sending
    successMessage.style.display = "block";

    // Reset form
    setTimeout(() => {
      contactForm.reset();
      successMessage.style.display = "none";
    }, 3500);
  });

  // Back to Top Button
  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      backToTop.style.opacity = "1";
      backToTop.style.visibility = "visible";
    } else {
      backToTop.style.opacity = "0";
      backToTop.style.visibility = "hidden";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Keyboard accessibility for tabs
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  });

  // Final production polish - remove console logs in real deployment
  console.log(
    "%c✅ Shivraj Furniture & Mobile Shop website loaded successfully",
    "color:#e67e22; font-weight:600",
  );
});
