import { db } from "~/server/db";

const mockUrls  = [
  "https://utfs.io/f/5acea8c5-385a-4902-9f76-78defd380c79-zapo1w.png",
  "https://utfs.io/f/071650e2-e7ab-4e9f-a22b-ef77e6bc50e2-zapnbx.png",
  "https://utfs.io/f/cb60b1c3-117d-492f-9e95-7e659d2686fe-ctr6gc.png",
  "https://utfs.io/f/33b21193-520e-4722-b7ce-e23791634f10-oyhe4d.png",

]
const mockImages = mockUrls.map((url,index)=>({
  id: index + 1,
  url,
}))
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 ">
            <img
              src={image.url}
              alt="Gallery Image"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
