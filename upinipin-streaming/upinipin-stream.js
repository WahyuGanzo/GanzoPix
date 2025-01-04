// Image Data - Upin Ipin
const images = [
    {
        url: "https://i.ibb.co.com/z4cSNQb/image.png", 
        downloadLink: "https://boosterx.stream/v/tLFpgYFD9nVp/"
    },
    {
        url: "https://i.ibb.co.com/KKN5KSr/image.png", 
        downloadLink: "https://boosterx.stream/v/a7iP45UqaVFY/"
    },
    {
        url: "https://i.ibb.co.com/vQ1YGWT/image.png", 
        downloadLink: "https://boosterx.stream/v/UY87WaFuhgNO/"
    },
    {
        url: "https://i.ibb.co.com/CWV7mBQ/image.png", 
        downloadLink: "https://boosterx.stream/v/aAZzX1deidNa/"
    },
    {
        url: "https://i.ibb.co.com/7bJc36c/image.png", 
        downloadLink: "https://boosterx.stream/v/0XIfO5pZScST/"
    },
    {
        url: "https://i.ibb.co.com/JcV39GP/image.png", 
        downloadLink: "https://boosterx.stream/v/TrEbABc1TQuP/  "
    },
    {
        url: "https://i.ibb.co.com/LhkfRNT/image.png", 
        downloadLink: "https://boosterx.stream/v/uiCEq558wkUY/"
    },
    {
        url: "https://i.ibb.co.com/0XN2Cyv/image.png", 
        downloadLink: "https://boosterx.stream/v/UQHbJi9r8uxZ/"
    },
    {
        url: "https://i.ibb.co.com/Kyxzxh9/image.png", 
        downloadLink: "https://boosterx.stream/v/tXFLCiY2NGE3/"
    },
    {
        url: "https://i.ibb.co.com/MDxzFyq/image.png", 
        downloadLink: "https://boosterx.stream/v/jujroLBLgTQj/"
    },
    {
        url: "https://i.ibb.co.com/bHxHByy/image.png", 
        downloadLink: "https://boosterx.stream/v/CZBXww7q0VVi/"
    },
    {
        url: "https://i.ibb.co.com/KNZb768/image.png", 
        downloadLink: "https://boosterx.stream/v/5vuy3AkS5aiD/"
    },
    {
        url: "https://i.ibb.co.com/G9GrcFS/image.png", 
        downloadLink: "https://boosterx.stream/v/LlaQ5a3YBa4a/"
    },
    {
        url: "https://i.ibb.co.com/3MkT7DG/image.png", 
        downloadLink: "https://boosterx.stream/v/CuKWhSwVll7J/"
    },
    {
        url: "https://i.ibb.co.com/2P7nX45/image.png", 
        downloadLink: "https://boosterx.stream/v/jayxa6KZH9RH/"
    },
    {
        url: "https://i.ibb.co.com/5vq5jX6/image.png", 
        downloadLink: "https://boosterx.stream/v/EJyhS60agFmP/"
    },
    {
        url: "https://i.ibb.co.com/0mL3SD4/image.png", 
        downloadLink: "https://boosterx.stream/v/e4gLiZlWhill/"
    },
    {
        url: "https://i.ibb.co.com/gvGZntV/image.png", 
        downloadLink: "https://boosterx.stream/v/k0Fjr6K0akRb/"
    },
    {
        url: "https://i.ibb.co.com/hgthPJK/image.png", 
        downloadLink: "https://boosterx.stream/v/bCtd0JTmBXZM/"
    },
    {
        url: "https://i.ibb.co.com/BK3b2Tx/image.png", 
        downloadLink: "https://boosterx.stream/v/ub6C5aYRz1BJ/"
    },
    {
        url: "https://i.ibb.co.com/wwNsp1b/image.png", 
        downloadLink: "https://boosterx.stream/v/zYxPtNq5kFOA/"
    },
    {
        url: "https://i.ibb.co.com/XSwY2tf/image.png", 
        downloadLink: "https://boosterx.stream/v/hSQ6ypUTE79a/"
    },
    {
        url: "https://i.ibb.co.com/HKHctBw/image.png", 
        downloadLink: "https://boosterx.stream/v/YayFVTkFh32Y/"
    },
    {
        url: "https://i.ibb.co.com/LhkfRNT/image.png", 
        downloadLink: "https://boosterx.stream/v/uiCEq558wkUY/"
    },
    {
        url: "../asset/lagiupload.jpg", 
        downloadLink: ""
    },
];



// Function to create image cards - Upin Ipin
function createImageCards() {
    const gallery = document.getElementById('upinipin-stream');
    
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
