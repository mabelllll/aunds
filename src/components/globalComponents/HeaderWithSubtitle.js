import { Section } from "./Section";

export const HeaderWithSubtitle = (props) => {
  return (
    <Section>
      <hgroup className="has-text-centered">
        <span className="subtitle is-4">{props.subtitle}</span>
        <h2 className="is-2 mt-3 mt-4">{props.title}</h2>
      </hgroup>
    </Section>
  );
};
