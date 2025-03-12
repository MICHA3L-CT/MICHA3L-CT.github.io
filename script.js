// Enhance UI for Fab Gadget Ltd. Website

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute("href").substring(1); // Get target section ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Smooth scroll to the target section
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Highlight Active Navigation Link on Scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section"); // Get all sections
  const navLinks = document.querySelectorAll("nav ul li a"); // Get all navigation links

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // Adjust for header height
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute("id");

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      // Add active class to the corresponding navigation link
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Add Hover Effects to Product Cards with Curved Edges
const productCards = document.querySelectorAll(".product");

productCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
    card.style.borderRadius = "15px"; // Add curved edges
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    card.style.borderRadius = "10px"; // Reset curved edges
  });
});

// Dynamic Year Update for Footer Copyright
const yearElement = document.querySelector("footer p");
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = `© ${currentYear} Fab Gadget Ltd. All rights reserved.`;
}

// Form Validation for Contact Page with Visual Feedback
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach((el) => el.remove());

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      e.preventDefault(); // Prevent form submission
      errorMessage.textContent = "Please fill out all fields before submitting.";
      contactForm.appendChild(errorMessage);
    } else if (!validateEmail(emailInput.value)) {
      e.preventDefault(); // Prevent form submission
      errorMessage.textContent = "Please enter a valid email address.";
      contactForm.appendChild(errorMessage);
    }
  });
}

// Helper Function to Validate Email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Cart functionality
let cart = [];

// Function to update the cart count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

// Function to add a product to the cart
function addToCart(product, price) {
  cart.push({ product, price });
  updateCartCount();
  alert(`${product} added to cart!`);
}

// Event listeners for Add to Cart buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.getAttribute("data-product");
    const price = button.getAttribute("data-price");
    addToCart(product, price);
  });
});