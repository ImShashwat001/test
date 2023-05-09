import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";

type Props = {
    params: {
        slug: string;
    };
};

async function Post({ params: {slug} }: Props) {

    const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `;
    const post: Post = await client.fetch(query, { slug });

    console.log(post);

  return (
    <article>
        <section>
            <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                    <Image
                        className="object-cover object-center mx-auto"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                    />
                </div>
            </div>
        </section>
    Post: {slug} 
    </article> 
    )
}

export default Post