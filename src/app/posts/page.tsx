import PostsList from "@/components/posts-list";
import PostsListSkeleton from "@/components/posts-list-skeleton";
import Link from "next/link";
import { Suspense } from "react";

export default async function Posts({
  searchParams,
}: {
  searchParams: Promise<{ page: number }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page ?? 1);
  return (
    <div className="container mx-auto p-4">
      <Link href="/">Go home</Link>
      <h1 className="text-3xl font-bold my-6">Posts</h1>
      <Suspense key={currentPage} fallback={<PostsListSkeleton />}>
        <PostsList page={currentPage} />
      </Suspense>
    </div>
  );
}
