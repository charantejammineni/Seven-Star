# Seven Star Restaurant — Demo Prototype Website

A handcrafted, premium-quality restaurant website prototype developed exclusively using **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)** with **Browser LocalStorage** for demo data persistence.

---

## 🌟 Brand Identity & Color Palette

The design strictly implements the required 5-color corporate palette:

| Colour | RGB | HEX | Suggested Usage |
|---|---|---|---|
| **Primary Red** | 165, 36, 34 | `#A52422` | Brand identity, primary CTAs, order highlights, active states |
| **Warm Brown** | 114, 87, 82 | `#725752` | Subheadings, secondary badges, dividers, price labels |
| **Light Blue** | 205, 230, 245 | `#CDE6F5` | Subtle UI containers, announcement highlights, tags |
| **Olive Green** | 106, 153, 78 | `#6A994E` | Vegetarian indicators, success alerts, delivered status |
| **Muted Blue** | 80, 128, 142 | `#50808E` | Secondary buttons, informational pills, icon badges |

Balanced with luxurious neutral shades: Warm Cream (`#FAF7F2`), Royal Dark Charcoal (`#1E1A18`), and Crisp White (`#FFFFFF`).

---

## 🚀 Quick Start / How to Run

1. Open the project folder in any modern browser directly by opening `index.html`, or
2. Use **VS Code Live Server** (right click `index.html` &rarr; *Open with Live Server*).
3. No server setup, Node.js, databases, or npm installations are required.

---

## 🔐 Demo Login Credentials

The prototype features a simulated Role-Based Access Control (RBAC) system stored in browser LocalStorage.

Access URL: [`admin/index.html`](admin/index.html) (or click the top bar link on any page).

| Role | Email | Password | Permissions |
|---|---|---|---|
| **Administrator** | `admin@sevenstar.com` | `admin123` | Full access to KPIs, Orders, Menu CRUD, Staff Accounts, Financial Reports, Settings & Reset Data |
| **Staff Member** | `staff@sevenstar.com` | `staff123` | Operational access to Orders, Order Status Workflows, and Menu stock availability toggles |

*Tip: The login page includes 1-click auto-fill buttons for both roles.*

---

## 📂 Project Architecture

```
seven-star-restaurant/
│
├── index.html                  # Homepage (Hero, categories, signature specials, offers)
├── about.html                  # Heritage story, executive chef bio, sourcing philosophy
├── menu.html                   # Filterable catalogue (Search, veg/non-veg, 8 categories)
├── food-details.html           # Item details (Portions, pricing, quantity, spice level)
├── cart.html                   # Dynamic cart (Quantity steppers, promo coupons, free delivery progress)
├── checkout.html               # Delivery/Pickup selector, validation, COD & Simulated Online Payment
├── order-confirmation.html     # Confirmation, printable A4 invoice & 80mm thermal slip
├── track-order.html            # 5-step visual order milestone tracker with live status polling
├── contact.html                # Online table reservation system & contact directory
│
├── admin/
│   ├── index.html              # Branded simulated login screen with quick-fill
│   ├── dashboard.html          # Dynamic KPI cards, live order audio chime, top selling dishes
│   ├── orders.html             # Order management queue with search & status changers
│   ├── order-details.html      # Kitchen order ticket (KOT), customer address, A4 & POS print
│   ├── menu-management.html    # Add, edit, delete dishes, and live in-stock toggle switch
│   ├── customers.html          # Aggregated customer order history & lifetime spend
│   ├── staff.html              # Staff accounts & role permission management
│   ├── reports.html            # Financial metrics, category revenue, daily sales summary
│   └── settings.html           # Restaurant settings & 1-Click "Reset Demo Data" button
│
├── css/
│   ├── style.css               # Core CSS variables, design system, layout & typography
│   ├── responsive.css          # Responsive styling for Desktop, Tablet, and Mobile devices
│   ├── admin.css               # SaaS administration dashboard styling
│   └── print.css               # Optimized print layouts for A4 Tax Invoices & 80mm Thermal Slips
│
└── js/
    ├── data.js                 # Seed data: 24 authentic dishes, sample orders, customers, coupons
    ├── storage.js              # Centralized LocalStorage service layer with cross-tab sync
    ├── auth.js                 # Simulated authentication & RBAC guards
    ├── menu.js                 # Menu search, category filtering, and CRUD operations
    ├── cart.js                 # Shopping cart arithmetic, portion pricing & promo coupons
    ├── orders.js               # Order creation, unique ID generator, status lifecycle
    ├── reports.js              # Analytics engine calculating revenue, AOV, and top sellers
    ├── main.js                 # Customer UI controller, navigation, live cart badge, toasts
    └── admin.js                # Admin controller, Web Audio synth chime, real-time polling
```

