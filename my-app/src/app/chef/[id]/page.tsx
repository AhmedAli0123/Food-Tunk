import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import React from 'react';

async function page({ params }: { params: { id: string } }) {
  const chefs = await client.fetch(
    `*[_type == "chef" && _id == $id]{
      _id,
      name,
      image,
      position,
      experience,
      specialty,
      "imageUrl": image.asset->url,
      description,
    }`,
    { id: params.id }
  );

  const chef = chefs[0];

  if (!chef) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold text-gray-500">Chef not found.</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-12 px-8 sm:px-16 lg:px-[135px] py-12">
      {/* Left Image Section */}
      <div className="flex-1">
        <Image
          src={chef.imageUrl || chef.image}
          alt={chef.name}
          width={400}
          height={400}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex-1 text-white bg-gradient-to-r from-gray-900 to-black p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">{chef.name}</h1>
        <p className="text-lg text-gray-300 mb-4">{chef.description}</p>

        <div className="space-y-4">
          <p className="text-xl">
            <strong className="text-yellow-400">Position: </strong>
            {chef.position}
          </p>
          <p className="text-xl">
            <strong className="text-yellow-400">Experience: </strong>
            {chef.experience} years
          </p>
          <p className="text-xl">
            <strong className="text-yellow-400">Specialty: </strong>
            {chef.specialty}
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
