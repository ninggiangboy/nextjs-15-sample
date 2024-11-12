import { getComments } from "@/lib/api/comments";

export default async function CommentsList({ id }: { id: number }) {
  const comments = await getComments(id);
  return (
    <>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="p-4 border border-gray-300 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold">{comment.name}</h3>
            <p>{comment.body}</p>
            <small>Email: {comment.email}</small>
          </li>
        ))}
      </ul>
    </>
  );
}
