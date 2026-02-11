import { formatDistanceToNow } from "date-fns";
import { Trash2, Pencil } from "lucide-react";
import type { Post } from "@/types";
import { Button } from "./ui/button";

interface Props {
  post: Post;
  isOwner: boolean;
  onDelete: (id: number) => void;
  onEdit: (post: Post) => void;
}

const PostCard = ({ post, isOwner, onEdit, onDelete }: Props) => {
  const timeAgo = formatDistanceToNow(new Date(post.created_datetime), {
    addSuffix: true,
  });

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="flex items-center justify-between bg-[hsl(222,62%,55%)] px-6 py-4">
        <h3 className="text-[22px] font-bold text-white">{post.title}</h3>
        <div className="flex items-center gap-3">
          {isOwner && (
            <>
              <button
                onClick={() => onDelete(post.id)}
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
            </>
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-lg font-bold text-muted-foreground">
            @{post.username}
          </span>
          <span className="text-lg text-muted-foreground">{timeAgo}</span>
        </div>
        <p className="whitespace-pre-wrap text-lg text-foreground">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
