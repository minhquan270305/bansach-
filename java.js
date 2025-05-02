// JavaScript to create a scrolling effect
const adContainer = document.getElementById('scrollingAd');
const adText = adContainer.querySelector('.scrolling-ad');

function startScrolling() {
    const containerWidth = adContainer.clientWidth;
    const adWidth = adText.clientWidth;

    let position = containerWidth;

    function scroll() {
        position--;
        if (position < -adWidth) {
            position = containerWidth; // Reset position
        }
        adText.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(scroll);
    }

    scroll();
}

// Start scrolling when the page is loaded
window.onload = startScrolling;