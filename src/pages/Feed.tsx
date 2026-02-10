import EditPostModal from "@/components/EditPostModal";
import PostCard from "@/components/PostCard";
import type { Post } from "@/types";
import { useCallback, useState } from "react";

const POSTS: Post[] = [
  {
    id: 1,
    content: "Cotent goes here.",
    title: "Title",
    username: "Heron",
  },
  {
    id: 2,
    content: "Cotent goes here.",
    title: "Title",
    username: "Heron",
  },
  {
    id: 3,
    content: "Cotent goes here.",
    title: "Title",
    username: "Heron",
  },
];

function Feed() {
  const [editPost, setEditPost] = useState<Post | null>(null);

  const handleEdit = useCallback(
    async (id: number, title: string, content: string) => {
      console.log({ id, title, content });
    },
    [],
  );

  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-30 flex items-center justify-between bg-[hsl(222,62%,55%)] px-6 py-4">
        <h1 className="text-[22px] font-bold text-white">CodeLeap Network</h1>
      </header>

      <main className="mx-auto max-w-[800px] space-y-6 p-6">
        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} onEdit={setEditPost} />
        ))}
      </main>

      <EditPostModal
        post={editPost}
        open={editPost !== null}
        onOpenChange={(open) => !open && setEditPost(null)}
        onSave={handleEdit}
      />
    </div>
  );
}

export default Feed;
