import React from "react";

import styles from "./chip.module.css";

type ChipProps = {
  label: string;
};

export const Chip: React.FC<ChipProps> = ({ label }) => (
  <div className={styles.container_chip}>
    <strong className={styles.label_chip}>{label}</strong>
  </div>
);
