import { Button } from "@/components/ui/button";
import { Annoyed } from "lucide-react";


export default function Home() {
  return (
    <div>
      <Button variant= "destructive">
        <Annoyed className="w-55 h-55" />
        CLICK ME
        </Button>
    </div>  
  
  );
}
