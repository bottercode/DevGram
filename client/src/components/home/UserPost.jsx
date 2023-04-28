import styles from "./userpost.module.css";
import { Link } from "react-router-dom";
import { markdown } from "./test";

const UserPost = () => {
  return (
    <div className={styles.post_outer}>
      <div className={styles.post_header}>
        <img src="" alt="__test" />
        <div>
          <Link to="/home">manavsiddharthgupta</Link>
          <p>posted 1hr 24min ago</p>
        </div>
      </div>
      <div className={styles.post_main}>
        <h1>Seeking Project Partner for Exciting New Venture!</h1>
        <div className={styles.border} />
        <div className={styles.post_inner}>{markdown}</div>
        <Link to="/home">read more...</Link>
      </div>
    </div>
  );
};

export default UserPost;
