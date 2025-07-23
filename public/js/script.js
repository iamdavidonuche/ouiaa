// // Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  const menuBtn = document.querySelector(".mobile-menu-btn i");

  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
    menuBtn.className = "fas fa-bars";
  } else {
    mobileNav.style.display = "block";
    menuBtn.className = "fas fa-times";
  }
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('menu_bar');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('menu_bar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    
    if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// Close mobile menu when window is resized to desktop
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('menu_bar').classList.remove('active');
    }
});


// // Password Toggle
// function togglePassword(inputId) {
//   const input = document.getElementById(inputId);
//   const button = input.nextElementSibling;
//   const icon = button.querySelector("i");

//   if (input.type === "password") {
//     input.type = "text";
//     icon.className = "fas fa-eye-slash";
//   } else {
//     input.type = "password";
//     icon.className = "fas fa-eye";
//   }
// }

// // Form Handlers
// function handleLogin(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const loginData = Object.fromEntries(formData);

//   console.log("Login attempt:", loginData);

//   // Simulate login process
//   setTimeout(() => {
//     alert("Login successful! Redirecting to dashboard...");
//     window.location.href = "/dashboard";
//   }, 1000);
// }

// function handleRegister(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const registerData = Object.fromEntries(formData);

//   // Basic validation
//   if (registerData.password !== registerData.confirmPassword) {
//     alert("Passwords do not match!");
//     return;
//   }

//   if (!registerData.agreeToTerms) {
//     alert("Please agree to the terms and conditions!");
//     return;
//   }

//   console.log("Registration attempt:", registerData);

//   // Simulate registration process
//   setTimeout(() => {
//     alert("Registration successful! Please check your email for verification.");
//     window.location.href = "/";
//   }, 1000);
// }

function handleTranscriptRequest(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const requestData = Object.fromEntries(formData);

  console.log("Transcript request:", requestData);

  // Simulate request processing
  setTimeout(() => {
    alert(
      "Transcript request submitted successfully! You will receive a confirmation email shortly."
    );
    // Reset form or redirect
    event.target.reset();
    updateTotal();
  }, 1000);
}

// // Directory Filtering
// function filterAlumni() {
//   const searchTerm = document.getElementById("searchInput").value.toLowerCase();
//   const yearFilter = document.getElementById("yearFilter").value;
//   const majorFilter = document.getElementById("majorFilter").value;
//   const locationFilter = document.getElementById("locationFilter").value;

//   const alumniCards = document.querySelectorAll(".alumni-card");
//   let visibleCount = 0;

//   alumniCards.forEach((card) => {
//     const name = card.dataset.name.toLowerCase();
//     const company = card.dataset.company.toLowerCase();
//     const job = card.dataset.job.toLowerCase();
//     const year = card.dataset.year;
//     const major = card.dataset.major;
//     const location = card.dataset.location;

//     const matchesSearch =
//       !searchTerm ||
//       name.includes(searchTerm) ||
//       company.includes(searchTerm) ||
//       job.includes(searchTerm);

//     const matchesYear = !yearFilter || year === yearFilter;
//     const matchesMajor = !majorFilter || major === majorFilter;
//     const matchesLocation = !locationFilter || location === locationFilter;

//     if (matchesSearch && matchesYear && matchesMajor && matchesLocation) {
//       card.style.display = "block";
//       visibleCount++;
//     } else {
//       card.style.display = "none";
//     }
//   });

//   // Update results count
//   const resultsCount = document.getElementById("resultsCount");
//   if (resultsCount) {
//     resultsCount.textContent = visibleCount;
//   }

//   // Show/hide no results message
//   const noResults = document.getElementById("noResults");
//   if (noResults) {
//     noResults.style.display = visibleCount === 0 ? "block" : "none";
//   }
// }

// function clearFilters() {
//   document.getElementById("searchInput").value = "";
//   document.getElementById("yearFilter").value = "";
//   document.getElementById("majorFilter").value = "";
//   document.getElementById("locationFilter").value = "";
//   filterAlumni();
// }

// // Events Filtering
// function filterEvents() {
//   const categoryFilter = document.getElementById("categoryFilter").value;
//   const typeFilter = document.getElementById("typeFilter").value;

//   const eventCards = document.querySelectorAll(".event-card");
//   let visibleCount = 0;

//   eventCards.forEach((card) => {
//     const category = card.dataset.category;
//     const type = card.dataset.type;

//     const matchesCategory = !categoryFilter || category === categoryFilter;
//     const matchesType = !typeFilter || type === typeFilter;

//     if (matchesCategory && matchesType) {
//       card.style.display = "block";
//       visibleCount++;
//     } else {
//       card.style.display = "none";
//     }
//   });

