import Image from "next/image";
import Link from "next/link";
import classes from "./header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Link href="/">
          <div className={router.pathname == "/" ? `active` : ""}>
            <a>
              <Image
                src={"/images/schedule.png"}
                alt="schedule"
                width={32}
                height={32}
              ></Image>
            </a>
          </div>
        </Link>

        <Link href="/groups">
          <div className={router.pathname == "/groups" ? `active` : ""}>
            <a>
              <Image
                src={"/images/group.png"}
                alt="schedule"
                width={32}
                height={32}
              ></Image>
            </a>
          </div>
        </Link>

        <Link href="/final">
          <div className={router.pathname == "/final" ? `active` : ""}>
            <a>
              <Image
                src={"/images/finish.png"}
                alt="schedule"
                width={32}
                height={32}
              ></Image>
            </a>
          </div>
        </Link>

        <Link href="/shooters">
          <div className={router.pathname == "/shooters" ? `active` : ""}>
            <a>
              <Image
                src={"/images/football.png"}
                alt="schedule"
                width={32}
                height={32}
              ></Image>
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
