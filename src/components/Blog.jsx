import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Blog = () => {
  const componentRef = useRef();

  const handlePdf = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "blog",
    onAfterPrint: () => Swal.fire("Successfully", "  Download Pdf!", "success"),
  });

  return (
    <Container>
    
      <div ref={componentRef} style={{ width: "100%" }}>
        <h2 className="text-center my-2">Blogs</h2>
        <div>
        <button className="btn btn-danger mb-5 mt-2" onClick={handlePdf}>
        <FontAwesomeIcon icon={faDownload} /> Download Pdf
      </button>
          <h4>
            Tell us the differences between uncontrolled and controlled
            components.
          </h4>
          <p>
            Uncontrolled components are a concept in React and other UI
            libraries where the component's state is managed internally by the
            DOM, rather than being controlled explicitly by the component itself
            or its parent. In other words, the component doesn't have its own
            state or event handlers. Instead, it relies on direct interaction
            with the underlying DOM elements.
            <br />
            <br /> With uncontrolled components, you typically use references or
            selectors to access and manipulate the component's values. For
            example, in a form input field, you might use the ref attribute to
            reference the DOM node and retrieve its value when needed. Changes
            to the component's state are handled directly by the DOM, without
            going through React's virtual DOM reconciliation process. <br />
            The advantage of uncontrolled components is that they are often
            simpler to implement and require less code compared to controlled
            components. They can be useful in cases where you need to integrate
            with existing code that relies heavily on direct DOM manipulation or
            when handling user input that doesn't need to be tracked in the
            component's state. However, uncontrolled components have some
            limitations.
            <br />
            Since the component's state is managed by the DOM, it can be
            challenging to perform validations or enforce specific behavior on
            the input. Additionally, it can be harder to track and manage the
            component's state, especially when dealing with complex forms or
            interdependent components. In contrast, controlled components are
            components where the state and behavior are explicitly managed by
            the component itself or its parent. They provide more control and
            flexibility over the component's state and can be advantageous in
            scenarios where you need to enforce specific behaviors or perform
            validations on user input.
          </p>
        </div>
        <div>
          <h4>How to validate React props using PropTypes?</h4>
          <p>
            To validate React props using PropTypes, first import the PropTypes
            library. Then, define a propTypes object below your component
            declaration. Inside the propTypes object, specify the expected type
            and shape of each prop using PropTypes. <br />
            For example, PropTypes.string for a string prop,
            PropTypes.number.isRequired for a required number prop,
            PropTypes.arrayOf(PropTypes.string) for an array of strings, and
            PropTypes.shape({}) for an object prop with specific shape
            requirements. PropTypes help catch errors and provide documentation
            for how your components should be used.
          </p>
        </div>
        <div>
          <h4>Tell us the difference between nodejs and express js.</h4>
          <p>
            Node.js is a JavaScript runtime environment that allows you to
            execute JavaScript code on the server-side. It provides an
            event-driven, non-blocking I/O model, making it efficient for
            handling concurrent requests. Node.js has a rich ecosystem of
            modules and packages available through npm (Node Package Manager),
            enabling developers to leverage a wide range of functionalities. It
            can be used for various types of applications, including web
            servers, APIs, command-line tools, real-time applications, and more.{" "}
            <span>
              {" "}
              <br />{" "}
            </span>
            Express.js, on the other hand, is a web application framework built
            on top of Node.js. It simplifies the process of building web
            applications and APIs by providing a set of features and utilities.
            Express.js follows a middleware-based architecture, allowing
            developers to add modular functionalities to the application's
            request/response pipeline. It provides an intuitive routing
            mechanism for defining endpoints and handling different HTTP
            methods. Express.js is highly extensible, and developers can use
            various middleware and plugins from the Express.js ecosystem to
            enhance the functionality of their applications. In essence, Node.js
            provides the runtime environment, while Express.js provides the
            framework and additional features for building web applications and
            APIs using JavaScript on the server-side.
          </p>
        </div>
        <div>
          <h4>
            What is a custom hook, and why will you create a custom hook?{" "}
          </h4>
          <p>
            In React, a custom hook is a reusable function that allows you to
            encapsulate logic and stateful behavior that can be shared across
            multiple components. Custom hooks follow a specific naming
            convention of starting with the word "use" (e.g., useCustomHook),
            enabling React to identify them as hooks. <br />
            By creating a custom hook, you can avoid code duplication and
            promote code reusability. For example, if you have a piece of logic
            that handles form validation, you can extract that logic into a
            custom hook. Then, you can use that hook in multiple components that
            require form validation without rewriting the same logic in each
            component. Custom hooks are especially useful when you want to share
            stateful logic, such as handling API calls, managing timers, or
            implementing complex UI interactions. By encapsulating this logic in
            a custom hook, you can keep your components clean and focused on
            their specific responsibilities.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
