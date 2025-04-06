export default function NavButton({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  return (
    <a href={href} className="hover:scale-125 font-semibold transition-transform duration-300 ease-in-out 2xl:text-xl xl:text-lg text-base">
      {name}
    </a>
  );
}
