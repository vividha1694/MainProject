import styles from "./Section2.module.css";
import { CiSearch } from "react-icons/ci";

const Section2 = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <form className={styles.form}>
            <input className={styles.input} type="text"></input>
            <button className={styles.btn}>Search</button>
          </form>
        </div>
        <div className={styles.section1}>
          <div className={styles.section1_1}>
            <div>
              <h2 className={styles.h2}>Recent Posts</h2>
              <ul className={styles.list}>
                <li className={styles.li}>
                  <a href="https://janhavipanwar.com/hello-world/">
                    Hello world!{" "}
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="https://janhavipanwar.com/what-saul-bass-can-teach-us-about-web-design/">
                    What Saul Bass Can Teach Us About Web Design{" "}
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="https://janhavipanwar.com/growing-ux-maturity-in-organizations-education-and-training/">
                    Growing UX Maturity In Organizations: Education And Training{" "}
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="https://janhavipanwar.com/how-to-build-and-launch-powerful-responsive-websites/">
                    How To Build And Launch Powerful Responsive Websites{" "}
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="https://janhavipanwar.com/growing-ux-maturity-in-organizations-education-and-training/">
                    The Rise Of Design Thinking As A Problem Solving Strategy
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="https://janhavipanwar.com/the-rise-of-design-thinking-as-a-problem-solving-strategy/">
                    Growing UX Maturity In Organizations: Education And Training{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.section1_1}>
            <div>
              <h2 className={styles.h2}>Recent Comments</h2>
              <ol className={styles.ol}>
                <li>
                  <article>
                    <footer className={styles.footer}>
                      <div className={styles.om}>
                        {" "}
                        <a
                          className={styles.om}
                          href="https://janhavipanwar.com/author/om/"
                        >
                          om
                        </a>
                      </div>
                      &nbsp; on &nbsp;
                      <a href="https://janhavipanwar.com/courses/ielts-course/lesson/ielts-listening/#comment-9">
                        IELTS listening
                      </a>
                    </footer>
                  </article>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.section1_1}>
            <div className={styles.search}>
              <form className={styles.form}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Search"
                ></input>
                <button
                  className={`${styles.btn} ${styles.btn2}`}
                  type="submit"
                >
                  <CiSearch />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.section1_1}>
            <div>
              <h2 className={styles.h2}>Recent Post </h2>
            </div>
            <div>
              <div className={styles.section2}>
                <div className={styles.fix}>
                  <div className={styles.con}>
                    <span>December 17, 2023</span>
                  </div>
                  <h6 className={styles.title}>
                    <a href="https://janhavipanwar.com/hello-world/">
                      Hello world!
                    </a>
                  </h6>
                </div>
              </div>
              <div className={styles.section2}>
                <div className={styles.float}>
                  <a href="https://janhavipanwar.com/what-saul-bass-can-teach-us-about-web-design/">
                    <img
                      className={styles.img_icon}
                      src="https://janhavipanwar.com/wp-content/uploads/2022/03/blog-big-1.jpg"
                    ></img>
                  </a>
                </div>
                <div className={styles.fix}>
                  <div className={styles.con}>
                    <span>March 17, 2022</span>
                  </div>
                  <h6 className={styles.title}>
                    <a href="https://janhavipanwar.com/what-saul-bass-can-teach-us-about-web-design/">
                      What Saul Bass Can Teach Us
                    </a>
                  </h6>
                </div>
              </div>
              <div className={styles.section2}>
                <div className={styles.float}>
                  <a href="https://janhavipanwar.com/growing-ux-maturity-in-organizations-education-and-training/">
                    <img
                      className={styles.img_icon}
                      src="https://janhavipanwar.com/wp-content/uploads/2022/03/blog-big-2.jpg"
                    ></img>
                  </a>
                </div>
                <div className={styles.fix}>
                  <div className={styles.con}>
                    <span>March 17, 2022</span>
                  </div>
                  <h6 className={styles.title}>
                    <a href="https://janhavipanwar.com/growing-ux-maturity-in-organizations-education-and-training/">
                      Growing UX Maturity In Organizations: Education
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.section1_1}>
            <div>
              <h2 className={styles.h2}>Categories</h2>
            </div>
            <ul className={styles.listitem}>
              <li >
                <a href="https://janhavipanwar.com/category/art-design/">
                  Art &amp; Design
                </a>
              </li >
              <li >
              <a href="https://janhavipanwar.com/category/blog/">Blog</a>
              </li>
              <li>
              <a href="https://janhavipanwar.com/category/branding/">Branding</a>
              </li>
              <li >
              <a href="https://janhavipanwar.com/category/business/">Business</a>
              </li>
              <li >
              <a href="https://janhavipanwar.com/category/education/">Education</a>
              </li >
              <li >
              <a href="https://janhavipanwar.com/category/mathematics/">Mathematics</a>
              </li>
              <li >
              <a href="https://janhavipanwar.com/category/uncategorized/">Uncategorized</a>
              </li>
              <li >
              <a href="https://janhavipanwar.com/category/ux-design/">UX Design</a>
              </li>
              <li >
              <a href="https://janhavipanwar.com/category/ux-design/">UX Design</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.section1_1}>
            <div>
              <h2 className={styles.h2}>Tags</h2>
            </div>
            <div className={styles.tag}>
              <a href="https://janhavipanwar.com/tag/app/">App</a>
              <a href="https://janhavipanwar.com/tag/art-design/">Art & Design</a>
              <a href="https://janhavipanwar.com/tag/course/">Course</a>
              <a href="https://janhavipanwar.com/tag/data/">Data</a>
              <a href="https://janhavipanwar.com/tag/education/">Education</a>
              <a href="https://janhavipanwar.com/tag/learning/">Learning</a>
              <a href="https://janhavipanwar.com/tag/machine/">Machine</a>
              <a href="https://janhavipanwar.com/tag/science/">Science</a>
              <a href="https://janhavipanwar.com/tag/tips/">Tips</a>
              <a href="https://janhavipanwar.com/tag/videos/">Videos</a>

            </div>
            </div>
            </div>

      </div>
    </div>
  );
};

export default Section2;
