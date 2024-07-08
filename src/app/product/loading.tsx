export default function loading() {
  return (
      <div className="grid grid-cols-3 place-items-center mt-5">
        {/* card 1 */}
        <div className="my-5 h-96 w-full max-w-sm bg-gray-500 rounded-lg shadow">
          <div className="px-5 pb-5">
          <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"></h5>
                  </a>
                  <div className="flex items-center mt-5 justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
                  </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="my-5 h-96 w-full max-w-sm bg-gray-500 rounded-lg shadow">
          <div className="px-5 pb-5">
          <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"></h5>
                  </a>
                  <div className="flex items-center mt-5 justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
                  </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="my-5 h-96 w-full max-w-sm bg-gray-500 rounded-lg shadow">
          <div className="px-5 pb-5">
          <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"></h5>
                  </a>
                  <div className="flex items-center mt-5 justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
                  </div>
          </div>
        </div>
      </div>
  )
}