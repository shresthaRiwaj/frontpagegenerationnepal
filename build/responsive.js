

document.addEventListener('DOMContentLoaded',()=>{
    
    // fetching products static 
    let productDetails = [
        {
            imgUrl:"./images/mouse.png",
            productName: "Mouse",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            btn: "Read More",
        },
        {
            imgUrl:"./images/mouse.png",
            productName: "Mouse",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            btn: "Read More",
        },
        {
            imgUrl:"./images/mouse.png",
            productName: "Mouse",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            btn: "Read More",
        },
        {
            imgUrl:"./images/mouse.png",
            productName: "Mouse",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            btn: "Read More",
        },

    ];
    
    let productContainer = document.querySelector('#productContainer');
    for (let i=0; i<productDetails.length; i++){
     let products = document.createElement('div');
     products.className = "products bg-white text-center rounded-md";

    let img = document.createElement('img');
    img.src = productDetails[i].imgUrl;

    let h1 = document.createElement('h1');
    h1.className = "font-bold text-xl";
    h1.textContent = productDetails[i].productName;

    let p = document.createElement('p');
    p.className = "font-light truncate-text mb-1 text-lg";
    p.textContent = productDetails[i].desc;

    let button = document.createElement('button');
    button.className = "bg-red-700 text-xs sm:text-md md:text-lg sm:p-1 ml-2 p-1 rounded-md mb-2 font-bold text-white";
    button.textContent = productDetails[i].btn;

    products.appendChild(img);
    products.appendChild(h1);
    products.appendChild(p);
    products.appendChild(button);

    productContainer.appendChild(products);
    };

    // fetching blog post static

    const blogPost = [
        {
        blogImg: "./images/laptop3.jpg",
        blogP: "Buying new printer? Here's everything you should know.",
        blogUrl: "Read More",
    },
    {
        blogImg: "./images/laptop3.jpg",
        blogP: "Buying new printer? Here's everything you should know.",
        blogUrl: "Read More",
    },
    {
        blogImg: "./images/laptop3.jpg",
        blogP: "Buying new printer? Here's everything you should know.",
        blogUrl: "Read More",
    },
];

    let blogContainer = document.querySelector('#blogContainer');
    blogPost.forEach((blog)=>{

        let blogs = document.createElement('div');
        blogs.className = "blogs bg-white shadow-lg rounded-md flex flex-col mb-1";

        let blogImg = document.createElement('img');
        blogImg.className = " rounded-md";
        blogImg.src = blog.blogImg;

        let blogP = document.createElement('p');
        blogP.className = "truncate-text ml-2 text-sm sm:text-md lg:text-xl md:text-lg";
        blogP.textContent = blog.blogP;

        let blogUrl = document.createElement('a');
        blogUrl.className = "text-sm mb-2 ml-2 font-semibold cursor-pointer sm:text-md lg:text-xl md:text-lg hover:border-blue-600 hover:border-b-2 transition-all duration-75 hover:text-blue-600";
        blogUrl.textContent = blog.blogUrl;

        blogs.appendChild(blogImg);
        blogs.appendChild(blogP);
        blogs.appendChild(blogUrl);
        blogContainer.appendChild(blogs)
    });
});
