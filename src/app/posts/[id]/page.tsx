import BackButton from "@/components/back-button";
import CommentsList from "@/components/comments-list";
import CommentsListSkeleton from "@/components/comments-list-skeleton";
import PostContent from "@/components/post-content";
import PostContentSkeleton from "@/components/post-content-skeleton";
import { Suspense } from "react";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  return (
    <div className="container mx-auto p-4">
      <BackButton>Back to list</BackButton>
      <Suspense fallback={<PostContentSkeleton />}>
        <PostContent id={id} />
      </Suspense>
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <Suspense fallback={<CommentsListSkeleton />}>
        <CommentsList id={id} />
      </Suspense>
    </div>
  );
}
