import { Header } from "./Main";

export default function AboutUSPage() {
  return (
    <>
      <Header />

      <div className=" border-t pt-3">
        <div className="max-w-xl mx-auto ">
          <div className="max-w-xl mx-auto  text-2xl font-semibold  tracking-tight leading-tight">
            About <span className="text-blue-600 ">Snowden</span>
          </div>
          <div className="prose text-lg mt-4 max-w-none tablet:prose-xl prose-p:my-2 prose-p:text-lg prose-li:text-lg prose-ul:list-disc prose-li:marker:text-black prose-a:text-primary prose-a:no-underline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ducimus rerum eaque possimus nulla deserunt animi atque asperiores
            veniam est ipsam ab, rem maiores! Impedit quas nobis totam iure
            earum!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias distinctio ipsa dolores. Aliquam earum totam fugit veritatis unde, recusandae illum excepturi, accusantium autem enim sed pariatur maxime, sapiente mollitia at.
          </div>
          <div className="max-w-xl mt-7 mx-auto  text-2xl font-semibold  tracking-tight leading-tight">
            Meet Our Amazing Team <span className="text-blue-600 ">Snowden</span>
          </div>
          <div className="mt-3 flex gap-3 flex-wrap">
            <div className="text-center w-fit">

            <img src="https://reunionhq.in//static/5584db9d7875728670f117ad5a5f22ca/80b13/blank-profile-picture.png" className="w-40 h-40 rounded-md" />
            <div className="font-medium">Ansh Dixit</div>
            </div>

            <div className="text-center w-fit">

<img src="https://reunionhq.in//static/5584db9d7875728670f117ad5a5f22ca/80b13/blank-profile-picture.png" className="w-40 h-40 rounded-md" />
<div className="font-medium">Shishir Tomar</div>
</div>

<div className="text-center w-fit">

<img src="https://reunionhq.in//static/5584db9d7875728670f117ad5a5f22ca/80b13/blank-profile-picture.png" className="w-40 h-40 rounded-md" />
<div className="font-medium">Riya Saxena</div>
</div>

<div className="text-center w-fit">

<img src="https://reunionhq.in//static/5584db9d7875728670f117ad5a5f22ca/80b13/blank-profile-picture.png" className="w-40 h-40 rounded-md" />
<div className="font-medium">Sagarika</div>
</div>
<div className="text-center w-fit">

<img src="https://reunionhq.in//static/5584db9d7875728670f117ad5a5f22ca/80b13/blank-profile-picture.png" className="w-40 h-40 rounded-md" />
<div className="font-medium">Tejeswar </div>
</div>
<div className="text-center w-fit">

<img src="https://reunionhq.in//static/5584db9d7875728670f117ad5a5f22ca/80b13/blank-profile-picture.png" className="w-40 h-40 rounded-md" />
<div className="font-medium">Dhananjay Senday</div>
</div>

          </div>
        </div>
      </div>
    </>
  );
}
