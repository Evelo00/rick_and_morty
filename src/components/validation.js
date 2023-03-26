function validate(email, password) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is empty or exceeds 35 characters
    if (!email || email.length > 35) {
        return false;
    }

    // Check if email matches the regex pattern
    if (!emailRegex.test(email)) {
        return false;
    }

    // Check if password has at least one number and is between 6 and 10 characters long
    if (!/\d/.test(password) || password.length < 6 || password.length > 10) {
        return false;
    }

    return true;
}
