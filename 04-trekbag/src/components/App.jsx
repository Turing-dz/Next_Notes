
// // import BackgroundHeading from "./BackgroundHeading";
// // import Footer from "./Footer";
// // import Header from "./Header";
// // import ItemList from "./ItemList";
// // import Sidebar from "./Sidebar";

// // import ListContextProvider from "../contexts/ListContextProvider";
// import Button2 from "./Button2";
// function App() {
//  //1.drill
// //   return (
// //     <>
// //       <BackgroundHeading />
// //       <main>
// //         <Header packedNumber={textList.filter(item=>item.packed).length} listNumber={textList.length}/>
// //         <ItemList textList={textList} handleDelete={handleDelete} handleTaggle={handleTaggle}/>
// //         <Sidebar handleAddList={handleAddList} handleRemoveAll={handleRemoveAll} handleReset={handleReset} handleComplete={handleComplete} handleIncomplete={handleIncomplete}/>
// //       </main>
// //       <Footer />
// //     </>
// //   );
// // }
// //2.context
//   //  return (
//   //   <>
//   //     <BackgroundHeading />
//   //     <main>
//   //       <ListContextProvider>
//   //       <Header />
//   //       <ItemList />
//   //       <Sidebar/>
//   //       </ListContextProvider>
//   //     </main>
//   //     <Footer />
//   //   </>
//   // );
//   //3.zustand
//   return (
//     // <>
//     //   {/* <BackgroundHeading />
//     //   <main>
//     //     <Header />
//     //     <ItemList />
//     //     <Sidebar/>
//     //   </main>
//     //   <Footer /> */}
//     //   <Button2 backgroundColor="red" fontSize={22} pillShape={true}/>
//     //   <Button2 backgroundColor="red" fontSize={22} />
//     // </>
//   );
// }


// export default App;
import React, { useEffect, useState } from 'react';

function App() {
 const [message, setMessage] = useState('');

 useEffect(() => {
   const eventSource= new EventSource('http://192.168.3.92:5000/stream');
  
   eventSource.onmessage = (event) => {
     const data = event.data;
     setMessage(data);
  };

   return () => {
     eventSource.close();
  };
}, []);

 return (
   <div>
     <h1>Real-time Message: {message}</h1>
   </div>
);
}

export default App;
