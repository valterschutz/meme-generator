var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default function Main() {
  var _React$useState = React.useState({
    topText: "Top Text",
    bottomText: "Bottom Text"
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      formData = _React$useState2[0],
      setFormData = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      allMemes = _React$useState4[0],
      setAllMemes = _React$useState4[1];

  var _React$useState5 = React.useState("https://i.imgflip.com/26am.jpg"),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      memeImage = _React$useState6[0],
      setMemeImage = _React$useState6[1];

  React.useEffect(function () {
    console.log("Hello");
    fetch("https://api.imgflip.com/get_memes").then(function (res) {
      return res.json();
    }).then(function (data) {
      return setAllMemes(data.data.memes);
    });
  }, []);

  function handleChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;


    setFormData(function (prevFormData) {
      return Object.assign({}, prevFormData, _defineProperty({}, name, value));
    });
  }

  function handleClick(event) {
    event.preventDefault();
    console.log("Clicked");

    var randomIndex = Math.floor(Math.random() * allMemes.length);
    var randomMemeUrl = allMemes[randomIndex].url;

    setMemeImage(randomMemeUrl);
  }

  return React.createElement(
    "div",
    { className: "main" },
    React.createElement(
      "form",
      { className: "form" },
      React.createElement("input", { className: "form__topText", type: "text", name: "topText", value: formData.topText, onChange: handleChange }),
      React.createElement("input", { className: "form__bottomText", type: "text", name: "bottomText", value: formData.bottomText, onChange: handleChange }),
      React.createElement(
        "button",
        { className: "form__button", onClick: handleClick },
        "Get new meme"
      )
    ),
    React.createElement(
      "div",
      { className: "meme" },
      React.createElement("img", { src: memeImage }),
      React.createElement(
        "h2",
        { className: "meme__topText" },
        formData.topText
      ),
      React.createElement(
        "h2",
        { className: "meme__bottomText" },
        formData.bottomText
      )
    )
  );
}