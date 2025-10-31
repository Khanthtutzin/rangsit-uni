import React from 'react';
import { Card } from '@/components/ui/card';

const posts = [
  {
    title: 'Understanding Anxiety and How to Cope',
    date: 'October 25, 2025',
    excerpt: 'Anxiety is a common human experience, but it can sometimes become overwhelming. In this post, we explore the causes of anxiety and effective coping strategies.',
  },
  {
    title: 'The Importance of Self-Care for Mental Well-being',
    date: 'October 18, 2025',
    excerpt: 'Self-care is not just a buzzword; it\'s an essential practice for maintaining good mental health. Learn how to incorporate self-care into your daily routine.',
  },
  {
    title: 'Building Healthy Relationships',
    date: 'October 11, 2025',
    excerpt: 'Strong, healthy relationships are a cornerstone of a happy life. This article provides tips for building and maintaining positive connections with others.',
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">From Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="p-8">
              <h3 className="text-xl font-bold mb-4">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{post.date}</p>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
