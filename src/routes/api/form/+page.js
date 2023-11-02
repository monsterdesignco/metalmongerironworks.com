export async function post(request) {
    const formData = new URLSearchParams(request.body);

    // Process form data...
    // e.g., send an email, save to a database, etc.

    return {
        status: 200,
        body: { message: 'Form submission successful' }
    };
}