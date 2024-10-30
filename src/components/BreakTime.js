import Button from "./Button";
import { useEffect } from "react";

export default function BreakTime({ handleBreakOver }) {
  useEffect(() => {
    const confettiCount = 300;
    const colors = [
      "#0cd9d0",
      "#ea1cff",
      "#FF93DE",
      "#5767ED",
      "#1c1fff",
      "#8497B0",
    ];

    for (let i = 0; i < confettiCount; i++) {
      const randomRotation = Math.floor(Math.random() * 360);
      const randomScale = Math.random();
      const randomWidth = Math.floor(
        Math.random() *
          Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      );
      const randomHeight = Math.floor(
        Math.random() *
          Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 500
          )
      );
      const randomAnimationDelay = Math.floor(Math.random() * 15);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.top = `${randomHeight}px`;
      confetti.style.right = `${randomWidth}px`;
      confetti.style.backgroundColor = randomColor;
      confetti.style.opacity = randomScale;
      confetti.style.transform = `scale(${randomScale}) skew(15deg) rotate(${randomRotation}deg)`;
      confetti.style.animationDelay = `${randomAnimationDelay}s`;

      document.getElementById("confetti-wrapper").appendChild(confetti);
    }
  }, []);

  return (
    <div id="break-time">
      <Button
        buttonText={"Back to Work"}
        onClick={handleBreakOver}
        variant={"party-variant"}
      />
      <div id="confetti-wrapper"></div>
    </div>
  );
}
