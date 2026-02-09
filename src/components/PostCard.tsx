import { Trash2, Pencil } from "lucide-react";

const PostCard = () => {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="flex items-center justify-between bg-[hsl(222,62%,55%)] px-6 py-4">
        <h3 className="text-[22px] font-bold text-white">My First Post</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {}}
            className="text-white transition-opacity hover:opacity-80"
            aria-label="Delete post"
          >
            <Trash2 size={22} />
          </button>
          <button
            onClick={() => {}}
            className="text-white transition-opacity hover:opacity-80"
            aria-label="Edit post"
          >
            <Pencil size={22} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-lg font-bold text-muted-foreground">@Heron</span>
        </div>
        <p className="whitespace-pre-wrap text-lg text-foreground">Post content goes here.</p>
      </div>
    </div>
  );
};

export default PostCard;
