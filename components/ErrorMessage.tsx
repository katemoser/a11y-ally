export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div role="alert" className="alert alert-error flex justify-between m-10">
      <span>{message}</span>

        <a href="/" className="btn btn-sm">Go Back Home</a>

    </div>
  );
}
import React from "react";
