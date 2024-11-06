import Image from "next/image";

const flowerData = [
  {
    type: "Flower.",
    name: "Rose & Lily Bouquet",
    price: "2,100 PKR",
    iamge: "/lilyrose_1.jpg"
  },
  {
    type: "Bouquet.",
    name: "Lavender Cotton & Rose Bouquet",
    price: "2,000 PKR",
    iamge: "/levender_2.jpg"
  },
  {
    type: "Bouquet.",
    name: "Sun Flower Bouquet.",
    price: "1,200 PKR",
    iamge: "/sunflower_3.jpg"
  },
  {
    type: "Bouquet.",
    name: "Red Rose Bouquet.",
    price: "1,500 PKR",
    iamge: "/redrose_4.jpg"
  },
  {
    type: "Flower.",
    name: "Flower Jewellery.",
    price: "2,000 PKR",
    iamge: "/jewelleryf_5.jpg"
  },
  {
    type: "Bouquet.",
    name: "Black Rose.",
    price: "3000 PKR",
    iamge: "/blackrose_6.jpg"
  },
]

export default function Ourservice() {
  return (
    <div className="bg-pink-300 min-h-screen">
      <section className="text-gray-600 body-font pt-12 bg-red-100">
        <div className="flex justify-center items-center text-2xl font-sans italic font-semibold">
          House of flower
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              flowerData.map((data, index) => {
                return (
                  <div key = {index} className="lg:w-1/4 md:w-1/2 p-4 w-full  hover:text-pink-950">
                    <a className="block relative h-48 w-72 rounded overflow-hidden  border-4 border-pink-500 shadow-lg hover:scale-[1.1] transition-transform duration-300">
                      <Image
                        alt="flower"
                        className="object-cover object-center w-full h-full block"
                        src={data.iamge}
                        width={300}
                        height={300}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {data.type}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {data.name}
                      </h2>
                      <p className="mt-1">{data.price}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
 </div>
);
}