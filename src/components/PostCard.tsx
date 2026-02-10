import type { Post } from "@/types";
import { Trash2, Pencil } from "lucide-react";

interface Props {
  post: Post;
  onEdit: (post: Post) => void;
}

const PostCard = ({ post, onEdit }: Props) => {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="flex items-center justify-between bg-[hsl(222,62%,55%)] px-6 py-4">
        <h3 className="text-[22px] font-bold text-white">{post.title}</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {}}
            className="text-white transition-opacity hover:opacity-80"
            aria-label="Delete post"
          >
            <Trash2 size={22} />
          </button>
          <button
            onClick={() => onEdit(post)}
            className="text-white transition-opacity hover:opacity-80"
            aria-label="Edit post"
          >
            <Pencil size={22} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-lg font-bold text-muted-foreground">
            @{post.username}
          </span>
        </div>
        <p className="whitespace-pre-wrap text-lg text-foreground">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
