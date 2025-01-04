// Image Data for Categories
const categories = {
    'upin-ipin': {
        title: "Upin Ipin Majapahit Random Pictures",
        images: [
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962655/470130612_1740375573469962_7928407732697499442_n_ghefb7.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962655/470130612_1740375573469962_7928407732697499442_n_ghefb7.jpg" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962654/470189870_1740375543469965_2673173767551946817_n_x8dn5f.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962654/470189870_1740375543469965_2673173767551946817_n_x8dn5f.jpg" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962654/470230946_1740375506803302_377929836373698048_n_smewtv.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735962654/470230946_1740375506803302_377929836373698048_n_smewtv.jpg" },
            { url: "asset/klikdisini.jpg", downloadLink: "upinipin/upinipin.html" }
        ]
    },
    'spongebob': {
        title: "SpongeBob Squarepants Random Pictures",
        images: [
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735990283/472172275_1006569188179253_8926181241172346008_n_yizjcj.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735990283/472172275_1006569188179253_8926181241172346008_n_yizjcj.jpg" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735990283/472137010_1006569408179231_5231463884322818643_n_tefqoz.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735990283/472137010_1006569408179231_5231463884322818643_n_tefqoz.jpg" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735990282/472106910_1006569298179242_318721468635925547_n_pthcms.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735990282/472106910_1006569298179242_318721468635925547_n_pthcms.jpg" },
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
