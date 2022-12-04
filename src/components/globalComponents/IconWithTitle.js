import Image from "next/image";

export const IconWithTitle = (props) => {
  return (
    <div className="column is-3 is-centered">
      <div className="img">
        <Image
          alt={props.title}
          layout="responsive"
          src={props.url}
          width={96}
          height={96}
          priority
        />
      </div>

      <div className="label">{props.title}</div>
    </div>
  );
};
