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
    },
    'cutscene': {
        title: "SpongeBob Squarepants Cut Scene",
        images: [
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735998896/469022487_542140278632351_6796819381694030705_n_kqseal.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735998896/469022487_542140278632351_6796819381694030705_n_kqseal.jpg" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735998897/469150539_543580511821661_7040675705189656914_n_lvkd4s.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735998897/469150539_543580511821661_7040675705189656914_n_lvkd4s.jpg" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735998896/469199601_543580478488331_419413395457256379_n_mp5vol.jpg", downloadLink: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735998896/469199601_543580478488331_419413395457256379_n_mp5vol.jpg" },
            { url: "asset/klikdisini.jpg", downloadLink: "spongebobsquarepants/cutscene/cutscene.html" }
        ]
    },
    'tools': {
        title: "Tools Yang Kami Pakai Dalam Pembuatan Website Ini",
        images: [
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1736000054/html_uki1ne.png", downloadLink: "https://id.wikipedia.org/wiki/HTML" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735999882/css-3_uvvj2n.png", downloadLink: "https://id.wikipedia.org/wiki/Cascading_Style_Sheets" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735999884/javascript-39400_owumk1.png", downloadLink: "https://id.wikipedia.org/wiki/JavaScript" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735999884/Visual_Studio_Code_1.35_icon.svg_ldu3b2.png", downloadLink: "https://code.visualstudio.com/" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735999883/cloudinary-icon_rz3o6d.png", downloadLink: "https://cloudinary.com/" },
            { url: "https://res.cloudinary.com/dynq3ybyz/image/upload/v1735999881/brave-browser-icon_prpzdq.png", downloadLink: "https://brave.com/id/" }
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
