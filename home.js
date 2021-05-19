function ask_for_location() {
    confirm("Do you grant this page permission to your location?")
}

window.onload = ask_for_location()