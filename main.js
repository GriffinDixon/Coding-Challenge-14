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

        // Check for tickets
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets available.');
        }

        // Display tickets
        tickets.forEach(ticket => {
            const ticketDiv = document.createElement('div');
            ticketDiv.className = 'ticket';
            ticketDiv.innerHTML = `
                <h3>${ticket.title}</h3>
                <p>${ticket.body}</p>
            `;
            ticketContainer.appendChild(ticketDiv);
        });
    } catch (error) {
        // Display error messages
        errorMessage.textContent = error.message;
    }
}

// fetch tickets when the page loads
fetchTickets();
