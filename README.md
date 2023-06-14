<div align="center" > 
<h2>SALONLEX: Hair Salon Appointment Booking System<h2>
<img width="30%" src="https://github.com/adityagithubraj/github-boot/blob/main/imge/SALONLEX%20(1).png"><br><br>

<h2 align="center">Description </h2>
<br>
<h3>SALONLEX is a hair salon website that enables customers to book appointments online. The platform showcases available time slots, stylists, and charges for haircuts, allowing for a seamless user experience.
</h3>
</div>  
  
   <h2 align="center">Collaborators</h2>
    
1. Amarjeet Kumar (Team Lead)
   >    - e-Mail: amarkr0705@gmail.com
   >    - GitHub: https://github.com/amar0705


2. Love Porwal (Team Member)
   >    - e-Mail: lluvporwall@gmail.com
   >    - GitHub: https://github.com/love-porwal 


3. Rahul gandhi (Team Member)
   >    - e-Mail: Rahulgandhi241172@gmail.com
   >    - GitHub: https://github.com/rahul241172


4. Shahfaisal pinitod (Team Member)
   >    - e-Mail: faisalpinitod@gmail.com
   >    - GitHub: https://github.com/faisalpinitod


5. Aditya Raj   (Team Member)
   >    - e-Mail: adityaraj9843@gmail.com
   >    - GitHub: https://github.com/adityagithubraj

<br>
    
   <h2 align="center">Deployed Link</h2>
  <h3 align="center">Frontend: https://salonlex.netlify.app/ </h3>
   <h3 align="center">Backend: https://nice-pink-antelope-gear.cyclic.app/</h3>

<br>
    
<h2 align="center">Tech Stack</h2>
<h3 align="center">Frontend</h3>
<p align="center">HTML | CSS | JavaScript</p> 
       
<h3 align="center">Backend</h3>
<p align="center">Node.js | Express.js</p> 
       
<h3 align="center"> Database </h3>
<p align="center">MongoDB Atlas | Redis </p>

<h3 align="center">CSS Libraries</h3>
<p align="center">BootStrap</p> 


# Schema : 

- user 
   - name
   - age
   - gender
   - email
   - password

- stylist 
    
   - image_urls
   - Stylists_name
   - descriptions
   
- style 
    
  -  Name
  -  Image
  -  Price
  -  Gender

- products
    
   - title
   - img
   - price
   - mrp_price
   - description
   - discount
   - category
   - rating
   - type
    
- appointments 
    
   - stylist_id
   - user_id
   - style_id
   - date
   - time
   - style_name
   - styler_name
   
- Admin
   - name
   - linkedin
   - Github
   - email
   - password
   - image

## 
    # API Endpoints 
----

  ## `users`
<br>   
  
        GET    -   /users
        POST   -   /users/register
        POST   -   /users/login
        GET    -   /users/logout
        PATCH    -  /users/update/:id
        DELETE    -  /users/delete/:id  

<br>
  
## `Style`
<br>   

- Male Style
                
        GET    -   /style/male 
        POST   -   /style/male 
     
- Female Style

        GET    -   /style/female
        POST   -   /style/female
      

<br>

## `Stylist`
<br>   

- Stylers 
                
        GET    -   /stylist/male
        GET    -   /stylist/female
        POST   -   /stylist/male/query
        POST   -   /stylist/female/query
        PATCH  -   /stylist/update/:id
        DELETE -   /stylist/delete/:id


<br>

## `Appointment`
<br>   

- Appointment 
                
        GET    -   /appointments
        POST   -   /appointments/new
        PATCH  -   /appointments/update/:id
       PATCH  -   /appointments/update/:id
       PATCH  -   /appointments/update/stylistid
       DELETE -   /appointments/delete/:id
       DELETE -   /appointments/delete/stylistid
 
  
   ## `Products`
<br>   

- Products 
                
        GET    -   /Product
        GET    -   /Product/men
        GET    -   /Product/women
        POST   -   /Product
        POST   -   /Product/orders
        PATCH  -   /Product/:id
        DELETE -   /Product/:id
      

<h2 align="center">System Design</h2>
<p align="center">
<img src="https://github.com/amar0705/nice-flesh-360/blob/main/Frontend/assets/systemDesign.jpg">
</p>
    

  <h1>1.  Home Page  </h1><br><br>
  
![Home 1](https://github.com/adityagithubraj/github-boot/blob/main/imge/home.png)

  ![home 2](https://github.com/adityagithubraj/github-boot/blob/main/imge/mid.png)

  ![home 3](https://github.com/adityagithubraj/github-boot/blob/main/imge/futer.png)

  <h1>2. Login  </h1>
  <br><br>
  
  ![login](https://github.com/adityagithubraj/github-boot/blob/main/imge/login.png)
  
  <h1>3. Signup  </h1>
  <br><br>
  
  ![signup](https://github.com/adityagithubraj/github-boot/blob/main/imge/sigup.png)
  
  <h1>4. Products  </h1>
  <br><br>
  
  ![image](https://github.com/adityagithubraj/github-boot/blob/main/imge/products.png)

  ![image](https://github.com/adityagithubraj/github-boot/blob/main/imge/product2.png)

  <h1>5.Style </h1>
  <br><br>
  
  ![image](https://github.com/adityagithubraj/github-boot/blob/main/imge/style.png)
  
  <h1>6. Appointments </h1>
  <br><br>
  
  ![Appointments](https://github.com/adityagithubraj/github-boot/blob/main/imge/Appointments.png)
  
 
  <h1>6. Service </h1>
  <br><br>
  
  ![Service](https://github.com/adityagithubraj/github-boot/blob/main/imge/menstyle.png)
  
 
  <h1>6. Admin  </h1>
  <br><br>
  
  ![Admin](https://github.com/adityagithubraj/github-boot/blob/main/imge/admin.png)
  
 
  






