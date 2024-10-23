type DividerProps = {
  color?: string;
  height?: number;
};

export const Divider = (props: DividerProps) => (
  <div
    style={{
      backgroundColor: props.color || "var(--secondary)",
      height: props.height || 5,
      borderRadius: 10,
      width: "100%",
    }}
  />
);
