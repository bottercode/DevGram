import styles from "./home.module.css";

const Home = () => {
  return (
    <main className={styles.home_outerdiv}>
      <section>main data</section>
      <aside>
        <div>notification</div>
        <div>Trending</div>
      </aside>
    </main>
  );
};

export default Home;