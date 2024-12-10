export const sendEmail = async () => {
    const response = await fetch("https://api.postmarkapp.com/email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Postmark-Server-Token": "80cfa539-4d8d-4b19-92e9-8c8fc3bdf146",
        },
        body: JSON.stringify({
            From: "chien@gmail.com",
            To: "tungdev64@gmail.com",
            Subject: "Test Email",
            TextBody: "Hello, this is a test email!",
        }),
    });

    console.log(await response.json());
};
