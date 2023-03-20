import Image from "next/image";
import blogimg from "../images/blogimg.png"

function Logo(props: any) {
    const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src={blogimg}
        alt="logo"
      />
    </div>
  )
}

export default Logo