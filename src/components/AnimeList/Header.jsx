import Link from "next/link";

const Header = ({ title, linkTitle, linkHref }) => {
  return (
    <div className="p-4 flex justify-between">
      <h1 className="text-xl text-color-primary hover:text-color-accent cursor-pointer transition-all font-bold">{title}</h1>
      {linkHref && linkTitle ? 
      <Link href={linkHref} className="text-xl hover:text-color-accent text-color-primary transition-all font-semibold">
          {linkTitle}
      </Link> : null  
    }
    </div>
  );
};

export default Header;
