import Image from "next/image";
import styles from "./Header.module.css";
import { Search } from "@/components/Search/Search";
import Link from "next/link";

type Props = {
  isResultsPage?: boolean;
  searchQuery?: string;
};

export const Header = ({ isResultsPage, searchQuery }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        {isResultsPage ? (
          <Link href="/" title="Go to home page">
            <Image
              src="/google_logo.png"
              alt="Google logo"
              width={92}
              height={33}
              priority
            />
          </Link>
        ) : (
          <Link
            href="https://agilecontent.com/"
            title="Go to Agile content"
            target="_blank"
          >
            <span className={styles.title}>Agile Content</span>{" "}
            <span>Frontend test</span>
          </Link>
        )}

        {isResultsPage && <Search isResultsPage searchQuery={searchQuery} />}
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
