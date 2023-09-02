import { createElement as ce} from 'react';
import ReactDOM from 'react-dom/client';

const heading = ce("h1", {}, "Hello World!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

{/* <div id="root">
    <h1>Hello</h1>
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
    </ul>
</div> */}
// const hsa = <h1>Hello react</h1> JSX syntax

const l1 = ce("li", {}, "one");
const l2 = ce("li", {}, "two");
const l3 = ce("li", {}, "three");
const h_tag = ce("h1", {}, "Hello");
const ul = ce("ul", {}, [l1, l2, l3])
const div1 = ce("div", {}, [h_tag, ul]);

const AnotherFunctionComponent = ({name}) => {
    return (
      <div>
        <h2>Hello {name} </h2>
      </div>
    );
};

const FunctionComponent = () => {
    return (
        <div>
            { a = 10 }
            < AnotherFunctionComponent name="String" />
            { AnotherFunctionComponent("ganesh") }
            { AnotherFunctionComponent("Yogesh") }
            { AnotherFunctionComponent("Sourabh") }
            <h1>Ganesh</h1>
            <h1>Ganesh</h1>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(div1);

root.render(<FunctionComponent />);