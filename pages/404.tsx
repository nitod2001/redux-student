import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>
        Going to back <Link href="/">Homepage</Link> in 2 seconds{" "}
      </p>
    </div>
  );
}
