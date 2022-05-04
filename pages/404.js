import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //   router.go(1);
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div className="notFound">
      <h1>Opppppps</h1>
      <h2>Page not found</h2>
      <p>
        Go to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
