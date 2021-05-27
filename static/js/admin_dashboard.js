function addRating(rating) {
    var html = `
    <div class="rating">
        <p class="toilet">
            ${rating.toilet}
        </p>
        <div class="bottom_section">
            <p class="cleanliness">
                Cleanliness: ${rating.cleanliness}
            </p>
            <p class="availibility">
                Avaliability: ${rating.availability}
            </p>
            <p class="accessibility">
                Accessibility: ${rating.access}
            </p>
        </div>
        <hr>
    </div>
    `
    ratingsContainer.insertAdjacentHTML("beforeend", html);
}

function addReview(review) {
    var html = `
    <div class="review">
        <p class="toilet">
            ${review.toilet}
        </p>
        <div class="bottom_section">
            <p class="feedback">
                Feedback: ${review.feedback}
            </p>
        </div>
        <hr>
    </div>
    `
    reviewsContainer.insertAdjacentHTML("beforeend", html);
}

var ratingsContainer = document.querySelector(".ratings_box");
var ratings = JSON.parse(sessionStorage.getItem("ratings"));
if (ratings != null) {
    for (let rating of ratings) {
        addRating(rating);
    }
}

var reviewsContainer = document.querySelector(".reviews_box");
var reviews = JSON.parse(sessionStorage.getItem("reviews"));
if (reviews != null) {
    for (let review of reviews) {
        addReview(review);
    }
}
