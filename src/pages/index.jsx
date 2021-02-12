/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const Page = ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
    </div>
  </div>
);

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/note/`);
//   const { data } = await res.json();
//   return {
//     props: { notes: data },
//   };
// }
export function getStaticProps({ params }) {
  return {
    props: {
      content: {
        title: "This is my really nice app ",
      },
    },
  };
}

export default Page;
