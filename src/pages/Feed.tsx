import CreatePostForm from "@/components/CreatePostForm";
import DeletePostModal from "@/components/DeletePostModal";
import EditPostModal from "@/components/EditPostModal";
import PostCard from "@/components/PostCard";
import { useUser } from "@/context/UserContext";
import { api } from "@/services/api";
import type { Post } from "@/types";
import { LogOut } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Feed() {
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [editPost, setEditPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const { username, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/", { replace: true });
      return;
    }

    getPosts();
  }, [username, navigate]);

  async function getPosts() {
    const response = await api.getPosts();

    setPosts(response);
  }

  const handleEdit = useCallback(
    async (id: number, title: string, content: string) => {
      await api.updatePost(id, { title, content });
      setPosts((state) =>
        state.map((post) =>
          post.id === id ? { ...post, title, content } : post,
        ),
      );
      setEditPost(null);
    },
    [],
  );

  const handleDelete = useCallback(async () => {
    if (deleteId === null) return;

    await api.deletePost(deleteId);
    setPosts((state) => state.filter((post) => post.id !== deleteId));
    setDeleteId(null);
  }, [deleteId]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleCreate = useCallback(
    async (title: string, content: string) => {
      await api.createPost({ username, title, content });
      setPosts(await api.getPosts());
    },
    [username],
  );

  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-30 flex items-center justify-between bg-[hsl(222,62%,55%)] px-6 py-4">
        <h1 className="text-[22px] font-bold text-white">CodeLeap Network</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-white transition-opacity hover:opacity-80"
          aria-label="Logout"
        >
          <LogOut size={20} />
        </button>
      </header>

      <main className="mx-auto max-w-[800px] space-y-6 p-6">
        <CreatePostForm onSubmit={handleCreate} />

        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            isOwner={post.username === username}
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
