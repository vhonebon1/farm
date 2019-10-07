# Farmdrop Code Test (JavaScript)

## To run
I used create-react-app as a boiler plate for the app.  To run:
`npm install` and `npm start`

## Notes from the test
* I've never worked with Redux before, so this was an interesting first delve into it. Accessing the central store from any component is incredibly useful and helps to slim down components by not having to pass central state down through multiple levels of children.
* Started with MVP and worked on iterative improvements.
* BEM class naming convention used.
* Colours, layout measurements and commonly used styles declared as variables in mixins.scss.

## With more time
I'm travelling, with terrible internet. As a result, the test is a little rough around the edges.  Here is what I would do with more time:

* Create a font mixin in mixins.scss that takes $style and $weight arguments and selects the corresponding file from the font folder provided.
* At the moment, the addToBasket action pushes the entire product to the cart state. Ideally, this would push the variant info if a variant has been selected in a dropdown. I imagine your real data has product ids - these could be used by productTile.jsx to check against the central state to show an '1 in basket' image overlay if already added.
* Refactoring the logic in productTile.jsx that calculates display info (lines 35-38). Perhaps with an extra utils file.
* More comprehensive component tests which test critical functionality (e.g. checking add to basket functionality renders updated basket count).
