export default function TransitionScreen() {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-green-500 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-green-500 appear-animation-left"></div>
        <h1 className="text-white text-4xl animate-bounce">
          SWITCHSTORE
        </h1>
        {/* <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-500 animate-spin"></div> */}
      </div>
    );
}
  