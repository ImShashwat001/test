import urlFor from "@/lib/urlFor";
import Image from "next/image";

type Props = {
    posts: Post[];
};


function BlogList({posts}: Props) {
  console.log(posts.length);
  return (
    <div>
      <hr className="border-[#F7AB0A]" />

      <div>
        {/** Posts */}
        {/* mapping all the posts */}

        {posts.map(post => (
          <div key={post._id}>
            <Image 
              className="object-cover object-left lg:object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
              
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList