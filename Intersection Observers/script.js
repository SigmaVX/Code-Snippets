
// Used to make Polyfill Script Tag - Used For React
const loadScript = (url) => {
    // Selects first stript tag on DOM 
    const index  = window.document.getElementsByTagName("script")[0];
     // Make a <script> tag
     const script = window.document.createElement("script");
    // Set the src for the <script> tag
    script.src = url
    // Adds our sript tag at the top of the list of tags using parentNode
    index.parentNode.insertBefore(script, index)
}

// So Script Is Not On All Pages
loadScript('https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver');

// Intersection Observer Sits Behind An On Load
window.addEventListener("load", function(event) {

    console.log("Observer Started");

    var options = {
        // Root (Target Element Scrolled To - Fires Event) 
        // Note: null = viewport 
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }
    
        // Each "entry" describes an intersection change for ecah one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time

    var callback = function(entries, observer) { 
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("Target Div:", entry.target);
                console.log("Intersection Ratio", entry.intersectionRatio);

                document.getElementById("more-content").innerHTML = (`
                     <p>
                        Asymmetrical poutine brooklyn quinoa 8-bit fashion axe williamsburg, flexitarian cornhole. Lomo thundercats sustainable banjo listicle readymade prism hot chicken selvage. Whatever coloring book humblebrag selfies, poke austin seitan meditation cold-pressed +1 meh. Drinking vinegar tofu pug crucifix tacos. Palo santo waistcoat quinoa affogato stumptown kogi fingerstache microdosing.<br>

                        Cardigan green juice twee DIY, air plant cloud bread migas austin schlitz lo-fi. Authentic selvage messenger bag, chillwave jianbing kombucha trust fund. Authentic mlkshk echo park kogi everyday carry. Vape jianbing snackwave pour-over, ramps viral salvia vegan artisan pinterest you probably haven't heard of them.<br>
                        
                        Celiac la croix intelligentsia beard literally. Raw denim knausgaard helvetica la croix venmo. Selfies flannel neutra woke scenester meggings. Schlitz coloring book marfa pabst, blog man bun VHS mixtape kinfolk viral iPhone la croix bushwick bespoke. YOLO hella palo santo mlkshk migas, tattooed before they sold out chartreuse. Gentrify try-hard polaroid, trust fund unicorn tofu vape hashtag four loko. Franzen kinfolk fashion axe beard.
                    </p>
                `)
            }
        });
    };

    var observer = new IntersectionObserver(callback, options);

    // Target must be a decendent of Root
    var target = document.querySelector('#target');
    observer.observe(target);

});


// Intersection Observer Is Not Yet Compatible With All Browsers & Requires This Polyfill Script In HTML
// <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>