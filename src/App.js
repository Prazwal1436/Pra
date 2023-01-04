import About from "./components/About";
import Fooder from "./components/Fooder";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import References from "./components/References";


function App() {
  return (
   <div className="">
  <Navbar/>
   

<div class="grid grid-cols-3" style={{
position: "relative;",
height: "200px;",
overflow: "auto;",

}}>
  <div class="col-span-2 w-screen">
    <div data-bs-spy="scroll" data-bs-target="#scrollspy1" data-bs-offset="200" class="scrollspy-example">
      <section id="example-1" className="">
        <Home/>
      </section>
      <section id="example-2">
       <About/>
      </section>
      <section id="example-3">
      <Offers/> 
      </section>
     
      
      <section id="example-4">
      <References/>
      </section>
    </div>
  </div>

</div>
<Fooder/>
   </div>
  );
}

export default App;
