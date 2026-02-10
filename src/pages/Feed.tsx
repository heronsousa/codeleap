import DeletePostModal from "@/components/DeletePostModal";
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
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [editPost, setEditPost] = useState<Post | null>(null);

  const handleEdit = useCallback(
    async (id: number, title: string, content: string) => {
      console.log({ id, title, content });
    },
    [],
  );

  const handleDelete = useCallback(async () => {
    console.log(deleteId);
  }, [deleteId]);

  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-30 flex items-center justify-between bg-[hsl(222,62%,55%)] px-6 py-4">
        <h1 className="text-[22px] font-bold text-white">CodeLeap Network</h1>
      </header>

      <main className="mx-auto max-w-[800px] space-y-6 p-6">
        {POSTS.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onDelete={(id: number) => setDeleteId(id)}
            onEdit={(post: Post) => setEditPost(post)}
          />
        ))}
      </main>

      <EditPostModal
        post={editPost}
        open={editPost !== null}
        onOpenChange={(open) => !open && setEditPost(null)}
        onSave={handleEdit}
      />

      <DeletePostModal
        open={deleteId !== null}
        onOpenChange={(open) => !open && setDeleteId(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default Feed;
