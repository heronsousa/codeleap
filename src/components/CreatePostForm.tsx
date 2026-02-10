import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  onSubmit: (title: string, content: string) => Promise<void>;
}

const CreatePostForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setLoading(true);
    await onSubmit(title.trim(), content.trim());
    setTitle("");
    setContent("");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-[22px] font-bold text-foreground">What's on your mind?</h2>
      <label className="mb-1 block text-base font-normal text-foreground">Title</label>
      <Input
        placeholder="Hello world"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4"
      />
      <label className="mb-1 block text-base font-normal text-foreground">Content</label>
      <Textarea
        placeholder="Content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mb-4 min-h-[74px]"
      />
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={!title.trim() || !content.trim() || loading}
          className="bg-[hsl(222,62%,55%)] px-8 uppercase tracking-wider text-white hover:bg-[hsl(222,62%,48%)] disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create"}
        </Button>
      </div>
    </form>
  );
};

export default CreatePostForm;
