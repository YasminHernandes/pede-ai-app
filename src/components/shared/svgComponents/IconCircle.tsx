interface IProps {
    color: string
}

export const IconCircle = ({color}: IProps) => {
  return (
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4.28308" r="4" fill={color} />
    </svg>
  );
};
