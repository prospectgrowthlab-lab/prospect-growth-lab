# SEO Setup Guide for Prospect Growth Lab

## ✅ What's Already Done

### 1. **Google Analytics Ready**
- ✅ Component created (`src/app/components/GoogleAnalytics.tsx`)
- ✅ Integrated into site layout
- ✅ Won't load in development (saves your quota)

### 2. **Enhanced Metadata**
- ✅ Title tags optimized for all pages
- ✅ Meta descriptions (150-160 characters)
- ✅ Keywords targeting high-intent search terms
- ✅ Canonical URLs to prevent duplicate content
- ✅ Open Graph tags (Facebook/LinkedIn previews)
- ✅ Twitter/X Card tags

### 3. **Schema Markup (Rich Snippets)**
- ✅ Organization schema
- ✅ Service schema (pricing info)
- ✅ Ready for Article schema on blog posts

### 4. **Technical SEO**
- ✅ Robots.txt configured
- ✅ XML Sitemap with all pages
- ✅ Dynamic sitemap updates with blog posts
- ✅ All URLs use environment variable (easy domain update)

---

## 🎯 What You Need to Do Next

### Step 1: Set Up Google Analytics (5 minutes)

1. **Go to:** https://analytics.google.com/
2. **Create account** (or log in)
3. **Create a GA4 property**
   - Property name: "Prospect Growth Lab"
   - Timezone: Australia/Sydney
   - Currency: USD
4. **Add a data stream**
   - Platform: Web
   - Website URL: https://prospect-growth-lab.vercel.app
   - Stream name: Prospect Growth Lab Website
5. **Copy your Measurement ID** (looks like `G-XXXXXXXXXX`)
6. **Add it to your site:**
   ```bash
   # Edit .env.local file
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Your actual ID here
   ```
7. **Redeploy:**
   ```bash
   vercel --prod
   ```

### Step 2: Set Up Google Search Console (10 minutes)

1. **Go to:** https://search.google.com/search-console
2. **Add property:** https://prospect-growth-lab.vercel.app
3. **Verify ownership** (multiple methods):
   - **Easiest:** Use your Google Analytics account to verify
   - **Alternative:** HTML file upload, DNS record, or HTML tag
4. **Submit your sitemap:**
   - Go to "Sitemaps" in the left menu
   - Add sitemap URL: `https://prospect-growth-lab.vercel.app/sitemap.xml`
   - Click "Submit"

### Step 3: When You Buy Your Domain

Let's say you buy `prospectgrowthlab.com`:

1. **Update environment variable:**
   ```bash
   # In .env.local
   NEXT_PUBLIC_SITE_URL=https://prospectgrowthlab.com
   ```

2. **Update Vercel project settings:**
   - Go to Vercel dashboard
   - Project Settings → Domains
   - Add your custom domain
   - Follow DNS instructions

3. **Redeploy:**
   ```bash
   vercel --prod
   ```

4. **Update Google Search Console:**
   - Add new property for `prospectgrowthlab.com`
   - Verify ownership
   - Submit sitemap again

5. **Update Google Analytics:**
   - GA4 → Admin → Data Streams
   - Click your stream
   - Update the URL to your new domain

---

## 📊 SEO Improvements Made

### Homepage
- **Title:** Prospect Growth Lab | LinkedIn Outbound Automation
- **Keywords:** LinkedIn lead generation, B2B sales automation, LinkedIn prospecting service
- **Schema:** Organization + Service

### Pricing Page
- **Title:** Pricing | Prospect Growth Lab — LinkedIn Outbound Plans
- **Keywords:** LinkedIn automation pricing, outbound sales pricing, B2B lead generation pricing
- **Highlight:** Clear pricing from $597/mo

### Use Cases Page
- **Title:** Use Cases | Prospect Growth Lab — LinkedIn Outbound by Industry
- **Keywords:** LinkedIn automation for SaaS, LinkedIn for recruitment, agency lead generation

