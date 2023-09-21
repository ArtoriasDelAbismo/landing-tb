import "transition-style";

function MyAccount() {
  return (
       <div className="w-full h-full flex flex-col items-center mt-52 text-2xl">
        <div className="w-80 p-6 flex flex-col justify-center rounded-xl bg-slate-300 shadow-lg" transition-style="in:wipe:bottom-left">
          <h1 className="title">My account</h1>

          <form action="/" className="form">
            <div>
              <label htmlFor="name" className="font-bold">
                Name
              </label>
              <p className="mb-8">Momo Journade</p>

              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <p className="mb-8">momojour@gmail.com</p>

              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <p className="mb-8">*********</p>
            </div>

          </form>
        </div>
            <input
              type="submit"
              value="Edit"
              className="w-80 h-16 mt-9 border rounded-lg cursor-pointer font-bold shadow-lg"
            />
      </div>
  )
}

export { MyAccount };
