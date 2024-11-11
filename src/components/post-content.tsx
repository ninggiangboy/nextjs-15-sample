import { getPost } from "@/lib/data";

export default async function PostContent({ id }: { id: number }) {
  const post = await getPost(id);
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className=" mb-2">{post.body}</p>
      <small>Author ID: {post.userId}</small>
    </div>
  );
}
