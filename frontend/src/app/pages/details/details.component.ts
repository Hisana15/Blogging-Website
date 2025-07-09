import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  postdetails = {
    id: 1,
    title: 'The Future of Web Development',
    excerpt:
      'Explore the latest trends in full-stack development including Angular, React, and more.',
    content: `
    Web development is evolving rapidly with emerging technologies shaping the way we build applications.
    
    **1. Front-End Frameworks**  
    Modern front-end frameworks like React, Angular, and Vue.js offer powerful tools for creating dynamic user interfaces. These frameworks improve development efficiency and user experience.

    **2. Back-End Advancements**  
    Node.js, Django, and Laravel are streamlining backend development with better scalability and security features. Serverless architectures are also gaining popularity.

    **3. Progressive Web Apps (PWAs)**  
    PWAs combine the best of web and mobile apps. They provide offline capabilities, fast loading, and native-like experiences.

    **4. AI and Automation**  
    AI-powered tools like Copilot and automated testing frameworks are reducing development time and improving code quality.

    **5. Web 3.0 and Blockchain Integration**  
    With decentralization and blockchain on the rise, Web 3.0 is changing how data is owned and distributed online.

    **Conclusion**  
    Staying updated with these trends is essential for developers looking to remain competitive in the tech landscape.
  `,
    author: 'John Doe',
    date: '2025-06-17',
    imageUrl: 'https://source.unsplash.com/featured/?technology',
  };
}
