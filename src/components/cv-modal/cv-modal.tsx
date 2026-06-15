import { Download, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/UI";

import styles from "./cv-modal.module.css";

type CvModalProps = {
  downloadLabel: string;
  fileName: string;
  isOpen: boolean;
  onClose(): void;
  pdfUrl: string;
};

export const CvModal = ({
  downloadLabel,
  fileName,
  isOpen,
  onClose,
  pdfUrl,
}: CvModalProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
            className={styles.modal}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className={styles.header}>
              <h2 id="cv-modal-title" className="text text-h2">
                {t("cv.modalTitle")}
              </h2>
              <button
                type="button"
                className={styles.close}
                aria-label={t("common.close")}
                onClick={onClose}
              >
                <X size={22} />
              </button>
            </div>
            <iframe
              className={styles.viewer}
              src={pdfUrl}
              title={t("cv.viewerTitle")}
            />
            <div className={styles.actions}>
              <a href={pdfUrl} download={fileName} className={styles.download}>
                <Download size={18} />
                {downloadLabel}
              </a>
              <Button label={t("common.close")} onClick={onClose} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
