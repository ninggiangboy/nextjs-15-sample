export default function PostsListSkeleton() {
  return (
    <div>
      <ul className="space-y-4">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <li
              key={index}
              className="p-4 border border-gray-300 dark:border-gray-500 rounded-lg shadow-sm animate-pulse"
            >
              <div className="h-4 bg-gray-300 dark:bg-gray-500  rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-1/5"></div>
            </li>
          ))}
      </ul>
    </div>
  );
}
