
let data = JSON.parse(localStorage.getItem("admin_data"));

document.querySelector("#admin_name").innerText = localStorage.getItem("admin_name")
// document.querySelector("#img_nav").setAttribute("src", data.usertype);

const url = `http://localhost:8080`;
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};

//fetch data of product(get from DB)
let productData;
let admin_details = document.querySelector(".sales-details");
async function Fetch_admin() {
    try {
        let api_data = await fetch(
            `${url}/product`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        let data = await api_data.json();
        // console.log(data);
        productData = data.product;
        displayCards(data.product);
    } catch (error) {
        alert("Can't able to fetch Details of Admin");
    }
}
Fetch_admin();

function displayCards(data) {
    //Render in the form of card
    data.map(function (ele) {
        let container = document.createElement("div");
        container.addEventListener("click", function () {
            localStorage.setItem("saveData", JSON.stringify(data));
        });
        //image 
        let img = document.createElement("img")
        img.setAttribute("src", ele.img);
        img.setAttribute("class", "proClass")

        //title
        let name_div = document.createElement("div")
        name_div.setAttribute("class", "name_pro_div");
        let title = document.createElement("h2");
        title.textContent = ele.title;
        name_div.append(title)
        title.setAttribute("class", "proname");


        //category
        let category = document.createElement("p");
        category.textContent = ele.category;
        category.setAttribute("class", "quantity");

        let rating_div = document.createElement("div");
        rating_div.setAttribute("class", "div5")
        let rating = document.createElement("p");
        rating.textContent = `${ele.rating}★`;

        rating.setAttribute("class", "rating");
        rating_div.append(rating);

        let mrp_price = document.createElement("p");
        let span2 = document.createElement("span");
        span2.textContent = `MRP ₹${ele.mrp_price}`;
        span2.setAttribute("class", "mrp");

        let span = document.createElement("span");
        span.innerText = `${ele.discount}%off`;
        mrp_price.append(span2, span);

        span.setAttribute("class", "dis");

        let price = document.createElement("p");
        price.textContent = "₹" + ele.price;
        price.setAttribute("class", "price")


        container.append(img, name_div, category, rating_div, mrp_price, price);
        document.querySelector("#all_products").append(container)
    });
}

    //postrequest
    let c = localStorage.getItem("count") || 0;
    async function productpost(){
       
        try{
          let prd_body={
  
            title:document.querySelector("#prd_title").value,
            img:document.querySelector("#prd_img").value,
            price:document.querySelector("#acutal_price").value,
            mrp_price:document.querySelector("#mrp_price").value,
            discount:document.querySelector("#dis_perc").value,
            rating:document.querySelector("#rating").value,
            category:document.querySelector("#category").value,
          
       }
            let res = await fetch(`${url}/product`,{
                method:"POST",
                body:JSON.stringify(prd_body),
                headers:{"Content-type":"application/json"}
            });
            let data = await res.json();
            console.log(data);
            localStorage.setItem("count", c);
            alert("Product Added successfully👍");
        }catch(err){
            console.log(err);
        }
      }

      //old code

// let addButton = document.getElementById("addBtn");
// addButton.addEventListener("click", (event) => {
//     let obj = {
//         image: productCategory.value,
//         name: productTitle.value,
//         priceKey: productPrice.value,
//         price: `$${productPrice.value}`,
//         color: "blue",
//         priceKey1: productPrice.value,
//         price: `$${productPrice.value}`,
//         color: "blue"
//     };

//     addData(obj);
// });
// let c = localStorage.getItem("count") || 0;
// async function addData(obj) {
//     try {
//         let data = await fetch(
//             `${url}products`,
//             {
//                 method: "POST",
//                 headers: {
//                     "content-type": "application/json",
//                 },
//                 body: JSON.stringify(obj),
//             }
//         );
//         if (data.ok) {
//             let addProductData = await data.json();
//             c++;
//             localStorage.setItem("count", c);
//             alert("Product Added successfully👍");
//             window.location.href = "manageProduct.html"
//             // displayCards(productData);
//         } else {
//             alert("Data cant be added");
//         }
//     } catch (error) {
//         alert(error);
//     }
// }



//userprofile
//userDetailss();
// function userDetailss() {
//     let admin = JSON.parse(localStorage.getItem("admin"));
//     let cont = document.getElementById("admin_name");
//     let cont2 = document.getElementById("img-admin");

//     cont2.innerHTML = `<img src="${admin.image}">`
//     cont.innerHTML = `${admin.name}`
// };



//logout button
document.getElementsByClassName("log_out")[0].addEventListener("click", () => {
    localStorage.clear("admin-signed");
    localStorage.clear("admin");
});