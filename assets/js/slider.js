document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 6500, // Change slide every 3 seconds
        disableOnInteraction: false,
      },
      effect: 'fade', // Smooth fade transition
      speed: 2000,
      
      simulateTouch: true,
          grabCursor: true,// Transition speed
    });
});



function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
  // Delay the hiding of the preloader
  window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
      preloader.style.display = 'none';
      navigationbar.style.display='block';
     
    }, 1000); 
  });


  async function fetchTestimonials() {
    try {
        const response = await fetch('https://api.webbuilder.technolitics.com/api/v1/website-builder/website/testimonial/get-all-testimonials/66e2db81cb3d9f4f044cfc54');

        if (!response.ok) {
            throw new Error('HTTP error! Status: ' + response.status);
        }

        const data = await response.json();
        console.log(data); // Log to check structure

        if (!data || !data.data) {
            throw new Error('Unexpected data structure!');
        }

        const testimonialsContainer = $(".testimonial-carousel");
        testimonialsContainer.empty(); // Clear existing content

        data.data.forEach((testimonial) => {
            const imagepath = 'https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket/';
            const imageUrl = `${imagepath}${testimonial.image}`;

            const testimonialElement = `
            
                <div class="testimonial">
                <div class="test-box">
                  <div class="test-iamge">
                    <img src="${imageUrl}" alt="${testimonial.name}" /></div>
                    <div class="testimonial-text">
                        <p class="review">${testimonial.review}</p>
                        <h3 class="name">${testimonial.name}</h3>
                        <p class="profile">${testimonial.companyProfile}</p>
                    </div>
                </div>
                </div>
            `;
            testimonialsContainer.append(testimonialElement);
        });

        // Initialize OwlCarousel after testimonials are appended
        initializeCarousel();

    } catch (error) {
        console.error('Error fetching testimonials:', error);
        $('.testimonial-carousel').text('Failed to load testimonials.');
    }
}

function initializeCarousel() {
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1, // Mobile: 1 item per slide
            },
            864: {
                items: 1, // Tablets: 2 items per slide
            },
            1024: {
                items: 2, // Desktop: 3 items per slide
            },
            1230:{
              items:2,
            },
            1496:{
              items:3,
            }
        }
    });
}

$(document).ready(function() {
    fetchTestimonials();
});



  async function fetchBlogPosts() {
    try {
        const response = await fetch('https://api.webbuilder.technolitics.com/api/v1/website-builder/website/post/get-all-posts/66e2db81cb3d9f4f044cfc54');
        const data = await response.json();
        
        if (data && data.data) {
            displayBlogPosts(data.data);
        }
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}

// Function to display blog posts dynamically
function displayBlogPosts(posts) {
    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = ''; // Clear the container

    posts.forEach(post => {
        const { title, banner, seoDetails, createdAt, description } = post;
        const bannerImage = banner.image ? `https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket/${banner.image}` : 'default-image.jpg';
        const postDate = new Date(createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        const author = seoDetails.tags && seoDetails.tags.length > 0 ? seoDetails.tags[0] : 'Unknown Author';

        // Create blog card HTML
        const blogCard = `
            <div class="blog-card">
                <!-- Blog Image -->
                 <div class="blog-image"> 
                <img src="${bannerImage}" alt="Blog Cover Image">
                     <span><i class="far fa-folder"></i>Blog</span>
                        </div>
                

                    <!-- Blog Title -->
                    <h2 class="blog-title">${title}</h2>

                    <!-- Blog Meta (Date and Author) -->
                    <div class="blog-meta">
                        <span><i class="far fa-calendar"></i> ${postDate}</span>||
                        <span><i class="far fa-user"></i>PAREEK COLOURS</span>
                    </div>

                    <!-- Blog Footer (Read More link) -->
                    <div class="blog-footer">
                        <a href="blog.html?id=${post._id}" class="read-more">Read More <i class="flaticon-login"></i></a>
                    </div>
                </div>
            </div>
        `;
        
        // Append blog card to container
        blogContainer.innerHTML += blogCard;
    });
}

// Fetch blog posts on page load
fetchBlogPosts();