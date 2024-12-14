import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-10 my-10">
      <div className="flex  justify-between gap-5">
        <div className="w-1/2">
          <p className="font-medium text-2xl uppercase">About page</p>
          <h1 className="text-5xl my-5 font-bold">
            We are Building The Destination For Getting Things Done
          </h1>
          <p className="text-justify text-xl leading-[2]">
            Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices
            purus dolor erat bibendum sapien metus. Tempus ultricies augue
            luctus et ut suscipit. Morbi arcu, ultrices purus dolor erat
            bibendum sapien metus. Sit mi, pharetra, morbi arcu id. Pellentesque
            dapibus nibh augue senectus.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src="/meeting.jpg"
            alt=""
            width={574}
            height={512}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
