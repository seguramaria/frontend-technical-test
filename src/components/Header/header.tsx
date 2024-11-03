import Image from "next/image";
import styles from "./Header.module.css";
import { Search } from "@/components/Search/Search";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <Image
          src="/google_logo.png"
          alt="Google logo"
          width={92}
          height={33}
        />
        <Search isResultsPage />
      </div>
      <div className={styles.accountContainer}>
        <Image
          src="/apps_menu.svg"
          alt="Open apps menu"
          width={30}
          height={30}
        />
        <Image
          src="/avatar.svg"
          alt="Account settings"
          width={30}
          height={30}
        />
      </div>
    </header>
  );
};
