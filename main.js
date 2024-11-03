async function fetchTickets() {
    const ticketContainer = document.getElementById('ticket-container');
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ''; // Clear previous error messages
    ticketContainer.innerHTML = ''; // Clear previous tickets

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const tickets = await response.json();

        // Check if there are any tickets
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets available.');
        }

        // Display tickets with specified details
        tickets.forEach(ticket => {
            const ticketDiv = document.createElement('div');
            ticketDiv.className = 'ticket';
            ticketDiv.innerHTML = `
                <p><strong>Ticket ID:</strong> ${ticket.id}</p>
                <p><strong>Customer Name:</strong> Customer ${ticket.userId}</p>
                <p><strong>Issue Description:</strong> ${ticket.title}</p>
                <p><strong>Details:</strong> ${ticket.body}</p>
            `;
            ticketContainer.appendChild(ticketDiv);
        });
    } catch (error) {
        // Display error message
        errorMessage.textContent = error.message;
    }
}

// Call the function to fetch tickets when the page loads
fetchTickets();
