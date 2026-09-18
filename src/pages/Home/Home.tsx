import RootLayout from "../../components/RootLayout";
import bankTree from "../../assets/bank-tree.jpeg";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import { FEATURES } from "../../config/constant";

function Home() {
  return (
    <RootLayout>
      <div
        style={{
          backgroundImage: `url(${bankTree})`,
          height: 400,
          backgroundPosition: "0% 33%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <article
          className="bg-secondary absolute p-4"
          style={{
            top: 50,
            right: 50,
            margin: 20,
          }}
        >
          <h2>
            No fees. <br />
            No minimum deposit.
            <br />
            High interest rates.
          </h2>
          <p className="mt-2">Open a savings account with Argent Bank today!</p>
        </article>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5rem",
          padding: "2.5rem",
        }}
      >
        {FEATURES.map((feature, i) => (
          <FeatureItem
            key={i}
            img={feature.img}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </RootLayout>
  );
}

export default Home;
