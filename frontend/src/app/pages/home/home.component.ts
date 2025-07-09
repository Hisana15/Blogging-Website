import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  navigateToDetails(id: number) {
   this.router.navigate(['/details',id]);

  }
  blogPost = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt:
        'Explore the latest trends in full-stack development including Angular, React, and more.',
      content: 'Full article content goes here...',
      author: 'John Doe',
      date: '2025-06-17',
      imageUrl: 'https://source.unsplash.com/featured/?technology',
    },
    {
      id: 2,
      title: '10 Tips to Improve Your Coding Skills',
      excerpt:
        'Simple and effective ways to become a better programmer in 2025.',
      content: 'Full article content goes here...',
      author: 'Jane Smith',
      date: '2025-06-15',
      imageUrl: 'https://source.unsplash.com/featured/?programming',
    },
    {
      id: 3,
      title: 'How to Start a Tech Blog',
      excerpt:
        "A complete beginner's guide to launching and growing your tech blog.",
      content: 'Full article content goes here...',
      author: 'Alex Johnson',
      date: '2025-06-10',
      imageUrl: 'https://source.unsplash.com/featured/?blogging',
    },
    {
      id: 4,
      title: 'Angular vs React: Which One to Choose?',
      excerpt:
        'A detailed comparison of two popular frontend frameworks in 2025.',
      content: 'Full article content goes here...',
      author: 'Sarah Lee',
      date: '2025-06-05',
      imageUrl: 'https://source.unsplash.com/featured/?frontend',
    },
    {
      id: 5,
      title: 'The Role of AI in Content Creation',
      excerpt: 'How AI is transforming writing, editing, and media production.',
      content: 'Full article content goes here...',
      author: 'David Kim',
      date: '2025-06-01',
      imageUrl: 'https://source.unsplash.com/featured/?artificialintelligence',
    },
  ];
}
