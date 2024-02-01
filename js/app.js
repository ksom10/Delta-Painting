var testimonials = [
     { name: 'Evelyn Green', text: "Delta Painting impressed me with their dedication and expertise. They put in an incredible amount of effort, and I couldn't be more grateful. Their team is amazing, and the results speak for themselves! Top-notch quality delivered with speed. Highly recommend!", stars: 5 },
     { name: 'Daniel Rodriguez', text: "I was pleasantly surprised when Delta Painting arrived promptly to start the job – a rarity in the contracting world! Not only did they finish ahead of schedule, but the quality of their painting was impeccable. They left the site even cleaner than they found it! Dealing with them was a breeze; their customer service is well-organized, and the workers are professional, courteous, and tidy. Plus, their pricing is competitive. Five stars all the way!", stars: 5 },
     { name: 'Sophia Nguyen', text: "Delta Painting is my go-to for commercial painting work. Their service is great, fast, and reliable – everything you need when tackling commercial projects. Highly recommended!", stars: 5 },
     { name: 'Benjamin Adams', text: "I had the pleasure of working with Delta Painting, and I couldn't be happier with the results. From the initial consultation to the final touch-ups, they were efficient, courteous, and highly skilled. My house looks brand new, and I can't thank them enough for their hard work!", stars: 5 },
     { name: 'Matthew Wilson', text: "Delta Painting is the epitome of professionalism. From the moment we contacted them to the final brushstroke, they demonstrated a level of dedication that is hard to find. Our home has never looked better, and we have Delta Painting to thank for it. Highly recommend!", stars: 5 },
     { name: 'Samantha Roberts', text: "Delta Painting exceeded my expectations! Their attention to detail and commitment to excellence are unparalleled. I was blown away by the transformation they brought to my home. Thank you for your professionalism and outstanding service!", stars: 5 },
     
];
var index = 0;

document.querySelector('.menu-icon').addEventListener('click', function() {
    if (this.textContent === '☰') {
        this.textContent = '✖';
    } else {
        this.textContent = '☰';
    }
});

function showTestimonials(index, direction) {
    var container = document.getElementById('testimonials-container');
    var oldTestimonials = container.innerHTML;

    var numTestimonials = window.innerWidth <= 480 ? 1 : 3;

    var newTestimonials = '';
    for (var i = 0; i < numTestimonials; i++) {
        var testimonial = testimonials[(index + i) % testimonials.length];
        newTestimonials += `
            <div class="testimonial">
                <p>${testimonial.text}</p>
                <h2>- ${testimonial.name}</h2>
                <div class="stars">
                ${'<i class="star">&#9733;</i>'.repeat(testimonial.stars)}
                </div>
            </div>
        `;
    }

    $(container).hide('slide', { direction: direction }, 500, function() {
        container.innerHTML = newTestimonials;
        $(container).show('slide', { direction: direction == 'left' ? 'right' : 'left' }, 500);
    });
}

document.getElementById('prev').addEventListener('click', function() {
    var numTestimonials = window.innerWidth <= 480 ? 1 : 3;
    index = (index - numTestimonials + testimonials.length) % testimonials.length;
    showTestimonials(index, 'right');
});

document.getElementById('next').addEventListener('click', function() {
    var numTestimonials = window.innerWidth <= 480 ? 1 : 3;
    index = (index + numTestimonials) % testimonials.length;
    showTestimonials(index, 'left');
});

showTestimonials(index, 'right');


var gallery = [
    { url: '../images/holder.jpg' },
    { url: '../images/holder.jpg' },
    { url: '../images/holder.jpg' },
    { url: '../images/holder.jpg' },
    { url: '../images/holder.jpg' },
    { url: '../images/holder.jpg' },
    // more images...
];
var galleryIndex = 0;

function showGallery(galleryIndex, direction) {
    var container = document.getElementById('gallery-container');

    var numGalleryItems = window.innerWidth <= 480 ? 1 : 2;

    var newGallery = '';
    for (var i = 0; i < numGalleryItems; i++) {
        var image = gallery[(galleryIndex + i) % gallery.length];
        newGallery += `
            <div class="gallery-item">
                <img src="${image.url}">
            </div>
        `;
    }

    $(container).hide('slide', { direction: direction }, 500, function() {
        container.innerHTML = newGallery;
        $(container).show('slide', { direction: direction == 'left' ? 'right' : 'left' }, 500);
    });
}

document.getElementById('prev-gallery').addEventListener('click', function() {
    var numGalleryItems = window.innerWidth <= 480 ? 1 : 2;
    galleryIndex = (galleryIndex - numGalleryItems + gallery.length) % gallery.length;
    showGallery(galleryIndex, 'right');
});

document.getElementById('next-gallery').addEventListener('click', function() {
    var numGalleryItems = window.innerWidth <= 480 ? 1 : 2;
    galleryIndex = (galleryIndex + numGalleryItems) % gallery.length;
    showGallery(galleryIndex, 'left');
});

showGallery(galleryIndex, 'right');