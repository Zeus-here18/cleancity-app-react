import React from 'react';
import { Calendar, User, ArrowRight, Leaf, RefreshCcw, BookOpen } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'The Power of Community-Driven Cleanup',
      excerpt: 'Discover how grassroots movements are reshaping city cleanliness...',
      content: '',
      author: 'Dr. Sarah Chen',
      publishedAt: new Date('2025-01-20T10:00:00'),
      category: 'Community Impact',
      image: 'https://images.pexels.com/photo-3184418/pexels-photo-3184418.jpeg',
    },
    {
      id: '2',
      title: 'Innovative Waste Segregation Techniques',
      excerpt: 'Learn about the latest advancements in smart waste sorting technologies...',
      content: '',
      author: 'Prof. Arjun Nair',
      publishedAt: new Date('2025-02-10T14:30:00'),
      category: 'Innovation',
      image: 'https://images.pexels.com/photo-3861482/pexels-photo-3861482.jpeg',
    },
    {
      id: '3',
      title: 'The Economics of Clean Cities',
      excerpt: 'An analytical dive into how cleanliness drives urban growth...',
      content: '',
      author: 'Dr. Emily Singh',
      publishedAt: new Date('2025-03-05T09:15:00'),
      category: 'Economics',
      image: 'https://images.pexels.com/photo-3184465/pexels-photo-3184465.jpeg',
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Community Impact':
        return <Leaf className="text-green-500 w-5 h-5 inline mr-1" />;
      case 'Innovation':
        return <RefreshCcw className="text-blue-500 w-5 h-5 inline mr-1" />;
      case 'Economics':
        return <BookOpen className="text-yellow-500 w-5 h-5 inline mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Clean City Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                {getCategoryIcon(post.category)}
                <span className="mr-4">{post.category}</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>{post.publishedAt.toDateString()}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-blue-600 hover:underline cursor-pointer">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
