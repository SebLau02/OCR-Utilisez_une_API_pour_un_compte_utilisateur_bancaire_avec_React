function CheckBox({
  label,
  ...props
}: { label: string } & React.ComponentProps<"input">) {
  return (
    <div className="CheckBox-Base">
      <input {...props} />
      <label htmlFor={props.id}>{label}</label>
    </div>
  );
}

export default CheckBox;
