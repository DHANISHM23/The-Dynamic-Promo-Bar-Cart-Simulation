# Dynamic Promo Bar & Cart Simulation

## Overview

This project demonstrates a dynamic promotional bar that reacts to cart updates in a simulated storefront.

The promo bar shows how much more the user needs to spend to unlock **Free Shipping**. When the cart total reaches the threshold, the message updates automatically.

## Features

* Sticky promo bar at the top of the page
* Dynamic cart total calculation
* Add to Cart functionality for products
* Free shipping message updates based on cart value
* Clear Cart functionality
* Close promo bar option
* Promo bar state persists using `localStorage`
* Responsive product layout using CSS Grid

## Tech Stack

* HTML5
* CSS3
* JavaScript

## How It Works

* Initial cart value starts at **$0**
* When products are added:
  * If cart total is **less than $100**, the bar shows how much more is needed
  * If cart total is **$100 or more**, the user unlocks free shipping
* If the promo bar is closed, its state is saved in **localStorage** so it remains hidden after refresh.

## Live Demo


## Author

**Dhanish M**
Frontend Developer / UI Designer

mail: dhanishmanikandan23@gmail.com

linkendIn: linkedin.com/in/dhanish-manikandan-a3b598377
