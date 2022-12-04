import { Modules } from "../utils/module-list";
import { getPage } from "../hooks/getPages";
import { getOptions } from "../hooks/getOptions";

export default function Home({ page }) {
  return (
    <>
      <main id="home">
        {page[0].acf?.modules &&
          page[0].acf.modules.map((module, index) => (
            <Modules key={index} module={module} />
          ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Gets page data from API and returns it as props to the Home component
  const page = await getPage("home");
  const options = await getOptions();

  return {
    props: {
      page,
      options,
    },
    revalidate: 120, // In seconds
  };
}
