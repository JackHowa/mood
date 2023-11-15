import Link from 'next/link';

// tailwind intellisense vs code plugin is amazing for help
// [600px] means hard-coded
// tailwind link has underline
export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto gap-5 flex flex-col">
        <h1 className="text-6xl">The best daily status app, period.</h1>
        <p className="text-2xl text-white/60">
          This is the best app for tracking your mood. All you have to do is
          type.
        </p>
        <div>
          <Link
            className="text-blue-500 hover:text-blue-700 text-xl underline"
            href="/journal"
          >
            Let&apos;s gooo!
          </Link>
        </div>
      </div>
    </div>
  );
}
