import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="flex items-center justify-center">
      <Button
        variant="solid"
        color="primary"
        radius="sm"
        size="sm"
        onClick={() => setTheme(theme === "green" ? "red" : "green")}
      >
        {theme === "green" ? "Red Mode" : "Green Mode"}
      </Button>
    </div>
  );
}