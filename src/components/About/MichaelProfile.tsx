import Image from "next/image";
import styles from "./styles/styles.module.css";

const MichaelProfile = () => {
  return (
    <div className={styles.masterContainer}>
      <div className={styles.pictureContainer}>
        <Image
          className={styles.profileImage}
          src="/img/bioPic.jpeg"
          alt="Michael Braun profile pic"
          width={618}
          height={412}
        />
      </div>
      <div className="container">
        <h2 className={styles.headline}>
          From German Police Officer to Elite Beverly Hills Protector
        </h2>
        <p>
          {`Michael Braun, CEO of one of Southern California’s premier executive protection firms, began his career in 2005 as a Police Officer in Bavaria, Germany. After completing a rigorous 2.5-year police academy at the 11th AS Würzburg, Michael was selected for the elite USK-Unit (Support Commando). This highly selective training included advanced law enforcement techniques, protection strategies, combat first aid, undercover operations, and riot control. The USK academy is renowned across Europe for its unparalleled standards.`}
        </p>

        <h4 className={styles.headline}>Building a Strong Foundation</h4>
        <p>
          {`The German police academy emphasized critical skills such as law, communication, and conflict resolution, equipping Michael uniquely for his future role in executive protection. These foundational skills became a cornerstone of his success after relocating to California in 2012.`}
        </p>

        <h4 className={styles.headline}>Transition to Private Protection</h4>
        <p>
          {`Michael’s reputation preceded him, leading to immediate offers from several elite private protection firms upon his arrival in California. He ultimately joined Gavin de Becker and Associates, where he was assigned to protect a prominent family in Beverly Hills. Michael consistently exceeded expectations, demonstrating excellence in operational planning, physical fitness, and leadership.`}
        </p>

        <h4 className={styles.headline}>Leadership and Recognition</h4>
        <p>
          {`In 2013, just one year after joining Gavin de Becker and Associates, Michael was promoted to Detail Leader and later to Security Operations Director. His leadership, guided by the principles of honesty, integrity, and trust, set a high standard for his team. After more than a decade, Michael was invited by his client to establish his own protection firm.`}
        </p>

        <h4 className={styles.headline}>Notable Achievements</h4>
        <p>
          {`Michael’s commitment to excellence has been recognized through numerous accolades, including:`}
          <ul className={styles.list}>
            <li className={styles.listItem}>Command Center of the Quarter</li>
            <li className={styles.listItem}>Protector of the Quarter</li>
            <li className={styles.listItem}>Robert Martin Leadership Award</li>
            <li className={styles.listItem}>
              Elite Physical Fitness Recognitions
            </li>
            <li className={styles.listItem}>...and many more</li>
          </ul>
        </p>

        <h4 className={styles.headline}>Mentorship and Expertise</h4>
        <p>
          {`During his licensing transition, Michael temporarily collaborated with Savage III, Inc., a respected security company in Beverly Hills. There, his contributions, including his comprehensive command center training handbook, were recognized as exceeding even Secret Service standards.`}
        </p>

        <h4 className={styles.headline}>
          Leading the Future of Executive Protection
        </h4>
        <p>
          {`Today, Michael leads his own PPO, delivering exceptional protection services with a team of world-class professionals who uphold his rigorous standards. Employees at Michael’s firm benefit from:`}
          <ul className={styles.list}>
            <li className={styles.listItem}>
              100% company-sponsored healthcare for employees and their
              dependents
            </li>
            <li className={styles.listItem}>Industry-leading compensation</li>
            <li className={styles.listItem}>
              World-class ongoing training programs, including:
              <ul className={styles.listSmall}>
                <li className={styles.subListItem}>
                  International training opportunities
                </li>
                <li className={styles.subListItem}>
                  Instruction from active operators worldwide
                </li>
                <li className={styles.subListItem}>
                  Leadership development programs
                </li>
              </ul>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default MichaelProfile;
