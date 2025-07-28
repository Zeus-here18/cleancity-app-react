import React from 'react';
import {
  Calendar,
  User,
  ArrowRight,
  Leaf,
  Recycle,
  Droplets,
} from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'The Power of Community-Driven Change',
      excerpt: 'Discover how grassroots movements are reshaping our world.',
      content: '',
      author: 'Dr. Sarah Chen',
      publishedAt: new Date('2025-01-20T10:00:00'),
      category: 'Community Impact',
      image: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg',
    },
    {
      id: '2',
      title: 'Sustainability Starts with Us',
      excerpt: 'Learn how small actions can lead to a more sustainable future.',
      content: '',
      author: 'Raj Patel',
      publishedAt: new Date('2025-01-22T14:30:00'),
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/3810757/pexels-photo-3810757.jpeg',
    },
    {
      id: '3',
      title: 'Clean Water for All: A Global Mission',
      excerpt: 'Access to clean water is a basic human right.',
      content: '',
      author: 'Amara Nkrumah',
      publishedAt: new Date('2025-01-25T09:15:00'),
      category: 'Water Access',
      image: 'https://images.pexels.com/photos/2952871/pexels-photo-2952871.jpeg',
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Community Impact': 'bg-green-100 text-green-700',
      Sustainability: 'bg-blue-100 text-blue-700',
      'Water Access': 'bg-indigo-100 text-indigo-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              alt={post.title}
              className="w-full h-48 object-cover"
              src={post.image}
            />
            <div className="p-4 flex flex-col flex-grow">
              <span
                className={`text-xs font-semibold uppercase tracking-wide mb-2 px-2 py-1 rounded-full self-start ${getCategoryColor(
                  post.category
                )}`}
              >
                {post.category}
              </span>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
              <div className="text-sm text-gray-500 flex items-center mb-2">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="text-sm text-gray-500 flex items-center mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                {post.publishedAt.toLocaleDateString()}
              </div>
              <button className="text-sm font-medium text-primary flex items-center hover:underline mt-auto">
                Read More <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
