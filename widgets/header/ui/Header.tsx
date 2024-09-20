import { Button } from "@/shared/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-3 py-3">
      <Image src="/favicon.ico" width={50} height={50} alt="Logo" />
      <div className="flex items-center gap-4">
        <Link href="/sign-in">
          <Button variant="ghost">Sign In</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="outline">Sign Up</Button>
        </Link>
      </div>
    </header>
  );
};
