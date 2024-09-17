import { Link, usePathname } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <Link href={pathname} locale="en" className={`ltr:hidden rtl:block`}>
        🇺🇸
      </Link>
      <Link href={pathname} locale="ar" className={`ltr:block rtl:hidden`}>
        🇸🇦
      </Link>
    </>
  );
}
