import SideBar from '../../SideBar/SideBar'
import { Outlet } from 'react-router-dom'

function HomePage() {
  return (
    <div className='flex'>
   <main className="flex flex-1 border m-1 mt-10 ml-10 px-10 gap-6">
    <SideBar/>
        <div className="react-compiler-docs flex-1">
          <div className="headingReact border text-2xl items-center justify-center flex">
            <h1 className="title">React Compiler</h1>
          </div>
          <section className="section introduction my-10">
            <h2 className="section-title text-4xl mb-6">Introduction</h2>
            <p className="section-text my-5">
              Learn what React Compiler does and how it automatically optimizes
              your React application by handling memoization for you,
              eliminating the need for manual useMemo, useCallback, and
              React.memo.
            </p>
          </section>

          <section className="section installation">
            <h2 className="section-title text-4xl mb-6">Installation</h2>
            <p className="section-text  my-5">
              Get started with installing React Compiler and learn how to
              configure it with your build tools.
            </p>
          </section>

          <section className="section adoption">
            <h2 className="section-title text-4xl mb-6">
              Incremental Adoption
            </h2>
            <p className="section-text  my-5">
              Learn strategies for gradually adopting React Compiler in your
              existing codebase if you’re not ready to enable it everywhere yet.
            </p>
          </section>

          <section className="section debugging">
            <h2 className="section-title text-4xl mb-6">
              Debugging and Troubleshooting
            </h2>
            <p className="section-text  my-5">
              When things don’t work as expected, use our debugging guide to
              understand the difference between compiler errors and runtime
              issues, identify common breaking patterns, and follow a systematic
              debugging workflow.
            </p>
          </section>

          <section className="section configuration">
            <h2 className="section-title">Configuration and Reference</h2>

            <ul className="config-list">
              <li className="config-item">
                <strong>Configuration Options</strong> – All compiler
                configuration options including React version compatibility
              </li>
              <li className="config-item">
                <strong>Directives</strong> – Function-level compilation control
              </li>
              <li className="config-item">
                <strong>Compiling Libraries</strong> – Shipping pre-compiled
                libraries
              </li>
            </ul>
          </section>

          <section className="section resources">
            <h2 className="section-title">Additional Resources</h2>
            <p className="section-text">
              In addition to these docs, we recommend checking the React
              Compiler Working Group for additional information and discussion
              about the compiler.
            </p>
          </section>
        </div>

        <div className="rightSide flex-1 space-y-4 overflow-y-auto">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, cum?</p>
        </div>
      </main>
    </div>
  )
}

export default HomePage