import styles from "./userpost.module.css";
import { Link } from "react-router-dom";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import markdown from "./test.md";
// import { useEffect, useState } from "react";

const UserPost = () => {
  const [mrk, setmrk] = useState("");
  // useEffect(() => {
  //   fetch(markdown)
  //     .then((res) => {
  //       const data = res.text();
  //       return data;
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setmrk(data);
  //     });
  // }, [markdown]);

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
        <h1>
          Boost your Web3 Development Process with These Top Tools and Platforms
          and Seeking Project Partner for Exciting New Venture!
        </h1>
        <div />
        <div className={styles.post_inner}>
          {/* <ReactMarkdown children={mrk} remarkPlugins={[remarkGfm]} /> */}
        </div>
      </div>
    </div>
  );
};

export default UserPost;