### Blog
- **Title:** Blog | Prospect Growth Lab — LinkedIn Outbound Tips & Strategies
- **Keywords:** LinkedIn outbound tips, sales automation strategies, B2B lead generation blog

---

## 🎯 Target Keywords (High Priority)

### Primary Keywords (High Intent)
- LinkedIn automation
- LinkedIn outbound automation
- B2B lead generation
- LinkedIn prospecting service
- Done-for-you LinkedIn outbound
- AimFox automation

### Secondary Keywords (Medium Intent)
- How to automate LinkedIn outreach
- LinkedIn automation pricing
- Best LinkedIn automation tools
- LinkedIn lead generation service
- B2B sales automation

### Long-Tail Keywords (Conversion-Focused)
- LinkedIn outbound automation for SaaS
- Done-for-you LinkedIn prospecting
- LinkedIn automation agency
- Hire LinkedIn prospecting service
- AimFox managed service

---

## 📈 Tracking & Monitoring

### Google Analytics Events to Track
Once GA is live, you can see:
- **Page views** (which pages get traffic)
- **Traffic sources** (Google, LinkedIn, direct, etc.)
- **User behavior** (time on site, bounce rate)
- **Conversions** (clicks on "Book a Call" button)

### Google Search Console Metrics
Once verified, you can track:
- **Search queries** (what keywords people use to find you)
- **Impressions** (how often you appear in search)
- **Click-through rate** (CTR)
- **Average position** (where you rank)
- **Mobile usability** issues

---

## 🚀 Quick Win Checklist

After deploying these changes:

### Week 1
- [ ] Set up Google Analytics
- [ ] Set up Google Search Console
- [ ] Submit sitemap
- [ ] Check that GA is tracking visits (test by visiting your site)

### Week 2
- [ ] Monitor which pages get traffic
- [ ] Check Search Console for any indexing errors
- [ ] Start tracking keyword rankings (use tool like Ahrefs/SEMrush free trial)

### Week 3
- [ ] Review GA data - which traffic sources work best?
- [ ] Check Search Console - which keywords are you ranking for?
- [ ] Create new blog content targeting high-volume keywords

### Month 1
- [ ] Review bounce rate (aim for <70%)
- [ ] Check avg. time on page (aim for >1 min)
- [ ] Identify top-performing content
- [ ] Double down on what's working

---

## 🔧 Maintenance Tasks

### Weekly
- Check GA for traffic trends
- Monitor Search Console for errors
- Review which blog posts get the most traffic

### Monthly
- Review keyword rankings
- Analyze top traffic sources
- Create content targeting new keywords
- Update old blog posts with fresh data

---

## 💡 Pro Tips

1. **Content is King:** SEO takes time. Publish 2-3 high-quality blog posts per week targeting specific keywords.

2. **Link Building:** Get backlinks from:
   - Guest posting on B2B/SaaS blogs
   - Being mentioned in industry roundups
   - LinkedIn posts linking to your blog

3. **Internal Linking:** Link between your pages (blog → pricing, use cases → blog, etc.)

4. **Mobile Optimization:** Already done! Your site is responsive.

5. **Page Speed:** Next.js handles this. But you can test at https://pagespeed.web.dev/

6. **Local SEO:** If you add a physical address, claim your Google Business Profile

---

## ❓ FAQ

**Q: How long until I see results?**
A: 3-6 months for organic traffic to build. Paid ads/LinkedIn outreach work faster.

**Q: What if my rankings drop?**
A: Normal fluctuations happen. Check Search Console for penalties or errors.

**Q: Should I buy backlinks?**
A: No. Focus on earning links through great content and outreach.

**Q: What's a good bounce rate?**
A: <50% is excellent, 50-70% is average, >70% needs improvement.

**Q: How often should I publish?**
A: Aim for 2-3x/week if possible. Quality > quantity.

---

## 📞 Need Help?

If you get stuck or see weird metrics, just ask me:
- "Why is my bounce rate high?"
- "How do I improve my ranking for [keyword]?"
- "What content should I create next?"

Your site is now SEO-ready. Just add Google Analytics and you're live! 🚀
