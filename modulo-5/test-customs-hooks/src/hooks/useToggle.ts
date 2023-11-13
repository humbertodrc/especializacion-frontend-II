import { useState } from "react";

export default function useToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const close = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const toggle = () => setIsOpen((prevState) => !prevState);

  return {
    isOpen,
    isClosed: !isOpen,
    open,
    close,
    toggle
  };
}
