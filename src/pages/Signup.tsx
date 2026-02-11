import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { debounce } from "@/utils/debounce";
import { useUser } from "@/context/UserContext";

const Signup = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const { setUsername } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setUsername(input.trim());
    navigate("/feed");
  };

  const handleInputChange = debounce((value: string) => {
    setInput(value);
  }, 300);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[500px] rounded-2xl border bg-card p-6 shadow-lg"
      >
        <h1 className="mb-2 text-[22px]! font-bold text-foreground">
          Welcome to CodeLeap network!
        </h1>
        <p className="mb-4 text-base text-foreground">
          Please enter your username
        </p>
        <Input
          placeholder="John doe"
          defaultValue={input}
          onChange={(e) => handleInputChange(e.target.value)}
          className="mb-4"
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={!input.trim()}
            className="bg-[hsl(222,62%,55%)] px-8 uppercase tracking-wider text-white hover:bg-[hsl(222,62%,48%)] disabled:opacity-50"
          >
            Enter
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;