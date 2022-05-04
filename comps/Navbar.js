import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Image src="/vercel.svg" width="80px" height="80px" />
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
