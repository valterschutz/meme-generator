export default function Main() {
  const [formData, setFormData] = React.useState({
    topText: "Top Text",
    bottomText: "Bottom Text"
  })

  const [allMemes, setAllMemes] = React.useState([])

  const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/26am.jpg")

  React.useEffect(() => {
    console.log("Hello");
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function handleChange(event) {
    const { name, value } = event.target

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  function handleClick(event) {
    event.preventDefault()
    console.log("Clicked")

    const randomIndex = Math.floor(Math.random() * allMemes.length)
    const randomMemeUrl = allMemes[randomIndex].url

    setMemeImage(randomMemeUrl)
  }

  return (
    <div className="main">
      <form className="form">
        <input className="form__topText" type="text" name="topText" value={formData.topText} onChange={handleChange} />
        <input className="form__bottomText" type="text" name="bottomText" value={formData.bottomText} onChange={handleChange} />
        <button className="form__button" onClick={handleClick}>Get new meme</button>
      </form>
      <div className="meme">
        <img src={memeImage} />
        <h2 className="meme__topText">{formData.topText}</h2>
        <h2 className="meme__bottomText">{formData.bottomText}</h2>
      </div>
    </div>

  )
}