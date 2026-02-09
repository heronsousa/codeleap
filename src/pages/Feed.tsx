import PostCard from "@/components/PostCard";

function Feed() {
  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-30 flex items-center justify-between bg-[hsl(222,62%,55%)] px-6 py-4">
        <h1 className="text-[22px] font-bold text-white">CodeLeap Network</h1>
      </header>

      <main className="mx-auto max-w-[800px] space-y-6 p-6">
        <PostCard />
      </main>
    </div>
  );
}

export default Feed;
