import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data'; // *** IMPORT FROM DATA.TS ***

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'heritage', name: 'Heritage & Culture' },
    { id: 'travel', name: 'Travel Tips' },
    { id: 'dining', name: 'Culinary Experiences' },
    { id: 'wellness', name: 'Wellness & Spa' },
    { id: 'events', name: 'Events & Celebrations' }
  ];

  // *** REMOVE THE LOCAL blogPosts ARRAY DEFINITION ***
  // const blogPosts = [ ... ]; // DELETE THIS

  const filteredPosts = blogPosts.filter(post => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(lowerSearchTerm) ||
                         post.excerpt.toLowerCase().includes(lowerSearchTerm) ||
                         (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm))); // Also search tags
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Use the first post from the imported data as featured, or handle empty case
  const featuredPost = blogPosts.length > 0 ? blogPosts[0] : null;

  return (
    <div className="min-h-screen pt-20 bg-ivory-sand">
      {/* Header */}
      <div className="bg-royal-maroon text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Heritage Stories</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover the rich culture, history, and traditions of Rajasthan through our curated collection of stories
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-palace-beige sticky top-20 z-30"> {/* Made filters sticky */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-grow w-full md:w-auto md:max-w-md"> {/* Adjusted width */}
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-ink/50" />
              <input
                type="text"
                placeholder="Search articles by title, content, or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2"> {/* Centered tags on mobile */}
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-sm px-4 py-2 rounded-full transition-colors duration-300 ${ // Adjusted padding/size
                    selectedCategory === category.id
                      ? 'bg-royal-maroon text-white'
                      : 'bg-palace-beige text-charcoal-ink hover:bg-antique-gold hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post - Check if featuredPost exists */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-royal-maroon mb-4">Featured Story</h2>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-palace-beige hover:shadow-2xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8"> {/* Removed gap on small screens */}
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-antique-gold text-white px-4 py-2 rounded-full font-medium capitalize shadow-md">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="font-serif text-3xl font-bold text-royal-maroon mb-4">{featuredPost.title}</h3>
                  <p className="text-charcoal-ink/80 text-lg leading-relaxed mb-6 line-clamp-3">{featuredPost.excerpt}</p> {/* Limited lines */}

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-sm text-charcoal-ink/60"> {/* Used flex-wrap */}
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  {/* Display Tags */}
                  {featuredPost.tags && featuredPost.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                          {featuredPost.tags.map((tag, index) => (
                          <span key={index} className="bg-palace-beige text-charcoal-ink px-3 py-1 rounded-full text-xs font-medium">
                              #{tag} {/* Added hash */}
                          </span>
                          ))}
                      </div>
                  )}

                  <Link
                    to={`/blog/${featuredPost.id}`} // Correct link
                    className="inline-flex items-center space-x-2 bg-royal-maroon text-white px-6 py-3 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300 w-fit font-medium"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-palace-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-royal-maroon mb-4">Latest Stories</h2>
            <p className="text-lg text-charcoal-ink/70 max-w-2xl mx-auto">
              Explore our collection of articles about heritage, culture, and luxury experiences
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Skip the first post if it was the featured one */}
              {filteredPosts.filter(p => p.id !== featuredPost?.id).map((post) => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-palace-beige flex flex-col"> {/* Added flex flex-col */}
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-antique-gold text-white px-3 py-1 rounded-full text-xs font-medium capitalize shadow"> {/* Adjusted size */}
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow */}
                    <h3 className="font-serif text-xl font-bold text-royal-maroon mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-charcoal-ink/75 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p> {/* Added flex-grow */}

                    <div className="flex items-center justify-between text-xs text-charcoal-ink/60 mb-4 mt-auto pt-4 border-t border-palace-beige/50"> {/* Added mt-auto, pt, border */}
                      <div className="flex items-center space-x-1 overflow-hidden whitespace-nowrap"> {/* Prevent author name wrap */}
                        <User className="h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 flex-shrink-0"> {/* Prevent date wrap */}
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${post.id}`} // Correct link
                      className="text-antique-gold hover:text-royal-maroon transition-colors duration-300 font-medium text-sm flex items-center space-x-1 self-end" // Aligned right
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
             <div className="text-center py-12">
               <p className="text-lg text-charcoal-ink/60">No articles found matching your search criteria.</p>
             </div>
           )}
        </div>
      </section>

      {/* Newsletter Signup */}
      {/* ... (Newsletter section remains the same) ... */}
       <section className="py-16 bg-royal-maroon text-white">
         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
           <h2 className="font-serif text-4xl font-bold mb-4">Stay Updated</h2>
           <p className="text-xl text-white/90 mb-8">
             Subscribe to our newsletter for the latest stories and cultural insights
           </p>
           <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
             <input
               type="email"
               placeholder="Enter your email address"
               className="flex-1 px-4 py-3 rounded-lg text-charcoal-ink focus:outline-none focus:ring-2 focus:ring-antique-gold"
             />
             <button className="bg-antique-gold text-white px-6 py-3 rounded-lg hover:bg-antique-gold/90 transition-colors duration-300 font-medium">
               Subscribe
             </button>
           </div>
         </div>
       </section>
    </div>
  );
};

export default Blog;