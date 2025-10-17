        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Fade in animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const appearOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px"
        };
        
        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);
        
        fadeElements.forEach(element => {
            appearOnScroll.observe(element);
        });
        
        // Hero Slider
        const heroSlides = [
            {
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                title: " Hi My Nmae is Huzaifa Umer Ansari I am  Full Stack Development",
                description: "Building robust web applications with modern technologies"
            },
            {
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                title: "Process Automation",
                description: "Creating efficient solutions to automate repetitive tasks"
            },
            {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                title: "Data Analysis",
                description: "Transforming data into actionable insights"
            },
            {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
                title: "E-commerce Solutions",
                description: "Developing scalable online stores with great user experience"
            }
        ];
        
        let currentHeroSlide = 0;
        const heroSlidesContainer = document.getElementById('slides-container');
        const heroSlideIndicators = document.getElementById('slide-indicators');
        
        // Initialize hero slides
        heroSlides.forEach((slide, index) => {
            // Create slide
            const slideElement = document.createElement('div');
            slideElement.className = 'slide';
            slideElement.style.backgroundImage = `url(${slide.image})`;
            
            const overlay = document.createElement('div');
            overlay.className = 'slide-overlay';
            
            const content = document.createElement('div');
            content.className = 'slide-content';
            content.innerHTML = `
                <h3 class="slide-title">${slide.title}</h3>
                <p class="slide-description">${slide.description}</p>
            `;
            
            slideElement.appendChild(overlay);
            slideElement.appendChild(content);
            heroSlidesContainer.appendChild(slideElement);
            
            // Create indicator
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToHeroSlide(index));
            heroSlideIndicators.appendChild(indicator);
        });
        
        // Go to specific hero slide
        function goToHeroSlide(slideIndex) {
            currentHeroSlide = slideIndex;
            heroSlidesContainer.style.transform = `translateX(-${currentHeroSlide * 100}%)`;
            
            // Update active indicator
            document.querySelectorAll('.slide-indicators .indicator').forEach((indicator, index) => {
                if (index === currentHeroSlide) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }
        
        // Next hero slide
        document.getElementById('next-slide').addEventListener('click', () => {
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            goToHeroSlide(currentHeroSlide);
        });
        
        // Previous hero slide
        document.getElementById('prev-slide').addEventListener('click', () => {
            currentHeroSlide = (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length;
            goToHeroSlide(currentHeroSlide);
        });
        
        // Auto slide change
        setInterval(() => {
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            goToHeroSlide(currentHeroSlide);
        }, 5000);
        
        // Projects Slider
        const projects = [
            {
                title: "The White Company",
                description: "A premium e-commerce website for luxury clothing and home accessories with elegant design and smooth user experience.",
                features: [
                    "Premium product showcase",
                    "Advanced filtering options",
                    "Secure checkout process",
                    "Responsive design"
                ],
                link: "https://www.thewhitecompany.com/uk/Clothing/c/clothing-new",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                title: "Nureh.pk",
                description: "A modern e-commerce platform for fashion and lifestyle products with intuitive navigation and fast loading times.",
                features: [
                    "Modern UI/UX design",
                    "Product recommendations",
                    "User reviews and ratings",
                    "Mobile-first approach"
                ],
                link: "https://nureh.pk/",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                title: "Sokamal",
                description: "An e-commerce website offering a wide range of products with advanced search functionality and user-friendly interface.",
                features: [
                    "Advanced search and filters",
                    "Multiple payment options",
                    "Order tracking system",
                    "Customer support integration"
                ],
                link: "https://www.sokamal.com/",
                image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                title: "Znitr0 NZ",
                description: "A Shopify-based e-commerce store with custom design and optimized user experience for higher conversions.",
                features: [
                    "Custom Shopify theme",
                    "Product customization options",
                    "SEO optimized",
                    "Fast loading speed"
                ],
                link: "https://znitr0-nz.myshopify.com/",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                title: "Equator Stores",
                description: "A multi-vendor e-commerce platform with vendor management system and comprehensive product catalog.",
                features: [
                    "Multi-vendor marketplace",
                    "Vendor dashboard",
                    "Advanced inventory management",
                    "Real-time analytics"
                ],
                link: "https://equatorstores.com/",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            }
        ];
        
        let currentProjectSlide = 0;
        const projectSlidesContainer = document.getElementById('project-slides-container');
        const projectSlideIndicators = document.getElementById('project-slide-indicators');
        const projectTitle = document.getElementById('project-title');
        const projectDescription = document.getElementById('project-description');
        const projectFeatures = document.getElementById('project-features');
        const projectLink = document.getElementById('project-link');
        
        // Initialize project slides
        projects.forEach((project, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = 'project-slide';
            slide.style.backgroundImage = `url(${project.image})`;
            
            const overlay = document.createElement('div');
            overlay.className = 'project-slide-overlay';
            overlay.innerHTML = `<h3>${project.title}</h3>`;
            
            slide.appendChild(overlay);
            projectSlidesContainer.appendChild(slide);
            
            // Create indicator
            const indicator = document.createElement('div');
            indicator.className = 'project-indicator';
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToProjectSlide(index));
            projectSlideIndicators.appendChild(indicator);
        });
        
        // Update project details based on current slide
        function updateProjectDetails() {
            const project = projects[currentProjectSlide];
            projectTitle.textContent = project.title;
            projectDescription.textContent = project.description;
            projectFeatures.innerHTML = '';
            
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                projectFeatures.appendChild(li);
            });
            
            projectLink.href = project.link;
            
            // Update active indicator
            document.querySelectorAll('.project-indicator').forEach((indicator, index) => {
                if (index === currentProjectSlide) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }
        
        // Go to specific project slide
        function goToProjectSlide(slideIndex) {
            currentProjectSlide = slideIndex;
            projectSlidesContainer.style.transform = `translateX(-${currentProjectSlide * 100}%)`;
            updateProjectDetails();
        }
        
        // Next project slide
        document.getElementById('next-project-slide').addEventListener('click', () => {
            currentProjectSlide = (currentProjectSlide + 1) % projects.length;
            goToProjectSlide(currentProjectSlide);
        });
        
        // Previous project slide
        document.getElementById('prev-project-slide').addEventListener('click', () => {
            currentProjectSlide = (currentProjectSlide - 1 + projects.length) % projects.length;
            goToProjectSlide(currentProjectSlide);
        });
        
        // Auto slide change for projects
        setInterval(() => {
            currentProjectSlide = (currentProjectSlide + 1) % projects.length;
            goToProjectSlide(currentProjectSlide);
        }, 6000);
        
        // Initialize first project details
        updateProjectDetails();
