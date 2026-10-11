# Khaadyam (ಖಾದ್ಯಂ) - Architecture & Implementation Plan

> **Brand Vision:** *"Every home has an Amma. Khaadyam is the taste she kept."*  
> Regional Karnataka culinary heritage, Davangere home-kitchen recipes, authentic food families, and modern D2C food e-commerce with subscriptions.

---

## 1. Executive Summary & Brand Principles

Based on the design framework in `Khaadyam Website Framework C.html`, the website architecture delivers an authentic cultural experience paired with high-converting, modern e-commerce engineering:

1. **Bilingual Editorial Micro-copy:** Seamless pairing of conversational Kannada phrases and elegant English translation (*ಹೊಸ್ತಿಲು · the threshold*, *ಏನ್ ಬಡಿಸ್ಲಿ? · What shall I serve?*, *ನಿಮ್ಮ ತಟ್ಟೆ · Your plate*, *ಅಮ್ಮನ ಮಾತು · Amma’s note*, *ನೆನಪಿನ ಗೋಡೆ · The memory wall*).
2. **Two Doors to Shop:**
   - **By Meal:** Curated moments & plates (*Tiffin/Breakfast, Hot Rice meal, Tea-time, Feast Thali*).
   - **By Category:** The 8 food families (Chutney Pudi, Chutney & Gojju, Masalas & Podis, Pickles/Uppinakai, etc.), each with an assigned family colour token.
3. **"The Plate" (ತಟ್ಟೆ) Cart & Checkout:**
   - 2-tap fast checkout.
   - UPI-first instant payment.
   - Direct WhatsApp order channel (*"Amma's team confirms and takes payment there"*).
   - "Goes with your plate" one-tap upsells.
   - Handwritten box note capability.
4. **Subscription Engine ("ಪ್ರತಿ ತಿಂಗಳೂ ಬಡಿಸ್ತೀನಿ"):**
   - 3 entry modes: Ready-made monthly box, Category subscription, Custom **Build Your Own List** (100g, 250g, 500g).
   - Flexible tenures: 6, 9, or 12 months with fixed monthly price.
   - Dispatch day options: 5th, 15th, or 25th of every month.
   - Visual progress timeline: **"The Step"** tracking Month 1 through Month 12.
5. **Community Storytelling:**
   - **The Memory Wall (ನೆನಪಿನ ಗೋಡೆ):** User-submitted one-line nostalgia memories of their grandparents' dining tables (moderated before publishing).
   - **Gift a Table:** Gifting curated boxes with custom notes.

---

## 2. Technology Stack Selection

| Domain | Technology | Justification |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15 (App Router)** | Hybrid SSG/ISR for search engine ranking (SEO) on food products + SSR for secure dynamic checkout and subscriptions. Server Components drastically reduce client JS bundle size on mobile devices. |
| **Language** | **TypeScript** | Type-safe models for multi-variant products (100g, 250g, 500g), custom subscription list builder, and payment payloads to avoid financial discrepancies. |
| **Styling** | **Tailwind CSS + CSS Variables** | Custom design tokens matching Framework C: `#FAF9F5` warm parchment background, earthy terracotta accents, deep spice tones, and family color identifiers. Fluid mobile-first layout. |
| **Icons & Media** | **Lucide React + Next/Image** | Optimized WebP/AVIF images with lazy loading and blur-up placeholders for photography. |
| **State Management** | **Zustand + LocalStorage** | Manages "The Plate" (cart), Shop doorway preference (*By Meal vs. By Category* stored on device), and the custom subscription box state. |
| **Backend & APIs** | **Next.js Server Actions & Route Handlers** | Fullstack security without exposing third-party API keys or database credentials to the browser. |
| **Database** | **PostgreSQL (Supabase / Neon)** with **Prisma or Drizzle ORM** | ACID compliant relational storage for inventory, orders, subscription cycles, and moderation queues. |
| **Authentication** | **Phone OTP (SMS / WhatsApp) + NextAuth / Supabase Auth** | Optimized for Indian D2C shoppers with fast mobile OTP login + optional Google OAuth. |
| **Payments** | **Razorpay / Cashfree UPI + UPI AutoPay** | 1-tap UPI app intent and QR for one-time orders; UPI AutoPay (e-Mandate) for recurring monthly subscriptions. |

---

## 3. Data Schema Model

