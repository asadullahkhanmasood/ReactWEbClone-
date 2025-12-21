import { Outlet } from "react-router-dom";

function MainBody() {
  return (
    <main className="flex flex-1 border m-1 mt-10 ml-10 px-10 gap-6">
      <div className="react-compiler-docs flex-1">
        <div className="headingReact border text-2xl items-center justify-center flex">
          <h1 className="title">React Compiler</h1>
        </div>
      </div>
      <div className="rightSide flex-1 space-y-4 overflow-y-auto">
        <Outlet />
      </div>
    </main>
  );
}

export default MainBody;
