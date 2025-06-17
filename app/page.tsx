export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Bienvenido a mi pagina</h2>
      <p className="text-center">Esta es una pagina de ejemplo.</p>
      <img
      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/e0/ce/85/sunset-beach.jpg?w=1000&h=-1&s=1"
      alt="A welcoming person smiling at the camera in a bright, modern room with soft natural light and a calm, friendly atmosphere. The text Bienvenido a mi pagina is visible in the background."
      className="mt-4 rounded-lg shadow-md"
      />
    </div>
  )
}
