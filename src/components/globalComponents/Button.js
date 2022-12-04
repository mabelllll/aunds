import Link from "next/link";

export const Button = (buttonProps) => {
  return (
    <Link href={buttonProps.url}>
      <a
        title={buttonProps.title}
        target={buttonProps.target || "_blank"}
        className={`button is-outlined is-rounded`}
      >
        <div />
        <div />
        {buttonProps.title}
        <div />
        <div />
      </a>
    </Link>
  );
};
