import { HeaderWithSubtitle } from "./globalComponents/HeaderWithSubtitle";
import { IconWithTitle } from "./globalComponents/IconWithTitle";
import { Button } from "./globalComponents/Button";

export const Warnings = ({ data }) => {
  return (
    <div className="warnings has-text-centered main-section">
      <section className="section">
        <div className="container">
          <div className="header-text">
            <HeaderWithSubtitle title={data.title} subtitle={data.subtitle} />
          </div>
        </div>

        <div className="container">
          <div className="text-box-sm">
            <div className="columns is-mobile  is-multiline is-centered">
              {data.warnings.map((element, i) => {
                return (
                  <IconWithTitle
                    url={element.icon.url}
                    title={element.label}
                    key={i}
                  />
                );
              })}
              <div className="is-text">
                <p
                  className="text"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
              <div>
                <Button
                  url={data.link.url}
                  title={data.link.title}
                  target={data.link.target}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
