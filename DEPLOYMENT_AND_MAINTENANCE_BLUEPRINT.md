# 🚀 9INE ALPHA DETAILING STUDIO — GoDaddy Domain Deployment & Maintainer Blueprint

Congratulations on landing your first client! Even if you have never connected a GoDaddy domain before, **this codebase is 100% static HTML, CSS, and JavaScript**, which means:
- **Hosting costs ₹0 / $0 forever** (no monthly server bills).
- **Free SSL Certificate (`https://` padlock)** is included automatically.
- **You keep 100% direct maintainer control** so whenever Nilesh Sir asks you to update a price or add a photo, you can do it in 30 seconds from your laptop.

---

## 📁 1. Your Clean Production File Structure

Everything inside this folder is cleaned up and ready to upload as-is:

```text
9ine_alpha_dealing stuido/
├── index.html          <-- Main website (All text, prices, services, links, SEO)
├── css/
│   └── style.css       <-- Luxury Obsidian & Gold mobile-first styling
├── js/
│   └── main.js         <-- 3D Exterior/Interior slider, Category tabs, WhatsApp booking & Alpha AI
└── assets/             <-- All optimized fast-loading studio & transformation images
```

> **Note:** Keep `DEPLOYMENT_AND_MAINTENANCE_BLUEPRINT.md` for your own reference. Even if it is uploaded with the folder, visitors won't see it on the website.

---

## ⚡ 2. How to Put the Website Live for FREE (2 Options)

### Option A: The 60-Second Drag-and-Drop Way (Netlify — Best for Instant Launch)
1. Go to **[https://app.netlify.com](https://app.netlify.com)** and create a free account (sign up with your Email or Google).
2. On your Netlify Dashboard, click **"Add new site"** → **"Deploy manually"**.
3. Drag and drop your entire **`9ine_alpha_dealing stuido`** folder from your Mac Finder straight into the dashed box on Netlify.
4. Wait **10 seconds** — Netlify will publish your site and give you a temporary live link (like `https://random-name-12345.netlify.app`).
5. Click **"Site configuration"** → **"Change site name"** and rename it to `9inealpha-talegaon` (so it becomes `https://9inealpha-talegaon.netlify.app`).

---

### Option B: The Pro Maintainer Way (GitHub Desktop + Netlify — Best for Easy Future Edits)
If you want the website to automatically update every time you save a file in VS Code:
1. Create a free account at **[https://github.com](https://github.com)** and download **[GitHub Desktop](https://desktop.github.com/)** on your Mac.
2. Open GitHub Desktop → Click **"File" → "Add Local Repository"** → Choose this folder (`9ine_alpha_dealing stuido`) → Click **"create a repository"** → Click **"Publish repository"** (keep it Private).
3. Now go to **[https://app.netlify.com](https://app.netlify.com)** → Click **"Add new site"** → **"Import an existing project"** → Choose **GitHub** → Pick your `9ine_alpha_dealing_studio` repository → Click **"Deploy"**.
4. **Why this is magic for you as the Maintainer:** Whenever you edit `index.html` on your Mac later, just open GitHub Desktop, type `"Updated price"`, click **Commit** and **Push origin**, and the live website updates automatically in 15 seconds!

---

## 🌐 3. How to Connect the Client's GoDaddy Domain (Step-by-Step)

You do **NOT** need to buy GoDaddy hosting! You only need to point the client's GoDaddy domain to your free Netlify site.

### Step 1: Add the Domain Inside Netlify
1. Open your site in **Netlify** → Click **"Domain management"** in the left sidebar.
2. Click **"Add a domain"**.
3. Type the exact domain name the client bought on GoDaddy (for example: `9inealphadetailing.com` or `9inealpha.in`) and click **Verify** → **Add domain**.

### Step 2: Update the DNS Records in GoDaddy
Ask the client to log in to their **GoDaddy Account** (or ask them to invite your email under *GoDaddy → Account Settings → Delegate Access* so you can log in from your own account professionally!).

1. In GoDaddy, go to **"My Products"** → Find the domain → Click **"DNS"** (or **"Manage DNS"**).
2. Look at the **DNS Records** table:
   - If there is an existing **`A` record** with Name **`@`** (often pointing to `Parked`), click the **Pencil (Edit)** icon next to it (or delete it and click **Add New Record**):
     - **Type:** `A`
     - **Name:** `@`
     - **Value:** `75.2.60.5`
     - **TTL:** `600 seconds` (or Default / 1 Hour)
     - Click **Save**.
   - Next, find the **`CNAME` record** with Name **`www`** (or click **Add New Record**):
     - **Type:** `CNAME`
     - **Name:** `www`
     - **Value:** `9inealpha-talegaon.netlify.app` *(replace with your actual `.netlify.app` subdomain from Step 2!)*
     - **TTL:** `1 Hour` (or Default)
     - Click **Save**.

### Step 3: Turn on Free HTTPS (Padlock Icon)
1. Wait **10 to 30 minutes** for GoDaddy's DNS change to take effect across the internet.
2. Back in **Netlify → Domain Management**, scroll down to **HTTPS / SSL/TLS certificate**.
3. Netlify will automatically verify the domain and issue a **Free Let's Encrypt SSL Certificate** so both `https://yourdomain.com` and `https://www.yourdomain.com` load securely!

---

## 🛠️ 4. Maintainer Cheat Sheet: How to Edit Anything Later

Because you are the official maintainer of the website, here is where everything lives when the client asks for updates:

### A. Changing a Service Price or Adding a Service
1. Open **`index.html`** in VS Code.
2. Press `Cmd + F` and search for the service name (e.g., `Interior Deluxe Treatment` or `2,499`).
3. Change the price inside `<span class="service-price">Starts ₹2,499</span>` and the matching text inside `onclick="bookService('...')"`.
4. Save the file (`Cmd + S`).
   - *If using Option A (Manual Netlify):* Drag the folder into Netlify's **Deploys** tab.
   - *If using Option B (GitHub Desktop):* Click **Commit to main** → **Push origin**.

### B. Adding a New Before & After Photo
1. Put the new photo inside the **`assets/`** folder (use lowercase letters and hyphens, e.g., `assets/work-new-car.jpg`).
2. In **`index.html`**, scroll to the `id="workGrid"` section, copy any `<div class="work-card">...</div>` block, paste it below, and change the `src="assets/work-new-car.jpg"` and title.

### C. Updating the AI Concierge Answers
1. Open **`js/main.js`** in VS Code.
2. Look at the `KNOWLEDGE_BASE` array at the top of `js/main.js`.
3. You can edit any price, address, or keyword reply right there in plain English!

### D. Registering on Google Search Console (Bonus SEO Move to Impress Your Client!)
Once the domain is live:
1. Go to **[https://search.google.com/search-console](https://search.google.com/search-console)**.
2. Enter the client's domain name.
3. Google will give you one `TXT` record — paste that `TXT` record into GoDaddy's DNS table and click Verify.
4. Your client's website will start indexing on Google Search for *"Car Detailing in Talegaon Dabhade"* and *"9ine Alpha The Car's Parlour"*!
