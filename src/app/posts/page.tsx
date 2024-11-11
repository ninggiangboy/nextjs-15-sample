import { getPosts } from "@/lib/data";
import Link from "next/link";

export default async function Posts({
  searchParams,
}: {
  searchParams: Promise<{ page: number }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page ?? 1);
  const posts = await getPosts({ page });
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
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
        {currentPage != 1 && (
          <Link href={`posts`} className="px-4 py-2 rounded-lg  border-2">
            First
          </Link>
        )}
        {currentPage > 1 && (
          <Link
            href={`posts/?page=${currentPage - 1}`}
            className="px-4 py-2 rounded-lg  border-2"
          >
            Previous
          </Link>
        )}
        {posts.length === 10 && (
          <Link
            href={`posts/?page=${currentPage + 1}`}
            className="px-4 py-2 rounded-lg border-2"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}