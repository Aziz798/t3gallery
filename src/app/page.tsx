import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getOneUserImages } from "~/server/db/queries";

export const dynamic = "force-dynamic"

async function Images(){
  const images = await getOneUserImages()
  return(
    <div className="flex flex-wrap gap-4">
          {images.map((image) => (
            <div key={image.id} className="w-48 flex flex-col">
              <Image
                src={image.url}
                alt={image.name}
                width={300}
                height={300}
              />
              <div>{image.name}</div>
            </div>
          ))}
        </div>
  )
}

export default async function HomePage() {


  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