//   // Show/hide no results message
//   const noEvents = document.getElementById("noEvents");
//   if (noEvents) {
//     noEvents.style.display = visibleCount === 0 ? "block" : "none";
//   }
// }

// function clearEventFilters() {
//   document.getElementById("categoryFilter").value = "";
//   document.getElementById("typeFilter").value = "";
//   filterEvents();
// }

// // Transcript Page Tabs
// function showTab(tabName) {
//   // Hide all tab contents
//   const tabContents = document.querySelectorAll(".tab-content");
//   tabContents.forEach((content) => {
//     content.classList.remove("active");
//   });

//   // Remove active class from all tab buttons
//   const tabButtons = document.querySelectorAll(".tab-btn");
//   tabButtons.forEach((button) => {
//     button.classList.remove("active");
//   });

//   // Show selected tab content
//   const selectedTab = document.getElementById(tabName + "Tab");
//   if (selectedTab) {
//     selectedTab.classList.add("active");
//   }

//   // Add active class to clicked button
//   event.target.classList.add("active");
// }

// // Transcript Cost Calculator
// function updateTotal() {
//   const requestType = document.querySelector(
//     'input[name="requestType"]:checked'
//   );
//   const copies = document.getElementById("copies");
//   const deliveryMethod = document.getElementById("deliveryMethod");
//   const totalCostElement = document.getElementById("totalCost");

//   if (!requestType || !copies || !deliveryMethod || !totalCostElement) {
//     return;
//   }

//   let total = 0;

//   if (requestType.value === "official") {
//     total = parseInt(copies.value) * 2000;

//     if (deliveryMethod.value === "express") {
//       total += 3000;
//     }
//   }

//   totalCostElement.textContent = "₦" + total.toLocaleString();
// }

// function toggleAddressFields() {
//   const deliveryMethod = document.getElementById("deliveryMethod");
//   const addressFields = document.getElementById("addressFields");
//   const emailGroup = document.getElementById("emailGroup");

//   if (!deliveryMethod || !addressFields || !emailGroup) {
//     return;
//   }

//   if (deliveryMethod.value === "mail" || deliveryMethod.value === "express") {
//     addressFields.style.display = "block";
//     emailGroup.style.display = "none";

//     // Make address fields required
//     const addressInputs = addressFields.querySelectorAll("input");
//     addressInputs.forEach((input) => {
//       input.required = true;
//     });

//     // Make email not required
//     document.getElementById("recipientEmail").required = false;
//   } else {
//     addressFields.style.display = "none";
//     emailGroup.style.display = "block";

//     // Make address fields not required
//     const addressInputs = addressFields.querySelectorAll("input");
//     addressInputs.forEach((input) => {
//       input.required = false;
//     });

//     // Make email required for email delivery
//     if (deliveryMethod.value === "email") {
//       document.getElementById("recipientEmail").required = true;
//     }
//   }
// }

// // Profile Edit Mode
// let isEditMode = false;

// function toggleEditMode() {
//   isEditMode = !isEditMode;
//   const editAlert = document.getElementById("editAlert");
//   const displayValues = document.querySelectorAll(".display-value");
//   const editInputs = document.querySelectorAll(".edit-input");
//   const editButton = document.querySelector(".btn-edit-profile");

//   if (isEditMode) {
//     // Show edit mode
//     if (editAlert) editAlert.style.display = "block";
//     displayValues.forEach((element) => (element.style.display = "none"));
//     editInputs.forEach((element) => (element.style.display = "block"));
//     if (editButton) {
//       editButton.innerHTML = '<i class="fas fa-times"></i> Cancel';
//     }
//   } else {
//     // Show view mode
//     if (editAlert) editAlert.style.display = "none";
//     displayValues.forEach((element) => (element.style.display = "block"));
//     editInputs.forEach((element) => (element.style.display = "none"));
//     if (editButton) {
//       editButton.innerHTML = '<i class="fas fa-edit"></i> Edit Profile';
//     }
//   }
// }

// function saveProfile() {
//   // Collect all edit input values
//   const editInputs = document.querySelectorAll(".edit-input");
//   const profileData = {};

//   editInputs.forEach((input) => {
//     if (input.name) {
//       profileData[input.name] = input.value;
//     }
//   });

//   console.log("Saving profile:", profileData);

