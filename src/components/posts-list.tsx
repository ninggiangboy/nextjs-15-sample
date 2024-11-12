import { getPosts } from "@/lib/api/posts";
import Link from "next/link";

export default async function PostsList({ page }: { page: number }) {
  const posts = await getPosts({ page });
  return (
    <>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Link
              href={`/posts/${post.id}`}
              className="text-xl font-semibold mb-2"
            >
              {post.title}
            </Link>
            <p className="mb-2 truncate">{post.body}</p>
            <small>Author ID: {post.userId}</small>
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-2 mt-6">
        {page != 1 && (
          <Link href={`posts`} className="px-4 py-2 rounded-lg  border-2">
            First
          </Link>
        )}
        {page > 1 && (
          <Link
            href={`posts/?page=${page - 1}`}
            className="px-4 py-2 rounded-lg  border-2"
          >
            Previous
          </Link>
        )}
        {posts.length === 10 && (
          <Link
            href={`posts/?page=${page + 1}`}
            className="px-4 py-2 rounded-lg border-2"
          >
            Next
          </Link>
        )}
      </div>
    </>
  );
}
