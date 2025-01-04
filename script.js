// Image Data for Categories
const categories = {
    'upin-ipin': {
        title: "Upin Ipin Majapahit Random Pictures",
        images: [
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962655/470130612_1740375573469962_7928407732697499442_n_ghefb7.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962655/470130612_1740375573469962_7928407732697499442_n_ghefb7.jpg" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962654/470189870_1740375543469965_2673173767551946817_n_x8dn5f.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962654/470189870_1740375543469965_2673173767551946817_n_x8dn5f.jpg" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962654/470230946_1740375506803302_377929836373698048_n_smewtv.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962654/470230946_1740375506803302_377929836373698048_n_smewtv.jpg" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962654/470148484_1740375696803283_2244551618614417898_n_gbp7y4.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962654/470148484_1740375696803283_2244551618614417898_n_gbp7y4.jpg" },
            { url: "asset/klikdisini.jpg", downloadLink: "upinipin/upinipin.html" }
        ]
    },
    'spongebob': {
        title: "Spongebob Random Pictures",
        images: [
            { url: "asset/lagiupload.jpg", downloadLink: "" },
            { url: "asset/lagiupload.jpg", downloadLink: "" },
            { url: "asset/lagiupload.jpg", downloadLink: "" },
            { url: "asset/lagiupload.jpg", downloadLink: "" },
            { url: "asset/klikdisini.jpg", downloadLink: "spongebobsquarepants/spongebobsquarepants.html" }
        ]
    }
};

// Function to create and display each category with its images
function createCategory(categoryKey) {
    const category = categories[categoryKey];

    // Create category container
    const categoryContainer = document.createElement('div');
    
    // Add category title
    const categoryTitle = document.createElement('h1');
    categoryTitle.innerText = category.title;
    categoryContainer.appendChild(categoryTitle);

    // Create gallery container
    const gallery = document.createElement('div');
    gallery.classList.add('gallery');

    // Add images to the gallery
    category.images.forEach(image => {
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

    // Append gallery to the category container
    categoryContainer.appendChild(gallery);

    // Append category container to the gallery section
    const gallerySection = document.getElementById('gallery-section');
    gallerySection.appendChild(categoryContainer);
}

// Initialize gallery by creating all categories
window.onload = () => {
    for (let category in categories) {
        createCategory(category);
    }
};
