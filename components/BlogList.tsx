import urlFor from "@/lib/urlFor";
import Image from "next/image";

type Props = {
    posts: Post[];
};


function BlogList({posts}: Props) {
  console.log(posts.length);
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />

      <div>
        {/** Posts */}
        {/* mapping all the posts */}

        {posts.map((post) => (
          <div key={post._id} className="flex flex-col group cursor-pointer">
            <div>
            <Image 
              className="object-cover object-left lg:object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill   
            />
          </div>
          </div>
          
        ))}
        
      </div>
      </div>
  )
}

export default BlogList