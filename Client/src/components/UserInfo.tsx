"use client";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";

export default function UserInfo() {
  const router = useRouter();
  return (
<div style={{display:"flex", justifyContent:"center", alignItems:"center", height:'100vh',width:'100%'}}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:'100vh',width:'200px'}}>
  
        <Button variant="outline" style={{width:'10%'}} onClick={() => router.push("/cards")}>infinite scroll</Button>
        </div>
        </div>




  );
}
