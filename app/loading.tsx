export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div>
      {" "}
      <main className="relative h-screen flex items-center z-20 justify-center bg-bg-3 bg-no-repeat bg-cover text-white">
        <div className="w-full h-full  flex flex-col  justify-center  items-center    px-4 max-md:px-5  ">
          <img
            src="/LOGO.svg"
            alt=""
            className="w-auto h-auto animate-pulse duration-500 "
          />
        </div>
      </main>
    </div>
    </>
  );
}
