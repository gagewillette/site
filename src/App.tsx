import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { PostComponent } from './comps/posts';
import { samplePosts } from './data/sampleposts';

function App() {
  const [count, setCount] = useState(1);

  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <>
      <div className="header">
        <div className="header_container">
          <div className="header_name_container">
            <h1>Gage Willette's</h1>
            {/*
            <Dropdown
            >
              <MenuButton>_______</MenuButton>
              <Menu
                slotProps={{
                  listbox: { className: 'CustomMenuIntroduction--listbox' },
                }}
              >
                <MenuItem className="trading-item customMenuItem">
                  Trading
                </MenuItem>
                <MenuItem className="coding-item customMenuItem">
                  Coding
                </MenuItem>
                <MenuItem className="youtube-item customMenuItem">
                  YouTube
                </MenuItem>
              </Menu>
              </Dropdown>*/}
            <h1>Blog</h1>
          </div>
          <div className="header_button_container">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>

        <hr className="bottom_linereak"></hr>
      </div>

      <div className="body">
        {samplePosts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default App;
