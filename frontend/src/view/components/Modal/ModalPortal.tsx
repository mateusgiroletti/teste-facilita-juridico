import { useEffect } from "react";
import { createPortal } from "react-dom";

export function ModalPortal({ children }: { children: React.ReactNode }) {
    const modalRoot = document.getElementById("modal-root");
    const modalElement = document.createElement("div");

    useEffect(() => {
        if (!modalRoot) {
            return;
        }

        modalRoot.appendChild(modalElement);

        return () => {
            modalRoot.removeChild(modalElement);
        };
    }, [modalElement, modalRoot]);

    return createPortal(children, modalElement);
}
