# The Whimsy Lily

A one-page website for The Whimsy Lily, a mother-daughter crochet studio.

## Put this on GitHub and go live (free hosting via GitHub Pages)

1. Go to [github.com](https://github.com) and create a new repository (e.g. `whimsy-lily-site`). Keep it **Public**.
2. On the repo page, click **Add file → Upload files**, and drag in `index.html` (and this `README.md` if you want).
3. Commit the changes.
4. Go to the repo's **Settings → Pages**.
5. Under "Build and deployment," set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Click **Save**.
6. Wait a minute, then your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

## Editing later

Open `index.html` in any text editor (or edit directly on GitHub by clicking the pencil icon on the file). All the text, like the product names and prices, is plain text inside the HTML — search for it and change it directly.

## Connecting the contact form

Right now the form just shows a popup — it doesn't send anywhere yet. To actually receive messages:
1. Sign up at [formspree.io](https://formspree.io) (free tier available).
2. Create a form there and copy the endpoint URL they give you.
3. In `index.html`, find the `<form>` tag and add `action="YOUR_FORMSPREE_URL" method="POST"`.
4. Remove the `e.preventDefault()` line in the `<script>` at the bottom so the form actually submits.

## Turning on real checkout (accepting payments)

A plain HTML site can't safely process card payments on its own — that takes a payment processor. The easiest no-code option is **Stripe Payment Links**:

1. Sign up at [stripe.com](https://stripe.com) (free, pay only a small % per sale).
2. In the Stripe dashboard, go to **Payment Links → Create a product**, one for each item you sell (Lily Bloom Coasters, Meadow Market Tote, etc.), with its price and photo.
3. Stripe gives you a unique checkout URL per product.
4. In `index.html`, find the `STRIPE_LINKS` object near the bottom `<script>` tag, and paste each URL next to the matching product key, for example:
   ```js
   'lily-bloom-coasters': 'https://buy.stripe.com/xxxxxxxx',
   ```
5. Save and re-upload. Each "Buy Now" button will now take customers straight to a secure Stripe checkout page — no backend required.

This gets you real checkout without needing a developer or a monthly platform fee. If you outgrow this later (inventory tracking, discount codes, a shopping cart with multiple items), a hosted platform like Shopify would be the next step up.

## Instagram feed

The Instagram tiles are currently placeholders that link out to your profile. To show your *actual* recent posts automatically, you'd need a third-party embed service (e.g. [SnapWidget](https://snapwidget.com) or [Elfsight](https://elfsight.com)) since Instagram doesn't allow free direct embedding — most of these have a free tier for a basic feed widget.
