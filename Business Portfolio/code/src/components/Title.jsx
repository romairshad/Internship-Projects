export default function Title({text1}) {
    return (
      <div className=" flex items-center justify-center p-4">

        <div className="w-full max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl  text-center mb-8">
            {text1}
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-1 bg-purple-500 rounded-full w-40 md:w-40"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }