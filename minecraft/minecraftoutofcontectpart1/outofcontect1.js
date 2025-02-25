// Image Data - Upin Ipin
const images = [
    {
        url: "../../asset/lagiupload.jpg", 
        downloadLink: ""
    }
];



// Function to create image cards - Upin Ipin
function createImageCards() {
    const gallery = document.getElementById('outofcontect1');
    
    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = image.url;
        img.alt = 'Image';
        img.addEventListener('click', () => {
            window.location.href = image.downloadLink;
        });

        card.appendChild(img);
        gallery.appendChild(card);
    });
}

// Initialize gallery on page load
window.onload = createImageCards;
