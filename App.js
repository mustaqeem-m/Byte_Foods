const heading = React.createElement(
  "h1",
  { id: "header" },
  "Hello world from React! ⚛️"
);
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement(
        "h1",
        {
          id: "heading",
        },
        "Im the first h1 tag!"
      ),
      React.createElement(
        "h1",
        {
          id: "heading-2",
        },
        "im the sibling tag"
      )
    ]
  ),

  React.createElement(
    "div",
    {
      id: "child-2",
    },
    [
      React.createElement(
        "h1",
        {
          id: "heading",
        },
        "Im the first h1 tag!"
      ),
      React.createElement(
        "h1",
        {
          id: "heading-2",
        },
        "im the sibling tag"
      )
    ]
)
  ]
);
console.log(parent);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
