/* ==========================================================================
   9INE ALPHA — THE CAR'S PARLOUR (TALEGAON DABHADE)
   Interactive 3D Car Slider, 3-Category Menu, Insurance & Alpha AI Engine
   ========================================================================== */

const WHATSAPP_NUMBER = "919762105775";

const EXTERIOR_14_SERVICES = [
  "Engine Dressing",
  "Headlight Polishing",
  "Windshield Polishing",
  "Steam Cleaning",
  "Decontamination of Surface",
  "Foam Wash",
  "Rubber Dressing",
  "Tire Dressing",
  "Ceramic Coating",
  "Alloy Wheel Polishing",
  "Iron Removal",
  "Sanding",
  "Compounding & Finishing",
  "Refinement"
];

const INTERIOR_9_SERVICES = [
  "Ozone Air Purification (Anti-Bacterial & Odor Removal)",
  "Interior Cleaning",
  "Vacuuming",
  "Leather Conditioning",
  "Boot Space Cleaning",
  "Interior Deep Cleaning",
  "Dashboard / Rubber / Plastic Cleaning",
  "AC Vents Sanitization",
  "Air Freshening"
];

/**
 * Direct WhatsApp Booking for Any Service / Package
 */
function bookService(serviceName) {
  const text = `Hi *9INE ALPHA (The Car's Parlour)*,\nI want to book / enquire about:\n👉 *${serviceName}*\n\nPlease share details and available slot.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}

/**
 * Direct WhatsApp Auto-Message for Car Insurance Renewal
 */
function bookInsurance() {
  const text =
    `Hi,\n` +
    `This is regarding my *Car Insurance Renewal* with *9ine Alpha Studio*.\n` +
    `I am sharing the required documents for the quotation:\n` +
    `1. RC\n` +
    `2. Current policy\n` +
    `Any claim last year?: [Yes / No]\n\n` +
    `Please provide the quotation to keep my car financially secure 🚘💰✨`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}

/**
 * 3D Two-Image Interactive Exterior vs Interior Switcher & Slider
 */
let current3DMode = "exterior";

function set3DMode(mode) {
  current3DMode = mode;
  const extLayer = document.getElementById("carLayerExterior");
  const svgExt = document.getElementById("svgExterior");
  const svgInt = document.getElementById("svgInterior");
  const btnOut = document.getElementById("btn14Outside");
  const btnIn = document.getElementById("btn9Inside");
  const heading = document.getElementById("stage3dTitle");
  const slider = document.getElementById("xraySlider");
  const bookBtn = document.getElementById("bookStageBtn");

  if (mode === "exterior") {
    extLayer.style.clipPath = `inset(0 0% 0 0)`;
    if (slider) slider.value = 100;
    svgExt.style.opacity = "1";
    svgInt.style.opacity = "0";
    btnOut.classList.add("active-outside");
    btnIn.classList.remove("active-inside");
    heading.innerHTML = `14 EXTERIOR SERVICES <span>OUTSIDE</span>`;
    bookBtn.onclick = () => bookService("14-Point Complete Exterior Detailing Package");
    renderHotspotPills(EXTERIOR_14_SERVICES);
  } else {
    extLayer.style.clipPath = `inset(0 100% 0 0)`;
    if (slider) slider.value = 0;
    svgExt.style.opacity = "0";
    svgInt.style.opacity = "1";
    btnIn.classList.add("active-inside");
    btnOut.classList.remove("active-outside");
    heading.innerHTML = `COMPLETE CAR RESTORATION — 9 INTERIOR SERVICES <span>INSIDE</span>`;
    bookBtn.onclick = () => bookService("9-Point Complete Interior Cleaning & Restoration Package");
    renderHotspotPills(INTERIOR_9_SERVICES);
  }
}

function onSlide3D(val) {
  const num = Number(val);
  const extLayer = document.getElementById("carLayerExterior");
  const svgExt = document.getElementById("svgExterior");
  const svgInt = document.getElementById("svgInterior");
  const btnOut = document.getElementById("btn14Outside");
  const btnIn = document.getElementById("btn9Inside");
  const heading = document.getElementById("stage3dTitle");

  extLayer.style.transition = "none";
  extLayer.style.clipPath = `inset(0 ${100 - num}% 0 0)`;

  if (num >= 50) {
    svgExt.style.opacity = String((num - 50) / 50);
    svgInt.style.opacity = "0";
    btnOut.classList.add("active-outside");
    btnIn.classList.remove("active-inside");
    heading.innerHTML = `14 EXTERIOR SERVICES <span>OUTSIDE</span>`;
    if (current3DMode !== "exterior") {
      current3DMode = "exterior";
      renderHotspotPills(EXTERIOR_14_SERVICES);
    }
  } else {
    svgExt.style.opacity = "0";
    svgInt.style.opacity = String((50 - num) / 50);
    btnIn.classList.add("active-inside");
    btnOut.classList.remove("active-outside");
    heading.innerHTML = `COMPLETE CAR RESTORATION — 9 INTERIOR SERVICES <span>INSIDE</span>`;
    if (current3DMode !== "interior") {
      current3DMode = "interior";
      renderHotspotPills(INTERIOR_9_SERVICES);
    }
  }

  setTimeout(() => {
    extLayer.style.transition = "";
  }, 50);
}

function renderHotspotPills(list) {
  const wrap = document.getElementById("hotspotPills");
  if (!wrap) return;
  wrap.innerHTML = list
    .map(
      (item, idx) =>
        `<button type="button" class="hotspot-pill" onclick="bookService('${item.replace(/'/g, "")}')">${idx + 1}. ${item}</button>`
    )
    .join("");
}

/**
 * Filter Services by the 3 Categories: All Services | Interior | Exterior | Accessories
 */
function filterCategory(cat, btn) {
  document.querySelectorAll("#catTabs .cat-tab").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  document.querySelectorAll(".cat-block").forEach((block) => {
    const blockCat = block.getAttribute("data-cat");
    if (cat === "all" || blockCat === cat) {
      block.style.display = "block";
    } else {
      block.style.display = "none";
    }
  });
}

/**
 * Filter Before & After Gallery
 */
function filterWork(type, btn) {
  document.querySelectorAll("#workTabs .cat-tab").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  document.querySelectorAll("#workGrid .work-card").forEach((card) => {
    const cardType = card.getAttribute("data-type");
    card.style.display = type === "all" || cardType === type ? "flex" : "none";
  });
}

/**
 * Lightbox & Policies Modal
 */
function openLightbox(imgSrc, caption, serviceName) {
  const modal = document.getElementById("lightboxModal");
  document.getElementById("lightboxImg").src = imgSrc;
  document.getElementById("lightboxTitle").textContent = caption;
  document.getElementById("lightboxCta").onclick = () => bookService(serviceName || caption);
  modal.classList.add("open");
}

function closeLightbox() {
  document.getElementById("lightboxModal").classList.remove("open");
}

function openTermsModal() {
  document.getElementById("termsModal").classList.add("open");
}

function closeTermsModal() {
  document.getElementById("termsModal").classList.remove("open");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
    closeTermsModal();
  }
});

/**
 * Refined Corner Alpha AI Concierge (with Insurance Renewal, Memberships, 2W/4W & DSA)
 */
function toggleAiDrawer() {
  const drawer = document.getElementById("aiDrawer");
  drawer.classList.toggle("open");
  if (drawer.classList.contains("open")) {
    setTimeout(() => document.getElementById("aiInput")?.focus(), 160);
  }
}

function sendQuickPrompt(text) {
  const input = document.getElementById("aiInput");
  input.value = text;
  handleAiSubmit(new Event("submit"));
}

function appendAiMessage(html, role) {
  const body = document.getElementById("aiBody");
  const div = document.createElement("div");
  div.className = `msg ${role === "user" ? "msg-user" : "msg-bot"}`;
  div.innerHTML = html;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function handleAiSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("aiInput");
  const query = input.value.trim();
  if (!query) return;

  appendAiMessage(query, "user");
  input.value = "";

  setTimeout(() => {
    const q = query.toLowerCase();
    let reply = "";
    let customWaUrl = "";

    if (q.includes("insur") || q.includes("policy") || q.includes("rc") || q.includes("claim") || q.includes("renew")) {
      reply =
        `<strong>Hi, This is 9ine Alpha Studio.</strong><br>` +
        `This is regarding your <strong>Car Insurance Renewal</strong>.<br>` +
        `Please send the required documents for the quotation:<br>` +
        `<strong>1. RC</strong><br>` +
        `<strong>2. Current policy</strong><br>` +
        `<strong>• Any claim last year?</strong><br><br>` +
        `Please provide these details as soon as possible to keep your car financially secure 🚘💰✨`;
      const insText =
        `Hi,\nThis is regarding my Car Insurance Renewal at 9ine Alpha Studio.\n` +
        `I am sending the required documents for the quotation:\n1. RC\n2. Current policy\nAny claim last year?: [Yes/No]\n\nPlease share the quotation 🚘💰✨`;
      customWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(insText)}`;
    } else if (q.includes("interior") || q.includes("seat") || q.includes("foam") || q.includes("flood") || q.includes("ozone") || q.includes("carpet")) {
      reply =
        `<strong>Interior Detailing Starting Prices:</strong><br>` +
        `• Interior Deluxe Treatment: <strong>₹2,499</strong><br>` +
        `• Antibacterial 3M Foam Treatment: <strong>₹3,499</strong><br>` +
        `• Interior Antibacterial Extreme Treatment: <strong>₹4,799</strong><br>` +
        `• Flood Affected Vehicle Cleaning: <strong>₹2,999</strong><br>` +
        `• Custom: Vacuum ₹99 | Sanitation ₹199 | Roof ₹399 | Trunk ₹499 | Ozone ₹799 | Seats/Dashboard ₹999 | Carpet (On Inspection).`;
    } else if (q.includes("exterior") || q.includes("ceramic") || q.includes("ppf") || q.includes("graphene") || q.includes("wrap") || q.includes("wash")) {
      reply =
        `<strong>4-Wheeler Exterior Starting Prices:</strong><br>` +
        `• Washing & Sanitation: <strong>₹499</strong><br>` +
        `• Ceramic / Graphene Coating: <strong>₹9,999</strong><br>` +
        `• PPF Paint Protection Film: <strong>₹59,999</strong><br>` +
        `• Synthetic Sealant: <strong>₹2,999</strong> | Wrapping: <strong>₹39,999</strong><br>` +
        `• Windshield / Hard Water / Rat Repellent: <strong>₹1,499</strong><br>` +
        `• Alloy / Headlight: <strong>₹999</strong> | Engine / Rain Repel: <strong>₹499</strong>.`;
    } else if (q.includes("bike") || q.includes("two") || q.includes("2w") || q.includes("motorcycle")) {
      reply =
        `<strong>Two-Wheeler Detailing Starting Prices:</strong><br>` +
        `• Detailed Foam Wash: <strong>₹125</strong> | Sparkling Wash: <strong>₹299</strong><br>` +
        `• Chain Clean & Lube: <strong>₹199</strong> | Deep Detailing: <strong>₹699</strong><br>` +
        `• Two-Wheeler Engine Detailing: <strong>₹3,499</strong><br>` +
        `• 2W Ceramic: <strong>₹3,999</strong> | Graphene: <strong>₹4,999</strong> | PPF: <strong>₹7,999</strong>.`;
    } else if (q.includes("member") || q.includes("package") || q.includes("gold") || q.includes("platinum")) {
      reply =
        `<strong>1-Year Annual Memberships:</strong><br>` +
        `• <strong>Washing (₹999):</strong> 50% OFF on Washing MRP<br>` +
        `• <strong>Gold (₹4,999):</strong> Includes Washing pkg + 10% OFF Detailing (excl. PPF) + 30% OFF AIRD Dashcam<br>` +
        `• <strong>Platinum (₹9,999):</strong> Includes Washing pkg + 20% OFF Detailing (excl. PPF) + 40% OFF AIRD Dashcam + 10% OFF Accessories.`;
    } else if (q.includes("access") || q.includes("film") || q.includes("seatcov") || q.includes("dashcam") || q.includes("bulb") || q.includes("wiper")) {
      reply =
        `<strong>Accessories Starting Prices:</strong><br>` +
        `• Seat Covers: <strong>₹6,999</strong> | RTO Window Film: <strong>₹5,999</strong><br>` +
        `• Floor Lamination: <strong>₹2,499</strong> | Dashcam: <strong>₹2,999</strong><br>` +
        `• LED Bulbs: <strong>₹4,999</strong> | Bosch Bulbs: <strong>₹149</strong> | Wipers: <strong>₹169</strong><br>` +
        `• Wurth Chain Lube: <strong>₹249</strong> | Microfiber: <strong>₹99</strong> | Duster: <strong>₹749</strong>.`;
    } else if (q.includes("pick") || q.includes("drop") || q.includes("chinchwad") || q.includes("dsa") || q.includes("new car") || q.includes("owner") || q.includes("nilesh")) {
      reply =
        `👨‍💼 <strong>Nilesh Sawadkar</strong> (Detailing Expert & Consultant)<br>` +
        `• <strong>Free Pick-Up & Drop</strong> up to <strong>Chinchwad</strong>!<br>` +
        `• <strong>DSA Service:</strong> Purchase any new vehicle in less than 5 days!<br>` +
        `• Located at Talegaon Dabhade (+91 9762105775).`;
    } else {
      reply =
        `Our Detailing Expert <strong>Nilesh Sawadkar</strong> can provide an exact estimate for your vehicle right on WhatsApp:`;
    }

    const waHref =
      customWaUrl ||
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Nilesh Sir (9ine Alpha), I have an enquiry regarding: "${query}"`)}`;

    reply += `<a href="${waHref}" target="_blank" rel="noopener" class="ai-wa-btn">
      ${customWaUrl ? "📄 Send RC & Policy on WhatsApp →" : "💬 Chat with Nilesh Sir on WhatsApp →"}
    </a>`;

    appendAiMessage(reply, "bot");
  }, 260);
}

// Initialize 3D Stage Hotspots on Page Load
document.addEventListener("DOMContentLoaded", () => {
  renderHotspotPills(EXTERIOR_14_SERVICES);
});
