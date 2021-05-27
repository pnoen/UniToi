function addRating() {
    var toilet = document.getElementById("toilet_dropdown_select")
    var toiletVal = toilet.options[toilet.selectedIndex].text;

    var cleanlinessVal = "-";
    var cleanliness = document.getElementsByName("ratecleanliness");
    for (i = 0; i < cleanliness.length; i++) {
        if (cleanliness[i].checked == true) {
            cleanlinessVal = cleanliness[i].value;
        }
    }
    if (cleanlinessVal == "-") {
        alert("Select a rating for cleanliness")
        return false;
    }

    var availabilityVal = "-";
    var availability = document.getElementsByName("rateavailability");
    for (i = 0; i < availability.length; i++) {
        if (availability[i].checked == true) {
            availabilityVal = availability[i].value;
        }
    }

    if (availabilityVal == "-") {
        alert("Select a rating for availability")
        return false;
    }

    var accessVal = "-";
    var access = document.getElementsByName("rateaccess");
    for (i = 0; i < access.length; i++) {
        if (access[i].checked == true) {
            accessVal = access[i].value;
        }
    }

    if (accessVal == "-") {
        alert("Select a rating for ease of access")
        return false;
    }

    var rating = {
        toilet: toiletVal,
        cleanliness: cleanlinessVal, 
        availability: availabilityVal,
        access: accessVal
    };

    if (sessionStorage.getItem("ratings") != null) {
        var ratings = JSON.parse(sessionStorage.getItem("ratings"));
    }
    else {
        var ratings = [];
    }

    ratings.push(rating);
    sessionStorage.setItem("ratings", JSON.stringify(ratings));

    alert("Rating has been submitted")
    document.location = "home.html"
    return true;
}

function addReview() {
    var toilet = document.getElementById("toilet_dropdown_select")
    var toiletVal = toilet.options[toilet.selectedIndex].text;

    var feedback = document.getElementById("review_feedback");
    var feedbackVal = feedback.value.trim();
    if (feedbackVal.length == 0) {
        alert("Review is empty");
        return false;
    }

    var review = {
        toilet: toiletVal,
        feedback: feedbackVal
    };

    if (sessionStorage.getItem("reviews") != null) {
        var reviews = JSON.parse(sessionStorage.getItem("reviews"));
    }
    else {
        var reviews = [];
    }

    reviews.push(review);
    sessionStorage.setItem("reviews", JSON.stringify(reviews));

    alert("Review has been submitted")
    document.location = "home.html"
    return true;
}