/*
    We can load images based on scroll event, But scrolling fires many events
    We need to recalculate every element in the DOM during each event
    This is not Efficient and will cause Jank mostly in mobile or pages with iframe
 */

/*
 * <img src="img/pig.jpeg"> => regular image
 * <img data-lazy="img/cow.jpeg"> => our lazy image
 */

const targets = document.querySelectorAll('img');

window.addEventListener('scroll', (event) => {
    targets.forEach(img => {
        const rect = img.getBoundingClientRect().top;
        if (rect <= window.innerHeight) {
            const src = img.getAttribute('data-lazy');
            img.setAttribute('src', src);
            img.classList.add('fade');
        }
    })
})

/*
 *  Intersection Observer
    It's a brower API, we can detect a target element visible in the viewport or scollable element
    In case of scrollable elemnent, will change root element value as target value 
    We can trigger the observer based on target element visibility in screen (Threshold)
    we can unobserver each element or unobserve everything using disconnect
 */

const images = document.querySelectorAll('img');

const lazyLoad = image => {
    const io = new IntersectionObserver((entries, observer) => {
        console.log(entries)
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy');
                img.setAttribute('src', src);
                img.classList.add('fade');
                observer.disconnect();
            }
        });
    });

    io.observe(image);
};

images.forEach(lazyLoad);