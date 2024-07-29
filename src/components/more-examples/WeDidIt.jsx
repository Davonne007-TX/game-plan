export default function WeDidIt() {
    const setUpEverything = [
        {completed: "Download Git, Node.js", id:1},
        {completed: "SSH Key for Github", id:2},
        {completed: "Clone Projects", id:3},
        {completed: "VS Code Extenstions", id:4},
        {completed: "Customize PC"},
        {completed: "Start Coding..!"},
    ]

  return (
   <section className="flex-time font-bold font-pizza">
    <h1 className="text-pink-500 text-5xl mb-10">We did it </h1>

    {setUpEverything.map((everything, id) => (
        <li key={id} className="text-white text-3xl list-none">✮ {everything.completed}</li>
    ))}

    <iframe 
    src="https://giphy.com/embed/l0IsIC9ZNOELYmuqc"
    width="480" height="341"  
    frameBorder="0" 
    className="mt-10" 
    allowFullScreen>
    </iframe>
    <p>
        <a href="https://giphy.com/gifs/dora-en-boots-l0IsIC9ZNOELYmuqc">via GIPHY</a>
    </p>
   </section>
  )
}
  