# Farmdrop Code Test (JavaScript)

This test must be written using React and Redux.

You can use any React boilerplate to help you get started (e.g. Create React App or Next.js)

It has been split into two parts:

## Product cards

Using the [supporting data file](data/products.json) or the graphql [endpoint](https://staging-graphql-gateway.farmdrop.com/graphql) display a grid of product cards matching the [design](mockups/products.png) as close as possible. We have provided [fonts](fonts) for you which are similar to the fonts we use at Farmdrop and a set of svg [icons](icons).

We have attached the query which you can use for the graphql endpoint [here](graphql-query/query.txt)

- If the product has `variants` display them in a drop-down
- Clicking on a variant in the drop-down will update the price on the product card `e.g. £12.10` and the price per unit `e.g. £25.20/kg`
- If the product has no variants show the display name
- If there is a sale price show the old price with a strikethrough and show the sale price in red as per the design
- If there is sale text show in red beneath the dropdown
- If there is a marketing tag display the name over the image

## Basket functionality

Simulate adding the product to the basket using Redux.

- When clicking the Add button the product card should show the quantity in the basket as per the design.
- We have attached a [header bar mockup](mockups/header.png) which we would also like you to build
- The basket should update with the quantity of products in the basket.

## Mobile Friendly

We haven't provided you with mobile designs but it should be responsive so I can work accross mobile and desktop

## Testing

Please write unit tests using Jest

## Bonus points

- Managing side-effects (adding to basket for example)
- Add component tests

## Submission

Please clone this repository, write some code and update this README with a
guide of how to run it.

Either send us a link to the repository on somewhere like github or bitbucket
(bitbucket has free private repositories) or send us a git bundle.

    git bundle create yournamehere-farmdrop-code-test-js.bundle master

And send us the resulting `yournamehere-farmdrop-code-test-js.bundle` file.

This `.bundle` file can be cloned using:

    git bundle clone bundle-filename.bundle -b master directory-name
