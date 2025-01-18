const CommentForm = () => {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Post a Comment</h2>
        <form className="space-y-6">
          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>
          {/* Comment Field */}
          <textarea
            placeholder="Write a comment"
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
            required
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            Post a Comment
          </button>
        </form>
      </div>
    );
  };
  
  export default CommentForm;
  