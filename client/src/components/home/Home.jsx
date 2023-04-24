import UserPost from "./UserPost";
import styles from "./home.module.css";

const Home = () => {
  return (
    <main className={styles.home_outerdiv}>
      <section>
        <UserPost />
      </section>
      <aside>
        <div>
          <h1>Notification</h1>
          <ul className={styles.home_inner}>
            <li></li>
          </ul>
        </div>
        <div>
          <h1>Trending</h1>
          <ul></ul>
        </div>
      </aside>
    </main>
  );
};

export default Home;
