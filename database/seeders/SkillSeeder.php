<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $skills = [
            "Laravel Framework" => "Proficient in building scalable web applications using Laravel, focusing on MVC architecture and RESTful APIs.",
            "PHP Programming" => "Extensive experience in server-side scripting with PHP, ensuring efficient and secure web application development.",
            "Shopify Development" => "Skilled in customizing Shopify stores, creating themes, and developing custom apps to enhance e-commerce functionality.",
            "JavaScript" => "Competent in using JavaScript for front-end development, including frameworks like Vue.js and React to create dynamic user interfaces.",
            "HTML/CSS" => "Strong command of HTML and CSS for crafting responsive and visually appealing web pages.",
            "MySQL Database Management" => "Adept at designing and managing MySQL databases to ensure data integrity and optimal performance.",
            "API Integration" => "Experienced in integrating third-party APIs, enabling seamless connectivity between different services and applications.",
            "Version Control with Git" => "Proficient in using Git for version control, facilitating efficient collaboration and code management.",
            "Problem-Solving" => "Strong analytical skills for troubleshooting issues and optimizing code for better performance and scalability.",
            "Project Management" => "Effective in managing projects from conception to deployment, ensuring timely delivery and adherence to client requirements.",
            "Unit Testing" => "Proficient in writing unit tests using PHPUnit to ensure code reliability and prevent regressions.",
            "Responsive Design" => "Skilled in creating mobile-friendly websites that adapt to different screen sizes, enhancing user experience across devices.",
            "SEO Optimization" => "Knowledgeable in applying SEO best practices to improve website visibility and search engine rankings.",
            "Payment Gateway Integration" => "Experienced in integrating various payment gateways like Stripe and PayPal to facilitate secure online transactions.",
            "DevOps Practices" => "Familiar with DevOps tools and practices, including continuous integration and deployment (CI/CD), to streamline development workflows and improve deployment efficiency.",
            "AJAX" => "Proficient in using AJAX for asynchronous web requests, improving user experience by enabling dynamic content updates without page reloads.",
            "OAuth Authentication" => "Experienced in implementing OAuth protocols for secure user authentication and authorization in web applications.",
            "Docker" => "Knowledgeable in containerization with Docker, allowing for consistent development and deployment environments.",
            "GraphQL" => "Skilled in using GraphQL for flexible and efficient data querying, enhancing API performance and reducing over-fetching of data.",
            "Cross-Browser Compatibility" => "Ensuring websites function smoothly across different browsers and platforms, providing a consistent experience for all users.",
            "Blade Templating" => "Proficient in using Laravel’s Blade templating engine to create clean and efficient views.",
            "RESTful Services" => "Experienced in designing and consuming RESTful web services for robust and scalable applications.",
            "Eloquent ORM" => "Skilled in using Laravel’s Eloquent ORM for database interactions, ensuring clean and readable code.",
            "CSS Preprocessors" => "Proficient in using Sass and LESS for advanced CSS development and maintainable stylesheets.",
            "Webpack" => "Knowledgeable in using Webpack for module bundling and asset optimization in modern web applications.",
            "AJAX" => "Skilled in making asynchronous web requests to enhance user experience without reloading the page.",
            "Authentication and Authorization" => "Proficient in implementing secure user authentication and role-based access control.",
            "Middleware" => "Experienced in using Laravel middleware for request filtering and processing.",
            "Performance Optimization" => "Skilled in optimizing web application performance, including code and database optimization.",
            "Mail Services" => "Proficient in configuring and sending emails using Laravel’s Mail services.",
            "Task Scheduling" => "Experienced in setting up and managing cron jobs using Laravel’s task scheduling feature.",
            "Database Migrations" => "Proficient in using Laravel migrations for version control of database schemas.",
            "Event Broadcasting" => "Skilled in real-time event broadcasting using Laravel Echo and WebSockets.",
            "Blade Components" => "Experienced in creating reusable Blade components for modular and maintainable front-end code.",
            "Security Best Practices" => "Knowledgeable in applying security best practices to protect web applications from common vulnerabilities.",
            "Artisan CLI" => "Proficient in using Laravel’s Artisan command-line interface for development and maintenance tasks.",
            "Vue.js" => "Skilled in integrating Vue.js with Laravel for building reactive and dynamic user interfaces.",
            "Session Management" => "Experienced in managing user sessions and state in web applications.",
            "Validation" => "Proficient in implementing data validation to ensure data integrity and user input sanitation.",
            "Routing" => "Skilled in defining and managing routes in Laravel for clean and organized URL structures.",
            "Caching" => "Experienced in using caching strategies to improve application performance and reduce server load.",
            "Laravel Mix" => "Proficient in using Laravel Mix for asset compilation and optimization.",
            "Queues" => "Knowledgeable in using Laravel queues for background processing and job handling.",
            "Form Handling" => "Skilled in creating and processing forms in Laravel, ensuring secure and user-friendly interfaces.",
            "Database Seeding" => "Experienced in using database seeding to populate development and testing databases with sample data.",
            "Third-Party Packages" => "Proficient in integrating and managing third-party packages and libraries in Laravel.",
            "Command Bus" => "Skilled in using Laravel’s command bus for handling complex business logic.",
            "Microservices" => "Experienced in designing and developing microservices architecture for scalable applications.",
            "Unit Testing" => "Proficient in writing unit tests with PHPUnit to ensure application reliability.",
            "Laravel Forge" => "Skilled in using Laravel Forge for server management and deployment automation."
        ];

        foreach ($skills as $key => $skill) {
            Skill::create([
                'name' => $key,
                'slug' => Str::slug($key),
                'description' => $skill,
                'category_id' => rand(1, 4),
                'author_id' => 1,
                'status' => 1,
            ]);
        }
    }
}