---

## 🍽️ Key Features

### 1. Customer Website
- **Curated Menu of 24+ Dishes** across 8 Categories: Starters, Soups, Indian Main Course, Biryani, Chinese, Tandoori, Beverages, and Desserts.
- **Portion & Variant Selection**: Half / Full, Single / Handi, Regular / Platter with dynamic price recalculation.
- **Veg & Non-Veg Filtering**: Strict dietary toggle with standard Indian green dot and red triangle badges.
- **Instant Search**: Live search across names, ingredients, descriptions, and tags.
- **Promo Coupon System**:
  - `SEVENSTAR10` — 10% discount on orders above ₹400 (up to ₹150)
  - `WELCOME50` — Flat ₹50 off on orders above ₹300
  - `FEAST20` — 20% off on celebration feasts above ₹1000 (up to ₹300)
- **Simulated Online Payment Modal**: Authentic UPI QR code / card / NetBanking simulation with realistic 2.5-second processing spinner before placing the order.
- **Table Reservation Form**: Saves reservation bookings to LocalStorage with instant confirmation toast.

### 2. Live Order Tracking (Real-Time Cross-Tab Synchronization)
- Track by **Order ID** (e.g. `SSR-1024`) and phone number.
- Visual **5-Step Order Stepper**:
  1. *Order Placed*
  2. *Order Accepted*
  3. *Preparing in Kitchen*
  4. *Ready for Pickup / Out for Delivery*
  5. *Delivered / Completed*
- **Cross-Tab & Polling Sync**: When an admin updates an order status in the admin portal, the customer's open tracking tab updates automatically without page reload!

### 3. Professional Printing Integration
- **Two Distinct Layouts**:
  1. **A4 Official Tax Invoice**: Complete with restaurant GSTIN, itemized rates, packaging, taxes, and customer billing address.
  2. **80mm Thermal POS Kitchen Slip (KOT)**: Compact monospace receipt layout designed for standard 72mm-80mm restaurant thermal receipt rolls.
- Uses standard CSS `@media print` rules; invoke by clicking either print button or using `Ctrl+P`.

### 4. Admin Management Portal
- **Real-Time Web Audio Chime**: When a customer places a new order, the admin portal plays an elegant dual-tone chime and flashes a notification banner.
- **Live Status Dropdowns**: Move orders through the fulfillment pipeline directly from the table.
- **Menu Management**: Add, edit, or delete dishes, or toggle dishes as "Sold Out Today" with a single click. Changes immediately appear on the customer menu.
- **Sales & Analytics**: Dynamic calculations of gross revenue, completed revenue, fulfillment rate, and category revenue distribution.
- **Reset Demo Data**: Easily restore all data back to the clean initial seed at any time via `admin/settings.html`.

---

## 🔄 Resetting Demo Data

To return all dishes, orders, and customer lists to the original sample state:
1. Navigate to **Admin Portal &rarr; Settings & Reset** (`admin/settings.html`).
2. Click **"Reset All Demo LocalStorage Data"**.
3. Confirm the prompt; the application will reload with pristine seed data.

---

## 🔮 Future Production Upgrade Path

This frontend demonstration is built with a centralized data abstraction layer (`StorageService`, `OrderService`, `MenuService`). When approved by management, the LocalStorage calls can be swapped with real REST API or GraphQL endpoints (e.g., Node.js / PHP / Python backend, PostgreSQL / MySQL database, Razorpay payment gateway, and physical ESC/POS network printer spools) without restructuring the HTML or CSS.

