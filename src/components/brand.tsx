import { Link } from "@tanstack/react-router";
import { Network } from "lucide-react";
import { cn } from "@/lib/utils";
export function Brand({compact=false,className}:{compact?:boolean;className?:string}){return <Link to="/" className={cn("group flex items-center gap-2.5",className)} aria-label="STANDARDOS home"><span className="brand-mark"><Network className="size-4 transition-transform duration-200 group-hover:rotate-6"/></span>{!compact&&<span><span className="block text-[15px] font-extrabold tracking-[.08em] text-primary">STANDARDOS</span><span className="block text-[8px] font-semibold uppercase tracking-[.16em] text-muted-foreground">Specifications to certainty</span></span>}</Link>}