//   // Update display values with new data
//   const displayValues = document.querySelectorAll(".display-value");
//   editInputs.forEach((input, index) => {
//     if (displayValues[index]) {
//       if (input.type === "textarea" || input.tagName === "TEXTAREA") {
//         // Handle skills and interests tags
//         if (input.placeholder && input.placeholder.includes("comma")) {
//           const tags = input.value
//             .split(",")
//             .map((tag) => tag.trim())
//             .filter((tag) => tag);
//           if (input.placeholder.includes("skills")) {
//             displayValues[index].innerHTML = tags
//               .map((tag) => `<span class="skill-tag">${tag}</span>`)
//               .join("");
//           } else {
//             displayValues[index].innerHTML = tags
//               .map((tag) => `<span class="interest-tag">${tag}</span>`)
//               .join("");
//           }
//         } else {
//           displayValues[index].textContent = input.value;
//         }
//       } else {
//         displayValues[index].textContent = input.value;
//       }
//     }
//   });

//   // Exit edit mode
//   toggleEditMode();

//   // Show success message
//   alert("Profile updated successfully!");
// }

// function cancelEdit() {
//   // Reset all edit inputs to original values
//   const editInputs = document.querySelectorAll(".edit-input");
//   const displayValues = document.querySelectorAll(".display-value");

//   editInputs.forEach((input, index) => {
//     if (displayValues[index]) {
//       if (input.type === "textarea" || input.tagName === "TEXTAREA") {
//         // Handle skills and interests
//         if (input.placeholder && input.placeholder.includes("comma")) {
//           const tags = displayValues[index].querySelectorAll(
//             ".skill-tag, .interest-tag"
//           );
//           input.value = Array.from(tags)
//             .map((tag) => tag.textContent)
//             .join(", ");
//         } else {
//           input.value = displayValues[index].textContent;
//         }
//       } else {
//         input.value = displayValues[index].textContent;
//       }
//     }
//   });

//   // Exit edit mode
//   toggleEditMode();
// }

// // Logout function
// function logout() {
//   if (confirm("Are you sure you want to logout?")) {
//     // Clear any stored session data
//     localStorage.clear();
//     sessionStorage.clear();

//     // Redirect to home page
//     window.location.href = "/";
//   }
// }

// // Initialize page-specific functionality
// document.addEventListener("DOMContentLoaded", function () {
//   // Initialize transcript cost calculator
//   if (document.getElementById("totalCost")) {
//     updateTotal();
//     toggleAddressFields();
//   }

//   // Add smooth scrolling to anchor links
//   const anchorLinks = document.querySelectorAll('a[href^="#"]');
//   anchorLinks.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute("href"));
//       if (target) {
//         target.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     });
//   });

// //   Add loading states to buttons?
//   const buttons = document.querySelectorAll('button[type="submit"]');
//   buttons.forEach((button) => {
//     button.addEventListener("click", function () {
//       const originalText = this.innerHTML;
//       this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
//       this.disabled = true;

//       // Re-enable button after 3 seconds (for demo purposes)
//       setTimeout(() => {
//         this.innerHTML = originalText;
//         this.disabled = false;
//       }, 3000);
//     });
//   });

//   // Add fade-in animation to cards
//   const cards = document.querySelectorAll(
//     ".feature-card, .alumni-card, .event-card, .stat-card"
//   );
//   const observerOptions = {
//     threshold: 0.1,
//     rootMargin: "0px 0px -50px 0px",
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.style.opacity = "0";
//         entry.target.style.transform = "translateY(20px)";
//         entry.target.style.transition =
//           "opacity 0.6s ease, transform 0.6s ease";

//         setTimeout(() => {
//           entry.target.style.opacity = "1";
//           entry.target.style.transform = "translateY(0)";
//         }, 100);

//         observer.unobserve(entry.target);
//       }
//     });
//   }, observerOptions);

//   cards.forEach((card) => {
//     observer.observe(card);
//   });

//   // Add active state to current page navigation
//   const currentPage = window.location.pathname.split("/").pop() || "/";
//   const navLinks = document.querySelectorAll(".nav-link");

//   navLinks.forEach((link) => {
//     const linkPage = link.getAttribute("href");
//     if (
//       linkPage === currentPage ||
//       (currentPage === "" && linkPage === "/")
//     ) {
//       link.classList.add("active");
//     }
//   });
// });

// // Utility Functions
// function formatDate(dateString) {
//   const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };
//   return new Date(dateString).toLocaleDateString("en-US", options);
// }

// function formatCurrency(amount) {
//   return "₦" + amount.toLocaleString();
// }

// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }

// function validatePhone(phone) {
//   const re = /^[\+]?[1-9][\d]{0,15}$/;
//   return re.test(phone.replace(/\s/g, ""));
// }

// // Error Handling
// window.addEventListener("error", function (e) {
//   console.error("JavaScript Error:", e.error);
//   // You could send this to an error reporting service
// });

// // Performance Monitoring
// window.addEventListener("load", function () {
//   const loadTime = performance.now();
//   console.log("Page loaded in:", Math.round(loadTime), "ms");
// });
