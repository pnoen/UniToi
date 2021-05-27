function submitted(message) {
    alert(message)
    document.location = "home.html"
}

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

    var availabilityVal = "-";
    var availability = document.getElementsByName("rateavailability");
    for (i = 0; i < availability.length; i++) {
        if (availability[i].checked == true) {
            availabilityVal = availability[i].value;
        }
    }

    var accessVal = "-";
    var access = document.getElementsByName("rateaccess");
    for (i = 0; i < access.length; i++) {
        if (access[i].checked == true) {
            accessVal = access[i].value;
        }
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
}

function addReview() {
    var toilet = document.getElementById("toilet_dropdown_select")
    var toiletVal = toilet.options[toilet.selectedIndex].text;

    var feedback = document.getElementById("review_feedback");
    var feedbackVal = feedback.value;

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
}