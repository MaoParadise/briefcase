import { useRef, useEffect } from "react";
import Typed from "typed.js";

const useTyped = () => {

// Create reference to store the DOM element containing the animation
	const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [`
                    console.getInformation(); <br />
                    <br />
                    [#########################] ^1500 <br />
                    <br />
                    Carlos Pasten Bravo. <br />
                    Desarrollador front-end. <br />
                    Analista Programador. <br />
                    Cripto entusiasta. <br />
                    viviendo en Chile. <br />
    `],
      typeSpeed: 25
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return {
      el,
      typed
    };

//   return (
//       {
//           typed
//       }
//     // <div className="wrap">
//     //   <h1>Typed.js</h1>

//     //   <div className="type-wrap">
//     //     <span style={{ whiteSpace: 'pre' }} ref={el} />
//     //   </div>

//     //   <button onClick={() => typed.current.toggle()}>Toggle</button>
//     //   <button onClick={() => typed.current.start()}>Start</button>
//     //   <button onClick={() => typed.current.stop()}>Stop</button>
//     //   <button onClick={() => typed.current.reset()}>Reset</button>
//     //   <button onClick={() => typed.current.destroy()}>Destroy</button>
//     // </div>
//   );
}

export default useTyped;