# TalentArc - Solo Career Coaching Website

Career coaching website by Petya Yordanova - Former tech recruiter specializing in AI, data, and engineering hiring.

## 🚀 Quick Deploy to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - TalentArc coaching site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/talentarc-solo-coaching.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to **vercel.com**
2. Click **"Sign up with GitHub"**
3. Click **"Add New Project"**
4. Select **talentarc-solo-coaching** repository
5. Vercel will auto-detect:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **"Deploy"**
7. ✅ **Live in 2 minutes!**

### Step 3: Update Calendly Links

1. Set up your Calendly account
2. Create 4 event types:
   - CV Review (60 min) - €50
   - Mock Interview (75 min) - €70
   - Career Starter Package (first session) - €200
   - Mentorship Discovery Call (30 min) - Free
3. In `src/App.jsx` replace ALL instances of:
   - `https://calendly.com/your-link` 
   - With your actual Calendly link

## 🎨 Design

- Colors: Mauve/Dusty Rose (#9A6B7A, #6E4B59)
- Fonts: Crimson Pro (headings) + Josefin Sans (body)
- Style: Same as marketplace version
- Mobile responsive

## 📝 Content

- Your 8 years recruiting experience (Commerzbank, Accenture, ManpowerGroup)
- 90%+ offer acceptance rate
- 1,000+ resumes reviewed
- D&I leadership
- 4 services: €50, €70, €200, €500

## 💰 Costs

- Domain: €10-15/year (Namecheap recommended)
- Hosting: **FREE** (Vercel)
- Calendly: **FREE** or €10/month Pro
- Stripe: 2.9% + €0.25 per transaction

**Total: €10-15/year**

## 🔄 Making Updates

After deploying:

```bash
# Make changes to src/App.jsx
git add .
git commit -m "Update pricing/content"
git push

# Vercel auto-deploys in 30 seconds
```

## 📱 Sections

1. Navigation (sticky)
2. Hero (gradient background)
3. Stats Bar (8 Years, 90%+, 1,000+)
4. The Problem (3 pain points)
5. About (your background + credibility)
6. Services (4 cards, dark background)
7. FAQ (5 questions)
8. CTA (gradient background)
9. Footer

## ✅ Launch Checklist

- [ ] npm install
- [ ] npm run build (test it works)
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Set up Calendly
- [ ] Update Calendly links in code
- [ ] Test booking flow
- [ ] (Optional) Buy domain
- [ ] (Optional) Connect domain to Vercel
- [ ] Launch!

---

© 2025 TalentArc. Built with React + Vite.
