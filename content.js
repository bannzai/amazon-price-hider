// content.js - The script that runs on Amazon pages
function hidePrices() {
    // Define some common selectors for Amazon price elements
    const priceSelectors = [
        ".a-price",                 // General price on product listings
        "#priceblock_ourprice",    // Price on product detail pages
        "#priceblock_dealprice",   // Deal price on product detail pages
        "#priceblock_saleprice",   // Sale price on product detail pages
        ".priceToPay",             // Cart page price
        ".sw-atc-price-single",    // Cart subtotal price
        ".sc-price"                // Price in the shopping cart
    ];

    // Iterate over each selector and hide the matching elements
    priceSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.style.display = "none";
        });
    });
}

// Run hidePrices whenever the DOM is loaded
hidePrices();

// Observe changes in the page to hide prices dynamically as content loads
const observer = new MutationObserver(() => {
    hidePrices();
});

observer.observe(document.body, { childList: true, subtree: true });