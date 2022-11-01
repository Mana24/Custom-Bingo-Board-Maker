import { useState } from "preact/hooks";

export function useDialog(init, onOpen, onClose) {
  const [dialogOpen, setDialogOpen] = useState(init);

  const openDialog = () => {
    setDialogOpen(true);
    onOpen && onOpen();
  };
  const closeDialog = () => {
    setDialogOpen(false);
    onClose && onClose();
  };

  return { dialogOpen, openDialog, closeDialog };
}
