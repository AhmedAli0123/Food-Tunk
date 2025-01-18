import { FaUserCircle } from "react-icons/fa";

const comments = [
  {
    id: 1,
    name: "MD Sojib Khan",
    date: "June 22, 2020",
    comment: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "MD Moon Khan",
    date: "June 22, 2020",
    comment: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "MD Qulli Khan",
    date: "June 22, 2020",
    comment: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const CommentSection = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Comments - 03</h2>
      <div className="space-y-6">
        {comments.map(({ id, name, date, comment }) => (
          <div key={id} className="flex items-start space-x-4">
            {/* Profile Picture */}
            <FaUserCircle className="w-12 h-12 text-gray-500" />
            {/* Comment Content */}
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold">{name}</h3>
                <span className="text-sm text-gray-500">{date}</span>
              </div>
              <p className="text-gray-700 mt-1">{comment}</p>
              <button className="text-sm text-orange-500 font-semibold mt-2">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
