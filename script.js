document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    //Get the values from the form
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;

    //Google Form ID
    const formId = '1FAIpQLScOuJLfHup8j-ac78o27irAswIGQYpu43_i714LfoFnW2hJGg';

    //Google Form Field IDs
    const nameId = '1553013261';
    const emailId = '1183400606';
    const messageId = '581487933';

    const formData = new FormData();
    formData.append(`entry.${nameId}`, name);
    formData.append(`entry.${emailId}`, email);
    formData.append(`entry.${messageId}`, message);

    const googleFormUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

    const corsProxyUrl = 'https://api.allorigins.win/get?url=';

    axios.post(corsProxyUrl + encodeURIComponent(googleFormUrl), formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => {
            if (response.status === 200) {
                alert("Message Sent Successfully!");
                document.getElementById('contactForm').reset(); //Reset form after submit
            } else {
                alert("There was an error, please try again.");
                document.getElementById('contactForm').reset(); //Reset form after submit
            }
        })
        .catch(error => {
            alert("There was an error, please try again.");
            document.getElementById('contactForm').reset(); //Reset form after submit
        });
});

function onsubmit(event){
    alert("Message Sent Successfully!");
    document.getElementById('contactForm').reset(); //Reset form after submit
}