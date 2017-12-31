/*
    AUTHOR      :   Robert James Patterson
    DATE        :   11/17/17
    FILENAME    :   Shaping up with Angular-L1/inc/app.js
    SYNOPSIS    :       
*/

function siteLoaded() 
{
    // Create the Applicatiion Moduel and give it an empty array
    var app = angular.module('store', []);    
    
    app.controller('StoreController', function() 
    {
        // Sets the stores product list to the 'gems[]' array
        this.products = gems;
    });

    app.controller('ReviewController', function() 
    {
        this.review = {};
        
        this.addReview = function(product) 
        {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    // Controller for the tabbed display area
    app.controller('PanelController', function() 
    {
        // Set tab one as the default selected tab
        this.tab = 1 ;

        // Set the current tab satuts to selected
        this.selectTab = function(setTab) 
        {
            this.tab = setTab;
        };

        // Check for the selected tab
        this.isSelected = function(checkTab)
        {
            return this.tab === checkTab
        };

    });

    // An array of jem stones
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'A great deal on a rare find',
            canPurchase: true,
            soldOut: false,
            reviews: [
                {
                    stars: 5,
                    body: "I love this stone",
                    author: "yourmom@downunder.com"
                },
                {
                    stars: 1,
                    body: "This gem sucks!",
                    author: "rockhater@yourquary.com"
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.79,
            description: 'Like the other, only different',
            canPurchase: true,
            soldOut: false
        }
    ];
}

$(document).ready(siteLoaded());
