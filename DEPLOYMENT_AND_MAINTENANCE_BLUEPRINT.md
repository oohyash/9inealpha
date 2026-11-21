# 🚀 How to Launch `9inealpha.com` for FREE (GitHub Pages + GoDaddy)

I have already initialized Git inside this folder, committed all your files, and created the **`CNAME`** file for **`9inealpha.com`** under your GitHub account (**`itsyashnahata`**).

Follow these **3 simple steps** (takes less than 3 minutes total):

---

## STEP 1: Create the Empty Repository on Your GitHub (`itsyashnahata`)

1. Open **[https://github.com/new](https://github.com/new)** in your browser.
2. Under **Repository name**, type:
   `9inealpha`
3. Make sure **Public** is selected *(GitHub Pages is 100% free for Public repositories)*.
4. Leave "Add a README file" **unchecked** and click the green **"Create repository"** button.
5. Once created, either tell me **"I created the repo"** here in chat (and I will push the code for you automatically!), OR run these two commands in your VS Code Terminal:
   ```bash
   git remote add origin https://github.com/itsyashnahata/9inealpha.git
   git push -u origin main
   ```

---

## STEP 2: Turn On Free GitHub Pages Hosting

1. On your `https://github.com/itsyashnahata/9inealpha` page, click the **Settings** tab (top right gear icon).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** → **Branch**:
   - Change **None** to **`main`** (leave the folder as `/ (root)`).
   - Click **Save**.
4. Under **Custom domain**, you will already see `9inealpha.com` filled in automatically (because of the `CNAME` file I added for you!).

---

## STEP 3: What to Click Inside the GoDaddy Screen You Just Sent

Look at the GoDaddy screen you have open right now (`https://account.godaddy.com/products`):

1. On the left card that says **`9inealpha.com`**, close the white popup (`X`) and click on **`9inealpha.com`** (or click **"DNS"** / **"Manage DNS"**).
2. You will see a table called **DNS Records**.
3. **Delete or Edit any existing `A` record with Name `@`** (it usually says `Parked` or `WebsiteBuilder`), and add these **4 GitHub Pages `A` records** so **`9inealpha.com`** points to your GitHub:
   - Click **Add New Record**:
     - **Type:** `A` | **Name:** `@` | **Value:** `185.199.108.153` | **TTL:** Default → **Save**
   - Click **Add New Record**:
     - **Type:** `A` | **Name:** `@` | **Value:** `185.199.109.153` | **TTL:** Default → **Save**
   - Click **Add New Record**:
     - **Type:** `A` | **Name:** `@` | **Value:** `185.199.110.153` | **TTL:** Default → **Save**
   - Click **Add New Record**:
     - **Type:** `A` | **Name:** `@` | **Value:** `185.199.111.153` | **TTL:** Default → **Save**
4. Now look for the **`CNAME` record** with Name **`www`** in the table and click the **Pencil icon (Edit)** (or **Add New Record** if it's not there):
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Value:** `itsyashnahata.github.io`
   - **TTL:** Default → **Save**

---

## STEP 4: Enable the Free `https://` Padlock & How to Make Future Edits

1. Wait **5–15 minutes** after saving the GoDaddy DNS records, then go back to **GitHub → Settings → Pages** and check the box **"Enforce HTTPS"**.
2. **`https://9inealpha.com`** is now live around the world for ₹0 forever!

### 🛠️ How to Make Future Edits Anytime Your Client Asks:
Whenever you edit a price or add an image in VS Code on your Mac, just run:
```bash
git add .
git commit -m "Updated website"
git push
```
(Or just ask me here in chat: *"Update the price of X and push it live"* and I will edit the code and push it straight to `9inealpha.com` for you!)
