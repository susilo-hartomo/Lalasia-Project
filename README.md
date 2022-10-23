This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Can U see Mee

- Link Demo : [Lalasia](https://prismatic-pothos-b90742.netlify.app/)
- UI kit : [Figma](https://www.figma.com/community/file/1129496513774660135)

## We are not allone

1. [Susilo](https://github.com/susilo-hartomo) (FE / Project Manager / AboutUsPage)
2. [Arimukti](https://github.com/Arimukti) (FE / HomePage)
3. [Tita]() (FE / ProductPage)
4. [Rofi](https://github.com/arrofirezasatria) (FE / ArticlePage)
5. [Akbar](https://github.com/akbaridc) (FE / ServicePage)

## Technology

1. [React-Slick](https://react-slick.neostack.com/) (React Slick)
2. [React-Hamburger](https://hamburger-react.netlify.app/) (React Hamburger)
3. [Scroll-Animation](https://michalsnik.github.io/aos/) (Aos Animation scroll)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Route Api

1. Product

```
- get All product : http://localhost:1337/api/products?populate=\* (asc by created-at) pagination in strapi
- get product by id: http://localhost:1337/api/products/1?populate=\*
- get related product : (get by category product asc by created-at (new))
- get popular produc : http://localhost:1337/api/count-product-solds? (get from product sold asc by sold product limit 10)
- search product :  get product by category or product name (asc, pagination) (kalo di page home redirect ke page product)
```

2. Article

```
- get article in home page: new article (asc by created at limit 4) (di slider ditampilkan selain 3 lainnya)
- get Article Banner: http://localhost:1337/api/articles?populate=\* (asc by created at limit 3)
- daily top new : (asc by created-at and dec by views_perday limit 2) (bikin cron job reset views-perday)
- get tranding topic : (asc by total_views and topic selected limit 5 with get more/pagination)
```
