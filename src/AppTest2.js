import React , { useContext } from 'react'
import AppTest1 from './AppTest1';

function AppTest2() {
    const blogInfo = {
        React: {
          post: "Learn useContext Hooks",
          author: "Adhithi Ravichandran"
        },
        GraphQL: {
          post: "Learn GraphQL Mutations",
          author: "Adhithi Ravichandran"
        }
      };
    const blogInfoContext = React.createContext(blogInfo);  
    return (
        <div>
    <blogInfoContext.Provider value={blogInfo}>
    <h2>Use Context Example Component</h2>
    <AppTest1 />
    {/* <MyOtherBlogInfoComponent /> */}
    </blogInfoContext.Provider>
        </div>
    )
}

export default AppTest2
