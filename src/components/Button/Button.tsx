"use client";

import styles from "./styles/styles.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ButtonInterface {
  text: string;
  /**
   * "SUBMISSION" -> button acts as a submit button for a form
   * "ROUTING" -> button navigates programmatically to `route`
   */
  type: "ROUTING" | "SUBMISSION";
  /**
   * Only used if type === "ROUTING".
   * If type === "SUBMISSION", this can be ignored or left as an empty string.
   */
  route?: string;
  color: "PINK" | "WHITE" | "PINK_BLACK";
}

const Button: React.FC<ButtonInterface> = ({ text, type, route, color }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Only handle routing if type is ROUTING
    if (type === "ROUTING") {
      e.preventDefault(); // Prevent any default form submission if inside a form
      setLoading(true);
      if (route) {
        router.push(route);
      }
    }
  };

  function returnClass() {
    switch (color) {
      case "PINK":
        return "default-btn";
      case "WHITE":
        return "default-btn active";
      case "PINK_BLACK":
        return "default-btn btn-two";
      default:
        return "default-btn";
    }
  }

  return (
    <button
      /**
       * If the type is "SUBMISSION", this button is a submit button (for a form).
       * If the type is "ROUTING", it's just a regular button that triggers navigation.
       */
      type={type === "SUBMISSION" ? "submit" : "button"}
      disabled={loading}
      onClick={handleClick}
      className={`${returnClass()} ${styles.button}`}
    >
      {loading ? "Please wait..." : text}
    </button>
  );
};

export default Button;
