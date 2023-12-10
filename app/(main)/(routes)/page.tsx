import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p className="text-6xl font-semibold text-indigo-400">Hello world</p>
      <Button>Discord clone</Button>
    </div>
  );
}
