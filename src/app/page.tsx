import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button className="no-underline text-white text-2xl p-4">
        <a href="/home" className="text-white">
          Go to Okairi page
        </a>
      </Button>
    </div>
  );
}
