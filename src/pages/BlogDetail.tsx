import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Tag as TagIcon } from 'lucide-react'; // Renamed Tag to TagIcon to avoid conflict
import { blogPosts } from '../data'; // *** IMPORT FROM DATA.TS ***

const BlogDetail = () => {
  const { id } = useParams();

  // Find the post matching the id from the URL. Ensure id is treated as a number.
  const postId = Number(id);
  const post = blogPosts.find(p => p.id === postId);

  // Handle case where post is not found
  if (!post) {
    return (
      <div className="min-h-screen pt-20 bg-ivory-sand flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-4xl font-bold text-royal-maroon mb-4">Post Not Found</h1>
        <p className="text-lg text-charcoal-ink/70 mb-6">Sorry, we couldn't find the blog post you were looking for.</p>
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 bg-royal-maroon text-white px-6 py-3 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Link>
      </div>
    );
  }

  // Render the found post
  return (
    <div className="min-h-screen pt-20 bg-ivory-sand">
      {/* Back Button Header */}
      <div className="bg-white border-b border-palace-beige sticky top-20 z-30"> {/* Made sticky */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4"> {/* Increased max-width */}
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-charcoal-ink hover:text-royal-maroon transition-colors duration-300 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Stories</span>
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {/* Adjusted max-width and padding */}
        <article>
          {/* Header Section */}
          <header className="mb-8 border-b border-palace-beige pb-6">
             <div className="mb-4">
                <span className="bg-antique-gold text-white px-4 py-1 rounded-full text-sm font-medium capitalize">
                  {post.category}
                </span>
             </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-royal-maroon mb-4 leading-tight">{post.title}</h1>
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-charcoal-ink/70">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
               <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <img src={post.image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-2xl mb-8 shadow-lg" />

          {/* Post Content */}
          {/* Apply Tailwind typography styles for nice HTML rendering */}
          <div
             className="prose prose-lg lg:prose-xl max-w-none text-charcoal-ink/90 prose-headings:text-royal-maroon prose-headings:font-serif prose-a:text-antique-gold hover:prose-a:text-royal-maroon prose-strong:text-charcoal-ink"
             dangerouslySetInnerHTML={{ __html: post.content }} // Render the HTML content
           >
             {/* The HTML content from data.ts will be rendered here */}
          </div>

           {/* Tags Section */}
           {post.tags && post.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-palace-beige">
                  <h4 className="text-sm font-semibold text-charcoal-ink mb-3 uppercase tracking-wider">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                      <span key={index} className="bg-palace-beige text-charcoal-ink px-3 py-1 rounded-full text-xs font-medium cursor-default">
                          #{tag}
                      </span>
                      ))}
                  </div>
              </div>
            )}

        </article>
      </div>
    </div>
  );
};

export default BlogDetail;