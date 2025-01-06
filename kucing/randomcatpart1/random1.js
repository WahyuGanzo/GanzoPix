// Image Data - Upin Ipin
const images = [
    {
        url: "https://i.ibb.co.com/vhN12Ps/Snapinsta-app-471884130-1246925949870356-7356310521446626369-n-1080.jpg", 
        downloadLink: "https://i.ibb.co.com/vhN12Ps/Snapinsta-app-471884130-1246925949870356-7356310521446626369-n-1080.jpg"
    },
    {
        url: "https://i.ibb.co.com/P12qQ2z/Snapinsta-app-471882554-1165078038513877-6391097696844465263-n-1080.jpg", 
        downloadLink: "https://i.ibb.co.com/P12qQ2z/Snapinsta-app-471882554-1165078038513877-6391097696844465263-n-1080.jpg"
    },
    {
        url: "https://i.ibb.co.com/FhcPv1b/Snapinsta-app-471870894-1104568057529911-8896403000202569915-n-1080.jpg", 
        downloadLink: "https://i.ibb.co.com/FhcPv1b/Snapinsta-app-471870894-1104568057529911-8896403000202569915-n-1080.jpg"
    },
    {
        url: "https://i.ibb.co.com/XXXr0k1/Snapinsta-app-471845499-1102404248343216-8539357581352727033-n-1080.jpg", 
        downloadLink: "https://i.ibb.co.com/XXXr0k1/Snapinsta-app-471845499-1102404248343216-8539357581352727033-n-1080.jpg"
    },
    {
        url: "https://i.ibb.co.com/hHWPdLf/Snapinsta-app-471825011-1108965997351309-8583962819390901446-n-1080.jpg", 
        downloadLink: "https://i.ibb.co.com/hHWPdLf/Snapinsta-app-471825011-1108965997351309-8583962819390901446-n-1080.jpg"
    },
    {
        url: "https://i.ibb.co.com/Fxt7L2K/Snapinsta-app-471811926-2809610105883413-2578151272913478578-n-1080.jpg", 
        downloadLink: "https://i.ibb.co.com/Fxt7L2K/Snapinsta-app-471811926-2809610105883413-2578151272913478578-n-1080.jpg"
    },
    {
        url: "https://i.ibb.co.com/yydLqfG/Snapinsta-app-471791907-943071860658849-4293134777863550641-n-1080.jpg", 
        downloadLink: "https://i.ibb.co.com/yydLqfG/Snapinsta-app-471791907-943071860658849-4293134777863550641-n-1080.jpg"
    },
    {
        url: "https://i.ibb.co.com/nMqGYBD/Snapinsta-app-471566284-2708846445964367-6382471543403852902-n-1080.jpg", 
        downloadLink: "https://i.ibb.co.com/nMqGYBD/Snapinsta-app-471566284-2708846445964367-6382471543403852902-n-1080.jpg"
    },
    {
        url: "https://i.ibb.co.com/WfCtD25/Snapinsta-app-471909997-559130853760092-5688988229136190790-n-1080.jpg", 
        downloadLink: "https://i.ibb.co.com/WfCtD25/Snapinsta-app-471909997-559130853760092-5688988229136190790-n-1080.jpg"
    },
    {
        url: "https://i.ibb.co.com/7rmPzBT/Snapinsta-app-471491250-586814300716534-884770249748881663-n-1080.jpg", 
        downloadLink: "https://i.ibb.co.com/7rmPzBT/Snapinsta-app-471491250-586814300716534-884770249748881663-n-1080.jpg"
    },
    {
        url: "../../asset/lagiupload.jpg", 
        downloadLink: ""
    }
];



// Function to create image cards - Upin Ipin
function createImageCards() {
    const gallery = document.getElementById('random1');
    
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