```sql
-- Food Families (The 8 Families)
CREATE TABLE families (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,          -- e.g. "Chutney Pudi"
  kannada_name VARCHAR(100) NOT NULL,  -- e.g. "ಚಟ್ನಿ ಪುಡಿ"
  slug VARCHAR(100) UNIQUE NOT NULL,
  accent_color VARCHAR(20) NOT NULL,   -- Design token colour bar
  description TEXT
);

-- Food Products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id UUID REFERENCES families(id),
  title VARCHAR(255) NOT NULL,         -- e.g. "Gurellu Chutney Pudi"
  kannada_title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  amma_note TEXT,                      -- "ಅಮ್ಮನ ಮಾತು"
  goes_with TEXT,                      -- Serving recommendations
  is_available BOOLEAN DEFAULT TRUE,
  image_url TEXT NOT NULL
);

-- Variants (Weights & Pricing)
CREATE TABLE product_variants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id),
  weight_grams INT NOT NULL,           -- 100, 250, 500
  price INT NOT NULL,                  -- in INR
  stock_quantity INT DEFAULT 100
);

-- Curated Meals (Moments)
CREATE TABLE meals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,          -- e.g. "Morning Tiffin Plate"
  kannada_name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  base_price INT NOT NULL,
  plate_image TEXT NOT NULL,
  description TEXT
);

-- Subscriptions ("ಪ್ರತಿ ತಿಂಗಳೂ ಬಡಿಸ್ತೀನಿ")
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  plan_type VARCHAR(50) NOT NULL,      -- 'READY_MADE', 'FAMILY', 'CUSTOM_BUILD'
  tenure_months INT NOT NULL,          -- 6, 9, 12
  fixed_monthly_price INT NOT NULL,
  dispatch_day INT NOT NULL,           -- 5, 15, 25 of every month
  current_month INT DEFAULT 1,         -- The Step marker (1 to 12)
  status VARCHAR(50) DEFAULT 'ACTIVE', -- 'ACTIVE', 'PAUSED', 'COMPLETED'
  mandate_token VARCHAR(255)
);

-- Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number VARCHAR(50) UNIQUE NOT NULL,
  customer_phone VARCHAR(20) NOT NULL,
  delivery_address JSONB NOT NULL,
  box_note TEXT,
  channel VARCHAR(20) DEFAULT 'UPI',   -- 'UPI' or 'WHATSAPP'
  total_amount INT NOT NULL,
  payment_status VARCHAR(50) DEFAULT 'PENDING',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- The Memory Wall (ನೆನಪಿನ ಗೋಡೆ)
CREATE TABLE memory_wall (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  memory_text TEXT NOT NULL,
  author_name VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 4. Code & Architecture Security Strategy

1. **Server-Side Pricing & Inventory Integrity:**
   - Item prices and subscription calculations are validated strictly server-side against database records. Client payloads only submit `variantId` and `quantity`.
2. **Payment Webhook Verification:**
   - Webhook endpoints verify cryptographic HMAC-SHA256 signatures before updating order status to `PAID`.
   - Webhook listeners implement idempotency by recording processed transaction IDs.
3. **Rate Limiting & Anti-Abuse:**
   - Upstash Redis rate limiting on Phone OTP requests, checkout initialization, and Memory Wall submissions.
4. **Data Privacy & Storage:**
   - Delivery addresses and phone numbers stored with encryption at rest.
   - Zero storage of raw payment cards or banking credentials (all tokenized via PCI-DSS certified gateways).

---

## 5. Development Phases

### Phase 1: Interactive High-Fidelity Prototype (Current Step)
- [x] Initial design and bundle analysis
- [ ] Initialize Next.js 15 + TypeScript + Tailwind CSS project
- [ ] Establish design tokens (colors `#FAF9F5`, typography, Kannada accents)
- [ ] Implement Two-Door Shop Switcher (*By Meal* vs *By Category*)
- [ ] Implement Product Detail View with Amma's note and multi-variant sizes
- [ ] Implement "The Plate" (Cart slide-over & page with 2-tap UPI and WhatsApp options)
- [ ] Implement Subscription Hub & "Build Your Own List" interactive builder with tenure selector (6/9/12 months) and "The Step" timeline
- [ ] Implement "The Memory Wall" (ನೆನಪಿನ ಗೋಡೆ) and "Our Story"
- [ ] Mobile responsive layout matching mobile artboards

### Phase 2: Database & Backend Services
- [ ] Connect PostgreSQL database via Prisma/Drizzle
- [ ] Seed full Karnataka/Davangere catalog across all 8 food families
- [ ] Build Server Actions for Order persistence and dynamic calculations
- [ ] Admin panel for catalog management and Memory Wall moderation

### Phase 3: Auth & Customer Portal
- [ ] Phone OTP login via SMS/WhatsApp
- [ ] "Your Subscription" dashboard with "Skip next month" and "Pause"
- [ ] Address book management

### Phase 4: Production Payment & Launch
- [ ] Razorpay / Cashfree UPI Intent & UPI AutoPay setup
- [ ] WhatsApp Business automated confirmation triggers
- [ ] Performance and SEO Core Web Vitals audit
