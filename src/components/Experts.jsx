import React from "react";
import laptop from "../assets/laptop.jpg";

export default function Experts() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">LEARN FROM EXPERTS</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi iure
            aliquid quasi, ab molestias itaque quos, illum, eligendi earum nihil
            placeat! Odio ab quibusdam nihil alias, cupiditate dolore voluptatum
            fugiat odit deserunt reprehenderit omnis quam? Maiores accusamus
            rerum odio doloremque optio, veniam dicta, recusandae excepturi
            ipsam ratione fugit sit. Consectetur suscipit perspiciatis quo
            obcaecati, officia dignissimos eius laboriosam, dolore magnam
            aspernatur consequatur ut corporis eaque non recusandae quos sit
            modi! Sequi omnis possimus excepturi repudiandae dolorem sit quos
            laboriosam. Inventore architecto consequuntur rem cupiditate sunt
            cumque doloribus, non, eaque quisquam nam, aspernatur in ipsum
            beatae soluta quam. Incidunt, minima! Dolorem ad ut cum deleniti
            velit soluta nihil, corporis reprehenderit non dolor porro tenetur
            nisi distinctio maiores unde consequatur. Quam est tempora illum
            asperiores fugit repudiandae corrupti fuga nobis. Ex hic vero
            eveniet cum accusantium, facere non suscipit autem exercitationem
            qui repellendus tenetur enim rem modi iusto dolore eaque aspernatur
            sequi repellat consectetur doloribus velit. Libero, perferendis,
            illum tempora necessitatibus tempore sit numquam ducimus quae
            dolorum, voluptas consequatur! Pariatur veniam quae praesentium,
            labore temporibus sequi quidem inventore dignissimos vitae minus,
            dolore perferendis aperiam excepturi architecto ipsam. Consequuntur
            perspiciatis ut vero dolorum facere. Commodi quibusdam nobis, fugit
            dignissimos quidem temporibus necessitatibus sint repudiandae iusto,
            debitis deserunt sed numquam doloremque accusantium aliquam facilis
            ipsam delectus eum perspiciatis aspernatur a sequi? Aliquam soluta
            quis sunt commodi!
          </p>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
